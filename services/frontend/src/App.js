import './App.css';
import Navigation from './components/Navigation/Navigation';
import Product from './components/Product/Product';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <div className="row">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </Container>
    </div>
  );
}

export default App;
