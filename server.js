const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const { request, response } = require("express");

const allData = [
  {
    id: 1,
    title: "T-shirt",
    price: 109.95,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "T-shirt",
    price: 22.3,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Short-sleeve T-shirt",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61Eq6uGx22L._AC_UX569_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "T-shirt",
    price: 15.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "T-shirt",
    price: 695,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-400x488.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Slim-Fit Stretch Jean ",
    price: 168,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "men's clothing",
    image:
      "https://m.media-amazon.com/images/I/71d3VshsiBS._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61n-zY-j7+L._AC_UY550_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Lace Relaxed Boat Shoe",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61daWeZCT3L._AC_UY695_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Male Logo Hoodie",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/71MvNuCpL6L._AC_UX466_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Western Cowboy Boot",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/81ly7wJE3SL._AC_UY695_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Straight-Fit Jean",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/51Qr16SQ30S._AC_UX569_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 12,
    title: "Fossil Men's ",
    price: 1099,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's accessories",
    image: "https://m.media-amazon.com/images/I/712swHvvx1L._AC_UX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 13,
    title: "Sleeve Blouses",
    price: 109.95,
    description:
      "Henley Neckline, 3/4 Length Sleeve, Slim Fit, Floral Printed 85% Cotton,15% Linen",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/711FRtnJ44L._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Beaded Mesh Gown",
    price: 222.3,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/71xtP5TExAL._MCnd_AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 15,
    title: "Sculpt Bootcut Jeans",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/618jt05Lg-L._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 16,
    title: "Women's Indian Traditional",
    price: 75.99,
    description:
      "Xatuba. Top Fabric : Butterfly Net + Embroidery Work || Dupatta fabric: Butterfly Net + Embroidery Work || Bottom Fabric : Sartin || Inner Fabric : Sartin",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/81a+I9K5xJL._AC_UY741_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 17,
    title: "Two Pocket Snap Shirt",
    price: 15,
    description: "97% Cotton, 3% Spandex, comfortable and durable fabric",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61zLP9o-kVL._AC_UY550_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 18,
    title: "Areda Wedge Sandals ",
    price: 168,
    description:
      "Women's sandals with manmade/fabric or manmade upper with a round toe and adjustable hook-and-loop closure",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61W0FokjCCL._AC_UY575_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 19,
    title: " Maxi Dresses",
    price: 9.99,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/41blyoGj7jL._AC_UY550_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 20,
    title: "Lace Relaxed Boat Shoe",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61daWeZCT3L._AC_UY695_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 21,
    title: "Women's Floral",
    price: 64,
    description:
      " Tank Dress Design, Ruffle Skirt, No Pockets, Short Length, Solid Color, Dresses fits for any body shape, Your best choice for summer.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/71pqCtGKoCL._AC_UY741_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 22,
    title: "Blouson Dress",
    price: 109,
    description:
      "Dokotoo womens sleeveless casual cute dress is made with high-quality fabric, comfortable, stretchable, breathable, lightweight, soft, friendly to skin.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/618zUiRoeeL._AC_UX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 23,
    title: "Formal Party Dress",
    price: 109,
    description:
      "This dress is perfect for formal events, homecoming, prom, weddings, and special occasions",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/616rTKiRdVL._AC_UX569_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 24,
    title: "Womens Summer Dresses",
    price: 1099,
    description:
      "Women summer dresses 2023 outfits has a smocked elastic waistband that creates a nice visual separation from your belly to your bust and helps you look slimmer where it helps the dress fit snuggly.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61k4wUv00dL._AC_UY741_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
];

const fourDataMen = [
  {
    id: 1,
    title: "T-shirt",
    price: 109.95,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "T-shirt",
    price: 22.3,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Short-sleeve T-shirt",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61Eq6uGx22L._AC_UX569_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "T-shirt",
    price: 15.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
];

const fourDataWomen = [
  {
    id: 3,
    title: "Sculpt Bootcut Jeans",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/618jt05Lg-L._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Women's Indian Traditional",
    price: 75.99,
    description:
      "Xatuba. Top Fabric : Butterfly Net + Embroidery Work || Dupatta fabric: Butterfly Net + Embroidery Work || Bottom Fabric : Sartin || Inner Fabric : Sartin",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/81a+I9K5xJL._AC_UY741_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Two Pocket Snap Shirt",
    price: 15,
    description: "97% Cotton, 3% Spandex, comfortable and durable fabric",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61zLP9o-kVL._AC_UY550_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Areda Wedge Sandals ",
    price: 168,
    description:
      "Women's sandals with manmade/fabric or manmade upper with a round toe and adjustable hook-and-loop closure",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61W0FokjCCL._AC_UY575_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
];

const mensData = [
  {
    id: 1,
    title: "T-shirt",
    price: 109.95,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-400x488.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "T-shirt",
    price: 22.3,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a-400x488.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Short-sleeve T-shirt",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61Eq6uGx22L._AC_UX569_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "T-shirt",
    price: 15.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a-400x488.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "T-shirt",
    price: 695,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "men's clothing",
    image:
      "https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-03-a-400x488.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Slim-Fit Stretch Jean ",
    price: 168,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "men's clothing",
    image:
      "https://m.media-amazon.com/images/I/71d3VshsiBS._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61n-zY-j7+L._AC_UY550_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Lace Relaxed Boat Shoe",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/61daWeZCT3L._AC_UY695_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Male Logo Hoodie",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/71MvNuCpL6L._AC_UX466_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Western Cowboy Boot",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/81ly7wJE3SL._AC_UY695_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Straight-Fit Jean",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's clothing",
    image: "https://m.media-amazon.com/images/I/51Qr16SQ30S._AC_UX569_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 12,
    title: "Fossil Men's ",
    price: 1099,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "men's accessories",
    image: "https://m.media-amazon.com/images/I/712swHvvx1L._AC_UX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
];

const womensData = [
  {
    id: 1,
    title: "Sleeve Blouses",
    price: 109.95,
    description:
      "Henley Neckline, 3/4 Length Sleeve, Slim Fit, Floral Printed 85% Cotton,15% Linen",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/711FRtnJ44L._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Beaded Mesh Gown",
    price: 222.3,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/71xtP5TExAL._MCnd_AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Sculpt Bootcut Jeans",
    price: 55.99,
    description:
      "100% Cotton 100 percent high quality cotton t-shirt Athletic fit Super soft, comfortable and durable fabric",
    category: "women's clothing",
    image:
      "https://m.media-amazon.com/images/I/618jt05Lg-L._AC_UL600_FMwebp_QL65_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Women's Indian Traditional",
    price: 75.99,
    description:
      "Xatuba. Top Fabric : Butterfly Net + Embroidery Work || Dupatta fabric: Butterfly Net + Embroidery Work || Bottom Fabric : Sartin || Inner Fabric : Sartin",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/81a+I9K5xJL._AC_UY741_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "Two Pocket Snap Shirt",
    price: 15,
    description: "97% Cotton, 3% Spandex, comfortable and durable fabric",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61zLP9o-kVL._AC_UY550_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Areda Wedge Sandals ",
    price: 168,
    description:
      "Women's sandals with manmade/fabric or manmade upper with a round toe and adjustable hook-and-loop closure",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61W0FokjCCL._AC_UY575_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: " Maxi Dresses",
    price: 9.99,
    description:
      "99% Cotton, 1% Elastane Zipper closure Machine Wash Leg opening is 14.5",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/41blyoGj7jL._AC_UY550_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Lace Relaxed Boat Shoe",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61daWeZCT3L._AC_UY695_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "Women's Floral",
    price: 64,
    description:
      " Tank Dress Design, Ruffle Skirt, No Pockets, Short Length, Solid Color, Dresses fits for any body shape, Your best choice for summer.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/71pqCtGKoCL._AC_UY741_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "Blouson Dress",
    price: 109,
    description:
      "Dokotoo womens sleeveless casual cute dress is made with high-quality fabric, comfortable, stretchable, breathable, lightweight, soft, friendly to skin.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/618zUiRoeeL._AC_UX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title: "Formal Party Dress",
    price: 109,
    description:
      "This dress is perfect for formal events, homecoming, prom, weddings, and special occasions",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/616rTKiRdVL._AC_UX569_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 12,
    title: "Womens Summer Dresses",
    price: 1099,
    description:
      "Women summer dresses 2023 outfits has a smocked elastic waistband that creates a nice visual separation from your belly to your bust and helps you look slimmer where it helps the dress fit snuggly.",
    category: "women's clothing",
    image: "https://m.media-amazon.com/images/I/61k4wUv00dL._AC_UY741_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
];

const data = [];
const addCardId = [];
const cart = [];


app.post("/cart/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemToAdd = allData.find((item) => item.id === itemId);

  if (!itemToAdd) {
    return res.status(404).json({ error: "Item not found" });
  }

  cart.push(itemToAdd);
  res.json({ message: "Item added to cart", cart });
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

// ? remove card

app.delete("/cart/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = cart.findIndex((item) => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found in cart" });
  }

  cart.splice(itemIndex, 1);
  res.json({ message: "Item removed from cart", cart });
});

//? Clear the cart
app.post('/clear-cart', (req, res) => {
  cart.length = 0;
  res.status(200).json({ message: 'Cart has been cleared' });
});

// ? search

app.get("/search", (req, res) => {
  const searchTerm = req.query.q;

  if (!searchTerm) {
    return res.status(400).json({ message: "Missing search term" });
  }

  const searchResults = allData.title.filter((item) => item.includes(searchTerm));

  res.status(200).json(searchResults);
});



app.post("/create-data", (request, response) => {
  data.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});

app.post("/postId", (request, response) => {
  addCardId.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});



app.get("/getId", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: addCardId,
  });
});

app.get("/get-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: data,
  });
});

app.get("/get-all", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: allData,
  });
});

app.get("/get-mens", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: mensData,
  });
});

app.get("/fourDataWomen", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: fourDataWomen,
  });
});

app.get("/fourData", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: fourDataMen,
  });
});

app.get("/mens/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = mensData.find((item) => item.id === itemId);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});
app.get("/womens/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = womensData.find((item) => item.id === itemId);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.get("/get-womens", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: womensData,
  });
});

app.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.find((item) => item.id === itemId);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = data.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    data.splice(itemIndex, 1);
    res.status(200).json({ message: "Item deleted" });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});
