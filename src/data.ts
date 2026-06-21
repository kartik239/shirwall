import { Vendor } from './types';

export const VENDORS: Vendor[] = [
  // Health & Wellness
  {
    id: 'doctor',
    name: 'Doctor (Dr. Shirke\'s Clinic)',
    category: 'Health & Wellness',
    categorySlug: 'health',
    description: 'General physician consultation, pediatric care, and home emergency health checkups in Shirwal.',
    iconName: 'Stethoscope',
    logoFile: 'logo-doctor.png',
    detailTitle: 'Dr. Shirke\'s Family Clinic',
    detailCopy: 'Providing compassionate and professional family medicine. Available for daily clinic consultations, health tracking, diagnostic support, and home screening visits for senior citizens.'
  },
  {
    id: 'beauty-parlor',
    name: 'Beauty Parlor (Smita\'s Beauty Care)',
    category: 'Health & Wellness',
    categorySlug: 'health',
    description: 'Professional beauty, bridal makeup, hair styling, facials, care packages for women.',
    iconName: 'Sparkles',
    logoFile: 'logo-beauty-parlor.png',
    detailTitle: 'Smita\'s Beauty Care',
    detailCopy: 'Elevate your shine with custom bridal packages, organic herbal facials, customized hair treatments, and manicure & pedicure services. Relaxing ambient lounge with premium products.'
  },
  {
    id: 'salon',
    name: 'Salon (Classic Men\'s Grooming)',
    category: 'Health & Wellness',
    categorySlug: 'health',
    description: 'Modern men\'s salon specializing in hair styling, beard grooming, head massage, facial scrub.',
    iconName: 'Scissors',
    logoFile: 'logo-salon.png',
    detailTitle: 'Classic Men\'s Grooming & Salon',
    detailCopy: 'Trending haircuts, specialized beard trimming, hair coloring, conditioning, and refreshing facial massages. Experienced stylists with state-of-the-art diagnostic grooming hair chairs.'
  },

  // Home Services
  {
    id: 'electrical-technician',
    name: 'Electrical Technician',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'House wiring, short circuit repairs, ceiling fan/geyser installations, inverter backup setups.',
    iconName: 'Bolt',
    logoFile: 'logo-electrical-technician.png',
    detailTitle: 'Shirwal Spark Electricals',
    detailCopy: 'Fast troubleshooting for electrical failures, high-quality safety earthing installations, and reliable appliances repair. Safe and certified local experts at your doorstep.'
  },
  {
    id: 'plumbing-work',
    name: 'Plumbing Work',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Leakage repairs, pipe fittings, fixture installations, tank cleaning, drainage solutions.',
    iconName: 'Droplet',
    logoFile: 'logo-plumbing-work.png',
    detailTitle: 'A1 Plumbing & Fitting Services',
    detailCopy: 'Fix dripping faucets, broken pipelines, clogged drainage lines, or replace toilet-kitchen fixtures. Clean water tank maintenance and pressure pump installation services.'
  },
  {
    id: 'gas-mechanic',
    name: 'Gas Mechanic (LPG Services)',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'LPG gas stove repairing, gas safety checks, hose pipe changes, commercial burner servicing.',
    iconName: 'Flame',
    logoFile: 'logo-gas-mechanic.png',
    detailTitle: 'Shirwal Flame Gas Mechanic Services',
    detailCopy: 'Professional gas cooktop and burner maintenance, commercial stove tuning, high-quality brass tube replacements, and double-stage regulator leak test audits.'
  },
  {
    id: 'refrigerator-mechanic',
    name: 'Refrigerator Mechanic',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Double-door fridge gas filling, compressor repairs, cooling troubleshooting, thermostat change.',
    iconName: 'Snowflake',
    logoFile: 'logo-refrigerator-mechanic.png',
    detailTitle: 'CoolCare Refrigerator Repair',
    detailCopy: 'Expert technicians servicing Samsung, LG, Whirlpool, Godrej, and commercial chillers. Genuine accessories, gas recharging, and inverter motor diagnostics.'
  },
  {
    id: 'tv-led-mechanic',
    name: 'TV/LED Mechanic',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'LED/LCD screen repairs, sound board servicing, wall mounting, power card replacements.',
    iconName: 'Tv',
    logoFile: 'logo-tv-led-mechanic.png',
    detailTitle: 'Om Vision LED & TV Services',
    detailCopy: 'Fix black screen display issues, HDMI socket damage, motherboard soldering error, and vertical panel bars. Wall mounting with perfect viewing level adjustment.'
  },
  {
    id: 'computer-printer-technician',
    name: 'Computer & Printer Technician',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Laptop repair, virus cleaning, cartridge refilling, printer roller and driver troubleshooting.',
    iconName: 'Printer',
    logoFile: 'logo-computer-printer-technician.png',
    detailTitle: 'Bytes & Print Tech Solutions',
    detailCopy: 'Complete IT diagnostics. OS formatting (Windows/Linux), RAM upgrades, malware disinfection, wifi printer configuration, cartridge powder refills, and network mapping.'
  },
  {
    id: 'xerox-printing-doorstep',
    name: 'Xerox & Printing Doorstep',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Send doc on WhatsApp, get high-quality laser printing or spiral book binding delivered home.',
    iconName: 'Copy',
    logoFile: 'logo-xerox-printing-doorstep.png',
    detailTitle: 'Shirwal Doorstep Printing Hub',
    detailCopy: 'Convenient document rendering. Just send PDFs/Docs to us, we print on 75GSM high-grade white paper (laser black & white or premium color) and drop them off directly at your location.'
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Anti-cockroach gel treatment, herbal bedbug extermination, wood termite protection.',
    iconName: 'Bug',
    logoFile: 'logo-pest-control.png',
    detailTitle: 'EcoShield Pest Control Shirwal',
    detailCopy: 'Odorless herbal treatments, highly safe for children and seniors. Effective defense schemes against subterranean termites, crawling roaches, black Ants, and rodents.'
  },
  {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Full house deep cleaning, sanitization of bathrooms, sofa vacuuming, kitchen degreasing.',
    iconName: 'Wind',
    logoFile: 'logo-home-cleaning.png',
    detailTitle: 'Prism Cleaners Home Deep Care',
    detailCopy: 'Professional grade cleaning crews equipped with vacuum blowers, scrubbing machines, floor disinfectants, and expert stain removers to restore shine to your living space.'
  },
  {
    id: 'house-shifting',
    name: 'House Shifting (Packers & Movers)',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Safe packaging of household items, loading, transport with local trucks, and unloading.',
    iconName: 'Truck',
    logoFile: 'logo-house-shifting.png',
    detailTitle: 'Shirwal Express Packers & Movers',
    detailCopy: 'Hassle-free residential and business transitioning. Triple-layer thermal bubble wrapping for fragile glass items, heavy loading equipment, and reliable pickup transport.'
  },
  {
    id: 'painting-works',
    name: 'Painting Works',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Interior & exterior wall painting, waterproof wall primer, acrylic putty coatings, wall designs.',
    iconName: 'Palette',
    logoFile: 'logo-painting-works.png',
    detailTitle: 'Surya Decor Painting & Textures',
    detailCopy: 'Enhance your walls with weathercoat external shielding, high gloss wash-resistant internal paint, plaster patching, damp proofing, and customized wall design highlight accents.'
  },
  {
    id: 'laundry',
    name: 'Laundry',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Steam washing, dry cleaning, crisp steam ironing, woolens care delivered clean and packed.',
    iconName: 'Shirt',
    logoFile: 'logo-laundry.png',
    detailTitle: 'QuickWash Premium Laundry',
    detailCopy: 'Providing fabric-safe, sanitized hygiene cleans for all clothes, curtains, and heavy blankets. Express steam ironing for crisp cuffs and collars. Direct home pickup and drop.'
  },
  {
    id: 'tiffin-services',
    name: 'Tiffin Services',
    category: 'Home Services',
    categorySlug: 'home-services',
    description: 'Healthy home-cooked daily meals (lunch/dinner), traditional Maharashtrian veg/non-veg boxes.',
    iconName: 'Utensils',
    logoFile: 'logo-tiffin-services.png',
    detailTitle: 'Mauli Gharguti Tiffin Service',
    detailCopy: 'Delivering delicious, hygienic, pure home-cooked lunch and dinner. Rich in traditional Maharashtrian taste with low oil & spices. Customizable diet charts and bulk orders.'
  },

  // Real Estate
  {
    id: 'real-estate-properties',
    name: 'Real Estate & Properties',
    category: 'Real Estate & Properties',
    categorySlug: 'real-estate',
    description: 'Plots, flats, agricultural lands for sale, renting out commercial or residential spaces in Shirwal.',
    iconName: 'Home',
    logoFile: 'logo-real-estate-properties.png',
    detailTitle: 'Shirwal Real Estate & Land Advisory',
    detailCopy: 'Connecting genuine property buyers with localized sellers. Helping you find budget lands, premium plotting schemes near MIDC, rental shops, and modular apartments.'
  },

  // Transport & Travel
  {
    id: 'rickshaw',
    name: 'Rickshaw (Local Travel)',
    category: 'Transport & Travel',
    categorySlug: 'transport',
    description: 'Local point-to-point auto-rickshaws, cargo loading rickshaws, and outstation transport.',
    iconName: 'RotateCw',
    logoFile: 'logo-rickshaw.png',
    detailTitle: 'Shirwal Union Auto-Rickshaw',
    detailCopy: 'Safe and local commuting under transparent rates. Point-to-point pickup of goods/passengers across Shirwal city, bus stops, railway linkages, and industrial MIDC spots.'
  },
  {
    id: 'tours-and-travels',
    name: 'Tours & Travels',
    category: 'Transport & Travel',
    categorySlug: 'transport',
    description: 'Private car booking, outstation multi-day tourist cabs, airport pickups/drops (SND / Pune).',
    iconName: 'Map',
    logoFile: 'logo-tours-and-travels.png',
    detailTitle: 'Mahadkar Tours & Travels',
    detailCopy: 'Affordable vehicle hiring (Ertiga, Dzire, Innova). Experienced drivers who know regional paths, offering airport pickups, executive transfers, and pilgrimage packages.'
  },
  {
    id: 'car-services',
    name: 'Car Services (Mechanic & Garage)',
    category: 'Transport & Travel',
    categorySlug: 'transport',
    description: 'Engine oil replacement, car breakdown assistance, brake system diagnostics, wheel balancing.',
    iconName: 'Wrench',
    logoFile: 'logo-car-services.png',
    detailTitle: 'Shirwal AutoHub Garage',
    detailCopy: 'Comprehensive mechanical servicing for passenger cars of all makes. Quick breakdown roadside assistance, computer-assisted diagnostics, AC servicing, and bumper denting/painting.'
  },
  {
    id: 'car-wash',
    name: 'Car Wash Specialists',
    category: 'Transport & Travel',
    categorySlug: 'transport',
    description: 'High-pressure underbody cleaning, vacuuming, paint wax polishing, ceramic coating.',
    iconName: 'Dribbble',
    logoFile: 'logo-car-wash.png',
    detailTitle: 'AquaGleam Pro Car Detailing',
    detailCopy: 'Treat your car with detailing excellence. Utilizing snow foam pressurized washers, micro-fiber air dryings, vacuum interior deep cleans, tire dressings, and high-gloss polymer waxes.'
  }
];

export const BUSINESS_WHATSAPP = '917066644476';
export const FIXED_WHATSAPP_LINK = 'https://wa.me/917066644476';
