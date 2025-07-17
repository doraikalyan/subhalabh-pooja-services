import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from './services';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Calendar } from './components/ui/calendar';
import { Badge } from './components/ui/badge';

const BookingPage = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  
  // Find the service by slug
  const foundService = services.find(s => 
    s.title.toLowerCase().replace(/\s+/g, '-') === service
  );

  // Initialize booking data with proper package handling
  const [bookingData, setBookingData] = useState({
    service: null,
    package: null, // Will be set when service loads
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      gotra: '',
      nakshatra: '',
      rashi: ''
    },
    preferences: {
      date: null,
      time: '',
      location: 'temple', // temple or home
      specialRequests: ''
    },
    additionalServices: []
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Effect to initialize service and default package
  useEffect(() => {
    if (foundService) {
      setBookingData(prev => ({
        ...prev,
        service: foundService,
        // Auto-select first package if available
        package: foundService.packages && foundService.packages.length > 0 ? foundService.packages[0] : null
      }));
    }
  }, [foundService]);

  // If service not found, show error
  if (!foundService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Service Not Found</h2>
              <p className="text-gray-600 mb-6">The requested service could not be found.</p>
              <Button onClick={() => navigate('/services')}>
                Browse All Services
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handlePersonalInfoChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePreferenceChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const handlePackageChange = (packageName) => {
    const selectedPackage = foundService.packages.find(pkg => pkg.name === packageName);
    setBookingData(prev => ({
      ...prev,
      package: selectedPackage
    }));
  };

  const handleAdditionalServiceToggle = (serviceName) => {
    setBookingData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceName)
        ? prev.additionalServices.filter(s => s !== serviceName)
        : [...prev.additionalServices, serviceName]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!bookingData.personalInfo.name.trim()) newErrors.name = 'Name is required';
      if (!bookingData.personalInfo.email.trim()) newErrors.email = 'Email is required';
      if (!bookingData.personalInfo.phone.trim()) newErrors.phone = 'Phone is required';
      if (!bookingData.personalInfo.gotra.trim()) newErrors.gotra = 'Gotra is required';
    }
    
    if (step === 2) {
      if (!bookingData.preferences.date) newErrors.date = 'Date is required';
      if (!bookingData.preferences.time) newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Here you would typically send the booking data to your backend
      console.log('Booking submitted:', bookingData);
      alert('Booking submitted successfully! We will contact you soon.');
      navigate('/');
    }
  };

  const calculateTotal = () => {
    let total = bookingData.package ? bookingData.package.price : 0;
    
    // Add additional services cost (you can define prices for additional services)
    const additionalServicePrices = {
      'Video Recording': 2000,
      'Photography': 1500,
      'Live Streaming': 1000,
      'Prasad Distribution': 500
    };
    
    bookingData.additionalServices.forEach(service => {
      total += additionalServicePrices[service] || 0;
    });
    
    return total;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-orange-800 mb-2">Book Your Service</h1>
            <h2 className="text-2xl text-orange-600">{foundService.title}</h2>
            <p className="text-gray-600 mt-2">{foundService.description}</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4].map(step => (
                <div key={step} className={`flex items-center ${step <= currentStep ? 'text-orange-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step <= currentStep ? 'border-orange-600 bg-orange-600 text-white' : 'border-gray-300'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && <div className={`w-16 h-0.5 ${step < currentStep ? 'bg-orange-600' : 'bg-gray-300'}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-2 space-x-12 text-sm">
              <span className={currentStep >= 1 ? 'text-orange-600' : 'text-gray-400'}>Personal Info</span>
              <span className={currentStep >= 2 ? 'text-orange-600' : 'text-gray-400'}>Date & Time</span>
              <span className={currentStep >= 3 ? 'text-orange-600' : 'text-gray-400'}>Package</span>
              <span className={currentStep >= 4 ? 'text-orange-600' : 'text-gray-400'}>Review</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-orange-800">Personal Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={bookingData.personalInfo.name}
                            onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                            className={errors.name ? 'border-red-500' : ''}
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={bookingData.personalInfo.email}
                            onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={bookingData.personalInfo.phone}
                            onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                            className={errors.phone ? 'border-red-500' : ''}
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="gotra">Gotra *</Label>
                          <Input
                            id="gotra"
                            value={bookingData.personalInfo.gotra}
                            onChange={(e) => handlePersonalInfoChange('gotra', e.target.value)}
                            className={errors.gotra ? 'border-red-500' : ''}
                          />
                          {errors.gotra && <p className="text-red-500 text-sm mt-1">{errors.gotra}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nakshatra">Nakshatra</Label>
                          <Input
                            id="nakshatra"
                            value={bookingData.personalInfo.nakshatra}
                            onChange={(e) => handlePersonalInfoChange('nakshatra', e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="rashi">Rashi</Label>
                          <Input
                            id="rashi"
                            value={bookingData.personalInfo.rashi}
                            onChange={(e) => handlePersonalInfoChange('rashi', e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                          id="address"
                          value={bookingData.personalInfo.address}
                          onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Date & Time Preferences */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-orange-800">Date & Time Preferences</h3>
                      
                      <div>
                        <Label>Preferred Date *</Label>
                        <div className="mt-2">
                          <div className="border rounded-md p-3 bg-white">
                            <Calendar
                              mode="single"
                              selected={bookingData.preferences.date}
                              onSelect={(date) => handlePreferenceChange('date', date)}
                              disabled={(date) => date < new Date() || date < new Date(Date.now() + 24 * 60 * 60 * 1000)}
                              initialFocus
                              showOutsideDays={true}
                              fixedWeeks={true}
                              fromDate={new Date()}
                              toDate={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)}
                              classNames={{
                                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                month: "space-y-4",
                                caption: "flex justify-center pt-1 relative items-center",
                                caption_label: "text-sm font-medium",
                                nav: "space-x-1 flex items-center",
                                nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                                nav_button_previous: "absolute left-1",
                                nav_button_next: "absolute right-1",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex",
                                head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]",
                                row: "flex w-full mt-2",
                                cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                                day_selected: "bg-orange-600 text-white hover:bg-orange-600 hover:text-white focus:bg-orange-600 focus:text-white",
                                day_today: "bg-slate-100 text-slate-900",
                                day_outside: "text-slate-500 opacity-50",
                                day_disabled: "text-slate-500 opacity-50",
                                day_range_middle: "aria-selected:bg-slate-100 aria-selected:text-slate-900",
                                day_hidden: "invisible",
                              }}
                            />
                          </div>
                          {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select value={bookingData.preferences.time} onValueChange={(value) => handlePreferenceChange('time', value)}>
                          <SelectTrigger className={errors.time ? 'border-red-500' : ''}>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="06:00">6:00 AM</SelectItem>
                            <SelectItem value="07:00">7:00 AM</SelectItem>
                            <SelectItem value="08:00">8:00 AM</SelectItem>
                            <SelectItem value="09:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                      </div>

                      <div>
                        <Label>Location</Label>
                        <RadioGroup 
                          value={bookingData.preferences.location} 
                          onValueChange={(value) => handlePreferenceChange('location', value)}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="temple" id="temple" />
                            <Label htmlFor="temple">At Temple</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="home" id="home" />
                            <Label htmlFor="home">At Home (Additional charges may apply)</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label htmlFor="specialRequests">Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          value={bookingData.preferences.specialRequests}
                          onChange={(e) => handlePreferenceChange('specialRequests', e.target.value)}
                          placeholder="Any special requirements or instructions..."
                          rows={3}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Package Selection */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-orange-800">Select Package</h3>
                      
                      {foundService.packages && foundService.packages.length > 0 ? (
                        <RadioGroup 
                          value={bookingData.package?.name || ''} 
                          onValueChange={handlePackageChange}
                        >
                          {foundService.packages.map((pkg, index) => (
                            <Card key={index} className={`cursor-pointer transition-all ${
                              bookingData.package?.name === pkg.name ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-md'
                            }`}>
                              <CardContent className="p-4">
                                <div className="flex items-start space-x-3">
                                  <RadioGroupItem value={pkg.name} id={pkg.name} className="mt-1" />
                                  <div className="flex-1">
                                    <Label htmlFor={pkg.name} className="cursor-pointer">
                                      <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-lg">{pkg.name}</h4>
                                        <Badge variant="secondary" className="text-lg font-bold">INR {pkg.price.toLocaleString()}</Badge>
                                      </div>
                                      <p className="text-gray-600 mb-3">{pkg.description}</p>
                                      <div>
                                        <h5 className="font-medium mb-2">Includes:</h5>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                          {pkg.includes.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                              <span className="text-green-500 mr-2">?</span>
                                              {item}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </Label>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </RadioGroup>
                      ) : (
                        <p className="text-gray-600">No packages available for this service.</p>
                      )}

                      {/* Additional Services */}
                      <div className="mt-8">
                        <h4 className="font-semibold text-lg mb-4">Additional Services</h4>
                        <div className="space-y-3">
                          {['Video Recording', 'Photography', 'Live Streaming', 'Prasad Distribution'].map((service) => (
                            <Card key={service} className="cursor-pointer transition-all hover:shadow-md">
                              <CardContent className="p-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <input
                                      type="checkbox"
                                      id={service}
                                      checked={bookingData.additionalServices.includes(service)}
                                      onChange={() => handleAdditionalServiceToggle(service)}
                                      className="rounded border-gray-300"
                                    />
                                    <Label htmlFor={service} className="cursor-pointer">{service}</Label>
                                  </div>
                                  <Badge variant="outline">
                                    +INR {service === 'Video Recording' ? '2,000' : 
                                        service === 'Photography' ? '1,500' : 
                                        service === 'Live Streaming' ? '1,000' : '500'}
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review & Confirm */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-orange-800">Review Your Booking</h3>
                      
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Service Details</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p><strong>Service:</strong> {foundService.title}</p>
                              {bookingData.package && (
                                <p><strong>Package:</strong> {bookingData.package.name}</p>
                              )}
                              <p><strong>Date:</strong> {formatDate(bookingData.preferences.date)}</p>
                              <p><strong>Time:</strong> {bookingData.preferences.time}</p>
                              <p><strong>Location:</strong> {bookingData.preferences.location === 'temple' ? 'At Temple' : 'At Home'}</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p><strong>Name:</strong> {bookingData.personalInfo.name}</p>
                              <p><strong>Email:</strong> {bookingData.personalInfo.email}</p>
                              <p><strong>Phone:</strong> {bookingData.personalInfo.phone}</p>
                              <p><strong>Gotra:</strong> {bookingData.personalInfo.gotra}</p>
                              {bookingData.personalInfo.nakshatra && (
                                <p><strong>Nakshatra:</strong> {bookingData.personalInfo.nakshatra}</p>
                              )}
                              {bookingData.personalInfo.rashi && (
                                <p><strong>Rashi:</strong> {bookingData.personalInfo.rashi}</p>
                              )}
                            </div>
                          </CardContent>
                        </Card>

                        {bookingData.additionalServices.length > 0 && (
                          <Card>
                            <CardHeader>
                              <CardTitle>Additional Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-1">
                                {bookingData.additionalServices.map((service, index) => (
                                  <li key={index} className="flex justify-between">
                                    <span>{service}</span>
                                    <span>+INR {service === 'Video Recording' ? '2,000' : 
                                             service === 'Photography' ? '1,500' : 
                                             service === 'Live Streaming' ? '1,000' : '500'}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )}

                        {bookingData.preferences.specialRequests && (
                          <Card>
                            <CardHeader>
                              <CardTitle>Special Requests</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p>{bookingData.preferences.specialRequests}</p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {currentStep > 1 && (
                      <Button variant="outline" onClick={handleBack}>
                        Previous
                      </Button>
                    )}
                    
                    <div className="ml-auto">
                      {currentStep < 4 ? (
                        <Button onClick={handleNext} className="bg-orange-600 hover:bg-orange-700">
                          Next
                        </Button>
                      ) : (
                        <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                          Confirm Booking
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Price Summary */}
            <div className="md:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">{foundService.title}</h4>
                      <p className="text-sm text-gray-600">{foundService.category}</p>
                    </div>
                    
                    {bookingData.package && (
                      <div className="flex justify-between">
                        <span>{bookingData.package.name}</span>
                        <span>INR {bookingData.package.price.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {bookingData.additionalServices.length > 0 && (
                      <div className="space-y-2">
                        <h5 className="font-medium">Additional Services:</h5>
                        {bookingData.additionalServices.map((service, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{service}</span>
                            <span>+INR {service === 'Video Recording' ? '2,000' : 
                                     service === 'Photography' ? '1,500' : 
                                     service === 'Live Streaming' ? '1,000' : '500'}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>INR {calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      <p>* Final amount may vary based on specific requirements</p>
                      <p>* Advance payment may be required</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;