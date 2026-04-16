// Product data for shah.knits - CORRECTLY matched from PDF layout

export const productCategories = [
  {
    id: 'hair-clips',
    name: 'Hair Clips',
    description: 'Adorable handcrafted crochet hair clips'
  },
  {
    id: 'claw-clips',
    name: 'Claw Clips',
    description: 'Stylish crochet claw clips for everyday wear'
  },
  {
    id: 'keychains',
    name: 'Keychains',
    description: 'Cute crochet keychains'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Unique crochet bags and decor'
  }
];

export const products = [
  // PDF PAGE 1 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 1,
    name: 'Rosy Charm Claw Clip',
    price: 125,
    category: 'claw-clips',
    image: '/products/product_img_p1_2.jpeg',  // TOP position
    description: 'Red rose-shaped crochet claw clip'
  },
  {
    id: 2,
    name: 'Sunflower Claw Clip',
    price: 145,
    category: 'claw-clips',
    image: '/products/product_img_p1_3.jpeg',  // MIDDLE position
    description: 'Yellow and brown sunflower crochet clip'
  },
  {
    id: 3,
    name: 'Beige Claw Clip',
    price: 155,
    category: 'claw-clips',
    image: '/products/product_img_p1_4.jpeg',  // BOTTOM position
    description: 'Textured woven beige crochet clip'
  },
  
  // PDF PAGE 2 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 4,
    name: 'Cherry Bow Clip',
    price: 175,
    category: 'hair-clips',
    image: '/products/product_img_p2_1.jpeg',  // TOP position
    description: 'Bright red textured bow clip'
  },
  {
    id: 5,
    name: 'Daisy Claw Clip',
    price: 145,
    category: 'claw-clips',
    image: '/products/product_img_p2_2.jpeg',  // MIDDLE position
    description: 'White and purple daisy crochet clip'
  },
  {
    id: 6,
    name: 'Cocoa Claw Clip',
    price: 195,
    category: 'claw-clips',
    image: '/products/product_img_p2_3.jpeg',  // BOTTOM position
    description: 'Brown textured flower crochet clip'
  },
  
  // PDF PAGE 3 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 7,
    name: 'Tulip Clutch Clip',
    price: 190,
    category: 'hair-clips',
    image: '/products/product_img_p3_2.jpeg',  // TOP position
    description: 'Pink tulip with green leaves clip'
  },
  {
    id: 8,
    name: 'Daisy Pinteresty Clip',
    price: 230,
    category: 'hair-clips',
    image: '/products/product_img_p3_3.jpeg',  // MIDDLE position
    description: 'White daisy cluster with pearl beads'
  },
  {
    id: 9,
    name: 'Sunflower Clutch Clip',
    price: 190,
    category: 'hair-clips',
    image: '/products/product_img_p3_4.jpeg',  // BOTTOM position
    description: 'Yellow sunflower crochet clip'
  },
  
  // PDF PAGE 4 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 10,
    name: 'Cookie Keychain',
    price: 150,
    category: 'keychains',
    image: '/products/product_img_p4_2.jpeg',  // TOP position
    description: 'Round textured cookie-style keychain'
  },
  {
    id: 11,
    name: 'Tulip Keychain',
    price: 200,
    category: 'keychains',
    image: '/products/product_img_p4_3.jpeg',  // MIDDLE position
    description: 'Pink tulip flower with green leaves keychain'
  },
  {
    id: 12,
    name: 'Daisy Keychain',
    price: 150,
    category: 'keychains',
    image: '/products/product_img_p4_4.jpeg',  // BOTTOM position
    description: 'White and yellow daisy keychain'
  },
  
  // PDF PAGE 5 - Three images at top (Airpods), then one below (Daisy Clutch)
  {
    id: 13,
    name: 'Floral Airpods Pouch',
    price: 220,
    category: 'accessories',
    image: '/products/product_img_p5_2.jpeg',  // One of the 3 top images
    description: 'Floral charm pouch - multiple colors available'
  },
  {
    id: 14,
    name: 'Daisy Clutch Clip',
    price: 230,
    category: 'hair-clips',
    image: '/products/product_img_p5_3.jpeg',  // Below the airpods section
    description: 'Red and pink flower cluster clip'
  },
  
  // PDF PAGE 6 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 15,
    name: 'Floral Clip',
    price: 95,
    category: 'hair-clips',
    image: '/products/product_img_p6_3.jpeg',  // TOP position
    description: 'Small white flower with yellow center'
  },
  {
    id: 16,
    name: 'Cute Angry Clip',
    price: 155,
    category: 'hair-clips',
    image: '/products/product_img_p6_2.png',  // MIDDLE position
    description: 'Red star-shaped clip'
  },
  {
    id: 17,
    name: 'Forever Gajra',
    price: 380,
    category: 'accessories',
    image: '/products/product_img_p6_4.jpeg',  // BOTTOM position
    description: 'Traditional white flower gajra garland'
  },
  
  // PDF PAGE 7 - Product positions: TOP, MIDDLE, BOTTOM
  {
    id: 18,
    name: 'Enchanted Lavender Whispers',
    price: 699,
    category: 'accessories',
    image: '/products/product_img_p7_2.jpeg',  // TOP position
    description: 'Lavender and purple flower bouquet'
  },
  {
    id: 19,
    name: 'Loop Love Bag',
    price: 699,
    category: 'accessories',
    image: '/products/product_img_p7_3.jpeg',  // MIDDLE position
    description: 'Pink crochet handbag with heart pattern'
  },
  {
    id: 20,
    name: 'Skyview Blossom',
    price: 499,
    category: 'accessories',
    image: '/products/product_img_p7_4.jpeg',  // BOTTOM position
    description: 'Pink flower in brown pot - decorative'
  }
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

// Helper function to get all products
export const getAllProducts = () => {
  return products;
};
