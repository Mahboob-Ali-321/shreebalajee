import { IMAGES } from "./images";

export interface Car {
  id: string;
  name: string;
  tag: string;
  type: "Hatchback" | "SUV" | "MPV";
  regNo?: string;
  subtitle: string;
  description: string;
  ratePerKm: number | null;
  rateText: string;
  minKmPerDay?: number;
  seats: string;
  acType: string;
  features: string[];
  imageUrl: string;
  imagePosition?: string;
  altText?: string;
  whatsappMessage: string;
}

export interface LocalPackage {
  id: string;
  hours: number;
  kms: number;
  title: string;
  subtitle: string;
  price: number;
  popular?: boolean;
  features: string[];
}

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  highlight: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  rating: number;
  timeAgo: string;
  badge?: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Shree Balajee Travels",
  hindiName: "श्री बालाजी ट्रेवल्स • धनबाद",
  tagline: "आपकी यात्रा, हमारी ज़िम्मेदारी",
  subtitle: "Local, Outstation & One-Way Drop Taxi Service",
  phone: "93102 41446",
  phoneRaw: "9311112923",
  callUrl: "tel:+919311112923",
  whatsappBase: "https://wa.me/919311112923",
  defaultWhatsAppUrl: "https://wa.me/919311112923?text=Hi%2C%20I%20want%20to%20book%20a%20cab",
  address: "Lane No 4, Jai Prakash Nagar, Bartand, Dhanbad, Jharkhand 826007",
  rating: 4.8,
  reviewCount: 152,
  operatingHours: "24 Hours / 7 Days a Week (24x7 Open)",
  landmark: "Near Bartand Bus Stand & Dhanbad Poly-technic Road",
  googleMapsEmbed: "https://www.google.com/maps?q=Shree+Balajee+Travels+Bartand+Dhanbad&ll=23.8068669,86.4295077&z=17&output=embed",
  googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=23.8068669,86.4295077",
  googleMapsView: "https://www.google.com/maps/cid=13490718521534785700",
};

export const FLEET_DATA: Car[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    tag: "Executive Class",
    type: "MPV",
    subtitle: "Premium Long Drive SUV",
    description: "Best-in-class comfort for family pilgrimage, corporate visits & long distance highway trips.",
    ratePerKm: 18,
    rateText: "₹18 / km",
    minKmPerDay: 300,
    seats: "6-7 Seater",
    acType: "Rear AC Vents",
    features: ["💺 6-7 Seater", "❄️ Rear AC Vents", "🧳 Large Luggage", "Min. 300 KM/Day"],
    imageUrl: IMAGES.innovaCrysta,
    altText: "Toyota Innova Crysta cab in Dhanbad",
    whatsappMessage: "Hi, I want to book Toyota Innova Crysta",
  },
  {
    id: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    tag: "Family Favorite",
    type: "MPV",
    subtitle: "Economical, spacious & comfortable",
    description: "Economical 6-seater option ideal for Ranchi airport drops, wedding guests & Deoghar temple tours.",
    ratePerKm: 15,
    rateText: "₹15 / km",
    minKmPerDay: 270,
    seats: "6 Seats",
    acType: "Dual AC",
    features: ["💺 6 Seats", "❄️ Dual AC", "⛽ Petrol / CNG", "Min. 270 KM/Day"],
    imageUrl: IMAGES.marutiErtiga,
    imagePosition: "center 55%",
    altText: "Maruti Suzuki Ertiga taxi in Dhanbad",
    whatsappMessage: "Hi, I want to book Maruti Ertiga",
  },
  {
    id: "honda-wrv",
    name: "Honda WR-V",
    tag: "Urban Cross",
    type: "SUV",
    subtitle: "Smooth & Compact Luxury",
    description: "High ground clearance and smooth ride tailored for local Dhanbad city errands and coal belt visits.",
    ratePerKm: null,
    rateText: "Ask for Best Fare",
    minKmPerDay: undefined,
    seats: "5 Seater",
    acType: "Climate AC",
    features: ["💺 5 Seater", "❄️ Climate AC", "🛣️ City & Highway", "Smooth Suspension"],
    imageUrl: IMAGES.hondaWrv,
    altText: "Honda WR-V cab in Dhanbad",
    whatsappMessage: "Hi, I want to book Honda WR-V",
  },
  {
    id: "mahindra-scorpio",
    name: "Mahindra Scorpio",
    tag: "Rugged Comfort",
    type: "SUV",
    subtitle: "Tough SUV for hilly roads & rural Jharkhand",
    description: "Commanding road presence and robust chassis, optimal for rough roads, ghats and VIP escort duties.",
    ratePerKm: 15,
    rateText: "₹15 / km",
    minKmPerDay: 270,
    seats: "7-9 Seater",
    acType: "Powerful AC",
    features: ["💺 7-9 Seater", "❄️ Powerful AC", "⛰️ High Ground Clearance", "Min 270 KM/day"],
    imageUrl: IMAGES.scorpioLineup,
    altText: "Mahindra Scorpio cab in Dhanbad",
    whatsappMessage: "Hi, I want to book Mahindra Scorpio",
  },
  {
    id: "maruti-swift",
    name: "Maruti Suzuki Swift",
    tag: "Most Economical",
    type: "Hatchback",
    subtitle: "Compact, stylish & fuel-efficient city car",
    description: "Smooth, comfortable and very economical for city rides, Dhanbad railway station pickups and drops, couples and small families.",
    ratePerKm: 13,
    rateText: "₹13 / km",
    minKmPerDay: 250,
    seats: "5 Seater",
    acType: "AC & Heater",
    features: ["💺 5 Seater", "❄️ AC & Heater", "⛽ Fuel Efficient", "Min 250 KM/day"],
    imageUrl: IMAGES.marutiSwift,
    imagePosition: "center 55%",
    altText: "Maruti Suzuki Swift cab in Dhanbad",
    whatsappMessage: "Hi, I want to book a Maruti Suzuki Swift",
  },
];

export const LOCAL_PACKAGES: LocalPackage[] = [
  {
    id: "pkg-2h",
    hours: 2,
    kms: 25,
    title: "2 Hours / 25 KM",
    subtitle: "Quick city errands & station drop",
    price: 500,
    features: ["Dhanbad City Limits", "Chilled AC Hatchback", "Station Pickup/Drop"],
  },
  {
    id: "pkg-4h",
    hours: 4,
    kms: 40,
    title: "4 Hours / 40 KM",
    subtitle: "Half day rental & shopping trips",
    price: 1000,
    features: ["Bank More / Bartand / Hirapur", "Clean AC Vehicle", "Waiting Included (4h)"],
  },
  {
    id: "pkg-6h",
    hours: 6,
    kms: 60,
    title: "6 Hours / 60 KM",
    subtitle: "Extended city tour & business meetings",
    price: 1700,
    features: ["Govindpur & Katras Coverage", "Unlimited Stopovers", "Verified Local Chauffeur"],
  },
  {
    id: "pkg-8h",
    hours: 8,
    kms: 80,
    title: "8 Hours / 80 KM",
    subtitle: "Full day Dhanbad local rental",
    price: 2000,
    popular: true,
    features: ["ISM, Maithon Dam & Bhatinda", "Full Day Dedicated Cab", "Doorstep Pickup & Drop"],
  },
  {
    id: "pkg-10h",
    hours: 10,
    kms: 100,
    title: "10 Hours / 100 KM",
    subtitle: "Full day extensive industrial & family visit",
    price: 2400,
    features: ["Complete Coalfield & Outskirts", "10 Full Hours with You", "Chauffeur Allowance Included"],
  },
];

export const ONE_WAY_ROUTES: RouteItem[] = [
  {
    id: "route-ranchi",
    from: "Dhanbad",
    to: "Ranchi (Airport / City)",
    distance: "Approx 150 KM",
    duration: "3.5 - 4 Hrs",
    highlight: "Birsa Munda Airport Transfer Specialist",
    popular: true,
  },
  {
    id: "route-kolkata",
    from: "Dhanbad",
    to: "Kolkata (Airport / Howrah)",
    distance: "Approx 270 KM",
    duration: "5.5 Hrs via NH19",
    highlight: "Smooth 6-lane Grand Trunk Road Drop",
    popular: true,
  },
  {
    id: "route-durgapur",
    from: "Dhanbad",
    to: "Durgapur / Asansol / Andal Airport",
    distance: "Approx 70 - 110 KM",
    duration: "1.5 - 2 Hrs",
    highlight: "Kazi Nazrul Islam Airport Connect",
  },
  {
    id: "route-deoghar",
    from: "Dhanbad",
    to: "Deoghar (Baba Baidyanath Dham)",
    distance: "Approx 115 KM",
    duration: "3 Hrs",
    highlight: "Pilgrimage Special • Family Darshan",
    popular: true,
  },
  {
    id: "route-jamshedpur",
    from: "Dhanbad",
    to: "Jamshedpur (Tatanagar)",
    distance: "Approx 145 KM",
    duration: "3.5 Hrs",
    highlight: "Steel City Business Express",
  },
  {
    id: "route-patna",
    from: "Dhanbad",
    to: "Patna Airport / Junction",
    distance: "Approx 290 KM",
    duration: "6.5 - 7 Hrs",
    highlight: "Interstate Bihar Outstation Trip",
  },
  {
    id: "route-bokaro",
    from: "Dhanbad",
    to: "Bokaro Steel City",
    distance: "Approx 45 KM",
    duration: "1 - 1.2 Hrs",
    highlight: "Quick Industrial Highway Shuttle",
  },
  {
    id: "route-parasnath",
    from: "Dhanbad",
    to: "Parasnath / Shikharji (Madhuban)",
    distance: "Approx 65 KM",
    duration: "1.5 Hrs",
    highlight: "Jain Pilgrimage Special",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Krishna Chaitanya Reddy",
    initials: "KC",
    rating: 5,
    timeAgo: "2 months ago",
    badge: "Verified Google Review",
    quote: "Booked Toyota Innova Crysta for Dhanbad to Ranchi Airport drop. The driver was 15 minutes early, car was spotless and ride was very comfortable. Highly recommended!",
  },
  {
    id: "rev-2",
    name: "Ashutosh Kumar",
    initials: "AK",
    rating: 5,
    timeAgo: "1 month ago",
    badge: "Business Commuter",
    quote: "Best taxi service in Dhanbad. Very honest billing with no extra hidden demands. Ertiga was in mint condition. Will book again.",
  },
  {
    id: "rev-3",
    name: "Rahul Kumar",
    initials: "RK",
    rating: 5,
    timeAgo: "3 weeks ago",
    badge: "Family Pilgrimage",
    quote: "Travelled with parents to Deoghar Baba Baidyanath Mandir. Driver was humble and drove carefully through highway curves. Excellent customer care.",
  },
  {
    id: "rev-4",
    name: "Amit Sengupta",
    initials: "AS",
    rating: 5,
    timeAgo: "1 month ago",
    badge: "Railway Drop",
    quote: "Prompt midnight pickup at Dhanbad Railway Station after late train. Safe driving and fair price to Bank More. Highly courteous driver.",
  },
  {
    id: "rev-5",
    name: "Dr. Sandeep Banerjee",
    initials: "SB",
    rating: 5,
    timeAgo: "2 weeks ago",
    badge: "Medical Emergency",
    quote: "Required emergency cab at 3 AM to visit hospital in Kolkata. Shree Balajee Travels responded within 2 minutes and dispatched Innova immediately.",
  },
  {
    id: "rev-6",
    name: "Vikram Raj",
    initials: "VR",
    rating: 5,
    timeAgo: "4 days ago",
    badge: "Airport Drop",
    quote: "One-way drop to Ranchi airport was seamless. Reached comfortably on time. No return fare asked. Very transparent!",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I book a cab in Dhanbad?",
    answer: "Simply call us at +91 93102 41446 or tap the WhatsApp button. Share pickup point, date, and car choice. We confirm within 2 minutes.",
  },
  {
    question: "Is one-way drop really without return fare?",
    answer: "Yes! For destinations like Ranchi, Kolkata, Durgapur, Bokaro, and Patna, you only pay for your journey without paying two-way charges.",
  },
  {
    question: "Are tolls, parking, and state tax included?",
    answer: "Highway toll taxes, parking fees, and interstate permits are billed transparently as per actual FASTag receipts generated during the journey.",
  },
  {
    question: "Can I book a cab for late night or early morning?",
    answer: "Yes, our operations operate 24 hours a day, 7 days a week. For early morning pickups (3 AM - 6 AM), we advise booking prior in the evening.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash payments after trip completion. No advance required for local city bookings.",
  },
  {
    question: "Do you offer wedding convoys or corporate packages?",
    answer: "Yes! We provide 5 to 15 vehicles together for weddings, IIT-ISM Dhanbad corporate conclaves, and VIP delegations with disciplined uniform drivers.",
  },
];
