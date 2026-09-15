// Original Category Icons (Fallback)
import iconCare from '../assets/images/icon_care.jpg';
import iconPet from '../assets/images/icon_pet.jpg';
import iconMoving from '../assets/images/icon_moving.jpg';

// New Individual Service Icons
import iconElectrician from '../assets/images/icon_electrician.jpg';
import iconPlumber from '../assets/images/icon_plumber.jpg';
import iconHomeCleaning from '../assets/images/icon_home_cleaning.jpg';
import iconBathroomCleaning from '../assets/images/icon_bathroom_cleaning.jpg';
import iconSalon from '../assets/images/icon_salon.jpg';
import iconPhysiotherapy from '../assets/images/icon_physiotherapy.jpg';
import iconDoctor from '../assets/images/icon_doctor.jpg';

export const servicesData = [
  { 
    id: '01', 
    slug: 'electrician',
    title: 'Electrician', 
    category: 'Home Repair', 
    img: iconElectrician,
    description: 'Expert electrical repairs, installations, and maintenance. Book a certified electrician to safely handle all your wiring and fixture needs.',
    included: ['Wiring and switch repair', 'Appliance installation', 'Safety inspections', 'Fixture mounting'],
    notIncluded: ['Major rewiring without assessment', 'Parts and materials cost', 'Masonry work for concealed wiring']
  },
  { 
    id: '02', 
    slug: 'plumber',
    title: 'Plumber', 
    category: 'Home Repair', 
    img: iconPlumber,
    description: 'Professional plumbing services for leaks, clogs, and installations. Reliable and prompt service to keep your water systems flowing smoothly.',
    included: ['Leak detection and repair', 'Pipe unblocking', 'Tap and fixture replacement', 'Water pressure checks'],
    notIncluded: ['Underground pipe excavation', 'Sewer line replacement', 'Cost of replacement parts']
  },
  { 
    id: '03', 
    slug: 'home-cleaning',
    title: 'Home Cleaning', 
    category: 'Cleaning', 
    img: iconHomeCleaning,
    description: 'Comprehensive home cleaning services leaving your house spotless. Our trained professionals use premium products for a deep, satisfying clean.',
    included: ['Dusting and wiping all surfaces', 'Floor sweeping and mopping', 'Trash removal', 'Basic organization'],
    notIncluded: ['Deep carpet shampooing', 'Moving heavy furniture', 'Exterior window cleaning']
  },
  { 
    id: '04', 
    slug: 'bathroom-cleaning',
    title: 'Bathroom Cleaning', 
    category: 'Cleaning', 
    img: iconBathroomCleaning,
    description: 'Deep bathroom sanitization and scrubbing to eliminate stains, mold, and bacteria, leaving your washrooms sparkling clean and hygienic.',
    included: ['Toilet bowl deep cleaning', 'Tile and grout scrubbing', 'Mirror and glass wiping', 'Sink and faucet polishing'],
    notIncluded: ['Plumbing repairs', 'Replacing broken tiles', 'Paint touch-ups']
  },
  { 
    id: '05', 
    slug: 'salon-at-home',
    title: 'Salon at Home', 
    category: 'Beauty & Wellness', 
    img: iconSalon,
    description: 'Premium beauty and grooming services delivered right to your doorstep. Relax and enjoy professional salon treatments in the comfort of your home.',
    included: ['Haircuts and styling', 'Manicure and pedicure', 'Facials and skin treatments', 'Use of premium products'],
    notIncluded: ['Permanent tattoos', 'Medical dermatology treatments', 'Complex chemical hair straightening']
  },
  { 
    id: '06', 
    slug: 'physiotherapy',
    title: 'Physiotherapy', 
    category: 'Beauty & Wellness', 
    img: iconPhysiotherapy,
    description: 'Expert physiotherapy sessions at home to help you recover from injuries, manage pain, and improve mobility with personalized care plans.',
    included: ['Initial mobility assessment', 'Targeted pain relief exercises', 'Posture correction guidance', 'Therapeutic massage'],
    notIncluded: ['Prescription medication', 'X-rays or MRI scans', 'Surgical procedures']
  },
  { 
    id: '07', 
    slug: 'doctor-consultation',
    title: 'Doctor Consultation', 
    category: 'Care Services', 
    img: iconDoctor,
    description: 'Convenient at-home medical consultations with certified doctors. Get professional medical advice, checkups, and prescriptions without visiting a clinic.',
    included: ['General health checkup', 'Vitals measurement', 'Prescription generation', 'Diet and lifestyle advice'],
    notIncluded: ['Emergency medical response', 'Complex diagnostic tests', 'Surgical interventions']
  },
  { 
    id: '08', 
    slug: 'babysitter',
    title: 'Babysitter', 
    category: 'Care Services', 
    img: iconCare, 
    description: 'Trustworthy and experienced babysitters to care for your little ones. We ensure a safe, engaging, and nurturing environment for your children.',
    included: ['Child supervision and safety', 'Engaging in playtime activities', 'Feeding pre-prepared meals', 'Putting children to bed'],
    notIncluded: ['Heavy household chores', 'Transporting children in personal vehicles', 'Medical care or administering medication']
  },
  { 
    id: '09', 
    slug: 'elder-care',
    title: 'Elder Care', 
    category: 'Care Services', 
    img: iconCare, 
    description: 'Compassionate assistance and care for the elderly. Our trained caregivers provide support with daily activities, ensuring comfort and dignity.',
    included: ['Assistance with mobility', 'Medication reminders', 'Companionship and conversation', 'Help with feeding'],
    notIncluded: ['Intensive medical nursing', 'Handling complex medical equipment', 'Home repairs or heavy lifting']
  },
  { 
    id: '10', 
    slug: 'dog-walking',
    title: 'Dog Walking', 
    category: 'Pet Care', 
    img: iconPet, 
    description: 'Reliable dog walking services to keep your furry friend active and happy. Perfect for busy pet parents who want the best for their dogs.',
    included: ['30-60 minute structured walk', 'Waste cleanup during the walk', 'Fresh water top-up post walk', 'Basic leash training reinforcement'],
    notIncluded: ['Off-leash park visits without permission', 'Veterinary transport', 'Overnight pet sitting']
  },
  { 
    id: '11', 
    slug: 'pet-grooming',
    title: 'Pet Grooming', 
    category: 'Pet Care', 
    img: iconPet, 
    description: 'Professional pet grooming at your doorstep. We provide stress-free baths, haircuts, and nail trimming to keep your pets looking their best.',
    included: ['Warm water bath and shampoo', 'Hair trimming and styling', 'Nail clipping', 'Ear cleaning'],
    notIncluded: ['Flea and tick medical treatments', 'Grooming aggressive pets', 'Veterinary checkups']
  },
  { 
    id: '12', 
    slug: 'packers-and-movers',
    title: 'Packers & Movers', 
    category: 'Moving & Logistics', 
    img: iconMoving, 
    description: 'Hassle-free relocation services. Our expert team securely packs, transports, and unpacks your belongings with the utmost care.',
    included: ['Secure packing of all items', 'Loading and transport', 'Unloading at destination', 'Basic furniture assembly'],
    notIncluded: ['Plumbing or electrical dismantling', 'Moving hazardous materials', 'Long-term warehousing']
  }
];
