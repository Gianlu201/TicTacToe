import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const PrevGamesBox = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [myArr, setMyArr] = useState([]);

  let lastFields = [];

  useEffect(() => {
    if (props.prevFields !== lastFields) {
      lastFields = props.prevFields;
      setMyArr([...lastFields].reverse());
    }
    setIsLoaded(true);
  }, [props.prevFields]);

  return (
    <>
      {isLoaded > 0 && (
        <div className='w-75 d-flex flex-column align-items-center opacity-50'>
          {myArr.map((game) => {
            return (
              <div key={'ciao'} className='w-50 display-4 fw-normal my-4'>
                <div>
                  <Row xs={3}>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-end border-bottom border-1 border-black'
                    >
                      {game.row1.cel1}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-start border-end border-bottom border-1 border-black'
                    >
                      {game.row1.cel2}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-start border-bottom border-1 border-black'
                    >
                      {game.row1.cel3}
                    </Col>
                  </Row>
                  <Row xs={3}>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-top border-bottom border-end border-1 border-black'
                    >
                      {game.row2.cel1}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border border-1 border-black'
                    >
                      {game.row2.cel2}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-start border-top border-bottom border-1 border-black'
                    >
                      {game.row2.cel3}
                    </Col>
                  </Row>
                  <Row xs={3}>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-top border-end border-1 border-black'
                    >
                      {game.row3.cel1}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-start border-top border-end border-1 border-black'
                    >
                      {game.row3.cel2}
                    </Col>
                    <Col
                      style={{ aspectRatio: '1/1' }}
                      className='d-flex justify-content-center align-items-center border-start border-top border-1 border-black'
                    >
                      {game.row3.cel3}
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PrevGamesBox;
