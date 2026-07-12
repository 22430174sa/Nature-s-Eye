import Beach from '../assets/Beach-1-.webp';
import amjad1 from '../assets/AMJAD 1.jpg';
import amjad3 from '../assets/AMJAD AYOUB 2.jpg';
import amjad2 from '../assets/AMJAD AYOUB 3.jpg';
const destinations = [
  {
    id: 1,
    title: "Maldives Beach",
    category: "Beaches",
    image:Beach,
    location: "Maldives",
  },

  {
    id: 2,
    title: "Amazon Forest",
    category: "Forests",
    image: Beach,
    location: "Brazil",
  },
  {
    id: 3,
    title: "Wadi El-Milh",
    category: "Mountains",
    image: amjad1,
    location: "United Arab Emirates",
    description: "A spectacular rugged canyon path carved through the mountains, boasting natural freshwater pools, rocky riverbeds, and raw cliffside trails.",
    photographer: "Amjad Ayoub"
  },
  {
    id: 4,
    title: "Bali Island",
    category: "Islands",
    image: Beach,
    location: "Indonesia",
  },
  {
    id: 5,
    title: "Pacific Ocean",
    category: "Oceans",
    image: Beach,
    location: "Pacific",
  },
  {
    id: 7,
    title: "Baatara Gorge Waterfall - Tannourine",
    category: "Mountains",
    image: amjad3,
    location: "North Lebanon",
    description: "An extraordinary geological sinkhole where seasonal mountain streams cascade down 255 meters through three ancient, stacked limestone bridges.",
    photographer: "Amjad Ayoub"
  },
  {
    id: 8,
    category: "Mountains",
    title: "Aammiq Wetland",
    image:amjad2, 
    description: "A panoramic view of Lebanon's largest freshwater wetland reserve.",
    photographer: "Amjad Ayoub"
  },
];

export default destinations;