// interface
import Sneaker from "../interfaces/Sneaker.ts";

const sneakers: Sneaker[] = [
  {
    id: "27b6ad06-ef68-4b1a-9e03-78a948251e34",
    brand: "Nike",
    name: "Air Jordan 4s",
    variant: "Fire Red",
    price: 470,
    sizes: [
      {
        size: 6,
      },
      {
        size: 7,
        outOfStock: true,
      },
      {
        size: 8,
      },
      {
        size: 9,
      },
      {
        size: 10,
      },
      {
        size: 11,
      },
      {
        size: 12,
      },
    ],
    description:
      "A shoe product that is the latest release with a contemporary design that refers to the style of young people's clothing with a contemporary style that uses leading materials and designs",
    rating: 4.8,
    thumbnail: "https://i.ytimg.com/vi/oo4yyieM63I/maxresdefault.jpg",
    images: [
      "https://i.ytimg.com/vi/oo4yyieM63I/maxresdefault.jpg",
      "https://www.allaboutanthony.com/wp-content/uploads/2020/10/Air-Jordan-4-Fire-Red-2020-WDYWT-On-Feet.jpg",
      "https://www.lacesout.net/wp-content/uploads/2016/05/air-jordan4-on-feet.jpg",
    ],
  },
  {
    id: "27b6ad06-ef68-4b1a-9e03-78a948251e35",
    brand: "Nike",
    name: "Air Jordan 4s",
    variant: "Green Glow",
    price: 490,
    sizes: [
      {
        size: 6,
      },
      {
        size: 7,
        outOfStock: true,
      },
      {
        size: 8,
      },
      {
        size: 9,
        outOfStock: true,
      },
      {
        size: 10,
      },
      {
        size: 11,
      },
      {
        size: 12,
      },
    ],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt accusantium iure natus libero! Dignissimos debitis ullam itaque, aspernatur fugit harum.",
    rating: 5,
    thumbnail:
      "https://images.solecollector.com/complex/image/upload/okyy3shb6hma6fef7ap0.jpg",
    images: [
      "https://images.solecollector.com/complex/image/upload/okyy3shb6hma6fef7ap0.jpg",
      "https://external-preview.redd.it/tELa2TMTKsoYDnbyfLFo2yJfraKSvxsbKpk9vj9Dat8.jpg?width=640&crop=smart&auto=webp&s=6bbc3010ab94ee7d6c1d3ea064b14b9e51618029",
      "https://c1.staticflickr.com/3/2851/12124688345_b27b7813e0_z.jpg",
    ],
  },
];

export default sneakers;
