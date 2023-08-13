import logo from './logo.svg';
import './App.css';
import { ShopItemClass } from './components/ShopItemClass';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

export function App() {
  return (
    <div class="container">
    <div class="background-element">
    </div>
    <div class="highlight-window">
      <div class='highlight-overlay'></div>
    </div>
    <div class="window">
      <ShopItemClass item={item} />
    </div>
  </div>
  );
}

export default App;
