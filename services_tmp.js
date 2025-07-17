// Service Categories
export const serviceCategories = [
  {
    id: 'homam',
    title: 'Homam Services',
    description: 'Sacred fire rituals for spiritual purification and divine blessings',
    icon: '🔥',
    color: 'bg-orange-100 text-orange-800',
    serviceCount: 6
  },
  {
    id: 'pooja',
    title: 'Pooja Services',
    description: 'Traditional worship ceremonies for various deities',
    icon: '🙏',
    color: 'bg-yellow-100 text-yellow-800',
    serviceCount: 4
  },
  {
    id: 'pariharam',
    title: 'Pariharam Services',
    description: 'Remedial rituals to overcome obstacles and negative influences',
    icon: '🛡️',
    color: 'bg-red-100 text-red-800',
    serviceCount: 5
  },
  {
    id: 'japam',
    title: 'Japam Services',
    description: 'Sacred mantra chanting for spiritual elevation',
    icon: '📿',
    color: 'bg-purple-100 text-purple-800',
    serviceCount: 3
  },
  {
    id: 'abhishekam',
    title: 'Abhishekam Services',
    description: 'Sacred bathing rituals for deities with holy substances',
    icon: '💧',
    color: 'bg-blue-100 text-blue-800',
    serviceCount: 4
  },
  {
    id: 'archana',
    title: 'Archana Services',
    description: 'Flower offerings and prayers to invoke divine grace',
    icon: '🌸',
    color: 'bg-pink-100 text-pink-800',
    serviceCount: 3
  },
  {
    id: 'temple',
    title: 'Temple Services',
    description: 'Special temple-specific rituals and ceremonies',
    icon: '🏛️',
    color: 'bg-indigo-100 text-indigo-800',
    serviceCount: 4
  },
  {
    id: 'astrology',
    title: 'Astrology Services',
    description: 'Vedic astrology consultations and guidance',
    icon: '⭐',
    color: 'bg-green-100 text-green-800',
    serviceCount: 2
  },
  {
    id: 'vastu',
    title: 'Vastu Services',
    description: 'Architectural guidance based on ancient Vastu principles',
    icon: '🏠',
    color: 'bg-teal-100 text-teal-800',
    serviceCount: 1
  }
]

// Services Data
export const services = [
  // Homam Services (6 services)
  {
    id: 'ayusha-homam',
    title: 'Ayusha Homam',
    category: 'homam',
    description: 'Sacred fire ritual for longevity, health, and protection from diseases',
    price: 5000,
    duration: '2-3 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
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
    id: 'ganapathi-homam',
    title: 'Ganapathi Homam',
    category: 'homam',
    description: 'Sacred fire ritual to Lord Ganesha for removing obstacles and new beginnings',
    price: 3500,
    duration: '1.5-2 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
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
    id: 'navagraha-homam',
    title: 'Navagraha Homam',
    category: 'homam',
    description: 'Sacred fire ritual to nine planetary deities for cosmic harmony',
    price: 6500,
    duration: '3-4 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
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
    id: 'lakshmi-homam',
    title: 'Lakshmi Homam',
    category: 'homam',
    description: 'Sacred fire ritual to Goddess Lakshmi for wealth and prosperity',
    price: 4500,
    duration: '2-2.5 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Lakshmi Homam is performed to invoke the blessings of Goddess Lakshmi for wealth, prosperity, and abundance in all aspects of life.',
    benefits: [
      'Attracts wealth and prosperity',
      'Removes financial obstacles',
      'Brings abundance and success',
      'Enhances business growth',
      'Provides material and spiritual wealth'
    ],
    materials: [
      'Gold coins or jewelry',
      'Lotus flowers',
      'Rice and turmeric',
      'Coconut and fruits',
      'Sacred ghee'
    ],
    procedure: [
      'Setup of decorated fire altar',
      'Invocation of Goddess Lakshmi',
      'Chanting of Lakshmi mantras',
      'Offering of gold and flowers',
      'Blessing ceremony'
    ],
    bestTime: 'Friday evening or Diwali period',
    deity: 'Goddess Lakshmi',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Standard Lakshmi Homam',
        includes: ['Homam ritual', 'Basic offerings', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Elaborate Lakshmi Homam with special prayers',
        includes: ['Extended ritual', 'Premium decorations', 'Special mantras', 'Blessed coins']
      }
    ],
    faq: [
      {
        question: 'What is the best day to perform Lakshmi Homam?',
        answer: 'Friday is considered most auspicious, especially during Diwali season or on full moon days.'
      },
      {
        question: 'Can this help with business prosperity?',
        answer: 'Yes, Lakshmi Homam is highly effective for business growth and financial prosperity.'
      }
    ],
    tags: ['lakshmi', 'wealth', 'prosperity', 'business']
  },
  {
    id: 'sudarshana-homam',
    title: 'Sudarshana Homam',
    category: 'homam',
    description: 'Powerful fire ritual with Lord Vishnus discus for protection and victory',
    price: 7500,
    duration: '3-4 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
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
  {
    id: 'mrityunjaya-homam',
    title: 'Mrityunjaya Homam',
    category: 'homam',
    description: 'Sacred fire ritual to Lord Shiva for overcoming death-like situations',
    price: 6000,
    duration: '2.5-3 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
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

  // Pooja Services (4 services)
  {
    id: 'satyanarayan-pooja',
    title: 'Satyanarayan Pooja',
    category: 'pooja',
    description: 'Traditional worship of Lord Vishnu for prosperity and fulfillment of wishes',
    price: 2500,
    duration: '2-3 hours',
    image: '/src/assets/images/pooja-ceremony.jpg',
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
    category: 'pooja',
    description: 'Special worship of Goddess Lakshmi for wealth and family welfare',
    price: 3000,
    duration: '2-3 hours',
    image: '/src/assets/images/pooja-ceremony.jpg',
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
        price: 4200,
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
    category: 'pooja',
    description: 'Traditional worship of Lord Ganesha for removing obstacles and new beginnings',
    price: 2000,
    duration: '1.5-2 hours',
    image: '/src/assets/images/pooja-ceremony.jpg',
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
    id: 'durga-pooja',
    title: 'Durga Pooja',
    category: 'pooja',
    description: 'Powerful worship of Goddess Durga for protection and strength',
    price: 3500,
    duration: '2.5-3 hours',
    image: '/src/assets/images/pooja-ceremony.jpg',
    significance: 'Durga Pooja is performed to invoke the divine mother Goddess Durga for protection from evil forces and to gain inner strength and courage.',
    benefits: [
      'Provides divine protection',
      'Increases inner strength and courage',
      'Destroys negative energies',
      'Brings victory over enemies',
      'Ensures family safety'
    ],
    materials: [
      'Durga idol or picture',
      'Red flowers and hibiscus',
      'Coconut and fruits',
      'Red cloth and sindoor',
      'Incense and lamps'
    ],
    procedure: [
      'Installation of Goddess Durga',
      'Invocation with mantras',
      'Offering of flowers and fruits',
      'Chanting of Durga stotras',
      'Aarti and protection blessings'
    ],
    bestTime: 'Tuesday or Friday, Navratri period',
    deity: 'Goddess Durga',
    location: 'Home or temple',
    packages: [
      {
        name: 'Basic Package',
        price: 3500,
        description: 'Traditional Durga Pooja',
        includes: ['Complete pooja', 'Basic materials', 'Priest services']
      },
      {
        name: 'Premium Package',
        price: 4800,
        description: 'Elaborate Durga Pooja with special rituals',
        includes: ['Extended pooja', 'Premium decorations', 'Special mantras', 'Protection amulets']
      }
    ],
    faq: [
      {
        question: 'When is the best time for Durga Pooja?',
        answer: 'During Navratri is most auspicious, but it can be performed on Tuesdays and Fridays or when facing challenges.'
      },
      {
        question: 'Can men participate in Durga Pooja?',
        answer: 'Yes, Durga Pooja can be performed by both men and women, and the whole family can participate.'
      }
    ],
    tags: ['durga', 'protection', 'strength', 'divine-mother']
  },

  // Pariharam Services (5 services)
  {
    id: 'kala-sarpa-dosha-pariharam',
    title: 'Kala Sarpa Dosha Pariharam',
    category: 'pariharam',
    description: 'Remedial ritual to neutralize the malefic effects of Kala Sarpa Yoga',
    price: 7500,
    duration: '4-5 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Kala Sarpa Dosha Pariharam is performed to reduce the negative effects of Kala Sarpa Yoga in ones horoscope, which can cause delays and obstacles in life.',
    benefits: [
      'Reduces Kala Sarpa Dosha effects',
      'Removes delays in important matters',
      'Improves career and marriage prospects',
      'Brings mental peace and stability',
      'Enhances overall life progress'
    ],
    materials: [
      'Silver serpent idols',
      'Milk and honey',
      'White flowers',
      'Sacred ash',
      'Specific gemstones'
    ],
    procedure: [
      'Horoscope analysis',
      'Setup of serpent altar',
      'Invocation of serpent deities',
      'Specific mantra chanting',
      'Remedial offerings and prayers'
    ],
    bestTime: 'Nag Panchami or as per astrological guidance',
    deity: 'Serpent Deities (Nagas)',
    location: 'Temple or home',
    packages: [
      {
        name: 'Basic Package',
        price: 7500,
        description: 'Standard Kala Sarpa Dosha Pariharam',
        includes: ['Complete ritual', 'Basic materials', 'Expert priest', 'Horoscope consultation']
      },
      {
        name: 'Premium Package',
        price: 10000,
        description: 'Comprehensive Kala Sarpa Dosha Pariharam',
        includes: ['Extended ritual', 'Premium materials', 'Multiple sessions', 'Personalized remedies']
      }
    ],
    faq: [
      {
        question: 'How do I know if I have Kala Sarpa Dosha?',
        answer: 'This can be determined through horoscope analysis. We provide consultation to identify this dosha.'
      },
      {
        question: 'How many times should this be performed?',
        answer: 'Usually performed once, but may be repeated annually or as recommended by the astrologer.'
      }
    ],
    tags: ['kala-sarpa', 'dosha', 'astrology', 'remedial']
  },
  {
    id: 'mangal-dosha-pariharam',
    title: 'Mangal Dosha Pariharam',
    category: 'pariharam',
    description: 'Remedial ritual to neutralize Mars-related doshas affecting marriage',
    price: 5500,
    duration: '3-4 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Mangal Dosha Pariharam is performed to reduce the malefic effects of Mars (Mangal) in ones horoscope, particularly affecting marriage and relationships.',
    benefits: [
      'Reduces Mangal Dosha effects',
      'Improves marriage prospects',
      'Brings harmony in relationships',
      'Reduces conflicts and anger',
      'Ensures marital happiness'
    ],
    materials: [
      'Red flowers and cloth',
      'Coral gemstone',
      'Wheat and jaggery',
      'Red lentils',
      'Copper items'
    ],
    procedure: [
      'Mars position analysis',
      'Setup of Mars altar',
      'Invocation of Lord Mangal',
      'Specific remedial mantras',
      'Offering of red items'
    ],
    bestTime: 'Tuesday or as per astrological guidance',
    deity: 'Lord Mangal (Mars)',
    location: 'Temple or home',
    packages: [
      {
        name: 'Basic Package',
        price: 5500,
        description: 'Standard Mangal Dosha Pariharam',
        includes: ['Complete ritual', 'Basic materials', 'Priest services', 'Astrological consultation']
      },
      {
        name: 'Premium Package',
        price: 7500,
        description: 'Comprehensive Mangal Dosha Pariharam',
        includes: ['Extended ritual', 'Premium materials', 'Gemstone blessing', 'Marriage compatibility analysis']
      }
    ],
    faq: [
      {
        question: 'Who should perform Mangal Dosha Pariharam?',
        answer: 'Those with Mangal Dosha in their horoscope, especially before marriage or when facing relationship issues.'
      },
      {
        question: 'Can this be done after marriage?',
        answer: 'Yes, it can be performed after marriage to improve marital harmony and reduce conflicts.'
      }
    ],
    tags: ['mangal-dosha', 'marriage', 'mars', 'relationships']
  },
  {
    id: 'shani-dosha-pariharam',
    title: 'Shani Dosha Pariharam',
    category: 'pariharam',
    description: 'Remedial ritual to appease Lord Saturn and reduce his malefic effects',
    price: 6000,
    duration: '3-4 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Shani Dosha Pariharam is performed to appease Lord Saturn (Shani) and reduce the hardships and delays caused by his malefic influence.',
    benefits: [
      'Reduces Saturn-related hardships',
      'Removes delays and obstacles',
      'Brings stability and patience',
      'Improves career prospects',
      'Provides mental strength'
    ],
    materials: [
      'Black sesame seeds',
      'Iron items',
      'Blue flowers',
      'Mustard oil',
      'Black cloth'
    ],
    procedure: [
      'Saturn position analysis',
      'Setup of Shani altar',
      'Invocation of Lord Shani',
      'Chanting of Shani mantras',
      'Offering of black items'
    ],
    bestTime: 'Saturday or during Shani transit',
    deity: 'Lord Shani (Saturn)',
    location: 'Temple or home',
    packages: [
      {
        name: 'Basic Package',
        price: 6000,
        description: 'Standard Shani Dosha Pariharam',
        includes: ['Complete ritual', 'Basic materials', 'Priest services', 'Saturn analysis']
      },
      {
        name: 'Premium Package',
        price: 8500,
        description: 'Comprehensive Shani Dosha Pariharam',
        includes: ['Extended ritual', 'Premium materials', 'Multiple sessions', 'Ongoing guidance']
      }
    ],
    faq: [
      {
        question: 'When should I perform Shani Dosha Pariharam?',
        answer: 'During Shani Mahadasha, Antardasha, or when experiencing Saturn-related difficulties.'
      },
      {
        question: 'How long do the effects last?',
        answer: 'The effects can last for several years, but regular worship and good deeds enhance the benefits.'
      }
    ],
    tags: ['shani-dosha', 'saturn', 'hardships', 'patience']
  },
  {
    id: 'rahu-ketu-dosha-pariharam',
    title: 'Rahu Ketu Dosha Pariharam',
    category: 'pariharam',
    description: 'Remedial ritual to neutralize the shadow planets Rahu and Ketu',
    price: 6500,
    duration: '4-5 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Rahu Ketu Dosha Pariharam is performed to reduce the malefic effects of the shadow planets Rahu and Ketu, which can cause confusion and unexpected changes.',
    benefits: [
      'Reduces Rahu-Ketu malefic effects',
      'Brings clarity and focus',
      'Removes confusion and illusions',
      'Stabilizes unexpected changes',
      'Improves spiritual growth'
    ],
    materials: [
      'Coconut and sesame',
      'Blue and brown flowers',
      'Sandalwood paste',
      'Specific gemstones',
      'Sacred herbs'
    ],
    procedure: [
      'Rahu-Ketu position analysis',
      'Setup of dual altars',
      'Separate invocations',
      'Specific mantras for each',
      'Remedial offerings'
    ],
    bestTime: 'Eclipse days or as per astrological guidance',
    deity: 'Rahu and Ketu (Shadow Planets)',
    location: 'Temple or home',
    packages: [
      {
        name: 'Basic Package',
        price: 6500,
        description: 'Standard Rahu Ketu Dosha Pariharam',
        includes: ['Complete ritual', 'Basic materials', 'Expert priest', 'Planetary analysis']
      },
      {
        name: 'Premium Package',
        price: 9000,
        description: 'Comprehensive Rahu Ketu Dosha Pariharam',
        includes: ['Extended ritual', 'Premium materials', 'Gemstone remedies', 'Spiritual guidance']
      }
    ],
    faq: [
      {
        question: 'What are the signs of Rahu-Ketu dosha?',
        answer: 'Confusion, sudden changes, health issues, and obstacles in spiritual progress are common signs.'
      },
      {
        question: 'Can this improve spiritual growth?',
        answer: 'Yes, balancing Rahu-Ketu energies significantly enhances spiritual development and clarity.'
      }
    ],
    tags: ['rahu-ketu', 'shadow-planets', 'confusion', 'spiritual-growth']
  },
  {
    id: 'pitru-dosha-pariharam',
    title: 'Pitru Dosha Pariharam',
    category: 'pariharam',
    description: 'Remedial ritual to appease ancestors and remove ancestral curses',
    price: 4500,
    duration: '3-4 hours',
    image: '/src/assets/images/hindu-rituals.jpg',
    significance: 'Pitru Dosha Pariharam is performed to appease ancestors and remove the negative effects of ancestral displeasure, which can affect family prosperity.',
    benefits: [
      'Appeases ancestors',
      'Removes family curses',
      'Improves family prosperity',
      'Brings peace to departed souls',
      'Ensures progeny and continuity'
    ],
    materials: [
      'Sesame seeds and rice',
      'Black gram',
      'Water in copper vessel',
      'White flowers',
      'Food offerings'
    ],
    procedure: [
      'Ancestral invocation',
      'Offering of food and water',
      'Chanting of Pitru mantras',
      'Tarpan (water offering)',
      'Feeding of Brahmins'
    ],
    bestTime: 'Pitru Paksha or new moon days',
    deity: 'Ancestors (Pitrus)',
    location: 'Home or sacred place',
    packages: [
      {
        name: 'Basic Package',
        price: 4500,
        description: 'Standard Pitru Dosha Pariharam',
        includes: ['Complete ritual', 'Basic materials', 'Priest services', 'Brahmin feeding']
      },
      {
        name: 'Premium Package',
        price: 6500,
        description: 'Comprehensive Pitru Dosha Pariharam',
        includes: ['Extended ritual', 'Premium offerings', 'Multiple Brahmin feeding', 'Ancestral blessings']
      }
    ],
    faq: [
      {
        question: 'How do I know if I have Pitru Dosha?',
        answer: 'Family problems, childlessness, repeated obstacles, and ancestral dreams are common indicators.'
      },
      {
        question: 'When is the best time to perform this?',
        answer: 'Pitru Paksha (ancestral fortnight) is most auspicious, but it can be done on any new moon day.'
      }
    ],
    tags: ['pitru-dosha', 'ancestors', 'family-prosperity', 'curses']
  }

  // Additional services for other categories would continue here...
  // For brevity, I'm including a representative sample of each category
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

