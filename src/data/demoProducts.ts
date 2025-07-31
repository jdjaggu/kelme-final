export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

export const demoProducts: Product[] = [
  {
    id: "kelme-copa-football-boot",
    name: "KELME Copa Football Boot",
    price: 89.99,
    originalPrice: 119.99,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Football",
    description: "Premium leather football boots designed for optimal performance on natural grass surfaces. Features traditional styling with modern comfort technology.",
    features: [
      "Premium K-leather upper",
      "Traditional lacing system",
      "Cushioned insole",
      "Durable rubber outsole",
      "Classic black colorway"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White"],
    rating: 4.5,
    reviewCount: 128,
    isOnSale: true,
    isBestSeller: true
  },
  {
    id: "kelme-precision-futsal-shoe",
    name: "KELME Precision Futsal Shoe",
    price: 69.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Futsal",
    description: "Lightweight futsal shoes with excellent grip and ball control. Perfect for indoor courts and street football.",
    features: [
      "Synthetic leather upper",
      "Non-marking rubber sole",
      "Breathable mesh lining",
      "Reinforced toe cap",
      "Superior ball feel"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["Blue/White", "Black/Red"],
    rating: 4.3,
    reviewCount: 89,
    isNew: true
  },
  {
    id: "kelme-training-jersey",
    name: "KELME Training Jersey",
    price: 39.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Training",
    description: "Moisture-wicking training jersey with modern fit. Perfect for training sessions and casual wear.",
    features: [
      "Moisture-wicking fabric",
      "Lightweight and breathable",
      "Modern athletic fit",
      "Reinforced seams",
      "Easy care"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Red", "Black", "White"],
    rating: 4.4,
    reviewCount: 156,
    isBestSeller: true
  },
  {
    id: "kelme-women-training-short",
    name: "KELME Women's Training Shorts",
    price: 29.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Women",
    subcategory: "Training",
    description: "Comfortable training shorts with moisture-wicking technology. Features a flattering fit and practical side pockets.",
    features: [
      "Stretch fabric blend",
      "Moisture-wicking technology",
      "Side pockets",
      "Flattering fit",
      "Reflective details"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Pink"],
    rating: 4.6,
    reviewCount: 203,
    isNew: true
  },
  {
    id: "kelme-kids-football-kit",
    name: "KELME Kids Football Kit",
    price: 49.99,
    originalPrice: 59.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Kids",
    subcategory: "Football",
    description: "Complete football kit for young players. Includes jersey, shorts, and socks in team colors.",
    features: [
      "Complete 3-piece set",
      "Durable polyester fabric",
      "Team-inspired design",
      "Comfortable fit",
      "Machine washable"
    ],
    sizes: ["4-6 Years", "6-8 Years", "8-10 Years", "10-12 Years", "12-14 Years"],
    colors: ["Red/White", "Blue/White", "Black/Yellow"],
    rating: 4.7,
    reviewCount: 94,
    isOnSale: true
  },
  {
    id: "kelme-lifestyle-sneaker",
    name: "KELME Lifestyle Sneaker",
    price: 79.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Lifestyle",
    description: "Comfortable lifestyle sneakers with retro-inspired design. Perfect for everyday wear and casual outings.",
    features: [
      "Retro-inspired design",
      "Comfortable cushioning",
      "Durable construction",
      "Versatile styling",
      "Premium materials"
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White/Blue", "Black/White", "Grey/Red"],
    rating: 4.2,
    reviewCount: 167,
    isBestSeller: true
  },
  {
    id: "kelme-goalkeeper-gloves",
    name: "KELME Goalkeeper Gloves",
    price: 34.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Accessories",
    description: "Professional goalkeeper gloves with superior grip and protection. Features latex palm for excellent ball control.",
    features: [
      "4mm latex palm",
      "Finger protection",
      "Adjustable wrist strap",
      "Breathable backhand",
      "Professional quality"
    ],
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Yellow/Black", "Orange/Black"],
    rating: 4.5,
    reviewCount: 76,
    isNew: true
  },
  {
    id: "kelme-track-jacket",
    name: "KELME Track Jacket",
    price: 59.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Women",
    subcategory: "Training",
    description: "Stylish track jacket with modern design. Perfect for warm-ups, cool-downs, and casual wear.",
    features: [
      "Water-resistant fabric",
      "Full-zip closure",
      "Side pockets",
      "Elastic cuffs and hem",
      "Lightweight design"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black/White", "Navy/Red", "Pink/Grey"],
    rating: 4.3,
    reviewCount: 112,
    isBestSeller: true
  },
  {
    id: "kelme-football-socks",
    name: "KELME Football Socks",
    price: 12.99,
    images: ["/placeholder.svg"],
    category: "Men",
    subcategory: "Accessories",
    description: "High-quality football socks with moisture-wicking properties. Available in team colors.",
    features: [
      "Moisture-wicking yarn",
      "Cushioned heel and toe",
      "Arch support",
      "Durable construction",
      "Team colors available"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red", "Blue", "Yellow"],
    rating: 4.4,
    reviewCount: 234,
    isNew: true
  },
  {
    id: "kelme-training-bag",
    name: "KELME Training Bag",
    price: 44.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Men",
    subcategory: "Accessories",
    description: "Spacious training bag with multiple compartments. Perfect for carrying all your football gear.",
    features: [
      "Large main compartment",
      "Shoe compartment",
      "Water bottle holder",
      "Adjustable shoulder strap",
      "Durable materials"
    ],
    sizes: ["One Size"],
    colors: ["Black", "Navy", "Red"],
    rating: 4.6,
    reviewCount: 87,
    isBestSeller: true
  },
  
  // Additional Women's Products
  {
    id: "kelme-women-running-shoes",
    name: "KELME Women's Running Shoes",
    price: 79.99,
    originalPrice: 99.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Women",
    subcategory: "Running",
    description: "Lightweight running shoes designed for comfort and performance. Perfect for daily runs and training sessions.",
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable rubber outsole",
      "Lightweight design",
      "Moisture-wicking lining"
    ],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    colors: ["Pink/White", "Black/Purple", "Blue/White"],
    rating: 4.5,
    reviewCount: 145,
    isNew: true,
    isOnSale: true
  },
  {
    id: "kelme-women-sports-bra",
    name: "KELME Women's Sports Bra",
    price: 34.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Women",
    subcategory: "Training",
    description: "High-support sports bra with moisture-wicking fabric. Designed for medium to high-impact activities.",
    features: [
      "Medium to high support",
      "Moisture-wicking fabric",
      "Removable padding",
      "Racerback design",
      "Flatlock seams"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Pink", "Purple", "White"],
    rating: 4.6,
    reviewCount: 89,
    isBestSeller: true
  },
  {
    id: "kelme-women-yoga-pants",
    name: "KELME Women's Yoga Pants",
    price: 54.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Women",
    subcategory: "Training",
    description: "High-waisted yoga pants with four-way stretch fabric. Perfect for yoga, pilates, and everyday wear.",
    features: [
      "Four-way stretch fabric",
      "High-waisted design",
      "Side pockets",
      "Squat-proof material",
      "Flat-seam construction"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal", "Burgundy"],
    rating: 4.7,
    reviewCount: 201,
    isNew: true
  },
  
  // Additional Kids Products
  {
    id: "kelme-kids-soccer-cleats",
    name: "KELME Kids Soccer Cleats",
    price: 44.99,
    originalPrice: 54.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Kids",
    subcategory: "Football",
    description: "Durable soccer cleats designed for young players. Features excellent traction and comfort for growing feet.",
    features: [
      "Synthetic leather upper",
      "Molded studs",
      "Padded collar",
      "Easy on/off design",
      "Durable construction"
    ],
    sizes: ["10K", "11K", "12K", "13K", "1Y", "2Y", "3Y", "4Y", "5Y", "6Y"],
    colors: ["Black/White", "Blue/White", "Red/Black"],
    rating: 4.4,
    reviewCount: 76,
    isOnSale: true
  },
  {
    id: "kelme-kids-training-jacket",
    name: "KELME Kids Training Jacket",
    price: 39.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Kids",
    subcategory: "Training",
    description: "Lightweight training jacket for young athletes. Water-resistant and perfect for outdoor activities.",
    features: [
      "Water-resistant fabric",
      "Full-zip design",
      "Elastic cuffs",
      "Reflective details",
      "Lightweight material"
    ],
    sizes: ["4-6 Years", "6-8 Years", "8-10 Years", "10-12 Years", "12-14 Years"],
    colors: ["Blue", "Red", "Black", "Green"],
    rating: 4.3,
    reviewCount: 54,
    isBestSeller: true
  },
  
  // Additional Accessories
  {
    id: "kelme-sports-headband",
    name: "KELME Sports Headband",
    price: 14.99,
    images: ["/placeholder.svg"],
    category: "Accessories",
    subcategory: "Training",
    description: "Moisture-wicking sports headband to keep sweat out of your eyes during intense workouts.",
    features: [
      "Moisture-wicking fabric",
      "Non-slip grip",
      "Stretchy material",
      "Machine washable",
      "Lightweight design"
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Blue", "Pink", "Red"],
    rating: 4.2,
    reviewCount: 123,
    isNew: true
  },
  {
    id: "kelme-athletic-socks-pack",
    name: "KELME Athletic Socks 3-Pack",
    price: 19.99,
    images: ["/placeholder.svg", "/placeholder.svg"],
    category: "Accessories",
    subcategory: "Training",
    description: "Pack of three high-performance athletic socks with cushioning and moisture-wicking properties.",
    features: [
      "3-pack value",
      "Moisture-wicking yarn",
      "Cushioned heel and toe",
      "Arch compression",
      "Seamless toe construction"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mixed Pack", "All Black", "All White"],
    rating: 4.5,
    reviewCount: 167,
    isBestSeller: true
  }
];

export const getProductsByCategory = (category: string) => {
  return demoProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getProductsBySubcategory = (subcategory: string) => {
  return demoProducts.filter(product => product.subcategory.toLowerCase() === subcategory.toLowerCase());
};

export const getFeaturedProducts = () => {
  return demoProducts.filter(product => product.isBestSeller || product.isNew).slice(0, 8);
};

export const getNewArrivals = () => {
  return demoProducts.filter(product => product.isNew);
};

export const getBestSellers = () => {
  return demoProducts.filter(product => product.isBestSeller);
};

export const getSaleProducts = () => {
  return demoProducts.filter(product => product.isOnSale);
};
