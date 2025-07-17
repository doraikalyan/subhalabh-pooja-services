// Service Categories
export const serviceCategories = [
  {
    id: 'homam',
    title: 'Homam Services',
    description: 'Sacred fire rituals for spiritual purification and divine blessings',
    icon: '🔥',
    color: 'bg-orange-100 text-orange-800',
    serviceCount: 19
  },
  {
    id: 'pooja',
    title: 'Pooja Services',
    description: 'Traditional worship ceremonies for various deities',
    icon: '🙏',
    color: 'bg-yellow-100 text-yellow-800',
    serviceCount: 21
  },
  {
    id: 'pariharam',
    title: 'Pariharam Services',
    description: 'Remedial rituals to overcome obstacles and negative influences',
    icon: '🛡️',
    color: 'bg-red-100 text-red-800',
    serviceCount: 14
  },
  {
    id: 'japam',
    title: 'Japam Services',
    description: 'Sacred mantra chanting for spiritual elevation',
    icon: '📿',
    color: 'bg-purple-100 text-purple-800',
    serviceCount: 10
  },
  {
    id: 'religious-tours',
    title: 'Religious Tours',
    description: 'Sacred pilgrimage tours to holy temples and spiritual destinations',
    icon: '🛕',
    color: 'bg-amber-100 text-amber-800',
    serviceCount: 5
  },
  {
    id: 'ancestral',
    title: 'Ancestral Services',
    description: 'Memorial rituals and ceremonies for honoring ancestors',
    icon: '🪷',
    color: 'bg-gray-100 text-gray-800',
    serviceCount: 10
  },
  {
    id: 'astrology',
    title: 'Astrology Services',
    description: 'Astrological consultations and spiritual guidance',
    icon: '⭐',
    color: 'bg-blue-100 text-blue-800',
    serviceCount: 0
  }
];

// Services Data
export const services = [
// Homam Services (19 services)
  {
    id: 'ayusha-homam',
    title: 'Ayusha Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Sacred fire ritual for longevity, health, and protection from diseases',
    price: 5000,
    duration: '2-3 hours',
    significance: 'Ayusha Homam is performed to invoke Lord Ayur Devata for longevity and good health. This powerful ritual helps remove health obstacles and promotes overall well-being.',
    benefits: [
      'Promotes longevity and good health',
      'Removes health-related obstacles',
      'Provides protection from diseases',
      'Enhances vitality and energy',
      'Brings peace of mind'
    ],
    materials: [
      'Sacred fire wood',
      'Ghee and sesame oil',
      'Rice and barley',
      'Flowers and fruits',
      'Sacred herbs'
    ],
    procedure: [
      'Preparation of sacred fire altar',
      'Invocation of Lord Ayur Devata',
      'Chanting of Ayusha mantras',
      'Offering of sacred materials to fire',
      'Final prayers and blessings'
    ],
    bestTime: 'Early morning or evening',
    deity: 'Lord Ayur Devata',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5000,
        description: 'Essential Ayusha Homam with basic materials',
        includes: ['Homam ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Complete Ayusha Homam with additional rituals',
        includes: ['Extended homam ritual', 'Premium materials', 'Additional prayers', 'Prasadam']
      }
    ],
    faq: [
      {
        question: 'How long does the Ayusha Homam take?',
        answer: 'The ritual typically takes 2-3 hours depending on the package chosen.'
      },
      {
        question: 'What should I prepare before the homam?',
        answer: 'We will provide a detailed list of items needed. Basic preparation includes cleaning the space and arranging seating.'
      }
    ],
    tags: ['health', 'longevity', 'protection', 'homam']
  },
  {
    id: 'chandi-homam',
    title: 'Chandi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Powerful ritual to remove negative energies and black magic',
    price: 8000,
    duration: '4-5 hours',
    significance: 'Chandi Homam is one of the most powerful rituals performed to invoke Goddess Chandi for protection from negative forces, black magic, and evil influences.',
    benefits: [
      'Destroys negative energies completely',
      'Removes black magic effects',
      'Provides ultimate protection',
      'Brings victory over enemies',
      'Establishes divine shield around devotee'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Special protection herbs',
      'Sacred ash and sindoor',
      'Coconut and lime',
      'Protective yantras'
    ],
    procedure: [
      'Elaborate protective altar setup',
      'Invocation of Goddess Chandi',
      'Chanting of Durga Saptashati',
      'Offering of protective materials',
      'Final protection blessing'
    ],
    bestTime: 'Tuesday or Friday, during difficulties',
    deity: 'Goddess Chandi (Fierce form of Durga)',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 8000,
        description: 'Standard Chandi Homam for protection',
        includes: ['Complete ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 12000,
        description: 'Intensive Chandi Homam with maximum protection',
        includes: ['Extended ritual', 'Premium materials', 'Multiple sessions', 'Protective amulets']
      }
    ],
    faq: [
      {
        question: 'When should I perform Chandi Homam?',
        answer: 'When facing severe negative influences, black magic, or need for ultimate divine protection.'
      },
      {
        question: 'How powerful is this ritual?',
        answer: 'Chandi Homam is considered one of the most powerful protective rituals in Hindu tradition.'
      }
    ],
    tags: ['chandi', 'protection', 'black-magic-removal', 'negative-energy']
  },
  {
    id: 'dhanvantari-homam',
    title: 'Dhanvantari Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Health and healing ritual dedicated to Lord Dhanvantari',
    price: 5500,
    duration: '2.5-3 hours',
    significance: 'Dhanvantari Homam is performed to invoke Lord Dhanvantari, the divine physician, for healing from diseases and maintaining good health.',
    benefits: [
      'Provides healing from diseases',
      'Enhances immune system',
      'Removes health obstacles',
      'Brings vitality and energy',
      'Protects from future illnesses'
    ],
    materials: [
      'Medicinal herbs and plants',
      'Turmeric and neem',
      'Honey and ghee',
      'White flowers',
      'Sacred healing water'
    ],
    procedure: [
      'Preparation of healing altar',
      'Invocation of Lord Dhanvantari',
      'Chanting of healing mantras',
      'Offering of medicinal herbs',
      'Blessing of medicine and water'
    ],
    bestTime: 'During illness or for health maintenance',
    deity: 'Lord Dhanvantari (Divine Physician)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Dhanvantari Homam for healing',
        includes: ['Healing ritual', 'Basic herbs', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8000,
        description: 'Comprehensive healing homam with special medicines',
        includes: ['Extended ritual', 'Premium herbs', 'Blessed medicines', 'Health consultation']
      }
    ],
    faq: [
      {
        question: 'Can this help with chronic illnesses?',
        answer: 'Dhanvantari Homam provides divine healing energy that supports recovery alongside medical treatment.'
      },
      {
        question: 'Should this be done regularly?',
        answer: 'Yes, it can be performed annually for health maintenance or during illness for faster recovery.'
      }
    ],
    tags: ['dhanvantari', 'healing', 'health', 'medicine']
  },
  {
    id: 'ganapathi-homam',
    title: 'Ganapathi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Sacred fire ritual to Lord Ganesha for removing obstacles and new beginnings',
    price: 3500,
    duration: '1.5-2 hours',
    significance: 'Ganapathi Homam is performed to seek blessings of Lord Ganesha, the remover of obstacles. This ritual is ideal for new ventures, education, and overcoming challenges.',
    benefits: [
      'Removes obstacles and barriers',
      'Brings success in new ventures',
      'Enhances wisdom and knowledge',
      'Provides divine protection',
      'Ensures smooth progress in endeavors'
    ],
    materials: [
      'Sacred fire wood',
      'Modak (sweet offering)',
      'Red flowers',
      'Durva grass',
      'Coconut and fruits'
    ],
    procedure: [
      'Setup of fire altar',
      'Invocation of Lord Ganesha',
      'Chanting of Ganesha mantras',
      'Offering of modak and flowers',
      'Concluding prayers'
    ],
    bestTime: 'Morning hours, especially Tuesday',
    deity: 'Lord Ganesha',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3500,
        description: 'Standard Ganapathi Homam',
        includes: ['Homam ritual', 'Basic offerings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 5000,
        description: 'Extended Ganapathi Homam with special prayers',
        includes: ['Extended ritual', 'Premium offerings', 'Special mantras', 'Blessed prasadam']
      }
    ],
    faq: [
      {
        question: 'When is the best time to perform Ganapathi Homam?',
        answer: 'Tuesday mornings are considered most auspicious, but it can be performed on any day based on your convenience.'
      },
      {
        question: 'Can this be done for business success?',
        answer: 'Yes, Ganapathi Homam is highly recommended for new business ventures and removing business obstacles.'
      }
    ],
    tags: ['ganesha', 'obstacles', 'success', 'new-beginnings']
  },
  {
    id: 'gayatri-homam',
    title: 'Gayatri Homam (Sukrutha Homam)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Sacred ritual for spiritual purification and wisdom',
    price: 4500,
    duration: '2-3 hours',
    significance: 'Gayatri Homam is performed to invoke Goddess Gayatri for spiritual purification, wisdom, and removal of sins accumulated over lifetimes.',
    benefits: [
      'Provides spiritual purification',
      'Removes accumulated sins',
      'Enhances wisdom and knowledge',
      'Brings mental clarity',
      'Establishes divine connection'
    ],
    materials: [
      'Sacred thread and cloth',
      'White flowers and rice',
      'Ghee and sesame',
      'Sacred water',
      'Meditation items'
    ],
    procedure: [
      'Purification of space and participants',
      'Invocation of Goddess Gayatri',
      'Chanting of Gayatri mantra',
      'Offering of pure materials',
      'Blessing for spiritual growth'
    ],
    bestTime: 'Early morning during sunrise',
    deity: 'Goddess Gayatri',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Standard Gayatri Homam for purification',
        includes: ['Purification ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Elaborate Gayatri Homam with meditation guidance',
        includes: ['Extended ritual', 'Meditation session', 'Spiritual guidance', 'Sacred thread']
      }
    ],
    faq: [
      {
        question: 'Who can perform Gayatri Homam?',
        answer: 'Anyone seeking spiritual purification and wisdom can perform this sacred ritual.'
      },
      {
        question: 'What is the significance of sunrise timing?',
        answer: 'Sunrise is considered the most sacred time for Gayatri worship as it represents new beginnings and divine light.'
      }
    ],
    tags: ['gayatri', 'spiritual-purification', 'wisdom', 'meditation']
  },
  {
    id: 'hayagreeva-homam',
    title: 'Hayagreeva Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Ritual for knowledge, wisdom and academic success',
    price: 4000,
    duration: '2-2.5 hours',
    significance: 'Hayagreeva Homam is performed to invoke Lord Hayagreeva, the horse-faced avatar of Vishnu, for enhancing knowledge, wisdom, and academic achievements.',
    benefits: [
      'Enhances knowledge and learning',
      'Improves academic performance',
      'Develops memory and concentration',
      'Brings success in education',
      'Removes learning obstacles'
    ],
    materials: [
      'Books and learning materials',
      'White flowers and lotus',
      'Sesame seeds and ghee',
      'Fruits and sweets',
      'Sacred thread'
    ],
    procedure: [
      'Setup of knowledge altar',
      'Blessing of books and materials',
      'Invocation of Lord Hayagreeva',
      'Chanting of knowledge mantras',
      'Blessing for academic success'
    ],
    bestTime: 'Before exams or start of academic year',
    deity: 'Lord Hayagreeva (Avatar of Vishnu)',
    location: 'Home or educational institution',
    packages: [
      {
        name: 'Basic Package',
        price: 4000,
        description: 'Standard Hayagreeva Homam for students',
        includes: ['Knowledge ritual', 'Book blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 5500,
        description: 'Comprehensive education homam with special blessings',
        includes: ['Extended ritual', 'Memory enhancement', 'Study guidance', 'Success yantra']
      }
    ],
    faq: [
      {
        question: 'Is this only for students?',
        answer: 'No, anyone seeking to enhance knowledge, wisdom, or learning abilities can benefit from this homam.'
      },
      {
        question: 'Can this help with competitive exams?',
        answer: 'Yes, Hayagreeva Homam is particularly beneficial for competitive exams and academic challenges.'
      }
    ],
    tags: ['hayagreeva', 'knowledge', 'education', 'academic-success']
  },
  {
    id: 'kala-bhairava-homam',
    title: 'Kala Bhairava Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Ritual for time management and financial stability',
    price: 5500,
    duration: '2.5-3 hours',
    significance: 'Kala Bhairava Homam is performed to invoke Lord Kala Bhairava for better time management, financial stability, and protection from time-related problems.',
    benefits: [
      'Improves time management',
      'Brings financial stability',
      'Removes delays and obstacles',
      'Provides protection during travel',
      'Ensures timely completion of tasks'
    ],
    materials: [
      'Black sesame and mustard oil',
      'Blue flowers',
      'Iron items',
      'Coconut and fruits',
      'Sacred ash'
    ],
    procedure: [
      'Preparation during auspicious time',
      'Invocation of Lord Kala Bhairava',
      'Chanting of time-related mantras',
      'Offering of specific materials',
      'Blessing for time mastery'
    ],
    bestTime: 'Saturday or during Ashtami',
    deity: 'Lord Kala Bhairava (Time Controller)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Kala Bhairava Homam',
        includes: ['Time management ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Comprehensive homam for financial and time mastery',
        includes: ['Extended ritual', 'Financial guidance', 'Time optimization', 'Protection yantra']
      }
    ],
    faq: [
      {
        question: 'How does this help with time management?',
        answer: 'Lord Kala Bhairava is the controller of time, and this homam helps align with cosmic time for better productivity.'
      },
      {
        question: 'Can this help with financial problems?',
        answer: 'Yes, this homam is particularly effective for financial stability and removing money-related delays.'
      }
    ],
    tags: ['kala-bhairava', 'time-management', 'financial-stability', 'productivity']
  },
  {
    id: 'karthaveeryarjuna-homam',
    title: 'Karthaveeryarjuna Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Ritual to recover lost items and materials',
    price: 4800,
    duration: '2-2.5 hours',
    significance: 'Karthaveeryarjuna Homam is performed to invoke the legendary king Karthaveeryarjuna for recovering lost items, wealth, and overcoming theft-related problems.',
    benefits: [
      'Helps recover lost items',
      'Protects from theft and loss',
      'Brings back stolen property',
      'Provides security to belongings',
      'Ensures return of investments'
    ],
    materials: [
      'Golden items or substitutes',
      'Yellow flowers',
      'Turmeric and saffron',
      'Coconut and fruits',
      'Security symbols'
    ],
    procedure: [
      'Setup of recovery altar',
      'Invocation of King Karthaveeryarjuna',
      'Chanting of recovery mantras',
      'Offering for lost item return',
      'Blessing for future protection'
    ],
    bestTime: 'When facing loss or theft',
    deity: 'King Karthaveeryarjuna',
    location: 'Home or affected place',
    packages: [
      {
        name: 'Basic Package',
        price: 4800,
        description: 'Standard recovery homam',
        includes: ['Recovery ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Comprehensive homam for maximum recovery',
        includes: ['Extended ritual', 'Multiple sessions', 'Protection measures', 'Security blessings']
      }
    ],
    faq: [
      {
        question: 'Can this help recover any type of lost item?',
        answer: 'This homam is effective for recovering valuable items, money, property, and important documents.'
      },
      {
        question: 'How soon can I expect results?',
        answer: 'Results depend on various factors, but many devotees report positive outcomes within a few weeks.'
      }
    ],
    tags: ['karthaveeryarjuna', 'lost-items', 'recovery', 'theft-protection']
  },
  {
    id: 'lakshmi-kubera-homam',
    title: 'Lakshmi Kubera Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Combined wealth and prosperity ritual for financial abundance',
    price: 4500,
    duration: '2.5-3 hours',
    significance: 'Lakshmi Kubera Homam combines the blessings of Goddess Lakshmi and Lord Kubera for ultimate wealth, prosperity, and financial stability.',
    benefits: [
      'Attracts wealth and abundance',
      'Removes financial obstacles',
      'Brings business prosperity',
      'Enhances earning capacity',
      'Provides material and spiritual wealth'
    ],
    materials: [
      'Gold coins and jewelry',
      'Lotus flowers',
      'Rice and turmeric',
      'Coconut and fruits',
      'Sacred ghee and honey'
    ],
    procedure: [
      'Setup of dual deity altar',
      'Invocation of Lakshmi and Kubera',
      'Chanting of wealth mantras',
      'Offering of gold and prosperity items',
      'Combined blessing ceremony'
    ],
    bestTime: 'Friday evening or Dhanteras',
    deity: 'Goddess Lakshmi and Lord Kubera',
    location: 'Home or business',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Standard Lakshmi Kubera Homam',
        includes: ['Combined homam ritual', 'Basic offerings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Elaborate wealth homam with special rituals',
        includes: ['Extended ritual', 'Premium decorations', 'Wealth yantra', 'Blessed coins']
      }
    ],
    faq: [
      {
        question: 'How is this different from regular Lakshmi Homam?',
        answer: 'This combines both Lakshmi and Kubera worship for enhanced wealth attraction and financial stability.'
      },
      {
        question: 'Can this help with business growth?',
        answer: 'Yes, this is particularly powerful for business prosperity and removing financial blocks.'
      }
    ],
    tags: ['lakshmi', 'kubera', 'wealth', 'prosperity', 'business']
  },
  {
    id: 'lakshmi-narasimha-homam',
    title: 'Lakshmi Narasimha Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Protection from enemies and financial problems',
    price: 6000,
    duration: '3-3.5 hours',
    significance: 'Lakshmi Narasimha Homam combines the fierce protection of Lord Narasimha with the prosperity of Goddess Lakshmi for ultimate protection and wealth.',
    benefits: [
      'Provides protection from enemies',
      'Removes financial difficulties',
      'Brings wealth and security',
      'Destroys negative forces',
      'Ensures family safety'
    ],
    materials: [
      'Red and yellow flowers',
      'Gold items and coins',
      'Coconut and fruits',
      'Protection herbs',
      'Sacred weapons symbols'
    ],
    procedure: [
      'Setup of protective wealth altar',
      'Invocation of Lakshmi Narasimha',
      'Chanting of protective mantras',
      'Offering for wealth and protection',
      'Combined blessing ceremony'
    ],
    bestTime: 'During financial crisis or enemy troubles',
    deity: 'Lord Lakshmi Narasimha',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6000,
        description: 'Standard protection and wealth homam',
        includes: ['Combined ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 8500,
        description: 'Intensive homam for maximum protection and prosperity',
        includes: ['Extended ritual', 'Premium materials', 'Multiple protections', 'Wealth yantra']
      }
    ],
    faq: [
      {
        question: 'Is this suitable for business protection?',
        answer: 'Yes, this homam provides excellent protection for businesses from competitors and financial losses.'
      },
      {
        question: 'How does this combine protection and wealth?',
        answer: 'Lord Narasimha destroys negative forces while Goddess Lakshmi brings prosperity, creating a powerful combination.'
      }
    ],
    tags: ['lakshmi-narasimha', 'protection', 'wealth', 'enemies', 'financial-security']
  },
  {
    id: 'lakshmi-narayana-homam',
    title: 'Lakshmi Narayana Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Combined ritual for wealth and divine blessings',
    price: 5500,
    duration: '2.5-3 hours',
    significance: 'Lakshmi Narayana Homam is performed to invoke the divine couple for material prosperity, spiritual growth, and overall well-being of the family.',
    benefits: [
      'Brings wealth and prosperity',
      'Provides spiritual elevation',
      'Ensures family harmony',
      'Removes poverty and suffering',
      'Grants divine protection'
    ],
    materials: [
      'Lotus flowers and garlands',
      'Gold and silver items',
      'Rice and turmeric',
      'Coconut and fruits',
      'Sacred thread'
    ],
    procedure: [
      'Setup of divine couple altar',
      'Joint invocation of Lakshmi Narayana',
      'Chanting of prosperity mantras',
      'Offering to divine couple',
      'Family blessing ceremony'
    ],
    bestTime: 'Thursday or during Ekadashi',
    deity: 'Lord Lakshmi Narayana (Divine Couple)',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Lakshmi Narayana Homam',
        includes: ['Divine couple ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Elaborate homam with extended blessings',
        includes: ['Extended ritual', 'Premium decorations', 'Family blessings', 'Prosperity yantra']
      }
    ],
    faq: [
      {
        question: 'What makes this different from individual Lakshmi or Narayana worship?',
        answer: 'Worshipping the divine couple together brings both material and spiritual benefits in perfect balance.'
      },
      {
        question: 'Is this good for family harmony?',
        answer: 'Yes, this homam is excellent for strengthening family bonds and bringing peace to the household.'
      }
    ],
    tags: ['lakshmi-narayana', 'divine-couple', 'prosperity', 'family-harmony']
  },
  {
    id: 'mrityunjaya-homam',
    title: 'Mrityunjaya Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Sacred fire ritual to Lord Shiva for overcoming death-like situations',
    price: 6000,
    duration: '2.5-3 hours',
    significance: 'Mrityunjaya Homam is performed to invoke Lord Shiva in his aspect as the conqueror of death, providing healing and protection from life-threatening situations.',
    benefits: [
      'Provides healing from serious illnesses',
      'Protects from accidents and dangers',
      'Overcomes life-threatening situations',
      'Brings mental and physical strength',
      'Ensures longevity and good health'
    ],
    materials: [
      'Bilva leaves',
      'White flowers',
      'Sacred ash (vibhuti)',
      'Milk and honey',
      'Medicinal herbs'
    ],
    procedure: [
      'Sacred fire preparation',
      'Invocation of Lord Mrityunjaya',
      'Chanting of Mrityunjaya mantra',
      'Offering of healing substances',
      'Healing blessing ceremony'
    ],
    bestTime: 'Monday or during health crises',
    deity: 'Lord Shiva (Mrityunjaya)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6000,
        description: 'Standard Mrityunjaya Homam',
        includes: ['Homam ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8500,
        description: 'Intensive Mrityunjaya Homam with healing prayers',
        includes: ['Extended ritual', 'Premium materials', 'Special healing mantras', 'Blessed medicine']
      }
    ],
    faq: [
      {
        question: 'Can this help with serious health issues?',
        answer: 'Mrityunjaya Homam is specifically performed for healing and overcoming health challenges, alongside medical treatment.'
      },
      {
        question: 'How many times should this be performed?',
        answer: 'It can be performed multiple times during health crises or as a preventive measure annually.'
      }
    ],
    tags: ['mrityunjaya', 'healing', 'shiva', 'health']
  },
  {
    id: 'navagraha-homam',
    title: 'Navagraha Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Sacred fire ritual to nine planetary deities for cosmic harmony',
    price: 6500,
    duration: '3-4 hours',
    significance: 'Navagraha Homam is performed to appease the nine planetary deities and reduce the malefic effects of planets in ones horoscope.',
    benefits: [
      'Reduces planetary doshas',
      'Brings cosmic harmony',
      'Improves fortune and luck',
      'Provides mental peace',
      'Enhances positive planetary influences'
    ],
    materials: [
      'Nine types of grains',
      'Colored flowers for each planet',
      'Specific gems or substitutes',
      'Sacred herbs',
      'Ghee and oil'
    ],
    procedure: [
      'Preparation of nine fire altars',
      'Invocation of nine planetary deities',
      'Individual prayers to each planet',
      'Offering of specific materials',
      'Final unified prayers'
    ],
    bestTime: 'Sunday morning or as per astrological guidance',
    deity: 'Nine Planetary Deities (Navagrahas)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard Navagraha Homam',
        includes: ['Complete ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 9000,
        description: 'Extended Navagraha Homam with special remedies',
        includes: ['Extended ritual', 'Premium materials', 'Personalized remedies', 'Gemstone blessings']
      }
    ],
    faq: [
      {
        question: 'Do I need my horoscope for this homam?',
        answer: 'While not mandatory, having your horoscope helps in performing specific remedies for your planetary positions.'
      },
      {
        question: 'How often should this be performed?',
        answer: 'It can be performed annually or as recommended by an astrologer based on your planetary periods.'
      }
    ],
    tags: ['navagraha', 'planets', 'astrology', 'doshas']
  },
  {
    id: 'pratyangira-devi-homam',
    title: 'Pratyangira Devi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Powerful ritual to remove black magic and negative forces',
    price: 7000,
    duration: '3-4 hours',
    significance: 'Pratyangira Devi Homam is one of the most powerful protective rituals, invoking the fierce goddess to destroy black magic, evil eye, and negative forces.',
    benefits: [
      'Destroys black magic completely',
      'Removes evil eye effects',
      'Provides ultimate protection',
      'Brings victory over enemies',
      'Establishes divine armor'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Lime and chili',
      'Coconut and camphor',
      'Protection herbs',
      'Sacred ash'
    ],
    procedure: [
      'Elaborate protection setup',
      'Invocation of Pratyangira Devi',
      'Powerful protective mantras',
      'Destruction of negative forces',
      'Final protection blessing'
    ],
    bestTime: 'During severe negative influences',
    deity: 'Goddess Pratyangira Devi',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 7000,
        description: 'Standard Pratyangira Devi Homam',
        includes: ['Protection ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 10000,
        description: 'Intensive homam for maximum protection',
        includes: ['Extended ritual', 'Multiple sessions', 'Powerful protections', 'Divine armor']
      }
    ],
    faq: [
      {
        question: 'When should I perform this homam?',
        answer: 'When facing severe black magic, evil eye, or unexplained negative events in life.'
      },
      {
        question: 'How powerful is Pratyangira Devi?',
        answer: 'She is considered the most fierce and powerful protective goddess, capable of destroying any negative force.'
      }
    ],
    tags: ['pratyangira-devi', 'black-magic-removal', 'protection', 'negative-forces']
  },
  {
    id: 'raja-matangi-homam',
    title: 'Raja Matangi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Ritual for business success and knowledge',
    price: 5000,
    duration: '2.5-3 hours',
    significance: 'Raja Matangi Homam is performed to invoke Goddess Raja Matangi for business success, speech power, and mastery over knowledge and arts.',
    benefits: [
      'Brings business success',
      'Enhances communication skills',
      'Provides mastery over arts',
      'Increases influence and authority',
      'Grants speech power'
    ],
    materials: [
      'Green flowers and leaves',
      'Fruits and sweets',
      'Musical instruments',
      'Books and writing materials',
      'Emerald or green stones'
    ],
    procedure: [
      'Setup of knowledge and wealth altar',
      'Invocation of Raja Matangi',
      'Chanting of empowerment mantras',
      'Offering of knowledge items',
      'Blessing for success and authority'
    ],
    bestTime: 'Wednesday or during business ventures',
    deity: 'Goddess Raja Matangi',
    location: 'Home or business premises',
    packages: [
      {
        name: 'Basic Package',
        price: 5000,
        description: 'Standard Raja Matangi Homam',
        includes: ['Success ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7000,
        description: 'Comprehensive homam for business and knowledge mastery',
        includes: ['Extended ritual', 'Business blessings', 'Communication enhancement', 'Success yantra']
      }
    ],
    faq: [
      {
        question: 'Is this suitable for politicians and leaders?',
        answer: 'Yes, Raja Matangi is particularly beneficial for those in leadership positions and public speaking roles.'
      },
      {
        question: 'Can this help with artistic pursuits?',
        answer: 'Absolutely, this goddess grants mastery over arts, music, and creative expressions.'
      }
    ],
    tags: ['raja-matangi', 'business-success', 'communication', 'leadership']
  },
  {
    id: 'rudra-homam',
    title: 'Rudra Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Powerful Lord Shiva ritual for various benefits',
    price: 8500,
    duration: '4-5 hours',
    significance: 'Rudra Homam is one of the most powerful Shiva rituals, performed to invoke Lord Rudra for destruction of negativity and granting of desires.',
    benefits: [
      'Destroys all negativities',
      'Provides spiritual elevation',
      'Removes major obstacles',
      'Grants material and spiritual desires',
      'Establishes divine connection'
    ],
    materials: [
      'Bilva leaves in large quantity',
      'White flowers and lotus',
      'Milk, honey, and ghee',
      'Sacred ash and rudraksha',
      'Special herbs and woods'
    ],
    procedure: [
      'Elaborate Shiva altar preparation',
      'Invocation of Lord Rudra',
      'Chanting of Rudram and Chamakam',
      'Abhishekam with various substances',
      'Final Shiva blessing ceremony'
    ],
    bestTime: 'Monday, Pradosham, or Shivaratri',
    deity: 'Lord Rudra (Fierce form of Shiva)',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 8500,
        description: 'Standard Rudra Homam',
        includes: ['Complete ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 12000,
        description: 'Elaborate Rudra Homam with extended rituals',
        includes: ['Extended ceremony', 'Premium materials', 'Multiple abhishekams', 'Spiritual guidance']
      }
    ],
    faq: [
      {
        question: 'What makes Rudra Homam so powerful?',
        answer: 'It invokes the most powerful aspect of Lord Shiva, capable of destroying any obstacle or negativity.'
      },
      {
        question: 'Can anyone perform this homam?',
        answer: 'Yes, but it requires sincere devotion and should be performed by experienced priests for maximum benefit.'
      }
    ],
    tags: ['rudra', 'shiva', 'powerful-ritual', 'spiritual-elevation']
  },
  {
    id: 'saraswati-homam',
    title: 'Saraswati Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Education and knowledge enhancement ritual',
    price: 4200,
    duration: '2-2.5 hours',
    significance: 'Saraswati Homam is performed to invoke Goddess Saraswati for enhancing education, knowledge, artistic skills, and wisdom.',
    benefits: [
      'Enhances learning abilities',
      'Improves academic performance',
      'Develops artistic talents',
      'Brings clarity of thought',
      'Ensures educational success'
    ],
    materials: [
      'White flowers and lotus',
      'Books and musical instruments',
      'White cloth and pearls',
      'Milk and honey',
      'Sacred thread'
    ],
    procedure: [
      'Setup of knowledge altar',
      'Blessing of books and instruments',
      'Invocation of Goddess Saraswati',
      'Chanting of knowledge mantras',
      'Blessing for wisdom and learning'
    ],
    bestTime: 'Vasant Panchami or before studies',
    deity: 'Goddess Saraswati',
    location: 'Home or educational institution',
    packages: [
      {
        name: 'Basic Package',
        price: 4200,
        description: 'Standard Saraswati Homam for students',
        includes: ['Knowledge ritual', 'Book blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6000,
        description: 'Comprehensive homam for all-round development',
        includes: ['Extended ritual', 'Multiple talents blessing', 'Learning enhancement', 'Wisdom yantra']
      }
    ],
    faq: [
      {
        question: 'Is this only for students?',
        answer: 'No, anyone seeking knowledge, artistic skills, or wisdom can benefit from this homam.'
      },
      {
        question: 'Can this help with speech and communication?',
        answer: 'Yes, Goddess Saraswati also governs speech, making this beneficial for orators and communicators.'
      }
    ],
    tags: ['saraswati', 'education', 'knowledge', 'arts', 'wisdom']
  },
  {
    id: 'shoolini-durga-homam',
    title: 'Shoolini Durga Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Goddess Durga ritual for protection and strength',
    price: 6500,
    duration: '3-3.5 hours',
    significance: 'Shoolini Durga Homam invokes the trident-bearing fierce form of Goddess Durga for ultimate protection, strength, and victory over all obstacles.',
    benefits: [
      'Provides divine protection',
      'Increases inner strength',
      'Brings victory over obstacles',
      'Destroys enemy forces',
      'Grants courage and confidence'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Coconut and lime',
      'Red cloth and sindoor',
      'Trident symbols',
      'Protection herbs'
    ],
    procedure: [
      'Setup of powerful Durga altar',
      'Invocation of Shoolini Durga',
      'Chanting of fierce mantras',
      'Offering of power symbols',
      'Blessing for strength and protection'
    ],
    bestTime: 'Tuesday, Friday, or during Navratri',
    deity: 'Goddess Shoolini Durga',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard Shoolini Durga Homam',
        includes: ['Protection ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 9000,
        description: 'Intensive homam for maximum strength and protection',
        includes: ['Extended ritual', 'Powerful mantras', 'Strength enhancement', 'Victory yantra']
      }
    ],
    faq: [
      {
        question: 'When should I perform Shoolini Durga Homam?',
        answer: 'When facing major challenges, need for inner strength, or protection from powerful negative forces.'
      },
      {
        question: 'What is the significance of the trident?',
        answer: 'The trident represents the power to destroy the three types of suffering - physical, mental, and spiritual.'
      }
    ],
    tags: ['shoolini-durga', 'protection', 'strength', 'victory', 'courage']
  },
  {
    id: 'sudarshana-homam',
    title: 'Sudarshana Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'homam',
    description: 'Powerful fire ritual with Lord Vishnus discus for protection and victory',
    price: 7500,
    duration: '3-4 hours',
    significance: 'Sudarshana Homam is one of the most powerful protective rituals, invoking the divine weapon of Lord Vishnu to destroy negative forces and provide ultimate protection.',
    benefits: [
      'Provides divine protection',
      'Destroys negative energies',
      'Brings victory over enemies',
      'Removes black magic effects',
      'Ensures spiritual and physical safety'
    ],
    materials: [
      'Special sacred wood',
      'Lotus petals',
      'Sacred weapons symbols',
      'Protective herbs',
      'Consecrated ghee'
    ],
    procedure: [
      'Elaborate altar preparation',
      'Invocation of Lord Sudarshana',
      'Powerful mantra chanting',
      'Offering of sacred materials',
      'Protection blessing ceremony'
    ],
    bestTime: 'Ekadashi or as per urgent need',
    deity: 'Lord Sudarshana (Vishnus Discus)',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 7500,
        description: 'Standard Sudarshana Homam',
        includes: ['Complete ritual', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 10000,
        description: 'Intensive Sudarshana Homam with additional protections',
        includes: ['Extended ritual', 'Premium materials', 'Multiple priests', 'Protective amulets']
      }
    ],
    faq: [
      {
        question: 'When should I consider Sudarshana Homam?',
        answer: 'This is recommended when facing severe obstacles, negative influences, or need for strong protection.'
      },
      {
        question: 'Is this suitable for everyone?',
        answer: 'Yes, but it is particularly beneficial for those facing challenges or seeking divine protection.'
      }
    ],
    tags: ['sudarshana', 'protection', 'vishnu', 'victory']
  },
// Pooja Services (21 services)
  {
    id: 'satyanarayan-pooja',
    title: 'Satyanarayan Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Traditional worship of Lord Vishnu for prosperity and fulfillment of wishes',
    price: 2500,
    duration: '2-3 hours',
    significance: 'Satyanarayan Pooja is one of the most popular Hindu rituals performed to seek blessings of Lord Vishnu for prosperity, happiness, and fulfillment of desires.',
    benefits: [
      'Brings prosperity and happiness',
      'Fulfills legitimate desires',
      'Removes obstacles in life',
      'Strengthens family bonds',
      'Provides divine blessings'
    ],
    materials: [
      'Banana leaves',
      'Fruits and sweets',
      'Flowers and incense',
      'Sacred thread',
      'Panchamrit ingredients'
    ],
    procedure: [
      'Preparation of altar',
      'Invocation of Lord Satyanarayan',
      'Reading of Satyanarayan Katha',
      'Offering of prasadam',
      'Distribution of blessed food'
    ],
    bestTime: 'Full moon day or any auspicious occasion',
    deity: 'Lord Satyanarayan (Vishnu)',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 2500,
        description: 'Standard Satyanarayan Pooja',
        includes: ['Complete pooja', 'Basic materials', 'Priest services', 'Prasadam']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Satyanarayan Pooja with extended rituals',
        includes: ['Extended pooja', 'Premium decorations', 'Special offerings', 'Family blessings']
      }
    ],
    faq: [
      {
        question: 'How often should Satyanarayan Pooja be performed?',
        answer: 'It can be performed monthly on full moon days or on special occasions like birthdays, anniversaries, or new ventures.'
      },
      {
        question: 'What should be prepared for the pooja?',
        answer: 'We will provide a detailed list, but generally includes fruits, sweets, flowers, and basic pooja items.'
      }
    ],
    tags: ['satyanarayan', 'vishnu', 'prosperity', 'family']
  },
  {
    id: 'varalakshmi-pooja',
    title: 'Varalakshmi Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Special worship of Goddess Lakshmi for wealth and family welfare',
    price: 3000,
    duration: '2-3 hours',
    significance: 'Varalakshmi Pooja is performed by married women to seek blessings of Goddess Lakshmi for the welfare of their family and to attract wealth and prosperity.',
    benefits: [
      'Brings wealth and prosperity',
      'Ensures family welfare',
      'Strengthens marital harmony',
      'Provides protection to family',
      'Attracts abundance in all forms'
    ],
    materials: [
      'Kalash (sacred pot)',
      'Gold jewelry',
      'Silk sarees',
      'Flowers and rangoli',
      'Traditional sweets'
    ],
    procedure: [
      'Decoration of kalash',
      'Invocation of Goddess Varalakshmi',
      'Offering of jewelry and sarees',
      'Chanting of Lakshmi mantras',
      'Blessing ceremony for family'
    ],
    bestTime: 'Varalakshmi Vratam day (usually in August)',
    deity: 'Goddess Varalakshmi',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 3000,
        description: 'Traditional Varalakshmi Pooja',
        includes: ['Complete pooja', 'Basic decorations', 'Priest services', 'Prasadam']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Varalakshmi Pooja with special rituals',
        includes: ['Extended pooja', 'Premium decorations', 'Special offerings', 'Family blessings']
      }
    ],
    faq: [
      {
        question: 'Can unmarried women participate in this pooja?',
        answer: 'While traditionally performed by married women, unmarried women can also participate and seek blessings for their future.'
      },
      {
        question: 'What is the significance of the kalash?',
        answer: 'The kalash represents Goddess Lakshmi and is decorated and worshipped as her embodiment during the pooja.'
      }
    ],
    tags: ['varalakshmi', 'lakshmi', 'women', 'family-welfare']
  },
  {
    id: 'ganesha-pooja',
    title: 'Ganesha Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Traditional worship of Lord Ganesha for removing obstacles and new beginnings',
    price: 2000,
    duration: '1.5-2 hours',
    significance: 'Ganesha Pooja is performed to seek blessings of Lord Ganesha, the remover of obstacles, before starting any new venture or important work.',
    benefits: [
      'Removes obstacles and barriers',
      'Brings success in new ventures',
      'Enhances wisdom and knowledge',
      'Provides divine protection',
      'Ensures smooth progress'
    ],
    materials: [
      'Ganesha idol or picture',
      'Modak and laddus',
      'Red flowers',
      'Durva grass',
      'Coconut and fruits'
    ],
    procedure: [
      'Installation of Ganesha',
      'Invocation prayers',
      'Offering of modak',
      'Chanting of Ganesha mantras',
      'Aarti and blessings'
    ],
    bestTime: 'Tuesday or Wednesday, Ganesh Chaturthi',
    deity: 'Lord Ganesha',
    location: 'Home or office',
    packages: [
      {
        name: 'Basic Package',
        price: 2000,
        description: 'Simple Ganesha Pooja',
        includes: ['Basic pooja', 'Essential materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 2800,
        description: 'Elaborate Ganesha Pooja with special prayers',
        includes: ['Extended pooja', 'Premium offerings', 'Special mantras', 'Blessed prasadam']
      }
    ],
    faq: [
      {
        question: 'When should I perform Ganesha Pooja?',
        answer: 'Before starting any new work, business, or important event. Also regularly on Tuesdays or during Ganesh Chaturthi.'
      },
      {
        question: 'Can this be done in office premises?',
        answer: 'Yes, Ganesha Pooja is commonly performed in offices and business establishments for success and obstacle removal.'
      }
    ],
    tags: ['ganesha', 'obstacles', 'new-beginnings', 'success']
  },
  {
    id: 'ayudha-pooja',
    title: 'Ayudha Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Traditional worship of tools and equipment for divine blessings',
    price: 2200,
    duration: '1.5-2 hours',
    significance: 'Ayudha Pooja is performed during Navratri to worship tools, instruments, and equipment, seeking divine blessings for skill and success in work.',
    benefits: [
      'Blesses tools and equipment',
      'Enhances work efficiency',
      'Brings success in profession',
      'Provides divine protection to instruments',
      'Improves skill and expertise'
    ],
    materials: [
      'Red flowers and turmeric',
      'Coconut and fruits',
      'Incense and lamps',
      'Sacred thread',
      'Sandalwood paste'
    ],
    procedure: [
      'Cleaning and arranging tools',
      'Application of turmeric and sandalwood',
      'Offering of flowers and fruits',
      'Chanting of blessing mantras',
      'Aarti to all instruments'
    ],
    bestTime: 'Navratri 9th day (Ayudha Pooja day)',
    deity: 'Goddess Saraswathi and Vishwakarma',
    location: 'Home or workplace',
    packages: [
      {
        name: 'Basic Package',
        price: 2200,
        description: 'Standard Ayudha Pooja',
        includes: ['Tool blessing ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3000,
        description: 'Elaborate Ayudha Pooja with special blessings',
        includes: ['Extended ritual', 'Premium decorations', 'Multiple tool categories', 'Workplace blessings']
      }
    ],
    faq: [
      {
        question: 'What tools can be included in this pooja?',
        answer: 'All professional tools, vehicles, musical instruments, books, computers, and equipment can be worshipped.'
      },
      {
        question: 'Can this be done for office equipment?',
        answer: 'Yes, office computers, machinery, and tools can be blessed during Ayudha Pooja for better productivity.'
      }
    ],
    tags: ['ayudha', 'tools', 'profession', 'navratri']
  },
  {
    id: 'ayyappa-swamy-pooja',
    title: 'Ayyappa Swamy Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Worship of Lord Ayyappa for spiritual strength and protection',
    price: 2800,
    duration: '2-2.5 hours',
    significance: 'Ayyappa Swamy Pooja is performed to seek blessings of Lord Ayyappa for spiritual strength, protection, and fulfillment of righteous desires.',
    benefits: [
      'Provides spiritual strength',
      'Ensures divine protection',
      'Brings mental peace and clarity',
      'Removes negative influences',
      'Enhances devotional practice'
    ],
    materials: [
      'Coconut and jaggery',
      'Sesame oil and ghee',
      'Tulsi leaves',
      'Yellow flowers',
      'Sacred ash'
    ],
    procedure: [
      'Setup of Ayyappa altar',
      'Lighting of sacred lamp',
      'Chanting of Ayyappa mantras',
      'Offering of coconut and jaggery',
      'Singing of devotional songs'
    ],
    bestTime: 'Saturday or during Mandala season',
    deity: 'Lord Ayyappa',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 2800,
        description: 'Traditional Ayyappa Pooja',
        includes: ['Complete pooja', 'Basic offerings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3400,
        description: 'Elaborate Ayyappa Pooja with special rituals',
        includes: ['Extended pooja', 'Premium offerings', 'Devotional singing', 'Sacred prasadam']
      }
    ],
    faq: [
      {
        question: 'What is the significance of coconut offering?',
        answer: 'Coconut symbolizes the ego that is offered to Lord Ayyappa, representing surrender and devotion.'
      },
      {
        question: 'Can women participate in this pooja?',
        answer: 'Yes, women can participate in Ayyappa Pooja at home, though traditionally certain temple visits have restrictions.'
      }
    ],
    tags: ['ayyappa', 'spiritual-strength', 'protection', 'devotion']
  },
  {
    id: 'bhagavathi-seva',
    title: 'Bhagavathi Seva',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Special worship of Goddess Bhagavathi for divine grace and protection',
    price: 3200,
    duration: '2.5-3 hours',
    significance: 'Bhagavathi Seva is a powerful worship ritual performed to invoke the divine mother Goddess Bhagavathi for protection, strength, and spiritual elevation.',
    benefits: [
      'Provides divine protection',
      'Increases spiritual power',
      'Removes negative energies',
      'Brings family harmony',
      'Ensures victory over obstacles'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Coconut and lime',
      'Red cloth and sindoor',
      'Camphor and incense',
      'Special food offerings'
    ],
    procedure: [
      'Elaborate altar decoration',
      'Invocation of Goddess Bhagavathi',
      'Offering of red flowers',
      'Chanting of powerful mantras',
      'Special aarti ceremony'
    ],
    bestTime: 'Tuesday or Friday, Navratri period',
    deity: 'Goddess Bhagavathi',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3200,
        description: 'Traditional Bhagavathi Seva',
        includes: ['Complete seva', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Bhagavathi Seva with special rituals',
        includes: ['Extended seva', 'Premium decorations', 'Special mantras', 'Protection blessings']
      }
    ],
    faq: [
      {
        question: 'What makes Bhagavathi Seva special?',
        answer: 'It is considered one of the most powerful forms of divine mother worship, providing strong protection and spiritual benefits.'
      },
      {
        question: 'Can this help with family problems?',
        answer: 'Yes, Bhagavathi Seva is particularly effective for resolving family conflicts and bringing harmony.'
      }
    ],
    tags: ['bhagavathi', 'divine-mother', 'protection', 'power']
  },
  {
    id: 'bhoomi-pooja',
    title: 'Bhoomi Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Land worship ceremony before construction for divine blessings',
    price: 2500,
    duration: '1.5-2 hours',
    significance: 'Bhoomi Pooja is performed before starting any construction to seek permission and blessings from Mother Earth and ensure successful completion of the project.',
    benefits: [
      'Ensures successful construction',
      'Removes obstacles in building',
      'Brings prosperity to the property',
      'Provides safety during construction',
      'Establishes positive energy'
    ],
    materials: [
      'Coconut and flowers',
      'Turmeric and kumkum',
      'Incense and camphor',
      'Fruits and sweets',
      'Sacred water'
    ],
    procedure: [
      'Cleaning and marking the land',
      'Installation of kalash',
      'Invocation of earth goddess',
      'Offering prayers to Vastu Purusha',
      'Blessing the foundation'
    ],
    bestTime: 'Auspicious muhurat as per astrology',
    deity: 'Bhoomi Devi (Mother Earth)',
    location: 'Construction site',
    packages: [
      {
        name: 'Basic Package',
        price: 2500,
        description: 'Standard Bhoomi Pooja',
        includes: ['Land blessing ritual', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3300,
        description: 'Elaborate Bhoomi Pooja with Vastu rituals',
        includes: ['Extended ritual', 'Vastu consultation', 'Multiple deity worship', 'Site purification']
      }
    ],
    faq: [
      {
        question: 'When should Bhoomi Pooja be performed?',
        answer: 'Before breaking ground for any construction, renovation, or significant landscaping work.'
      },
      {
        question: 'Is muhurat important for this pooja?',
        answer: 'Yes, performing during an auspicious muhurat ensures maximum benefits and successful construction.'
      }
    ],
    tags: ['bhoomi', 'construction', 'land-blessing', 'vastu']
  },
  {
    id: 'chandi-parayanam',
    title: 'Chandi Parayanam (Saptashati)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Recitation of Durga Saptashati for divine protection and power',
    price: 3000,
    duration: '3-4 hours',
    significance: 'Chandi Parayanam involves the complete recitation of Durga Saptashati, a powerful scripture that invokes the divine mother for protection and victory.',
    benefits: [
      'Provides divine protection',
      'Destroys negative forces',
      'Increases spiritual power',
      'Brings victory over enemies',
      'Enhances courage and strength'
    ],
    materials: [
      'Durga Saptashati book',
      'Red flowers and fruits',
      'Ghee lamps',
      'Incense and camphor',
      'Sacred offerings'
    ],
    procedure: [
      'Setup of divine altar',
      'Invocation of Goddess Durga',
      'Complete recitation of 700 verses',
      'Offering during key chapters',
      'Concluding prayers and aarti'
    ],
    bestTime: 'Navratri, Tuesday, or Friday',
    deity: 'Goddess Durga Chandika',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3000,
        description: 'Complete Chandi Parayanam',
        includes: ['Full recitation', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Chandi Parayanam with special rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Multiple priests', 'Protection yantra']
      }
    ],
    faq: [
      {
        question: 'How long does the complete recitation take?',
        answer: 'The full Durga Saptashati recitation typically takes 3-4 hours depending on the pace and additional rituals.'
      },
      {
        question: 'Can this be done for specific problems?',
        answer: 'Yes, Chandi Parayanam is particularly effective for overcoming obstacles, enemies, and negative influences.'
      }
    ],
    tags: ['chandi', 'saptashati', 'durga', 'scripture-recitation']
  },
  {
    id: 'krishna-jayanthi-pooja',
    title: 'Krishna Jayanthi Pooja (Janmashtami)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Celebration of Lord Krishna\'s birth with traditional rituals',
    price: 2600,
    duration: '2-3 hours',
    significance: 'Krishna Jayanthi celebrates the birth of Lord Krishna with midnight prayers, devotional singing, and special offerings to seek his divine blessings.',
    benefits: [
      'Brings joy and happiness',
      'Enhances devotional spirit',
      'Provides divine protection',
      'Removes sins and negativity',
      'Strengthens spiritual connection'
    ],
    materials: [
      'Krishna idol or picture',
      'Butter and milk products',
      'Tulsi leaves',
      'Yellow flowers',
      'Peacock feathers'
    ],
    procedure: [
      'Decoration of Krishna altar',
      'Midnight birth celebration',
      'Offering of butter and sweets',
      'Singing of Krishna bhajans',
      'Jhoolan (swing) ceremony'
    ],
    bestTime: 'Krishna Janmashtami (midnight)',
    deity: 'Lord Krishna',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 2600,
        description: 'Traditional Janmashtami celebration',
        includes: ['Complete pooja', 'Basic decorations', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3400,
        description: 'Elaborate Janmashtami with special programs',
        includes: ['Extended celebration', 'Premium decorations', 'Devotional singing', 'Special prasadam']
      }
    ],
    faq: [
      {
        question: 'Why is this celebrated at midnight?',
        answer: 'Lord Krishna was born at midnight, so the main celebration and prayers are performed at that auspicious time.'
      },
      {
        question: 'What is the significance of butter offering?',
        answer: 'Butter (makhan) was Krishna\'s favorite food as a child, so offering it shows devotion and love.'
      }
    ],
    tags: ['krishna', 'janmashtami', 'birthday', 'devotional']
  },
  {
    id: 'lakshmi-pooja',
    title: 'Lakshmi Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Worship of Goddess Lakshmi for wealth and prosperity',
    price: 2400,
    duration: '2-2.5 hours',
    significance: 'Lakshmi Pooja is performed to invoke the blessings of Goddess Lakshmi, the deity of wealth and prosperity, for material and spiritual abundance.',
    benefits: [
      'Attracts wealth and prosperity',
      'Removes financial obstacles',
      'Brings abundance in life',
      'Enhances business success',
      'Provides material comfort'
    ],
    materials: [
      'Lotus flowers',
      'Gold coins or jewelry',
      'Rice and turmeric',
      'Coconut and fruits',
      'Ghee lamps'
    ],
    procedure: [
      'Setup of Lakshmi altar',
      'Invocation with mantras',
      'Offering of gold and flowers',
      'Chanting of Lakshmi stotras',
      'Aarti and blessing ceremony'
    ],
    bestTime: 'Friday evening, Diwali, or full moon',
    deity: 'Goddess Lakshmi',
    location: 'Home or business',
    packages: [
      {
        name: 'Basic Package',
        price: 2400,
        description: 'Standard Lakshmi Pooja',
        includes: ['Complete pooja', 'Basic offerings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3200,
        description: 'Elaborate Lakshmi Pooja with prosperity rituals',
        includes: ['Extended pooja', 'Premium decorations', 'Special mantras', 'Blessed coins']
      }
    ],
    faq: [
      {
        question: 'When is the best time for Lakshmi Pooja?',
        answer: 'Friday evenings are ideal, especially during Diwali season or on full moon days for maximum benefits.'
      },
      {
        question: 'Can this help with business growth?',
        answer: 'Yes, Lakshmi Pooja is highly beneficial for business prosperity and removing financial obstacles.'
      }
    ],
    tags: ['lakshmi', 'wealth', 'prosperity', 'abundance']
  },
  {
    id: 'lalitha-sahasranama-pooja',
    title: 'Lalitha Sahasranama Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Recitation of Lalitha Sahasranama for divine grace and blessings',
    price: 2800,
    duration: '2.5-3 hours',
    significance: 'Lalitha Sahasranama Pooja involves reciting the 1000 names of Goddess Lalitha Devi, invoking her divine grace for spiritual upliftment and worldly benefits.',
    benefits: [
      'Provides divine grace',
      'Enhances spiritual growth',
      'Brings mental peace',
      'Removes obstacles',
      'Grants desires and blessings'
    ],
    materials: [
      'Lalitha Sahasranama book',
      'Red flowers and fruits',
      'Kumkum and turmeric',
      'Ghee lamps',
      'Sacred offerings'
    ],
    procedure: [
      'Setup of Devi altar',
      'Invocation of Goddess Lalitha',
      'Recitation of 1000 names',
      'Offering flowers with each name',
      'Concluding prayers and aarti'
    ],
    bestTime: 'Friday or during Navaratri',
    deity: 'Goddess Lalitha Devi',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 2800,
        description: 'Complete Lalitha Sahasranama recitation',
        includes: ['Full recitation', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Lalitha Sahasranama with special rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Flower archana', 'Blessed prasadam']
      }
    ],
    faq: [
      {
        question: 'What is special about this recitation?',
        answer: 'Each of the 1000 names has specific power and collectively they invoke the complete divine grace of the Mother Goddess.'
      },
      {
        question: 'Can this be done for specific wishes?',
        answer: 'Yes, devotees often perform this with specific intentions, and the Goddess is known to fulfill righteous desires.'
      }
    ],
    tags: ['lalitha', 'sahasranama', 'divine-grace', 'goddess']
  },
  {
    id: 'new-business-opening-pooja',
    title: 'New Business/Office Opening Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Blessing ceremony for new business ventures and success',
    price: 2300,
    duration: '1.5-2 hours',
    significance: 'New Business Opening Pooja is performed to seek divine blessings for success, prosperity, and growth in new business ventures or office establishments.',
    benefits: [
      'Ensures business success',
      'Attracts customers and clients',
      'Removes business obstacles',
      'Brings financial growth',
      'Provides divine protection'
    ],
    materials: [
      'Kalash and coconut',
      'Flowers and garlands',
      'Incense and lamps',
      'Fruits and sweets',
      'Sacred thread'
    ],
    procedure: [
      'Purification of business space',
      'Installation of deity pictures',
      'Invocation of business deities',
      'Blessing of office/shop',
      'Distribution of prasadam'
    ],
    bestTime: 'Auspicious muhurat as per astrology',
    deity: 'Lord Ganesha and Goddess Lakshmi',
    location: 'Business premises',
    packages: [
      {
        name: 'Basic Package',
        price: 2300,
        description: 'Standard business opening pooja',
        includes: ['Space blessing', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3100,
        description: 'Elaborate business opening with Vastu rituals',
        includes: ['Extended ceremony', 'Vastu consultation', 'Multiple deity worship', 'Success yantra']
      }
    ],
    faq: [
      {
        question: 'When should this pooja be performed?',
        answer: 'On the day of opening or within the first week of starting the business for maximum benefits.'
      },
      {
        question: 'Can this be done for existing businesses?',
        answer: 'Yes, it can be performed for existing businesses seeking growth or facing challenges.'
      }
    ],
    tags: ['business-opening', 'success', 'prosperity', 'new-venture']
  },
  {
    id: 'new-vehicle-pooja',
    title: 'New Vehicle Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Blessing ceremony for new vehicles and safe travels',
    price: 2000,
    duration: '1-1.5 hours',
    significance: 'New Vehicle Pooja is performed to seek divine blessings for safe travels, protection from accidents, and smooth functioning of the vehicle.',
    benefits: [
      'Ensures safe travels',
      'Protects from accidents',
      'Brings good luck on journeys',
      'Enhances vehicle longevity',
      'Provides divine protection'
    ],
    materials: [
      'Coconut and flowers',
      'Turmeric and kumkum',
      'Incense and camphor',
      'Fruits and sweets',
      'Sacred thread'
    ],
    procedure: [
      'Cleaning and decoration of vehicle',
      'Installation of deity picture',
      'Breaking coconut ritual',
      'Sprinkling of sacred water',
      'Blessing and protection prayers'
    ],
    bestTime: 'Auspicious day after vehicle purchase',
    deity: 'Lord Ganesha and protective deities',
    location: 'Vehicle location',
    packages: [
      {
        name: 'Basic Package',
        price: 2000,
        description: 'Standard vehicle blessing',
        includes: ['Vehicle pooja', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 2700,
        description: 'Elaborate vehicle pooja with special protections',
        includes: ['Extended ceremony', 'Premium decorations', 'Protection yantra', 'Travel safety blessings']
      }
    ],
    faq: [
      {
        question: 'Should this be done for all types of vehicles?',
        answer: 'Yes, from cars and bikes to trucks and buses, all vehicles can be blessed for safe travels and protection.'
      },
      {
        question: 'How often should this be repeated?',
        answer: 'Once is usually sufficient, but can be repeated annually or after major repairs for continued protection.'
      }
    ],
    tags: ['vehicle-blessing', 'travel-safety', 'protection', 'new-purchase']
  },
  {
    id: 'punyahavachanam',
    title: 'Punyahavachanam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Purification ritual for home and family spiritual cleansing',
    price: 2600,
    duration: '2-2.5 hours',
    significance: 'Punyahavachanam is a powerful purification ritual performed to cleanse the home, family, and environment from negative energies and establish positive vibrations.',
    benefits: [
      'Purifies home and environment',
      'Removes negative energies',
      'Brings peace and harmony',
      'Establishes positive vibrations',
      'Protects family members'
    ],
    materials: [
      'Sacred water and herbs',
      'Turmeric and kumkum',
      'Flowers and fruits',
      'Incense and camphor',
      'Purification materials'
    ],
    procedure: [
      'Preparation of sacred water',
      'Chanting of purification mantras',
      'Sprinkling of holy water',
      'Room-wise purification',
      'Final blessing ceremony'
    ],
    bestTime: 'Before moving to new home or annually',
    deity: 'Various purification deities',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 2600,
        description: 'Standard home purification',
        includes: ['Complete purification', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3300,
        description: 'Elaborate Punyahavachanam with Vastu corrections',
        includes: ['Extended ritual', 'Vastu guidance', 'Premium materials', 'Protection yantra']
      }
    ],
    faq: [
      {
        question: 'When should Punyahavachanam be performed?',
        answer: 'Before entering a new home, after illness, during inauspicious events, or annually for spiritual cleansing.'
      },
      {
        question: 'How does this differ from regular house warming?',
        answer: 'Punyahavachanam specifically focuses on spiritual purification and removing negative energies from the entire space.'
      }
    ],
    tags: ['purification', 'home-blessing', 'negative-energy-removal', 'spiritual-cleansing']
  },
  {
    id: 'rudrabhishekam',
    title: 'Rudrabhishekam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Sacred ablution of Lord Shiva for blessings and fulfillment',
    price: 3100,
    duration: '2.5-3 hours',
    significance: 'Rudrabhishekam is a powerful ritual involving the sacred ablution of Shiva Linga with various sacred substances while chanting Rudram for divine blessings.',
    benefits: [
      'Provides spiritual purification',
      'Removes sins and negative karma',
      'Brings prosperity and success',
      'Enhances mental peace',
      'Fulfills righteous desires'
    ],
    materials: [
      'Milk, honey, and ghee',
      'Sacred water from holy rivers',
      'Bilva leaves',
      'White flowers',
      'Sacred ash (vibhuti)'
    ],
    procedure: [
      'Setup of Shiva altar',
      'Invocation of Lord Shiva',
      'Abhishekam with various substances',
      'Chanting of Rudram',
      'Final prayers and aarti'
    ],
    bestTime: 'Monday, Pradosham, or Shivaratri',
    deity: 'Lord Shiva',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3100,
        description: 'Standard Rudrabhishekam',
        includes: ['Complete abhishekam', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Rudrabhishekam with special offerings',
        includes: ['Extended ritual', 'Premium substances', 'Multiple rounds', 'Blessed prasadam']
      }
    ],
    faq: [
      {
        question: 'What is the significance of different substances used?',
        answer: 'Each substance like milk, honey, ghee has specific benefits - milk for purity, honey for sweetness in life, ghee for prosperity.'
      },
      {
        question: 'Can this be done for specific problems?',
        answer: 'Yes, Rudrabhishekam is effective for health issues, spiritual growth, and removing obstacles in life.'
      }
    ],
    tags: ['rudrabhishekam', 'shiva', 'abhishekam', 'spiritual-purification']
  },
  {
    id: 'samaradhanai-pooja',
    title: 'Samaradhanai Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Traditional Tamil worship ceremony for divine blessings',
    price: 2700,
    duration: '2-2.5 hours',
    significance: 'Samaradhanai is a traditional Tamil worship ceremony performed to seek divine blessings for family welfare, prosperity, and spiritual growth.',
    benefits: [
      'Brings family harmony',
      'Ensures overall welfare',
      'Provides divine protection',
      'Enhances spiritual merit',
      'Removes family obstacles'
    ],
    materials: [
      'Traditional Tamil offerings',
      'Banana leaves',
      'Coconut and fruits',
      'Flowers and garlands',
      'Sacred rice'
    ],
    procedure: [
      'Traditional Tamil setup',
      'Invocation in Tamil mantras',
      'Offering of traditional items',
      'Chanting of Tamil hymns',
      'Blessing ceremony'
    ],
    bestTime: 'Auspicious Tamil calendar days',
    deity: 'Various Tamil deities',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 2700,
        description: 'Traditional Samaradhanai ceremony',
        includes: ['Complete ceremony', 'Traditional materials', 'Tamil priest']
      },
      {
        name: 'Premium Package',
        price: 3400,
        description: 'Elaborate Samaradhanai with extended rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Multiple deities', 'Family blessings']
      }
    ],
    faq: [
      {
        question: 'What makes this ceremony unique to Tamil tradition?',
        answer: 'Samaradhanai follows ancient Tamil customs with specific mantras, offerings, and procedures unique to Tamil culture.'
      },
      {
        question: 'Can non-Tamil families participate?',
        answer: 'Yes, the divine blessings are universal, though the ceremony follows traditional Tamil practices.'
      }
    ],
    tags: ['samaradhanai', 'tamil-tradition', 'family-welfare', 'traditional-ceremony']
  },
  {
    id: 'saraswathi-pooja',
    title: 'Saraswathi Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Worship of Goddess Saraswathi for knowledge and wisdom',
    price: 2200,
    duration: '1.5-2 hours',
    significance: 'Saraswathi Pooja is performed to seek blessings of Goddess Saraswathi for knowledge, wisdom, arts, and success in education and creative pursuits.',
    benefits: [
      'Enhances knowledge and wisdom',
      'Improves academic performance',
      'Develops artistic skills',
      'Brings clarity of thought',
      'Ensures success in education'
    ],
    materials: [
      'Books and musical instruments',
      'White flowers and lotus',
      'Yellow cloth',
      'Fruits and sweets',
      'Sacred thread'
    ],
    procedure: [
      'Setup of learning materials',
      'Invocation of Goddess Saraswathi',
      'Worship of books and instruments',
      'Chanting of Saraswathi mantras',
      'Seeking blessings for knowledge'
    ],
    bestTime: 'Vasant Panchami or before exams',
    deity: 'Goddess Saraswathi',
    location: 'Home or educational institution',
    packages: [
      {
        name: 'Basic Package',
        price: 2200,
        description: 'Standard Saraswathi Pooja',
        includes: ['Complete pooja', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 2900,
        description: 'Elaborate Saraswathi Pooja with special blessings',
        includes: ['Extended pooja', 'Book blessings', 'Learning enhancement rituals', 'Wisdom yantra']
      }
    ],
    faq: [
      {
        question: 'Should students perform this before exams?',
        answer: 'Yes, Saraswathi Pooja is highly beneficial for students before exams or at the beginning of academic year.'
      },
      {
        question: 'Can this help with creative pursuits?',
        answer: 'Absolutely, Goddess Saraswathi blesses all forms of arts, music, writing, and creative endeavors.'
      }
    ],
    tags: ['saraswathi', 'knowledge', 'education', 'wisdom']
  },
  {
    id: 'srimad-bhagavatam-parayanam',
    title: 'Srimad Bhagavatam Parayanam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Recitation of Srimad Bhagavatam for spiritual elevation',
    price: 3300,
    duration: '4-5 hours',
    significance: 'Srimad Bhagavatam Parayanam involves the recitation of this sacred text containing the life and teachings of Lord Krishna for spiritual growth and divine grace.',
    benefits: [
      'Enhances spiritual knowledge',
      'Provides divine grace',
      'Removes sins and negativity',
      'Brings mental peace',
      'Develops devotional spirit'
    ],
    materials: [
      'Srimad Bhagavatam text',
      'Krishna pictures or idol',
      'Tulsi leaves',
      'Yellow flowers',
      'Sacred offerings'
    ],
    procedure: [
      'Setup of sacred space',
      'Invocation of Lord Krishna',
      'Systematic recitation of chapters',
      'Devotional singing',
      'Concluding prayers'
    ],
    bestTime: 'Ekadashi or Krishna festivals',
    deity: 'Lord Krishna',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3300,
        description: 'Complete Bhagavatam recitation',
        includes: ['Full recitation', 'Basic materials', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Elaborate Bhagavatam Parayanam with discussions',
        includes: ['Extended recitation', 'Spiritual discourse', 'Premium materials', 'Devotional programs']
      }
    ],
    faq: [
      {
        question: 'How long does the complete recitation take?',
        answer: 'A focused session takes 4-5 hours, but it can be spread over multiple days based on preference.'
      },
      {
        question: 'What spiritual benefits does this provide?',
        answer: 'Regular listening or recitation of Bhagavatam is said to grant liberation and deep spiritual transformation.'
      }
    ],
    tags: ['bhagavatam', 'scripture-recitation', 'krishna', 'spiritual-growth']
  },
  {
    id: 'sumangali-pooja',
    title: 'Sumangali Pooja',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Worship for married women\'s well-being and marital bliss',
    price: 2500,
    duration: '2-2.5 hours',
    significance: 'Sumangali Pooja is performed by and for married women to seek blessings for their husband\'s long life, marital harmony, and family prosperity.',
    benefits: [
      'Ensures husband\'s longevity',
      'Brings marital harmony',
      'Provides family prosperity',
      'Strengthens marital bond',
      'Protects married status'
    ],
    materials: [
      'Turmeric and kumkum',
      'Mangalsutra and bangles',
      'Red flowers and fruits',
      'Traditional sweets',
      'Sacred thread'
    ],
    procedure: [
      'Gathering of married women',
      'Invocation of married goddesses',
      'Exchange of turmeric and kumkum',
      'Blessing of marital symbols',
      'Prayers for family welfare'
    ],
    bestTime: 'Fridays or during festivals',
    deity: 'Goddess Parvathi and other married deities',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 2500,
        description: 'Traditional Sumangali ceremony',
        includes: ['Complete ceremony', 'Basic materials', 'Priest guidance']
      },
      {
        name: 'Premium Package',
        price: 3200,
        description: 'Elaborate Sumangali Pooja with special rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Multiple goddess worship', 'Marital blessings']
      }
    ],
    faq: [
      {
        question: 'Who can participate in Sumangali Pooja?',
        answer: 'Married women participate as the main devotees, while others can join to seek blessings for marriage.'
      },
      {
        question: 'How often should this be performed?',
        answer: 'Can be performed monthly on Fridays or during special occasions and festivals.'
      }
    ],
    tags: ['sumangali', 'married-women', 'marital-harmony', 'family-prosperity']
  },
  {
    id: 'vasakal-pooja',
    title: 'Vasakal Pooja (Nilai Vasal Pooja)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Traditional doorway blessing ceremony for home protection',
    price: 2400,
    duration: '1.5-2 hours',
    significance: 'Vasakal Pooja is a traditional Tamil ceremony performed at the entrance of homes to invoke divine protection and ensure positive energy enters the house.',
    benefits: [
      'Provides home protection',
      'Ensures positive energy flow',
      'Removes negative influences',
      'Brings prosperity to household',
      'Establishes divine presence'
    ],
    materials: [
      'Kolam (rangoli) materials',
      'Coconut and flowers',
      'Turmeric and kumkum',
      'Mango leaves',
      'Sacred water'
    ],
    procedure: [
      'Cleaning of entrance area',
      'Drawing of protective kolam',
      'Installation of mango leaves',
      'Blessing of doorway',
      'Invocation of protective deities'
    ],
    bestTime: 'New home entry or annually',
    deity: 'Doorway guardian deities',
    location: 'Home entrance',
    packages: [
      {
        name: 'Basic Package',
        price: 2400,
        description: 'Traditional doorway blessing',
        includes: ['Entrance blessing', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 3100,
        description: 'Elaborate Vasakal Pooja with Vastu elements',
        includes: ['Extended ceremony', 'Vastu corrections', 'Premium decorations', 'Protection yantra']
      }
    ],
    faq: [
      {
        question: 'What is the significance of mango leaves?',
        answer: 'Mango leaves are considered sacred and are believed to attract positive energy and divine blessings to the home.'
      },
      {
        question: 'When should this ceremony be performed?',
        answer: 'Ideally when entering a new home, during festivals, or annually for continued protection and prosperity.'
      }
    ],
    tags: ['vasakal', 'doorway-blessing', 'home-protection', 'tamil-tradition']
  },
  {
    id: 'veda-parayanam',
    title: 'Veda Parayanam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pooja',
    description: 'Recitation of Vedic scriptures for spiritual merit and blessings',
    price: 3500,
    duration: '4-6 hours',
    significance: 'Veda Parayanam involves the recitation of sacred Vedic hymns and mantras, considered the highest form of spiritual practice for divine blessings and merit.',
    benefits: [
      'Accumulates highest spiritual merit',
      'Purifies mind and environment',
      'Brings divine blessings',
      'Enhances spiritual knowledge',
      'Provides protection from all evils'
    ],
    materials: [
      'Vedic texts',
      'Sacred fire materials',
      'Flowers and fruits',
      'Ghee and sacred water',
      'Offering materials'
    ],
    procedure: [
      'Setup of sacred space',
      'Lighting of sacred fire',
      'Systematic Vedic recitation',
      'Offering to sacred fire',
      'Concluding benedictions'
    ],
    bestTime: 'Early morning or during eclipses',
    deity: 'All Vedic deities',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 3500,
        description: 'Essential Veda Parayanam',
        includes: ['Selected Vedic recitation', 'Basic materials', 'Expert Vedic priest']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Comprehensive Veda Parayanam with fire ritual',
        includes: ['Extended recitation', 'Sacred fire ceremony', 'Multiple priests', 'Complete merit transfer']
      }
    ],
    faq: [
      {
        question: 'What makes Veda Parayanam special?',
        answer: 'Vedic recitation is considered the most ancient and powerful form of spiritual practice, directly connecting to divine consciousness.'
      },
      {
        question: 'Can anyone sponsor this ceremony?',
        answer: 'Yes, anyone can sponsor Veda Parayanam and receive the spiritual merit, even if they cannot participate directly.'
      }
    ],
    tags: ['veda-parayanam', 'vedic-recitation', 'spiritual-merit', 'divine-blessings']
  },
  // Pariharam Services (14 services)
  {
    id: 'dhanishta-panchakam-shanti',
    title: 'Dhanishta Panchakam Shanti',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Remedial ritual to pacify Dhanishta nakshatra related doshas',
    price: 5500,
    duration: '3-4 hours',
    significance: 'Dhanishta Panchakam Shanti is performed to neutralize the negative effects of Dhanishta nakshatra and remove obstacles in wealth accumulation and prosperity.',
    benefits: [
      'Removes Dhanishta nakshatra doshas',
      'Improves financial prospects',
      'Brings stability in career',
      'Removes delays in success',
      'Enhances wealth accumulation'
    ],
    materials: [
      'Gold ornaments or coins',
      'Yellow flowers',
      'Turmeric and saffron',
      'Coconut and fruits',
      'Sacred herbs for nakshatra'
    ],
    procedure: [
      'Nakshatra position analysis',
      'Setup of wealth-oriented altar',
      'Invocation of Dhanishta deities',
      'Chanting of specific nakshatra mantras',
      'Offering for wealth and prosperity'
    ],
    bestTime: 'During Dhanishta nakshatra or as per astrology',
    deity: 'Dhanishta Nakshatra Deities',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Dhanishta Panchakam Shanti',
        includes: ['Complete ritual', 'Basic materials', 'Astrology consultation', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Comprehensive nakshatra remedy with wealth enhancement',
        includes: ['Extended ritual', 'Premium materials', 'Wealth yantra', 'Ongoing guidance']
      }
    ],
    faq: [
      {
        question: 'How do I know if I have Dhanishta nakshatra dosha?',
        answer: 'This can be determined through birth chart analysis. We provide consultation to identify nakshatra-related issues.'
      },
      {
        question: 'How does this help with wealth?',
        answer: 'Dhanishta nakshatra governs wealth and prosperity. This ritual removes blocks to financial growth.'
      }
    ],
    tags: ['dhanishta', 'nakshatra', 'wealth', 'prosperity']
  },
  {
    id: 'dhrishti-durga-homam',
    title: 'Dhrishti Durga Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Powerful remedy to remove evil eye and negative gaze effects',
    price: 6000,
    duration: '3-4 hours',
    significance: 'Dhrishti Durga Homam is performed to invoke Goddess Durga for protection from evil eye (drishti), jealousy, and negative influences from others.',
    benefits: [
      'Removes evil eye effects completely',
      'Protects from jealousy and envy',
      'Neutralizes negative gazes',
      'Provides divine protection',
      'Restores positive energy'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Lime and green chili',
      'Coconut and camphor',
      'Red cloth and sindoor',
      'Protective herbs'
    ],
    procedure: [
      'Setup of protective altar',
      'Invocation of Goddess Dhrishti Durga',
      'Chanting of protection mantras',
      'Ritual burning of evil eye items',
      'Final protection blessing'
    ],
    bestTime: 'Tuesday or Friday, when experiencing negative effects',
    deity: 'Goddess Dhrishti Durga',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6000,
        description: 'Standard evil eye removal ritual',
        includes: ['Complete homam', 'Basic materials', 'Protection items', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8000,
        description: 'Intensive protection homam with amulets',
        includes: ['Extended ritual', 'Premium materials', 'Protective amulets', 'House blessing']
      }
    ],
    faq: [
      {
        question: 'What are the signs of evil eye effects?',
        answer: 'Sudden health issues, financial losses, relationship problems, or unexplained negative events may indicate evil eye.'
      },
      {
        question: 'How long does protection last?',
        answer: 'The protection is long-lasting, but can be renewed annually or when facing new negative influences.'
      }
    ],
    tags: ['evil-eye', 'protection', 'durga', 'negative-energy']
  },
  {
    id: 'durga-lakshmi-saraswati-homam',
    title: 'Durga Lakshmi Saraswati Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Triple goddess homam for complete life enhancement',
    price: 7000,
    duration: '4-5 hours',
    significance: 'This powerful homam invokes the trinity of goddesses - Durga for protection, Lakshmi for wealth, and Saraswati for knowledge, providing comprehensive life benefits.',
    benefits: [
      'Provides complete divine protection',
      'Brings wealth and prosperity',
      'Enhances knowledge and wisdom',
      'Removes all types of obstacles',
      'Grants comprehensive blessings'
    ],
    materials: [
      'Red, yellow, and white flowers',
      'Gold, silver, and books',
      'Three separate kalashas',
      'Coconut and fruits',
      'Three colored cloths'
    ],
    procedure: [
      'Setup of three goddess altars',
      'Sequential invocation of each goddess',
      'Individual offerings to each deity',
      'Combined prayers and mantras',
      'Unified blessing ceremony'
    ],
    bestTime: 'During Navratri or for major life changes',
    deity: 'Goddess Durga, Lakshmi, and Saraswati',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 7000,
        description: 'Standard triple goddess homam',
        includes: ['Complete ritual', 'Basic materials', 'Three deity worship', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 9500,
        description: 'Elaborate homam with enhanced blessings',
        includes: ['Extended ritual', 'Premium materials', 'Special yantras', 'Comprehensive blessings']
      }
    ],
    faq: [
      {
        question: 'Why worship three goddesses together?',
        answer: 'This combination provides complete life enhancement - protection, prosperity, and wisdom in one powerful ritual.'
      },
      {
        question: 'Is this suitable for students and professionals?',
        answer: 'Yes, this is perfect for those seeking success in both material and intellectual pursuits.'
      }
    ],
    tags: ['durga', 'lakshmi', 'saraswati', 'triple-goddess', 'comprehensive']
  },
  {
    id: 'gnana-saraswati-vidhya-ganapathi-homam',
    title: 'Gnana Saraswati & Vidhya Ganapathi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Combined ritual for ultimate knowledge and wisdom enhancement',
    price: 6500,
    duration: '3-4 hours',
    significance: 'This powerful combination homam invokes Gnana Saraswati for supreme knowledge and Vidhya Ganapathi for removal of learning obstacles.',
    benefits: [
      'Enhances supreme knowledge and wisdom',
      'Removes all learning obstacles',
      'Improves memory and concentration',
      'Brings academic excellence',
      'Develops intellectual abilities'
    ],
    materials: [
      'Books and writing materials',
      'White and yellow flowers',
      'Musical instruments',
      'Modak and sweets',
      'Sacred thread and pearls'
    ],
    procedure: [
      'Setup of knowledge altar',
      'Blessing of books and instruments',
      'Invocation of Gnana Saraswati',
      'Worship of Vidhya Ganapathi',
      'Combined blessing for knowledge'
    ],
    bestTime: 'Vasant Panchami or before important studies',
    deity: 'Gnana Saraswati and Vidhya Ganapathi',
    location: 'Home or educational institution',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard knowledge enhancement homam',
        includes: ['Dual deity ritual', 'Basic materials', 'Book blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8500,
        description: 'Comprehensive knowledge and wisdom homam',
        includes: ['Extended ritual', 'Premium materials', 'Memory enhancement', 'Wisdom yantra']
      }
    ],
    faq: [
      {
        question: 'How is this different from regular Saraswati or Ganesha worship?',
        answer: 'This combines the supreme knowledge aspect of Saraswati with obstacle removal power of Ganesha for maximum educational benefits.'
      },
      {
        question: 'Can working professionals benefit from this?',
        answer: 'Yes, this is excellent for skill development, career advancement, and professional knowledge enhancement.'
      }
    ],
    tags: ['gnana-saraswati', 'vidhya-ganapathi', 'knowledge', 'education']
  },
  {
    id: 'homam-for-good-education',
    title: 'Homam For Good Education',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Specialized ritual to enhance educational prospects and academic success',
    price: 5000,
    duration: '2.5-3 hours',
    significance: 'This homam is specifically designed to remove educational obstacles and enhance learning abilities for students at all levels.',
    benefits: [
      'Improves academic performance',
      'Enhances concentration and memory',
      'Removes study-related obstacles',
      'Brings success in examinations',
      'Develops learning capabilities'
    ],
    materials: [
      'Educational books and materials',
      'White flowers and lotus',
      'Honey and milk',
      'Yellow cloth',
      'Study-related items'
    ],
    procedure: [
      'Blessing of educational materials',
      'Invocation of education deities',
      'Chanting of knowledge mantras',
      'Offering for academic success',
      'Blessing for learning enhancement'
    ],
    bestTime: 'Beginning of academic year or before exams',
    deity: 'Goddess Saraswati and Lord Ganesha',
    location: 'Home or school',
    packages: [
      {
        name: 'Basic Package',
        price: 5000,
        description: 'Standard education enhancement homam',
        includes: ['Education ritual', 'Basic materials', 'Book blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6800,
        description: 'Comprehensive academic success homam',
        includes: ['Extended ritual', 'Memory enhancement', 'Study guidance', 'Success yantra']
      }
    ],
    faq: [
      {
        question: 'At what age can students benefit from this?',
        answer: 'Students of all ages, from primary school to higher education, can benefit from this educational homam.'
      },
      {
        question: 'How often should this be performed?',
        answer: 'Annually at the beginning of academic year or before important examinations for best results.'
      }
    ],
    tags: ['education', 'academic-success', 'students', 'learning']
  },
  {
    id: 'homam-for-good-health',
    title: 'Homam For Good Health',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Healing ritual for maintaining good health and recovering from illness',
    price: 5500,
    duration: '2.5-3 hours',
    significance: 'This healing homam is performed to invoke divine blessings for good health, recovery from illness, and protection from diseases.',
    benefits: [
      'Promotes overall good health',
      'Aids in recovery from illness',
      'Strengthens immune system',
      'Removes health-related obstacles',
      'Provides divine healing energy'
    ],
    materials: [
      'Medicinal herbs and plants',
      'Turmeric and neem leaves',
      'Honey and ghee',
      'White flowers',
      'Sacred healing water'
    ],
    procedure: [
      'Setup of healing altar',
      'Invocation of healing deities',
      'Chanting of health mantras',
      'Offering of medicinal herbs',
      'Blessing for good health'
    ],
    bestTime: 'During illness or for health maintenance',
    deity: 'Lord Dhanvantari and healing deities',
    location: 'Home or hospital',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard health enhancement homam',
        includes: ['Healing ritual', 'Basic herbs', 'Health blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7200,
        description: 'Comprehensive healing homam with medicines',
        includes: ['Extended ritual', 'Premium herbs', 'Blessed medicines', 'Health consultation']
      }
    ],
    faq: [
      {
        question: 'Can this help with chronic health conditions?',
        answer: 'This homam provides divine healing support alongside medical treatment for all health conditions.'
      },
      {
        question: 'Should healthy people also perform this?',
        answer: 'Yes, it can be performed annually as a preventive measure to maintain good health.'
      }
    ],
    tags: ['health', 'healing', 'recovery', 'wellness']
  },
  {
    id: 'homam-for-job-and-career',
    title: 'Homam For Job and Career',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Career enhancement ritual for job success and professional growth',
    price: 5200,
    duration: '2.5-3 hours',
    significance: 'This homam is performed to remove career obstacles, enhance job prospects, and ensure success in professional endeavors.',
    benefits: [
      'Removes career-related obstacles',
      'Enhances job opportunities',
      'Brings success in interviews',
      'Promotes professional growth',
      'Ensures workplace harmony'
    ],
    materials: [
      'Office supplies and documents',
      'Yellow flowers',
      'Turmeric and saffron',
      'Coconut and fruits',
      'Career-related symbols'
    ],
    procedure: [
      'Blessing of professional materials',
      'Invocation of career deities',
      'Chanting of success mantras',
      'Offering for job enhancement',
      'Blessing for professional growth'
    ],
    bestTime: 'When seeking new job or facing career challenges',
    deity: 'Lord Ganesha and Goddess Lakshmi',
    location: 'Home or office',
    packages: [
      {
        name: 'Basic Package',
        price: 5200,
        description: 'Standard career enhancement homam',
        includes: ['Career ritual', 'Basic materials', 'Job blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7000,
        description: 'Comprehensive professional success homam',
        includes: ['Extended ritual', 'Interview preparation', 'Success guidance', 'Career yantra']
      }
    ],
    faq: [
      {
        question: 'Can this help with business success too?',
        answer: 'Yes, this homam is beneficial for both job seekers and business professionals seeking growth.'
      },
      {
        question: 'When is the best time to perform this?',
        answer: 'Before job interviews, career changes, or when facing professional challenges.'
      }
    ],
    tags: ['career', 'job', 'professional-success', 'interview']
  },
  {
    id: 'homam-for-pregnancy',
    title: 'Homam For Pregnancy',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Sacred ritual for conception, safe pregnancy and healthy childbirth',
    price: 6000,
    duration: '3-3.5 hours',
    significance: 'This sacred homam is performed to bless couples with conception, ensure safe pregnancy, and promote healthy childbirth.',
    benefits: [
      'Helps in conception and fertility',
      'Ensures safe and healthy pregnancy',
      'Protects mother and child',
      'Removes obstacles to childbirth',
      'Blesses with healthy offspring'
    ],
    materials: [
      'Coconut and bananas',
      'White flowers and lotus',
      'Milk and honey',
      'Sacred thread',
      'Fertility-enhancing herbs'
    ],
    procedure: [
      'Setup of fertility altar',
      'Invocation of fertility deities',
      'Chanting of conception mantras',
      'Offering for safe pregnancy',
      'Blessing for healthy childbirth'
    ],
    bestTime: 'When planning pregnancy or during pregnancy',
    deity: 'Goddess Parvati and fertility deities',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 6000,
        description: 'Standard pregnancy blessing homam',
        includes: ['Fertility ritual', 'Basic materials', 'Conception blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8000,
        description: 'Comprehensive fertility and pregnancy homam',
        includes: ['Extended ritual', 'Couple blessings', 'Fertility enhancement', 'Protective yantra']
      }
    ],
    faq: [
      {
        question: 'Can this help with fertility issues?',
        answer: 'This homam provides divine blessings for fertility alongside medical treatment for conception difficulties.'
      },
      {
        question: 'Should this be performed during pregnancy?',
        answer: 'Yes, it can be performed for protection during pregnancy and ensuring healthy childbirth.'
      }
    ],
    tags: ['pregnancy', 'fertility', 'conception', 'childbirth']
  },
  {
    id: 'homam-for-wealth',
    title: 'Homam For Wealth',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Prosperity ritual for attracting wealth and financial abundance',
    price: 5800,
    duration: '3-3.5 hours',
    significance: 'This wealth homam is performed to remove financial obstacles and attract prosperity, abundance, and material success.',
    benefits: [
      'Attracts wealth and abundance',
      'Removes financial obstacles',
      'Enhances earning potential',
      'Brings business prosperity',
      'Ensures financial stability'
    ],
    materials: [
      'Gold coins and jewelry',
      'Lotus flowers',
      'Rice and turmeric',
      'Coconut and fruits',
      'Wealth symbols'
    ],
    procedure: [
      'Setup of wealth altar',
      'Invocation of wealth deities',
      'Chanting of prosperity mantras',
      'Offering of gold and valuables',
      'Blessing for financial abundance'
    ],
    bestTime: 'Friday or during financial difficulties',
    deity: 'Goddess Lakshmi and Lord Kubera',
    location: 'Home or business',
    packages: [
      {
        name: 'Basic Package',
        price: 5800,
        description: 'Standard wealth attraction homam',
        includes: ['Wealth ritual', 'Basic materials', 'Prosperity blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Comprehensive financial abundance homam',
        includes: ['Extended ritual', 'Business blessings', 'Wealth enhancement', 'Prosperity yantra']
      }
    ],
    faq: [
      {
        question: 'How quickly can I expect financial improvements?',
        answer: 'Divine blessings work gradually. Combined with right effort, positive changes often manifest within a few months.'
      },
      {
        question: 'Can this help with debt problems?',
        answer: 'Yes, this homam helps remove financial blocks and provides divine support for overcoming debt issues.'
      }
    ],
    tags: ['wealth', 'prosperity', 'financial-abundance', 'money']
  },
  {
    id: 'kalathra-dosha-nivarthi',
    title: 'Kalathra Dosha Nivarthi (Remedy)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Remedial ritual to remove marriage and relationship obstacles',
    price: 6500,
    duration: '3-4 hours',
    significance: 'Kalathra Dosha Nivarthi is performed to remove obstacles in marriage, improve marital harmony, and resolve relationship issues.',
    benefits: [
      'Removes marriage-related obstacles',
      'Improves marital harmony',
      'Resolves relationship conflicts',
      'Enhances compatibility',
      'Brings suitable life partner'
    ],
    materials: [
      'Red and white flowers',
      'Turmeric and kumkum',
      'Coconut and fruits',
      'Mangalsutra symbols',
      'Relationship-enhancing herbs'
    ],
    procedure: [
      'Analysis of relationship issues',
      'Setup of harmony altar',
      'Invocation of relationship deities',
      'Chanting of marriage mantras',
      'Blessing for marital bliss'
    ],
    bestTime: 'Before marriage or during relationship difficulties',
    deity: 'Goddess Parvati and Lord Shiva',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard relationship remedy homam',
        includes: ['Dosha removal ritual', 'Basic materials', 'Relationship consultation', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8500,
        description: 'Comprehensive marriage harmony homam',
        includes: ['Extended ritual', 'Compatibility analysis', 'Harmony enhancement', 'Marriage yantra']
      }
    ],
    faq: [
      {
        question: 'What is Kalathra Dosha?',
        answer: 'It refers to astrological combinations that create obstacles in marriage and relationships, which this ritual helps resolve.'
      },
      {
        question: 'Can unmarried people perform this?',
        answer: 'Yes, this is particularly beneficial for unmarried people facing delays or obstacles in finding suitable partners.'
      }
    ],
    tags: ['kalathra-dosha', 'marriage', 'relationships', 'compatibility']
  },
  {
    id: 'santhana-gopala-homam',
    title: 'Santhana Gopala Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Sacred ritual for blessing couples with children and progeny',
    price: 6200,
    duration: '3-3.5 hours',
    significance: 'Santhana Gopala Homam is performed to invoke Lord Krishna in his child form to bless couples with children and ensure family lineage continuation.',
    benefits: [
      'Blesses couples with children',
      'Removes obstacles to conception',
      'Ensures healthy offspring',
      'Protects children from harm',
      'Continues family lineage'
    ],
    materials: [
      'Krishna idol or picture',
      'Butter and milk products',
      'Yellow flowers',
      'Coconut and bananas',
      'Child-related items'
    ],
    procedure: [
      'Setup of child-blessing altar',
      'Invocation of Santhana Gopala',
      'Chanting of progeny mantras',
      'Offering of child-related items',
      'Blessing for healthy children'
    ],
    bestTime: 'During conception planning or pregnancy',
    deity: 'Lord Santhana Gopala (Child Krishna)',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 6200,
        description: 'Standard child-blessing homam',
        includes: ['Progeny ritual', 'Basic materials', 'Child blessings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8200,
        description: 'Comprehensive fertility and child protection homam',
        includes: ['Extended ritual', 'Couple blessings', 'Child protection', 'Family yantra']
      }
    ],
    faq: [
      {
        question: 'Is this different from general fertility rituals?',
        answer: 'Yes, this specifically invokes Lord Krishna for child blessings and is particularly powerful for progeny.'
      },
      {
        question: 'Can this be performed for child protection?',
        answer: 'Yes, this homam also provides protection and blessings for existing children in the family.'
      }
    ],
    tags: ['santhana-gopala', 'children', 'progeny', 'fertility']
  },
  {
    id: 'shatru-samhara-homam',
    title: 'Shatru Samhara Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Powerful ritual to overcome enemies and negative forces',
    price: 7500,
    duration: '4-5 hours',
    significance: 'Shatru Samhara Homam is one of the most powerful protective rituals performed to defeat enemies, overcome opposition, and neutralize negative forces.',
    benefits: [
      'Defeats enemies and opponents',
      'Overcomes legal disputes',
      'Neutralizes negative forces',
      'Provides victory in conflicts',
      'Establishes dominance over adversaries'
    ],
    materials: [
      'Red flowers and hibiscus',
      'Lemon and chili',
      'Iron objects',
      'Protective herbs',
      'Victory symbols'
    ],
    procedure: [
      'Setup of victory altar',
      'Invocation of warrior deities',
      'Chanting of powerful mantras',
      'Symbolic destruction of enemies',
      'Final victory blessing'
    ],
    bestTime: 'During conflicts or legal battles',
    deity: 'Goddess Durga and protective deities',
    location: 'Temple or specially prepared space',
    packages: [
      {
        name: 'Basic Package',
        price: 7500,
        description: 'Standard enemy destruction homam',
        includes: ['Victory ritual', 'Basic materials', 'Protection blessings', 'Expert priest']
      },
      {
        name: 'Premium Package',
        price: 10000,
        description: 'Intensive enemy defeat homam with maximum protection',
        includes: ['Extended ritual', 'Powerful mantras', 'Legal victory', 'Ultimate protection']
      }
    ],
    faq: [
      {
        question: 'Is this ritual ethical for defeating enemies?',
        answer: 'This ritual is for protection from harmful enemies and negative forces, not for causing unjust harm to others.'
      },
      {
        question: 'Can this help with legal cases?',
        answer: 'Yes, this homam is particularly effective for victory in legal disputes and court cases.'
      }
    ],
    tags: ['enemy-defeat', 'victory', 'legal-disputes', 'protection']
  },
  {
    id: 'swayamvara-parvathi-homam',
    title: 'Swayamvara Parvathi Homam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'pariharam',
    description: 'Sacred ritual for finding suitable life partner and early marriage',
    price: 6800,
    duration: '3-4 hours',
    significance: 'Swayamvara Parvathi Homam is performed to invoke Goddess Parvati to bless unmarried individuals with suitable life partners and early marriage.',
    benefits: [
      'Helps find suitable life partner',
      'Removes delays in marriage',
      'Attracts compatible spouse',
      'Ensures happy married life',
      'Removes marriage obstacles'
    ],
    materials: [
      'Red and white flowers',
      'Turmeric and kumkum',
      'Mangalsutra and bangles',
      'Coconut and fruits',
      'Marriage symbols'
    ],
    procedure: [
      'Setup of marriage altar',
      'Invocation of Goddess Parvati',
      'Chanting of marriage mantras',
      'Offering of marriage symbols',
      'Blessing for suitable partner'
    ],
    bestTime: 'Friday or during marriage-seeking period',
    deity: 'Goddess Swayamvara Parvati',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6800,
        description: 'Standard marriage blessing homam',
        includes: ['Marriage ritual', 'Basic materials', 'Partner attraction', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 8800,
        description: 'Comprehensive marriage enhancement homam',
        includes: ['Extended ritual', 'Compatibility blessing', 'Marriage timing', 'Wedding yantra']
      }
    ],
    faq: [
      {
        question: 'Can both men and women perform this homam?',
        answer: 'Yes, both unmarried men and women can perform this ritual to find suitable life partners and ensure early marriage.'
      },
      {
        question: 'How soon can I expect results?',
        answer: 'With divine grace and proper efforts, many devotees find suitable proposals within 6-12 months of performing this homam.'
      }
    ],
    tags: ['swayamvara-parvathi', 'marriage', 'life-partner', 'wedding']
  },

 // Japam Services (10 services)
  {
    id: 'budha-graha-japam',
    title: 'Budha Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Mercury planet to enhance intelligence and communication',
    price: 4000,
    duration: '2-3 hours',
    significance: 'Budha Graha Japam is performed to invoke the blessings of Mercury planet for enhanced intelligence, communication skills, and business success.',
    benefits: [
      'Enhances intelligence and mental clarity',
      'Improves communication and speech',
      'Brings success in business ventures',
      'Develops analytical abilities',
      'Removes Mercury-related doshas'
    ],
    materials: [
      'Green flowers and leaves',
      'Emerald or green stone',
      'Sacred thread',
      'Tulsi leaves',
      'Mercury yantra'
    ],
    procedure: [
      'Setup of Mercury altar',
      'Invocation of Lord Budha',
      'Chanting of Budha mantras (108/1008 times)',
      'Offering of green items',
      'Final blessing for intelligence'
    ],
    bestTime: 'Wednesday or during Mercury hora',
    deity: 'Lord Budha (Mercury)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4000,
        description: 'Standard Budha Japam (108 chants)',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Mercury blessings']
      },
      {
        name: 'Premium Package',
        price: 5500,
        description: 'Extended Budha Japam (1008 chants)',
        includes: ['1008 mantra chanting', 'Premium materials', 'Mercury yantra', 'Business consultation']
      }
    ],
    faq: [
      {
        question: 'Who should perform Budha Graha Japam?',
        answer: 'Students, professionals in communication, business people, and those with Mercury-related astrological issues.'
      },
      {
        question: 'How does this help in business?',
        answer: 'Mercury governs trade and commerce. This japam enhances business acumen and communication with clients.'
      }
    ],
    tags: ['budha', 'mercury', 'intelligence', 'communication', 'business']
  },
  {
    id: 'chandra-graha-japam',
    title: 'Chandra Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Moon planet to achieve mental peace and emotional stability',
    price: 3800,
    duration: '2-3 hours',
    significance: 'Chandra Graha Japam is performed to invoke the blessings of Moon planet for mental peace, emotional balance, and maternal happiness.',
    benefits: [
      'Brings mental peace and calmness',
      'Provides emotional stability',
      'Enhances intuition and creativity',
      'Improves relationships with mother',
      'Removes Moon-related doshas'
    ],
    materials: [
      'White flowers and rice',
      'Pearl or moonstone',
      'Silver items',
      'Milk and water',
      'Chandra yantra'
    ],
    procedure: [
      'Setup of Moon altar with white items',
      'Invocation of Lord Chandra',
      'Chanting of Chandra mantras',
      'Offering of milk and white flowers',
      'Blessing for emotional peace'
    ],
    bestTime: 'Monday evening or full moon day',
    deity: 'Lord Chandra (Moon)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3800,
        description: 'Standard Chandra Japam for mental peace',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Moon blessings']
      },
      {
        name: 'Premium Package',
        price: 5200,
        description: 'Extended Chandra Japam with meditation',
        includes: ['1008 mantra chanting', 'Premium materials', 'Meditation guidance', 'Emotional healing']
      }
    ],
    faq: [
      {
        question: 'Can this help with anxiety and stress?',
        answer: 'Yes, Chandra Japam is particularly effective for reducing anxiety, stress, and emotional turbulence.'
      },
      {
        question: 'Is this beneficial for women?',
        answer: 'Yes, Moon energy is especially beneficial for women, helping with emotional balance and maternal aspects.'
      }
    ],
    tags: ['chandra', 'moon', 'mental-peace', 'emotional-stability', 'meditation']
  },
  {
    id: 'guru-graha-japam',
    title: 'Guru Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Jupiter planet to gain wisdom, knowledge, and prosperity',
    price: 5000,
    duration: '3-4 hours',
    significance: 'Guru Graha Japam is performed to invoke the blessings of Jupiter planet for wisdom, spiritual knowledge, and material prosperity.',
    benefits: [
      'Enhances wisdom and spiritual knowledge',
      'Brings prosperity and good fortune',
      'Improves teaching and learning abilities',
      'Provides guidance in life decisions',
      'Removes Jupiter-related doshas'
    ],
    materials: [
      'Yellow flowers and turmeric',
      'Yellow sapphire or topaz',
      'Gold items',
      'Sacred books',
      'Guru yantra'
    ],
    procedure: [
      'Setup of Jupiter altar with yellow items',
      'Invocation of Lord Brihaspati',
      'Chanting of Guru mantras',
      'Offering of yellow flowers and sweets',
      'Blessing for wisdom and prosperity'
    ],
    bestTime: 'Thursday or during Jupiter hora',
    deity: 'Lord Brihaspati (Jupiter)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5000,
        description: 'Standard Guru Japam for wisdom',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Wisdom blessings']
      },
      {
        name: 'Premium Package',
        price: 6800,
        description: 'Extended Guru Japam with spiritual guidance',
        includes: ['1008 mantra chanting', 'Premium materials', 'Spiritual consultation', 'Prosperity yantra']
      }
    ],
    faq: [
      {
        question: 'Can this help with career guidance?',
        answer: 'Yes, Jupiter governs wisdom and guidance. This japam helps in making right career decisions.'
      },
      {
        question: 'Is this good for teachers and students?',
        answer: 'Absolutely, Jupiter is the guru planet, making this ideal for educators and learners.'
      }
    ],
    tags: ['guru', 'jupiter', 'wisdom', 'knowledge', 'prosperity', 'guidance']
  },
  {
    id: 'ketu-graha-japam',
    title: 'Ketu Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Ketu planet to achieve spiritual growth and moksha',
    price: 4500,
    duration: '2.5-3 hours',
    significance: 'Ketu Graha Japam is performed to invoke the blessings of Ketu planet for spiritual elevation, detachment, and liberation from material bonds.',
    benefits: [
      'Enhances spiritual growth and awareness',
      'Provides detachment from material desires',
      'Removes confusion and illusions',
      'Grants mystical knowledge',
      'Removes Ketu-related doshas'
    ],
    materials: [
      'Sesame seeds and coconut',
      'Cat\'s eye gemstone',
      'Brown flowers',
      'Sacred ash',
      'Ketu yantra'
    ],
    procedure: [
      'Setup of Ketu altar with earth elements',
      'Invocation of Lord Ketu',
      'Chanting of Ketu mantras',
      'Offering of sesame and coconut',
      'Blessing for spiritual liberation'
    ],
    bestTime: 'Saturday or during eclipse periods',
    deity: 'Lord Ketu (South Node)',
    location: 'Temple or meditation space',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Standard Ketu Japam for spiritual growth',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Spiritual blessings']
      },
      {
        name: 'Premium Package',
        price: 6000,
        description: 'Extended Ketu Japam with meditation practices',
        includes: ['1008 mantra chanting', 'Premium materials', 'Meditation guidance', 'Moksha blessings']
      }
    ],
    faq: [
      {
        question: 'How does Ketu help in spiritual growth?',
        answer: 'Ketu represents detachment and spiritual wisdom, helping in transcending material limitations.'
      },
      {
        question: 'Can this help with confusion in life?',
        answer: 'Yes, Ketu Japam helps clear mental fog and provides clarity about life\'s true purpose.'
      }
    ],
    tags: ['ketu', 'spiritual-growth', 'moksha', 'detachment', 'meditation']
  },
  {
    id: 'mangal-graha-japam',
    title: 'Mangal Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Mars planet to gain energy, courage, and property',
    price: 4200,
    duration: '2-3 hours',
    significance: 'Mangal Graha Japam is performed to invoke the blessings of Mars planet for physical strength, courage, and success in property matters.',
    benefits: [
      'Increases physical energy and stamina',
      'Enhances courage and confidence',
      'Brings success in property dealings',
      'Improves leadership qualities',
      'Removes Mars-related doshas'
    ],
    materials: [
      'Red flowers and coral',
      'Red cloth and sindoor',
      'Copper items',
      'Red lentils',
      'Mangal yantra'
    ],
    procedure: [
      'Setup of Mars altar with red items',
      'Invocation of Lord Mangal',
      'Chanting of Mangal mantras',
      'Offering of red flowers and sweets',
      'Blessing for energy and courage'
    ],
    bestTime: 'Tuesday or during Mars hora',
    deity: 'Lord Mangal (Mars)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4200,
        description: 'Standard Mangal Japam for energy',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Energy blessings']
      },
      {
        name: 'Premium Package',
        price: 5800,
        description: 'Extended Mangal Japam with strength enhancement',
        includes: ['1008 mantra chanting', 'Premium materials', 'Physical strength', 'Property blessings']
      }
    ],
    faq: [
      {
        question: 'Can this help with Manglik dosha?',
        answer: 'Yes, Mangal Japam is particularly effective for reducing the negative effects of Manglik dosha.'
      },
      {
        question: 'Is this good for athletes and sports people?',
        answer: 'Absolutely, Mars energy enhances physical strength, stamina, and competitive spirit.'
      }
    ],
    tags: ['mangal', 'mars', 'energy', 'courage', 'property', 'strength']
  },
  {
    id: 'mrityunjaya-japam',
    title: 'Mrityunjaya Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting of Mrityunjaya mantra for health, longevity, and protection',
    price: 5500,
    duration: '3-4 hours',
    significance: 'Mrityunjaya Japam involves chanting the powerful Mrityunjaya mantra to invoke Lord Shiva for overcoming diseases, dangers, and death-like situations.',
    benefits: [
      'Provides protection from diseases',
      'Enhances longevity and health',
      'Removes fear of death',
      'Heals serious illnesses',
      'Grants divine protection'
    ],
    materials: [
      'Bilva leaves',
      'White flowers',
      'Sacred ash (vibhuti)',
      'Rudraksha beads',
      'Mrityunjaya yantra'
    ],
    procedure: [
      'Setup of Shiva altar with bilva leaves',
      'Invocation of Lord Mrityunjaya',
      'Chanting of Mrityunjaya mantra',
      'Offering of bilva and flowers',
      'Blessing for health and longevity'
    ],
    bestTime: 'Monday or during health crises',
    deity: 'Lord Shiva (Mrityunjaya)',
    location: 'Home, temple, or hospital',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Mrityunjaya Japam (108 chants)',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Health blessings']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Extended Mrityunjaya Japam (1008 chants)',
        includes: ['1008 mantra chanting', 'Premium materials', 'Healing yantra', 'Longevity blessings']
      }
    ],
    faq: [
      {
        question: 'Can this help with serious health conditions?',
        answer: 'Mrityunjaya Japam is specifically for health protection and healing, complementing medical treatment.'
      },
      {
        question: 'How many times should the mantra be chanted?',
        answer: 'Typically 108, 1008, or 10,000 times depending on the severity of the situation and package chosen.'
      }
    ],
    tags: ['mrityunjaya', 'shiva', 'health', 'longevity', 'healing', 'protection']
  },
  {
    id: 'rahu-graha-japam',
    title: 'Rahu Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Rahu planet to achieve success, fame, and foreign opportunities',
    price: 4800,
    duration: '2.5-3 hours',
    significance: 'Rahu Graha Japam is performed to invoke the blessings of Rahu planet for success in unconventional fields, fame, and opportunities abroad.',
    benefits: [
      'Brings sudden success and fame',
      'Provides foreign opportunities',
      'Enhances unconventional thinking',
      'Removes obstacles in unique ventures',
      'Balances Rahu-related doshas'
    ],
    materials: [
      'Blue flowers and cloth',
      'Hessonite garnet',
      'Sesame oil and seeds',
      'Coconut and fruits',
      'Rahu yantra'
    ],
    procedure: [
      'Setup of Rahu altar with blue items',
      'Invocation of Lord Rahu',
      'Chanting of Rahu mantras',
      'Offering of blue flowers and sesame',
      'Blessing for success and opportunities'
    ],
    bestTime: 'Saturday evening or during Rahu kaal',
    deity: 'Lord Rahu (North Node)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4800,
        description: 'Standard Rahu Japam for success',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Success blessings']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Extended Rahu Japam with fame enhancement',
        includes: ['1008 mantra chanting', 'Premium materials', 'Fame attraction', 'Foreign opportunity']
      }
    ],
    faq: [
      {
        question: 'How does Rahu help with foreign opportunities?',
        answer: 'Rahu represents foreign lands and unconventional paths, helping in overseas opportunities and unique ventures.'
      },
      {
        question: 'Can this help with sudden wealth?',
        answer: 'Yes, Rahu can bring sudden gains through unconventional means, though results may be unpredictable.'
      }
    ],
    tags: ['rahu', 'success', 'fame', 'foreign-opportunities', 'unconventional']
  },
  {
    id: 'shani-graha-japam',
    title: 'Shani Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Saturn planet for discipline, justice, and karma relief',
    price: 4600,
    duration: '3-4 hours',
    significance: 'Shani Graha Japam is performed to invoke the blessings of Saturn planet for patience, discipline, and relief from karmic burdens.',
    benefits: [
      'Provides relief from Saturn\'s malefic effects',
      'Enhances patience and discipline',
      'Brings justice in legal matters',
      'Removes karmic obstacles',
      'Grants long-term stability'
    ],
    materials: [
      'Black sesame seeds',
      'Blue sapphire or substitute',
      'Iron items',
      'Mustard oil',
      'Shani yantra'
    ],
    procedure: [
      'Setup of Saturn altar with black items',
      'Invocation of Lord Shani',
      'Chanting of Shani mantras',
      'Offering of sesame and oil',
      'Blessing for karma relief'
    ],
    bestTime: 'Saturday or during Shani transit',
    deity: 'Lord Shani (Saturn)',
    location: 'Temple or meditation space',
    packages: [
      {
        name: 'Basic Package',
        price: 4600,
        description: 'Standard Shani Japam for karma relief',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Saturn blessings']
      },
      {
        name: 'Premium Package',
        price: 6200,
        description: 'Extended Shani Japam with discipline enhancement',
        includes: ['1008 mantra chanting', 'Premium materials', 'Karma guidance', 'Justice support']
      }
    ],
    faq: [
      {
        question: 'Can this help during Shani Mahadasha?',
        answer: 'Yes, Shani Japam is particularly beneficial during Saturn periods to reduce hardships and delays.'
      },
      {
        question: 'How does this help with discipline?',
        answer: 'Saturn teaches discipline through challenges. This japam helps embrace discipline positively.'
      }
    ],
    tags: ['shani', 'saturn', 'discipline', 'justice', 'karma', 'patience']
  },
  {
    id: 'shukra-graha-japam',
    title: 'Shukra Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Venus planet to attract love, beauty, luxury, and arts',
    price: 4300,
    duration: '2-3 hours',
    significance: 'Shukra Graha Japam is performed to invoke the blessings of Venus planet for love, beauty, artistic talents, and material comforts.',
    benefits: [
      'Attracts love and romantic relationships',
      'Enhances beauty and charm',
      'Brings luxury and material comforts',
      'Develops artistic abilities',
      'Removes Venus-related doshas'
    ],
    materials: [
      'White flowers and lotus',
      'Diamond or white sapphire',
      'Silver items',
      'Rice and milk',
      'Shukra yantra'
    ],
    procedure: [
      'Setup of Venus altar with white items',
      'Invocation of Lord Shukra',
      'Chanting of Shukra mantras',
      'Offering of white flowers and sweets',
      'Blessing for love and beauty'
    ],
    bestTime: 'Friday or during Venus hora',
    deity: 'Lord Shukra (Venus)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4300,
        description: 'Standard Shukra Japam for love and beauty',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Venus blessings']
      },
      {
        name: 'Premium Package',
        price: 5900,
        description: 'Extended Shukra Japam with artistic enhancement',
        includes: ['1008 mantra chanting', 'Premium materials', 'Beauty enhancement', 'Artistic blessings']
      }
    ],
    faq: [
      {
        question: 'Can this help in finding a life partner?',
        answer: 'Yes, Venus governs love and relationships. This japam is excellent for attracting suitable partners.'
      },
      {
        question: 'Is this beneficial for artists and creatives?',
        answer: 'Absolutely, Venus is the planet of arts, making this ideal for enhancing creative abilities.'
      }
    ],
    tags: ['shukra', 'venus', 'love', 'beauty', 'luxury', 'arts', 'relationships']
  },
  {
    id: 'surya-graha-japam',
    title: 'Surya Graha Japam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'japam',
    description: 'Sacred chanting for Sun planet to gain leadership, fame, health, and success',
    price: 5200,
    duration: '2.5-3 hours',
    significance: 'Surya Graha Japam is performed to invoke the blessings of Sun planet for leadership qualities, fame, vitality, and overall success in life.',
    benefits: [
      'Enhances leadership and authority',
      'Brings fame and recognition',
      'Improves health and vitality',
      'Provides success in endeavors',
      'Removes Sun-related doshas'
    ],
    materials: [
      'Red flowers and lotus',
      'Ruby or red stone',
      'Copper items',
      'Wheat and jaggery',
      'Surya yantra'
    ],
    procedure: [
      'Setup of Sun altar facing east',
      'Invocation of Lord Surya',
      'Chanting of Surya mantras',
      'Offering of red flowers and wheat',
      'Blessing for leadership and success'
    ],
    bestTime: 'Sunday morning or sunrise',
    deity: 'Lord Surya (Sun)',
    location: 'Open space or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 5200,
        description: 'Standard Surya Japam for leadership',
        includes: ['108 mantra chanting', 'Basic materials', 'Priest services', 'Sun blessings']
      },
      {
        name: 'Premium Package',
        price: 7000,
        description: 'Extended Surya Japam with authority enhancement',
        includes: ['1008 mantra chanting', 'Premium materials', 'Leadership guidance', 'Success yantra']
      }
    ],
    faq: [
      {
        question: 'Can this help with government jobs?',
        answer: 'Yes, Sun represents authority and government. This japam is excellent for government service success.'
      },
      {
        question: 'How does this improve health?',
        answer: 'Sun represents vitality and life force. This japam enhances overall health and energy levels.'
      }
    ],
    tags: ['surya', 'sun', 'leadership', 'fame', 'health', 'success', 'authority']
  },

// THEN: Add Religious Tours section after Japam:

  // Religious Tours (5 services)
  {
    id: 'madurai-rameshwaram-tour',
    title: 'Madurai Rameshwaram Tour',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'religious-tours',
    description: 'Sacred pilgrimage tour to Madurai Meenakshi Temple and Rameshwaram Jyotirlinga',
    price: 18000,
    duration: '2-3 days',
    significance: 'This sacred tour covers two of Tamil Nadu\'s most important temples - Madurai Meenakshi Temple and Rameshwaram, one of the 12 Jyotirlingas.',
    benefits: [
      'Darshan of Goddess Meenakshi and Lord Sundareswarar',
      'Jyotirlinga darshan at Rameshwaram',
      'Spiritual purification and blessings',
      'Cultural and heritage experience',
      'Complete pilgrimage merit'
    ],
    materials: [
      'Temple entry tickets',
      'Special darshan arrangements',
      'Prasadam and offerings',
      'Religious guidebook',
      'Sacred souvenirs'
    ],
    procedure: [
      'Departure from pickup point',
      'Visit to Madurai Meenakshi Temple',
      'Journey to Rameshwaram',
      'Ramanathaswamy Temple darshan',
      'Return journey with spiritual discourse'
    ],
    bestTime: 'October to March (pleasant weather)',
    deity: 'Goddess Meenakshi, Lord Ramanathaswamy',
    location: 'Madurai and Rameshwaram, Tamil Nadu',
    packages: [
      {
        name: 'Standard Package',
        price: 18000,
        description: '2-3 days Madurai Rameshwaram tour',
        includes: ['Transportation', 'Accommodation', 'Temple darshan', 'Meals', 'Guide services']
      },
      {
        name: 'Premium Package',
        price: 25000,
        description: 'Luxury tour with special darshan and comfort',
        includes: ['AC transport', 'Premium hotels', 'VIP darshan', 'All meals', 'Expert guide', 'Shopping']
      }
    ],
    faq: [
      {
        question: 'What is the best time to visit these temples?',
        answer: 'October to March offers pleasant weather. Avoid summer months for comfortable travel.'
      },
      {
        question: 'Are special darshan arrangements available?',
        answer: 'Yes, we arrange special darshan tickets to avoid long queues and ensure peaceful worship.'
      }
    ],
    tags: ['madurai', 'rameshwaram', 'jyotirlinga', 'meenakshi', 'pilgrimage']
  },
  {
    id: 'pancha-bhoota-temples-tour',
    title: 'Pancha Bhoota Temples Tour',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'religious-tours',
    description: 'Sacred tour of five elemental Shiva temples representing earth, water, fire, air, and space',
    price: 35000,
    duration: '4-5 days',
    significance: 'This unique tour covers the five Pancha Bhoota Sthalas - temples dedicated to Lord Shiva representing the five elements of nature.',
    benefits: [
      'Darshan of all five elemental Shiva forms',
      'Balance of five elements in body',
      'Spiritual purification through elements',
      'Understanding of cosmic principles',
      'Complete elemental blessings'
    ],
    materials: [
      'Temple offerings for all five temples',
      'Elemental-specific prasadam',
      'Sacred vibhuti and rudraksha',
      'Pancha Bhoota guidebook',
      'Blessed souvenirs from each temple'
    ],
    procedure: [
      'Visit to Ekambareswarar (Earth - Kanchipuram)',
      'Jambukeswara Temple (Water - Trichy)',
      'Arunachaleswara (Fire - Tiruvannamalai)',
      'Kalahasti Temple (Air - Andhra Pradesh)',
      'Nataraja Temple (Space - Chidambaram)'
    ],
    bestTime: 'November to February for comfortable travel',
    deity: 'Lord Shiva in five elemental forms',
    location: 'Tamil Nadu and Andhra Pradesh',
    packages: [
      {
        name: 'Standard Package',
        price: 35000,
        description: '4-5 days Pancha Bhoota temples tour',
        includes: ['Transportation', 'Accommodation', 'All temple visits', 'Meals', 'Spiritual guide']
      },
      {
        name: 'Premium Package',
        price: 48000,
        description: 'Luxury elemental temples tour with special rituals',
        includes: ['Luxury transport', 'Premium hotels', 'Special pujas', 'All meals', 'Expert guide', 'Meditation sessions']
      }
    ],
    faq: [
      {
        question: 'What is special about these five temples?',
        answer: 'Each temple represents one of the five elements and visiting all five balances elemental energies in the devotee.'
      },
      {
        question: 'Can we perform special pujas at each temple?',
        answer: 'Yes, we can arrange elemental-specific pujas at each temple for enhanced spiritual benefits and elemental balance.'
      }
    ],
    tags: ['pancha-bhoota', 'five-elements', 'shiva-temples', 'elemental-balance', 'spiritual-tour']
  },
  {
    id: 'navagraha-temples-tour',
    title: 'Navagraha Temples Tour',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'religious-tours',
    description: 'Planetary temples tour to worship nine celestial bodies for astrological benefits',
    price: 28000,
    duration: '3-4 days',
    significance: 'This astrological tour covers all nine Navagraha temples in Tamil Nadu, each dedicated to specific planetary deities for removing doshas.',
    benefits: [
      'Removes all planetary doshas',
      'Balances planetary influences',
      'Improves astrological conditions',
      'Enhances fortune and luck',
      'Provides cosmic harmony'
    ],
    materials: [
      'Planet-specific offerings for each temple',
      'Colored flowers for each graha',
      'Gemstone offerings',
      'Navagraha yantra',
      'Astrological remedial items'
    ],
    procedure: [
      'Surya Temple (Sun) - Suryanar Koil',
      'Chandra Temple (Moon) - Thingalur',
      'Angaraka Temple (Mars) - Vaitheeswaran Koil',
      'Budha Temple (Mercury) - Thiruvenkadu',
      'Guru Temple (Jupiter) - Alangudi',
      'Shukra Temple (Venus) - Kanjanur',
      'Shani Temple (Saturn) - Thirunallar',
      'Rahu Temple - Thirunageswaram',
      'Ketu Temple - Keezhperumpallam'
    ],
    bestTime: 'Any time, but avoid inauspicious planetary periods',
    deity: 'Nine Planetary Deities (Navagrahas)',
    location: 'Various locations in Tamil Nadu',
    packages: [
      {
        name: 'Standard Package',
        price: 28000,
        description: '3-4 days Navagraha temples tour',
        includes: ['Transportation', 'Accommodation', 'All 9 temple visits', 'Meals', 'Astrology consultation']
      },
      {
        name: 'Premium Package',
        price: 38000,
        description: 'Complete astrological tour with personalized remedies',
        includes: ['Luxury transport', 'Premium stay', 'Personal astrologer', 'Customized pujas', 'Gemstone guidance']
      }
    ],
    faq: [
      {
        question: 'How does this tour help with astrological problems?',
        answer: 'Visiting all nine planetary temples and performing specific rituals helps balance planetary influences and reduce doshas.'
      },
      {
        question: 'Should I bring my horoscope for the tour?',
        answer: 'Yes, bringing your horoscope helps our astrologer provide personalized guidance and specific remedies at each temple.'
      }
    ],
    tags: ['navagraha', 'planetary-temples', 'astrology', 'doshas', 'cosmic-harmony']
  },
  {
    id: 'kashi-tours',
    title: 'Kashi Tours',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'religious-tours',
    description: 'Sacred pilgrimage to Varanasi, the eternal city of Lord Shiva',
    price: 22000,
    duration: '2-3 days',
    significance: 'Kashi (Varanasi) is considered the most sacred city in Hinduism, where a visit grants liberation and spiritual purification.',
    benefits: [
      'Darshan of Kashi Vishwanath Jyotirlinga',
      'Spiritual purification in holy Ganges',
      'Liberation from cycle of birth and death',
      'Blessing of ancient spiritual energy',
      'Experience of eternal divine presence'
    ],
    materials: [
      'Ganga aarti supplies',
      'Temple offerings and flowers',
      'Sacred Ganga water bottles',
      'Rudraksha and spiritual items',
      'Kashi prasadam and souvenirs'
    ],
    procedure: [
      'Arrival and hotel check-in',
      'Kashi Vishwanath Temple darshan',
      'Ganga aarti at Dashashwamedh Ghat',
      'Boat ride during sunrise',
      'Visit to Sankat Mochan and other temples',
      'Holy dip in River Ganges'
    ],
    bestTime: 'October to March for pleasant weather',
    deity: 'Lord Kashi Vishwanath (Shiva)',
    location: 'Varanasi, Uttar Pradesh',
    packages: [
      {
        name: 'Standard Package',
        price: 22000,
        description: '2-3 days Kashi spiritual tour',
        includes: ['Round-trip transport', 'Hotel accommodation', 'Temple visits', 'Ganga aarti', 'Meals', 'Guide']
      },
      {
        name: 'Premium Package',
        price: 32000,
        description: 'Luxury Kashi tour with special experiences',
        includes: ['Flight/AC train', 'Premium hotel', 'VIP darshan', 'Private boat', 'Special aarti', 'Spiritual discourse']
      }
    ],
    faq: [
      {
        question: 'What is special about Kashi Vishwanath Temple?',
        answer: 'It is one of the 12 Jyotirlingas and considered the most sacred Shiva temple, where darshan grants liberation.'
      },
      {
        question: 'Is it safe to take a holy dip in the Ganges?',
        answer: 'We arrange safe bathing at designated clean ghats with proper guidance and safety measures.'
      }
    ],
    tags: ['kashi', 'varanasi', 'vishwanath', 'jyotirlinga', 'ganga', 'liberation']
  },
  {
    id: 'sri-lanka-tours',
    title: 'Sri Lanka Tours',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'religious-tours',
    description: 'International pilgrimage to ancient Ramayana sites and Buddhist temples in Sri Lanka',
    price: 45000,
    duration: '5-7 days',
    significance: 'Sri Lanka tour covers significant Ramayana sites where events from the epic took place, along with important Buddhist and Hindu temples.',
    benefits: [
      'Visit to authentic Ramayana sites',
      'Darshan of ancient Hindu temples',
      'Experience of Buddhist spiritual culture',
      'International pilgrimage merit',
      'Cultural and spiritual enrichment'
    ],
    materials: [
      'International travel documents',
      'Temple offerings and flowers',
      'Ramayana guidebook',
      'Cultural souvenirs',
      'Blessed items from sacred sites'
    ],
    procedure: [
      'Flight to Colombo, Sri Lanka',
      'Visit to Ashok Vatika (Nuwara Eliya)',
      'Ravana Falls and caves',
      'Sita Amman Temple',
      'Adam\'s Peak (Sri Pada)',
      'Buddhist temples in Kandy',
      'Return journey'
    ],
    bestTime: 'December to March for best weather',
    deity: 'Various Hindu and Buddhist deities',
    location: 'Sri Lanka (International)',
    packages: [
      {
        name: 'Standard Package',
        price: 45000,
        description: '5-7 days Sri Lanka spiritual tour',
        includes: ['Round-trip flights', 'Hotel accommodation', 'All site visits', 'Meals', 'Local transport', 'Guide']
      },
      {
        name: 'Premium Package',
        price: 65000,
        description: 'Luxury Sri Lanka tour with cultural experiences',
        includes: ['Premium flights', 'Luxury hotels', 'Private transport', 'Cultural shows', 'Shopping', 'Spa treatments']
      }
    ],
    faq: [
      {
        question: 'What documents are needed for Sri Lanka travel?',
        answer: 'Valid passport and Sri Lanka visa (we assist with visa processing). No other special documents required for Indians.'
      },
      {
        question: 'Are the Ramayana sites authentic?',
        answer: 'Yes, these sites have historical and mythological significance mentioned in various versions of Ramayana.'
      }
    ],
    tags: ['sri-lanka', 'ramayana-sites', 'international-pilgrimage', 'buddhist-temples', 'cultural-tour']
  }
,
// Ancestral Services (10 services)
  {
    id: 'annadhanam-for-brahmins',
    title: 'Annadhanam for Brahmins',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Feeding Brahmins as part of ancestor worship ritual for spiritual merit',
    price: 5000,
    duration: '2-3 hours',
    significance: 'Annadhanam for Brahmins is performed as part of ancestor worship, where feeding learned Brahmins generates spiritual merit for the ancestors and the family.',
    benefits: [
      'Generates spiritual merit for ancestors',
      'Brings blessings from learned Brahmins',
      'Removes ancestral displeasure',
      'Enhances family prosperity',
      'Provides divine satisfaction'
    ],
    materials: [
      'Complete meal arrangements',
      'Traditional serving items',
      'Dakshina for Brahmins',
      'Sacred offerings',
      'Banana leaves for serving'
    ],
    procedure: [
      'Invitation to qualified Brahmins',
      'Preparation of traditional meals',
      'Respectful serving and hosting',
      'Offering dakshina and gifts',
      'Seeking blessings for ancestors'
    ],
    bestTime: 'During Pitru Paksha or death anniversaries',
    deity: 'Ancestors (Pitrus) and Brahmins',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 5000,
        description: 'Annadhanam for 5-10 Brahmins',
        includes: ['Complete meals', 'Basic dakshina', 'Serving arrangements', 'Ritual coordination']
      },
      {
        name: 'Premium Package',
        price: 8000,
        description: 'Elaborate Annadhanam for 15-20 Brahmins',
        includes: ['Extended meals', 'Premium dakshina', 'Special offerings', 'Complete arrangements']
      }
    ],
    faq: [
      {
        question: 'Why is feeding Brahmins important for ancestors?',
        answer: 'According to tradition, feeding learned Brahmins generates spiritual merit that directly benefits departed ancestors.'
      },
      {
        question: 'How many Brahmins should be fed?',
        answer: 'Typically 5, 9, or 11 Brahmins are invited, but it can be adjusted based on family capacity and tradition.'
      }
    ],
    tags: ['annadhanam', 'brahmins', 'ancestors', 'feeding', 'spiritual-merit']
  },
  {
    id: 'hiranya-srardham',
    title: 'Hiranya Srardham',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Monetary offering ritual for ancestors when traditional srardham is not possible',
    price: 3500,
    duration: '1.5-2 hours',
    significance: 'Hiranya Srardham is performed when traditional food offerings cannot be made, using monetary donations to Brahmins as an alternative method of ancestor worship.',
    benefits: [
      'Fulfills srardham obligations',
      'Provides alternative when food offering not possible',
      'Generates merit through charity',
      'Appeases ancestors effectively',
      'Suitable for modern lifestyle constraints'
    ],
    materials: [
      'Gold or cash donations',
      'Sacred thread and cloth',
      'Water for tarpan',
      'Flowers and incense',
      'Dakshina for priest'
    ],
    procedure: [
      'Sankalpa (intention setting)',
      'Monetary offering to Brahmins',
      'Tarpan ritual with water',
      'Prayers for ancestor satisfaction',
      'Distribution of dakshina'
    ],
    bestTime: 'Death anniversary or Pitru Paksha',
    deity: 'Ancestors (Pitrus)',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3500,
        description: 'Standard Hiranya Srardham',
        includes: ['Ritual performance', 'Basic dakshina', 'Priest services', 'Sacred materials']
      },
      {
        name: 'Premium Package',
        price: 5500,
        description: 'Elaborate Hiranya Srardham with extended rituals',
        includes: ['Extended ritual', 'Premium dakshina', 'Multiple Brahmins', 'Additional offerings']
      }
    ],
    faq: [
      {
        question: 'When should Hiranya Srardham be performed instead of regular srardham?',
        answer: 'When traveling, during illness, or when proper cooking facilities are not available for traditional food offerings.'
      },
      {
        question: 'Is monetary offering as effective as food offering?',
        answer: 'Yes, according to scriptures, sincere monetary offerings with proper intention are equally effective.'
      }
    ],
    tags: ['hiranya', 'srardham', 'monetary-offering', 'ancestors', 'alternative-ritual']
  },
  {
    id: 'karma-karyam-death-rituals',
    title: 'Karma Karyam (Death-Rituals)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Complete death rituals and ceremonies as per Hindu traditions',
    price: 12000,
    duration: '6-8 hours (spread over days)',
    significance: 'Karma Karyam encompasses all the essential rituals performed after death to ensure the soul\'s peaceful transition and to fulfill religious obligations.',
    benefits: [
      'Ensures proper soul transition',
      'Fulfills religious obligations',
      'Provides peace to departed soul',
      'Supports family during grief',
      'Maintains traditional customs'
    ],
    materials: [
      'Funeral pyre materials',
      'Sacred offerings and food',
      'Clothing and essentials',
      'Dakshina for priests',
      'Ritual implements'
    ],
    procedure: [
      'Pre-cremation rituals',
      'Cremation ceremony',
      'Post-cremation rites',
      'Ash collection and immersion',
      'Follow-up ceremonies'
    ],
    bestTime: 'Immediately after death as per tradition',
    deity: 'Various deities and ancestors',
    location: 'Cremation ground and home',
    packages: [
      {
        name: 'Basic Package',
        price: 12000,
        description: 'Essential death rituals and ceremonies',
        includes: ['All necessary rituals', 'Priest coordination', 'Basic materials', 'Guidance']
      },
      {
        name: 'Premium Package',
        price: 18000,
        description: 'Comprehensive death rituals with full support',
        includes: ['Complete ritual package', 'Multiple priests', 'All arrangements', 'Extended support']
      }
    ],
    faq: [
      {
        question: 'What rituals are included in Karma Karyam?',
        answer: 'It includes pre-cremation rites, cremation ceremony, ash collection, and various post-death observances.'
      },
      {
        question: 'How long do these rituals continue?',
        answer: 'Initial rituals are immediate, but follow-up ceremonies continue for 13 days with annual observances.'
      }
    ],
    tags: ['karma-karyam', 'death-rituals', 'funeral', 'cremation', 'soul-transition']
  },
  {
    id: 'mahalaya-srardham',
    title: 'Mahalaya Srardham (For Brahmins Only)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Special Srardham ritual during Mahalaya period exclusively for Brahmins',
    price: 4500,
    duration: '2-3 hours',
    significance: 'Mahalaya Srardham is a special ancestor worship ritual performed during the Mahalaya period, traditionally reserved for Brahmin families.',
    benefits: [
      'Honors ancestors during auspicious period',
      'Maintains Brahminical traditions',
      'Provides enhanced spiritual merit',
      'Ensures ancestral satisfaction',
      'Preserves sacred customs'
    ],
    materials: [
      'Traditional Brahmin food offerings',
      'Sacred thread and clothing',
      'Specific ritual items',
      'Water for tarpan',
      'Dakshina arrangements'
    ],
    procedure: [
      'Purification and preparation',
      'Invocation of ancestors',
      'Traditional food offerings',
      'Mantra recitation',
      'Final prayers and distribution'
    ],
    bestTime: 'During Mahalaya Paksha (September-October)',
    deity: 'Brahmin ancestors (Pitrus)',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Traditional Mahalaya Srardham for Brahmins',
        includes: ['Complete ritual', 'Traditional offerings', 'Priest services', 'Sacred materials']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Elaborate Mahalaya Srardham with extended rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Multiple Brahmins', 'Special arrangements']
      }
    ],
    faq: [
      {
        question: 'Why is this ritual specifically for Brahmins?',
        answer: 'This follows traditional guidelines where certain ancestor rituals have specific caste-based observances.'
      },
      {
        question: 'What is special about the Mahalaya period?',
        answer: 'Mahalaya is considered the most auspicious time for ancestor worship when the spiritual realm is most accessible.'
      }
    ],
    tags: ['mahalaya', 'srardham', 'brahmins', 'mahalaya-paksha', 'ancestors']
  },
  {
    id: 'mahalaya-thithi',
    title: 'Mahalaya Thithi (Devasam)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Mahalaya period ancestor remembrance ritual performed at temples',
    price: 3800,
    duration: '2-2.5 hours',
    significance: 'Mahalaya Thithi performed at temples (Devasam) during the Mahalaya period for collective ancestor worship and remembrance.',
    benefits: [
      'Collective ancestral blessings',
      'Temple sanctity enhances merit',
      'Community participation benefits',
      'Professional priest guidance',
      'Traditional temple customs'
    ],
    materials: [
      'Temple-specific offerings',
      'Flowers and fruits',
      'Sacred water and materials',
      'Dakshina for temple',
      'Personal ancestor items'
    ],
    procedure: [
      'Temple registration and booking',
      'Collective ancestor invocation',
      'Temple-guided rituals',
      'Community prayers',
      'Prasadam distribution'
    ],
    bestTime: 'During Mahalaya Paksha at temples',
    deity: 'Ancestors through temple deities',
    location: 'Temple (Devasam)',
    packages: [
      {
        name: 'Basic Package',
        price: 3800,
        description: 'Standard temple Mahalaya Thithi',
        includes: ['Temple ritual', 'Basic offerings', 'Priest coordination', 'Prasadam']
      },
      {
        name: 'Premium Package',
        price: 5200,
        description: 'Enhanced temple ritual with special arrangements',
        includes: ['Premium temple ritual', 'Special offerings', 'Priority arrangements', 'Extended ceremonies']
      }
    ],
    faq: [
      {
        question: 'What is the advantage of performing this at temple?',
        answer: 'Temple rituals have enhanced spiritual power and professional priests ensure proper execution.'
      },
      {
        question: 'Can multiple families participate together?',
        answer: 'Yes, temple Mahalaya Thithi often includes collective participation which amplifies the spiritual benefits.'
      }
    ],
    tags: ['mahalaya-thithi', 'devasam', 'temple-ritual', 'collective-worship', 'ancestors']
  },
  {
    id: 'sankalpa-srardham',
    title: 'Sankalpa Srardham',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Srardham ritual with specific intentions and vows for ancestors',
    price: 4200,
    duration: '2-3 hours',
    significance: 'Sankalpa Srardham is performed with specific intentions (sankalpa) and vows, making it a focused ritual for particular ancestral needs or family requirements.',
    benefits: [
      'Fulfills specific ancestral needs',
      'Addresses particular family issues',
      'Provides focused spiritual energy',
      'Resolves ancestral displeasure',
      'Achieves targeted outcomes'
    ],
    materials: [
      'Intention-specific offerings',
      'Sacred water and rice',
      'Flowers and fruits',
      'Special items per sankalpa',
      'Dakshina for Brahmins'
    ],
    procedure: [
      'Clear intention setting (sankalpa)',
      'Specific ancestor invocation',
      'Targeted ritual offerings',
      'Vow-specific prayers',
      'Completion with gratitude'
    ],
    bestTime: 'Based on specific need or astrological timing',
    deity: 'Specific ancestors as per intention',
    location: 'Home or sacred place',
    packages: [
      {
        name: 'Basic Package',
        price: 4200,
        description: 'Standard Sankalpa Srardham',
        includes: ['Intention-based ritual', 'Basic offerings', 'Priest guidance', 'Sacred materials']
      },
      {
        name: 'Premium Package',
        price: 6000,
        description: 'Elaborate Sankalpa Srardham with enhanced focus',
        includes: ['Extended ritual', 'Premium offerings', 'Detailed consultation', 'Follow-up guidance']
      }
    ],
    faq: [
      {
        question: 'What kind of intentions can be set in Sankalpa Srardham?',
        answer: 'Health, prosperity, marriage, education, or any specific family need can be the focus of the sankalpa.'
      },
      {
        question: 'How is this different from regular srardham?',
        answer: 'This includes specific intention-setting and targeted prayers for particular outcomes or ancestor needs.'
      }
    ],
    tags: ['sankalpa', 'srardham', 'intentions', 'vows', 'focused-ritual']
  },
  {
    id: 'srardham',
    title: 'Srardham',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Traditional Hindu ritual for honoring ancestors and ensuring their satisfaction',
    price: 3800,
    duration: '2-3 hours',
    significance: 'Srardham is the traditional Hindu ritual performed to honor ancestors, offer them food and prayers, and ensure their continued blessings and satisfaction.',
    benefits: [
      'Honors and satisfies ancestors',
      'Removes ancestral curses',
      'Brings family prosperity',
      'Ensures ancestral protection',
      'Maintains family traditions'
    ],
    materials: [
      'Traditional food offerings',
      'Sacred rice and water',
      'Sesame seeds',
      'Flowers and fruits',
      'Dakshina for Brahmins'
    ],
    procedure: [
      'Purification and preparation',
      'Ancestor invocation',
      'Food offering ritual',
      'Feeding of Brahmins',
      'Final prayers and blessings'
    ],
    bestTime: 'Death anniversary or new moon day',
    deity: 'Ancestors (Pitrus)',
    location: 'Home',
    packages: [
      {
        name: 'Basic Package',
        price: 3800,
        description: 'Traditional Srardham ritual',
        includes: ['Complete ritual', 'Basic food offerings', 'Priest services', 'Sacred materials']
      },
      {
        name: 'Premium Package',
        price: 5500,
        description: 'Elaborate Srardham with extended ceremonies',
        includes: ['Extended ritual', 'Premium offerings', 'Multiple Brahmins', 'Additional ceremonies']
      }
    ],
    faq: [
      {
        question: 'How often should Srardham be performed?',
        answer: 'Typically on death anniversaries, during Pitru Paksha, and on new moon days throughout the year.'
      },
      {
        question: 'What happens if Srardham is not performed?',
        answer: 'According to tradition, ancestors may remain unsatisfied, potentially affecting family prosperity and harmony.'
      }
    ],
    tags: ['srardham', 'ancestors', 'traditional-ritual', 'pitru-paksha', 'family-prosperity']
  },
  {
    id: 'tharpanam',
    title: 'Tharpanam',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Water offering ritual for ancestors to provide them satisfaction',
    price: 2500,
    duration: '1-1.5 hours',
    significance: 'Tharpanam is a simple yet powerful water offering ritual performed to provide satisfaction to ancestors, devas, and rishis.',
    benefits: [
      'Provides satisfaction to ancestors',
      'Simple yet effective ritual',
      'Can be performed regularly',
      'Purifies family lineage',
      'Brings ancestral blessings'
    ],
    materials: [
      'Sacred water',
      'Sesame seeds',
      'Sacred thread',
      'Simple offerings',
      'Pure intention'
    ],
    procedure: [
      'Purification with water',
      'Invocation of ancestors',
      'Water offering with mantras',
      'Sesame seed offerings',
      'Final prayers'
    ],
    bestTime: 'Early morning or during Pitru Paksha',
    deity: 'Ancestors, Devas, and Rishis',
    location: 'Home, temple, or water body',
    packages: [
      {
        name: 'Basic Package',
        price: 2500,
        description: 'Simple Tharpanam ritual',
        includes: ['Water offering ritual', 'Basic materials', 'Priest guidance', 'Mantras']
      },
      {
        name: 'Premium Package',
        price: 3500,
        description: 'Extended Tharpanam with additional offerings',
        includes: ['Extended ritual', 'Additional offerings', 'Multiple invocations', 'Special blessings']
      }
    ],
    faq: [
      {
        question: 'Can Tharpanam be performed daily?',
        answer: 'Yes, Tharpanam can be performed daily, especially during Pitru Paksha for enhanced benefits.'
      },
      {
        question: 'What is the significance of water and sesame in Tharpanam?',
        answer: 'Water provides satisfaction to ancestors while sesame seeds are believed to reach them directly in the spiritual realm.'
      }
    ],
    tags: ['tharpanam', 'water-offering', 'ancestors', 'daily-ritual', 'simple-ritual']
  },
  {
    id: 'thithi',
    title: 'Thithi (Devasam)',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'Death anniversary ritual for ancestors performed at temples',
    price: 4000,
    duration: '2-2.5 hours',
    significance: 'Thithi performed at temples (Devasam) on death anniversaries with enhanced spiritual power and proper ritual execution by temple priests.',
    benefits: [
      'Enhanced spiritual power through temple',
      'Professional priest guidance',
      'Proper ritual execution',
      'Temple deity blessings',
      'Community spiritual support'
    ],
    materials: [
      'Temple-appropriate offerings',
      'Flowers and fruits',
      'Sacred materials',
      'Temple dakshina',
      'Ancestor-specific items'
    ],
    procedure: [
      'Temple booking and preparation',
      'Professional priest consultation',
      'Temple-guided ancestor invocation',
      'Ritual offerings and prayers',
      'Prasadam and blessings'
    ],
    bestTime: 'Death anniversary date at temple',
    deity: 'Ancestors through temple deities',
    location: 'Temple (Devasam)',
    packages: [
      {
        name: 'Basic Package',
        price: 4000,
        description: 'Standard temple Thithi ritual',
        includes: ['Temple ritual', 'Basic offerings', 'Priest services', 'Prasadam']
      },
      {
        name: 'Premium Package',
        price: 5800,
        description: 'Enhanced temple Thithi with special arrangements',
        includes: ['Premium temple ritual', 'Special offerings', 'Extended ceremonies', 'Priority booking']
      }
    ],
    faq: [
      {
        question: 'Why perform Thithi at temple instead of home?',
        answer: 'Temple rituals have enhanced spiritual power and ensure proper execution by experienced priests.'
      },
      {
        question: 'How far in advance should temple Thithi be booked?',
        answer: 'It\'s recommended to book at least one week in advance, especially during Pitru Paksha period.'
      }
    ],
    tags: ['thithi', 'death-anniversary', 'devasam', 'temple-ritual', 'ancestors']
  },
  {
    id: 'varusha-abdigam',
    title: 'Varusha abdigam � First Year ceremony',
    image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=400&h=300&fit=crop&auto=format",
    category: 'ancestral',
    description: 'First year ceremony after death ritual to complete the mourning period',
    price: 6500,
    duration: '3-4 hours',
    significance: 'Varusha Abdigam is performed exactly one year after death to complete the mourning period and establish the departed soul in ancestral status.',
    benefits: [
      'Completes the mourning period',
      'Establishes soul in ancestral status',
      'Brings closure to family',
      'Ensures proper soul transition',
      'Marks beginning of annual remembrance'
    ],
    materials: [
      'Complete ritual materials',
      'Special first-year offerings',
      'Clothing and essentials',
      'Dakshina for priests',
      'Memorial items'
    ],
    procedure: [
      'Year completion acknowledgment',
      'Special ancestor invocation',
      'Comprehensive offerings',
      'Status transition prayers',
      'Family blessing ceremony'
    ],
    bestTime: 'Exactly one year after death',
    deity: 'Departed soul and ancestors',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard first year ceremony',
        includes: ['Complete ritual', 'Basic offerings', 'Priest services', 'Sacred materials']
      },
      {
        name: 'Premium Package',
        price: 9000,
        description: 'Elaborate first year ceremony with extended rituals',
        includes: ['Extended ceremony', 'Premium offerings', 'Multiple priests', 'Memorial arrangements']
      }
    ],
    faq: [
      {
        question: 'Why is the first year ceremony important?',
        answer: 'It marks the completion of the soul\'s transition period and establishes them in ancestral status.'
      },
      {
        question: 'What changes after performing Varusha Abdigam?',
        answer: 'The family can resume normal activities and the annual remembrance rituals can begin.'
      }
    ],
    tags: ['varusha-abdigam', 'first-year', 'mourning-completion', 'soul-transition', 'annual-ceremony']
  }

  // Additional services for other categories would continue here...
]

// Helper functions
export const getServicesByCategory = (categoryId) => {
  return services.filter(service => service.category === categoryId)
}

export const getServiceById = (serviceId) => {
  return services.find(service => service.id === serviceId)
}

export const getCategoryById = (categoryId) => {
  return serviceCategories.find(category => category.id === categoryId)
}

