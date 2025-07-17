import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import { auth, db } from './firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        setUser(firebaseUser);
        
        // Fetch user profile from Firestore
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserProfile(userDoc.data());
          } else {
            // Create default profile if doesn't exist
            const defaultProfile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || '',
              role: 'customer',
              phone: '',
              isVerified: firebaseUser.emailVerified,
              profile: {
                gotra: '',
                nakshatra: '',
                rashi: '',
                address: '',
                preferences: []
              },
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            };
            
            await setDoc(userDocRef, defaultProfile);
            setUserProfile(defaultProfile);
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setError('Failed to load user profile');
        }
      } else {
        // User is signed out
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register new user
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const { name, email, password, phone, role = 'customer' } = userData;

      // Create Firebase user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Update Firebase profile
      await updateProfile(firebaseUser, {
        displayName: name
      });

      // Create user document in Firestore
      const userProfile = {
        uid: firebaseUser.uid,
        name,
        email,
        phone,
        role,
        isVerified: false,
        profile: {
          gotra: '',
          nakshatra: '',
          rashi: '',
          address: '',
          preferences: []
        },
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);

      // Send email verification
      await sendEmailVerification(firebaseUser);

      setUserProfile(userProfile);
      return { 
        success: true, 
        user: firebaseUser,
        message: 'Account created successfully! Please check your email for verification.' 
      };
    } catch (error) {
      console.error('Registration error:', error);
      let errorMessage = 'Failed to create account';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'An account with this email already exists';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        default:
          errorMessage = error.message;
      }
      
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Login user
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { 
        success: true, 
        user: userCredential.user,
        message: 'Login successful!' 
      };
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'Failed to login';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Please try again later';
          break;
        default:
          errorMessage = error.message;
      }
      
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Logout user
  const logout = async () => {
    try {
      await signOut(auth);
      setError(null);
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      setError('Failed to logout');
      return { success: false, error: error.message };
    }
  };

  // Update user profile
  const updateUserProfile = async (profileData) => {
    if (!user) return { success: false, error: 'No user logged in' };

    try {
      const userDocRef = doc(db, 'users', user.uid);
      
      const updatedData = {
        ...profileData,
        updatedAt: serverTimestamp()
      };

      await updateDoc(userDocRef, updatedData);

      // Update local state
      setUserProfile(prev => ({
        ...prev,
        ...updatedData
      }));

      // Update Firebase Auth profile if name changed
      if (profileData.name && profileData.name !== user.displayName) {
        await updateProfile(user, {
          displayName: profileData.name
        });
      }

      return { success: true, message: 'Profile updated successfully' };
    } catch (error) {
      console.error('Profile update error:', error);
      setError('Failed to update profile');
      return { success: false, error: error.message };
    }
  };

  // Add booking to user history
  const addBookingToHistory = async (bookingData) => {
    if (!user) return { success: false, error: 'No user logged in' };

    try {
      const booking = {
        ...bookingData,
        userId: user.uid,
        userEmail: user.email,
        userName: userProfile?.name || user.displayName,
        status: 'pending',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      // Add to bookings collection
      const docRef = await addDoc(collection(db, 'bookings'), booking);
      
      return { 
        success: true, 
        bookingId: docRef.id,
        message: 'Booking submitted successfully!' 
      };
    } catch (error) {
      console.error('Booking error:', error);
      setError('Failed to submit booking');
      return { success: false, error: error.message };
    }
  };

  // Get user booking history
  const getUserBookings = async () => {
    if (!user) return { success: false, error: 'No user logged in' };

    try {
      const q = query(
        collection(db, 'bookings'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const bookings = [];
      
      querySnapshot.forEach((doc) => {
        bookings.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return { success: true, bookings };
    } catch (error) {
      console.error('Error fetching bookings:', error);
      return { success: false, error: error.message };
    }
  };

  // Get all bookings (admin only)
  const getAllBookings = async () => {
    if (!userProfile || userProfile.role !== 'admin') {
      return { success: false, error: 'Unauthorized access' };
    }

    try {
      const q = query(
        collection(db, 'bookings'),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const bookings = [];
      
      querySnapshot.forEach((doc) => {
        bookings.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return { success: true, bookings };
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      return { success: false, error: error.message };
    }
  };

  // Send password reset email
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { 
        success: true, 
        message: 'Password reset email sent! Check your inbox.' 
      };
    } catch (error) {
      console.error('Password reset error:', error);
      let errorMessage = 'Failed to send reset email';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email address';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        default:
          errorMessage = error.message;
      }
      
      return { success: false, error: errorMessage };
    }
  };

  // Change password
  const changePassword = async (newPassword) => {
    if (!user) return { success: false, error: 'No user logged in' };

    try {
      await updatePassword(user, newPassword);
      return { success: true, message: 'Password updated successfully' };
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: error.message };
    }
  };

  // Send email verification
  const sendVerificationEmail = async () => {
    if (!user) return { success: false, error: 'No user logged in' };

    try {
      await sendEmailVerification(user);
      return { 
        success: true, 
        message: 'Verification email sent! Check your inbox.' 
      };
    } catch (error) {
      console.error('Email verification error:', error);
      return { success: false, error: error.message };
    }
  };

  // Check user permissions
  const hasPermission = (requiredRole) => {
    if (!userProfile) return false;
    
    const roleHierarchy = {
      'customer': 1,
      'service_provider': 2,
      'admin': 3
    };

    const userLevel = roleHierarchy[userProfile.role] || 0;
    const requiredLevel = roleHierarchy[requiredRole] || 0;

    return userLevel >= requiredLevel;
  };

  const value = {
    // State
    user,
    userProfile,
    loading,
    error,
    
    // Actions
    register,
    login,
    logout,
    updateUserProfile,
    addBookingToHistory,
    getUserBookings,
    getAllBookings,
    resetPassword,
    changePassword,
    sendVerificationEmail,
    
    // Utilities
    hasPermission,
    
    // User info helpers
    isAuthenticated: !!user,
    isEmailVerified: user?.emailVerified || false,
    isAdmin: userProfile?.role === 'admin',
    isServiceProvider: userProfile?.role === 'service_provider',
    isCustomer: userProfile?.role === 'customer'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};