import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "Explore the iconic Westminister Bridge in London, a historic landmark offering stunning views of the Thames River and the city skyline.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 120,
    maxGroupSize: 8,
    desc: "Experience the serene beauty of Bali, Indonesia, with its lush landscapes, vibrant culture, and pristine beaches.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 150,
    maxGroupSize: 8,
    desc: "Discover the majestic Snowy Mountains in Thailand, a perfect destination for adventure and breathtaking views.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 110,
    maxGroupSize: 8,
    desc: "Witness the stunning sunrise in Thailand, a magical experience that will leave you in awe of nature's beauty.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 130,
    maxGroupSize: 8,
    desc: "Explore Nusa Pendia in Bali, Indonesia, a hidden gem known for its crystal-clear waters and dramatic cliffs.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 140,
    maxGroupSize: 8,
    desc: "Experience the enchanting Cherry Blossoms Spring in Japan, a seasonal spectacle of pink and white blooms.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 160,
    maxGroupSize: 8,
    desc: "Visit Holmen Lofoten in France, a picturesque destination with stunning landscapes and rich cultural heritage.",
    reviews: [
    
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 150,
    maxGroupSize: 8,
    desc: "Discover the majestic Snowy Mountains in Thailand, a perfect destination for adventure and breathtaking views.",
    reviews: [
    
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
