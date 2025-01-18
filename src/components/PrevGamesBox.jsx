import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const PrevGamesBox = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [myArr, setMyArr] = useState([]);

  let lastFields = [];

  useEffect(() => {
    if (props.prevFields !== lastFields) {
      setMyArr(props.prevFields.reverse());
      lastFields = props.prevFields;
    }
    setIsLoaded(true);
  }, [props.prevFields]);

  return (
    <>
      {isLoaded > 0 && (
        <div>
          {myArr.map((game) => {
            return (
              <div key={game.id} className='my-3'>
                <Row xs={3}>
                  <Col className='border-end border-bottom border-1 border-black'>
                    {game.row1.cel1}
                  </Col>
                  <Col className='border-start border-end border-bottom border-1 border-black'>
                    {game.row1.cel2}
                  </Col>
                  <Col className='border-start border-bottom border-1 border-black'>
                    {game.row1.cel3}
                  </Col>
                </Row>
                <Row xs={3}>
                  <Col className='border-top border-bottom border-end border-1 border-black'>
                    {game.row2.cel1}
                  </Col>
                  <Col className='border border-1 border-black'>
                    {game.row2.cel2}
                  </Col>
                  <Col className='border-start border-top border-bottom border-1 border-black'>
                    {game.row2.cel3}
                  </Col>
                </Row>
                <Row xs={3}>
                  <Col className='border-top border-end border-1 border-black'>
                    {game.row3.cel1}
                  </Col>
                  <Col className='border-start border-top border-end border-1 border-black'>
                    {game.row3.cel2}
                  </Col>
                  <Col className='border-start border-top border-1 border-black'>
                    {game.row3.cel3}
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PrevGamesBox;
