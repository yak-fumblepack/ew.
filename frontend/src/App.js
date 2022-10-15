import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar>
            <Navbar.Brand href="#home">ewmu</Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
}

export default App;
