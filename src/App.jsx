import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PlayersScore from './components/PlayersScore';
import GameField from './components/GameField';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/app.css';
import { useState } from 'react';

function App() {
  const [namesGiven, setNamesGiven] = useState(false);
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');

  return (
    <>
      <Container>
        {!namesGiven && (
          <div className='namesModule text-center'>
            <h2 className='mb-5'>Put Players&apos; names below:</h2>
            <Form onSubmit={() => setNamesGiven(true)}>
              <div className='d-flex justify-content-center align-items-center mb-3'>
                <Form.Label className='me-2'>Player1</Form.Label>
                <Form.Control
                  className='w-25'
                  value={playerOneName}
                  onChange={(e) => {
                    setPlayerOneName(e.target.value);
                  }}
                ></Form.Control>
              </div>
              <div className='d-flex justify-content-center mb-3 align-items-center'>
                <Form.Label className='me-2'>Player2</Form.Label>
                <Form.Control
                  className='w-25'
                  value={playerTwoName}
                  onChange={(e) => {
                    setPlayerTwoName(e.target.value);
                  }}
                ></Form.Control>
              </div>
              <Button type='submit'>Play!</Button>
            </Form>
          </div>
        )}

        {namesGiven && (
          <Row>
            <Col lg={4}>
              <PlayersScore
                playerOneName={playerOneName}
                playerTwoName={playerTwoName}
              />
            </Col>
            <Col
              lg={8}
              className='border border-1 border-success d-flex justify-content-center py-5'
            >
              <GameField />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
