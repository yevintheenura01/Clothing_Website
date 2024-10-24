// models/itemModel.js

const items = [
    {
      id: 1,
      title: "Summer T-Shirt",
      description: "A light and comfortable t-shirt perfect for summer.",
      price: 26450,
      color: "Blue",
      size: "M",
      img: "/dress01.webp",
      additionalImages: [
        "/dress02.webp",
        "/dress03.webp",
        "/dress04.webp",
        "/dress05.webp",
        "/dress06.webp",
        "/dress07.webp",
        "/dress08.webp"
      ],
      trendImage: "/dress01.webp"
    },
    {
      id: 2,
      title: "Denim Jeans",
      description: "Classic blue denim jeans with a comfortable fit.",
      price: 49.99,
      color: "Blue",
      size: "32",
      img: "/uploads/denim-jeans.jpg",
      additionalImages: [
        "/uploads/dress02.webp",
        "/uploads/dress02.webp",
        "/uploads/dress02.webp"
      ],
      trendImage: "/uploads/trend-denim-jeans.jpg"
    },
    {
      id: 3,
      title: "Stylish Jacket",
      description: "A warm jacket for cool evenings.",
      price: 79.99,
      color: "Black",
      size: "L",
      img: "/uploads/stylish-jacket.jpg",
      trendImage: "/uploads/trend-stylish-jacket.jpg"
    }
  ];
  
  module.exports = items;
  