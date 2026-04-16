// Product data for shah.knits - CORRECTED mapping from PDF

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
  // Page 1 - Claw Clips (images in order: _2, _3, _4)
  {
    id: 1,
    name: 'Rosy Charm Claw Clip',
    price: 125,
    category: 'claw-clips',
    image: '/products/product_img_p1_2.jpeg',
    description: 'Red rose-shaped crochet claw clip'
  },
  {
    id: 2,
    name: 'Sunflower Claw Clip',
    price: 145,
    category: 'claw-clips',
    image: '/products/product_img_p1_3.jpeg',
    description: 'Yellow and brown sunflower crochet clip'
  },
  {
    id: 3,
    name: 'Beige Claw Clip',
    price: 155,
    category: 'claw-clips',
    image: '/products/product_img_p1_4.jpeg',
    description: 'Textured woven beige crochet clip'
  },
  
  // Page 2 - Hair Clips (images in order: _1, _2, _3)
  {
    id: 4,
    name: 'Cherry Bow Clip',
    price: 175,
    category: 'hair-clips',
    image: '/products/product_img_p2_1.jpeg',
    description: 'Bright red textured bow clip'
  },
  {
    id: 5,
    name: 'Daisy Claw Clip',
    price: 145,
    category: 'claw-clips',
    image: '/products/product_img_p2_2.jpeg',
    description: 'White and purple daisy crochet clip'
  },
  {
    id: 6,
    name: 'Cocoa Claw Clip',
    price: 195,
    category: 'claw-clips',
    image: '/products/product_img_p2_3.jpeg',
    description: 'Brown textured flower crochet clip'
  },
  
  // Page 3 - Hair Clips (images in order: _2, _3, _4)
  {
    id: 7,
    name: 'Tulip Clutch Clip',
    price: 190,
    category: 'hair-clips',
    image: '/products/product_img_p3_2.jpeg',
    description: 'Pink tulip with green leaves clip'
  },
  {
    id: 8,
    name: 'Daisy Pinteresty Clip',
    price: 230,
    category: 'hair-clips',
    image: '/products/product_img_p3_3.jpeg',
    description: 'White daisy cluster with pearl beads'
  },
  {
    id: 9,
    name: 'Sunflower Clutch Clip',
    price: 190,
    category: 'hair-clips',
    image: '/products/product_img_p3_4.jpeg',
    description: 'Yellow sunflower crochet clip'
  },
  
  // Page 4 - Keychains (images in order: _2, _3, _4)
  {
    id: 10,
    name: 'Cookie Keychain',
    price: 150,
    category: 'keychains',
    image: '/products/product_img_p4_2.jpeg',
    description: 'Round textured cookie-style keychain'
  },
  {
    id: 11,
    name: 'Tulip Keychain',
    price: 200,
    category: 'keychains',
    image: '/products/product_img_p4_3.jpeg',
    description: 'Pink tulip flower with green leaves keychain'
  },
  {
    id: 12,
    name: 'Daisy Keychain',
    price: 150,
    category: 'keychains',
    image: '/products/product_img_p4_4.jpeg',
    description: 'White and yellow daisy keychain'
  },
  
  // Page 5 - Accessories (images: _2 for airpods, _3 and _4 for daisy clips)
  {
    id: 13,
    name: 'Floral Airpods Pouch',
    price: 220,
    category: 'accessories',
    image: '/products/product_img_p5_2.jpeg',
    description: 'Floral charm pouch - multiple colors available'
  },
  {
    id: 14,
    name: 'Daisy Clutch Clip',
    price: 230,
    category: 'hair-clips',
    image: '/products/product_img_p5_3.jpeg',
    description: 'Red and pink flower cluster clip'
  },
  
  // Page 6 - Hair Accessories (images: _3 for floral, _2 for angry, _4 for gajra)
  {
    id: 15,
    name: 'Floral Clip',
    price: 95,
    category: 'hair-clips',
    image: '/products/product_img_p6_3.jpeg',
    description: 'Small white flower with yellow center'
  },
  {
    id: 16,
    name: 'Cute Angry Clip',
    price: 155,
    category: 'hair-clips',
    image: '/products/product_img_p6_2.png',
    description: 'Red star-shaped clip'
  },
  {
    id: 17,
    name: 'Forever Gajra',
    price: 380,
    category: 'accessories',
    image: '/products/product_img_p6_4.jpeg',
    description: 'Traditional white flower gajra garland'
  },
  
  // Page 7 - Special Items (images: _2, _3, _4)
  {
    id: 18,
    name: 'Enchanted Lavender Whispers',
    price: 699,
    category: 'accessories',
    image: '/products/product_img_p7_2.jpeg',
    description: 'Lavender and purple flower bouquet'
  },
  {
    id: 19,
    name: 'Loop Love Bag',
    price: 699,
    category: 'accessories',
    image: '/products/product_img_p7_3.jpeg',
    description: 'Pink crochet handbag with heart pattern'
  },
  {
    id: 20,
    name: 'Skyview Blossom',
    price: 499,
    category: 'accessories',
    image: '/products/product_img_p7_4.jpeg',
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
