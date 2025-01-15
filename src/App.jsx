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
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [trisDone, setTrisDone] = useState(false);

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
            <Col lg={4} className='pt-5'>
              <PlayersScore
                playerOneName={playerOneName}
                playerTwoName={playerTwoName}
                trisDone={trisDone}
                currentPlayer={currentPlayer}
              />

              {!trisDone ? (
                <>
                  <p>
                    <span className='fw-bold'>
                      {currentPlayer ? playerOneName : playerTwoName}
                    </span>
                    &apos;s turn with
                    <span className='fs-4 fw-bold d-inline-block ms-2'>
                      {currentPlayer ? 'X' : 'O'}
                    </span>
                  </p>
                </>
              ) : (
                <div className='d-flex justify-content-center mt-5'>
                  <Button variant='success'>Start new game!</Button>
                </div>
              )}
            </Col>
            <Col lg={8} className='d-flex flex-column align-items-center py-5'>
              <GameField
                playerOneName={playerOneName}
                playerTwoName={playerTwoName}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                trisDone={trisDone}
                setTrisDone={setTrisDone}
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
