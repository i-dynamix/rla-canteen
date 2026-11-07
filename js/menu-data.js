/*
  Menu data for RLA Canteen.
  Edit this file to change categories or items.
  Prices are in rupees. Use null for an item with no price yet;
  the app shows "Ask at counter" for those.
*/
const MENU = {
  "Chinese": {
    icon: "🥡", desc: "Noodles, rice, and spicy favourites.",
    items: [
      { name: "Chowmein", price: 40 },
      { name: "Veg Hakka Noodles", price: 50 },
      { name: "Fried Rice", price: 60 },
      { name: "Manchurian", price: 40 },
      { name: "Chilli Potato", price: 40 },
      { name: "Veg Spring Roll", price: 40 }
    ]
  },
  "Pasta": {
    icon: "🍝", desc: "Warm, creamy, and filling.",
    items: [
      { name: "Pasta", price: 40 },
      { name: "White Sauce Pasta", price: 60 },
      { name: "Cheese Pasta", price: 50 }
    ]
  },
  "Thali": {
    icon: "🍛", desc: "Complete meals on one plate.",
    items: [
      { name: "Plain Thali", price: 40 },
      { name: "Paneer Thali", price: 50 },
      { name: "Rajma Chawal", price: 40 },
      { name: "Panner Special Thali", price: 70}
    ]
  },
  "South Indian": {
    icon: "🥞", desc: "Crisp and fresh from the griddle.",
    items: [
      { name: "Dosa", price: 40 },
      { name: "Idli Sambar", price: 40 },
      { name: "Medu Vada", price: 50 },
      { name: "Uttapam", price: 50 }
    ]
  },
  "Snacks": {
    icon: "🥪", desc: "Quick bites between classes.",
    items: [
      { name: "Chole Bhature", price: 40 },
      { name: "Bread Omelette", price: 60 },
      { name: "Grilled Sandwich", price: 50 },
      { name: "Paneer Sandwich", price: 50 },
      { name: "Vada Pav", price: 40 },
      { name: "Maggi", price: 50 }
    ]
  },
  "Desserts": {
    icon: "🍨", desc: "Something sweet to finish.",
    items: [
      { name: "Gulab Jamun", price: 15 },
      { name: "Vanilla Ice Cream", price: 20 }
    ]
  },
  "Beverages": {
    icon: "☕", desc: "Hot and refreshing drinks.",
    items: [
      { name: "Chai", price: 10 },
      { name: "Small Hot Coffee", price: 20 },
      { name: "Cold Coffee", price: 50 },
      { name: "Sweet Lassi", price: 40 },
      { name: "Lemon Soda", price: 40 }
    ]
  }
};