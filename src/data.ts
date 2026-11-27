import img1 from "./assets/images/regenerated_image_1782111828580.jpg";
import img2 from "./assets/images/regenerated_image_1782111830170.webp";
import img3 from "./assets/images/regenerated_image_1782111831187.jpg";
import img4 from "./assets/images/regenerated_image_1782111832067.jpg";
import img5 from "./assets/images/regenerated_image_1782111833901.webp";
import img6 from "./assets/images/regenerated_image_1783496946458.avif";

export const BUSINESS_INFO = {
  name: "Brahma Cabs Raipur",
  phone: "+91 6269933223",
  whatsapp: "+91 6269933223",
  email: "brahmacabs.raipur@gmail.com",
  domain: "brahmacabsraipur.in",
  address: "Raipur, Chhattisgarh",
  serviceArea: "Raipur and all major cities of Chhattisgarh",
  gstin: "22FMJPS7528K1ZG"
};

export const EV_ROUTES = [
  { destination: "Bilaspur", price: 1899 },
  { destination: "Durg", price: 1199 },
  { destination: "Bhilai", price: 999 },
  { destination: "Raigarh", price: 2699 },
  { destination: "Korba", price: 2699 },
  { destination: "Nagpur", price: 3999 },
  { destination: "Dhamtari", price: 1899 },
  { destination: "Mahasamund", price: 1499 },
  { destination: "Kawardha", price: 2299 }
];

export const STANDARD_ROUTES = [
  { destination: "Bilaspur", price: 2199 },
  { destination: "Durg", price: 1399 },
  { destination: "Bhilai", price: 1199 },
  { destination: "Raigarh", price: 3299 },
  { destination: "Korba", price: 3299 },
  { destination: "Nagpur", price: 4599 },
  { destination: "Dhamtari", price: 2499 },
  { destination: "Mahasamund", price: 2099 },
  { destination: "Kawardha", price: 2899 }
];

export const POPULAR_ROUTES = EV_ROUTES; // keeping this for any other components needing a quick route list


export const FLEET = [
  { name: "Tata Punch EV", type: "EV Cab", seats: "4 Seats + Driver", image: img1, ac: true, bookNow: true },
  { name: "Tata Tiago EV", type: "EV Cab", seats: "4 Seats + Driver", image: img2, ac: true, bookNow: true },
  { name: "Tata Nexon EV", type: "EV Cab", seats: "4 Seats + Driver", image: img3, ac: true, bookNow: true },
  { name: "Premium Sedan", type: "Sedan", seats: "4 Seats + Driver", image: img4, ac: true, bookNow: true },
  { name: "Spacious SUV", type: "SUV", seats: "6 Seats + Driver", image: img5, ac: true, bookNow: true },
  { name: "Spacious Renault Triber", type: "MUV", seats: "6 Seats + Driver", image: img6, ac: true, bookNow: true }
];

export const REVIEWS = [
  { id: 1, name: "Rahul Verma", rating: 5, text: "Excellent service! We booked an EV for our trip to Bilaspur. The driver was very professional and the car was spotless." },
  { id: 2, name: "Sneha Patel", rating: 5, text: "Very prompt and reliable. The fare was exactly what was quoted, no hidden charges. Highly recommended!" },
  { id: 3, name: "Amit Sharma", rating: 4, text: "Good experience overall. Comfortable journey from Raipur to Bhilai. Will book again." },
  { id: 4, name: "Priya Singh", rating: 5, text: "Super clean cab and very polite driver. Reached my destination safely on time. The ₹1899 bilaspur route is a steal." }
];

export const FAQS = [
  { question: "How do I book a cab?", answer: "You can book by directly calling us or sending a message on WhatsApp. We provide instant booking confirmation." },
  { question: "Is one-way booking available?", answer: "Yes, we offer both one-way and round-trip taxi services at very competitive rates." },
  { question: "Are EV cabs available?", answer: "Yes, mostly our fleet consists of comfortable and eco-friendly EV Cabs." },
  { question: "Do you provide airport pickup?", answer: "Absolutely! We provide 24x7 airport drop and pickup services from Swami Vivekananda Airport, Raipur." },
  { question: "Is round-trip service available?", answer: "Yes, you can book our cabs for a complete round-trip journey. Let us know while booking to get the best package." },
  { question: "Are drivers verified?", answer: "All our drivers are locally experienced, police-verified, and highly trained to ensure a safe journey." }
];
