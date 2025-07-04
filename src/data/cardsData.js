import saladImg from '../assets/salad0.webp';
import bruchettaImg from '../assets/bruchetta.webp';
import lemonImg from '../assets/lemonDessert.webp';

const dishes = [
  {
    id: '1',
    img: saladImg,
    title: 'Greek Salad',
    price: '12.99$',
    'short-details': 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and croutons.',
    'full-details': 'A fresh and vibrant Greek salad with crispy lettuce and colorful peppers. Includes tangy olives and creamy Chicago-style feta cheese. Topped with crunchy garlic and rosemary-infused croutons. Perfectly balanced textures and bold Mediterranean flavors. A refreshing dish that’s both satisfying and delicious.'
  },
  {
    id: '2',
    img: bruchettaImg,
    title: 'Bruchetta',
    price: '8.99$',
    'short-details': 'Our Bruschetta is made from grilled bread that has been generously smeared with garlic and perfectly seasoned with salt and olive oil.',
    'full-details': 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, creating a perfect balance of savory flavors with every bite.'
  },
  {
    id: '3',
    img: lemonImg,
    title: 'Lemon Dessert',
    price: '3.99$',
    'short-details': 'This comes straight from grandma’s recipe book, every ingredient has been sourced and is as authentic as can be imagined.',
    'full-details': 'This comes straight from grandma’s recipe book, passed down through generations with love and care. Every last ingredient has been carefully sourced to ensure the highest quality and authenticity, capturing the essence of traditional flavors as they were meant to be enjoyed. Each bite is a tribute to timeless culinary heritage and the comforting tastes of home.'
  }
];

export default dishes;