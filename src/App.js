import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarraNav from './components/BarraNav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <BarraNav />
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;