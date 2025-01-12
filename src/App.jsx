import { Container, Row, Col } from 'react-bootstrap';
import PlayersScore from './components/PlayersScore';
import GameField from './components/GameField';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/app.css';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={4}>
            <PlayersScore />
          </Col>
          <Col
            lg={8}
            className='border border-1 border-success d-flex justify-content-center py-5'
          >
            <GameField />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
