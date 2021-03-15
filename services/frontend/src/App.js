import './App.css';
import Navigation from './components/Navigation/Navigation';
import ProductFeed from './components/ProductFeed/ProductFeed';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      <Navigation></Navigation>
      <Container>
        <ProductFeed></ProductFeed>
      </Container>
    </div>
  );
}

export default App;
