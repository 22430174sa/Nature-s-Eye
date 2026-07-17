import Beach from '../assets/Beach-1-.webp';
import amjad1 from '../assets/AMJAD 1.jpg';
import amjad3 from '../assets/AMJAD AYOUB 2.jpg';
import amjad2 from '../assets/AMJAD AYOUB 3.jpg';
import Lagoon from '../assets/Island-1-.webp';
/*import mount1 from '..assets/WhatsApp Image 2026-04-16 at 5.01.22 PM.jpeg'*/
import card1 from '../assets/Card3 - Copy.jpg';
import card2 from '../assets/Card2.jpg';
import card3 from '../assets/Card1.jpg';
import ocean2 from '../assets/Login Background.jpg';
import forest1 from '../assets/Forest 1.jpg'
import forest2 from'../assets/Forest 2.jpg'
const destinations = [
  {
    id: 1,
    title: "Trunk Bay- St. John",
    category: "Beaches",
    image:Beach,
    location: "U.S. Virgin Islands",
    description: "A breathtaking tropical bay where crystal-clear turquoise waters and a white-sand shoreline are framed by the lush, protected hills of the Virgin Islands National Park.",
    photographer: "Stock Photo"
  },

  {
    id: 2,
    title: "Arashiyama Bamboo Grove",
    category: "Forests",
    image: forest1,
    location: "Kyoto, Japan",
    description: "A serene and world-famous walking path winding through towering, bright-green stalks of bamboo that rustle gently in the morning wind.",
    photographer: "Stock Photo"
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
  title: "Coron Island",
  category: "Islands",
  image: Lagoon,
  location: "Philippines",
  description: "A breathtaking panoramic overview of Coron Island's crystal-clear turquoise lagoon surrounded by towering, lush limestone karst cliffs.",
  photographer: "Warren Camitan"
},
  {
     
    id: 5,
    title: "Victoria Falls (Mosi-oa-Tunya)",
    category: "Oceans",
    image: card2,
    location: "Zambia / Zimbabwe Border",
    description: "A spectacular aerial view of the world's largest curtain of falling water, where the mighty Zambezi River plummets over 100 meters into a sheer basalt gorge.",
    photographer: "Stock Photo"
  

  },
  {
     id: 6,
    title: "Ko Ta Pu (James Bond Island)",
    category: "Islands",
    image: card3,
    location: "Phang Nga Bay, Thailand",
    description: "A striking vertical limestone islet rising dramatically from emerald-green waters, famously featured in silver screen cinema and nestled within Ao Phang Nga National Park.",
    photographer: "Stock Photo"
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
  {
    id:9,
    title: "Säntis Mountain - Alpstein Massif",
    category:"Mountains",
    image:card1,
    location: "Appenzell Alps, Switzerland",
    description: "A dramatic panoramic view of the majestic Alpstein range towering over the vibrant, sun-drenched green pastures and pine forests of the Appenzell region.",
    photographer: "Alessandra Meniconzi"


   
  },
    {
    id: 10,
    title: "Iguazu Falls",
    category: "Oceans",
    image: ocean2,
    location: "Argentina / Brazil Border",
    description: "A spectacular semicircular system of nearly 275 individual waterfalls cascading amidst a vibrant, subtropical rainforest reserve.",
    photographer: "Stock Photo"
  },
  {
    id: 11,
    title: "Redwood National and State Parks",
    category: "Forests",
    image: forest2,
    location: "California, USA",
    description: "A majestic dirt hiking trail meandering beneath some of the tallest, ancient giant sequoia and coast redwood trees on Earth.",
    photographer: "Stock Photo"
  }

];

export default destinations;