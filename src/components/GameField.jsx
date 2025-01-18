import { useEffect, useState } from 'react';
import '/public/assets/css/gameField.css';
import FieldCell from './FieldCell';

const emptyRow = {
  cel1: '',
  cel2: '',
  cel3: '',
};

const GameField = (props) => {
  // state = {
  //   currentSymbol: true,
  //   row1: { cel1: '', cel2: '', cel3: '' },
  //   row2: { cel1: '', cel2: '', cel3: '' },
  //   row3: { cel1: '', cel2: '', cel3: '' },
  // };

  const [currentSymbol, setCurrentSymbol] = useState(true);
  const [row1, setRow1] = useState({ ...emptyRow });
  const [row2, setRow2] = useState({ ...emptyRow });
  const [row3, setRow3] = useState({ ...emptyRow });

  const getRowsArray = () => {
    const myObj = {
      row1: [`${row1.cel1}`, `${row1.cel2}`, `${row1.cel3}`],
      row2: [`${row2.cel1}`, `${row2.cel2}`, `${row2.cel3}`],
      row3: [`${row3.cel1}`, `${row3.cel2}`, `${row3.cel3}`],
    };
    return myObj;
  };

  const checkTris = () => {
    let myGrid;
    setTimeout(() => {
      myGrid = getRowsArray();

      // controllo tris sulle righe
      for (const [, value] of Object.entries(myGrid)) {
        if (value.every((element) => element === 'X')) {
          itsTris();
        }
        if (value.every((element) => element === 'O')) {
          itsTris();
        }
      }

      // controllo tris sulle colonne
      for (let i = 0; i < 3; i++) {
        if (
          myGrid.row1[i] == 'X' &&
          myGrid.row2[i] == 'X' &&
          myGrid.row3[i] == 'X'
        ) {
          itsTris();
        }
        if (
          myGrid.row1[i] == 'O' &&
          myGrid.row2[i] == 'O' &&
          myGrid.row3[i] == 'O'
        ) {
          itsTris();
        }
      }

      // controllo tris sulle diagonali
      if (
        myGrid.row1[0] == 'X' &&
        myGrid.row2[1] == 'X' &&
        myGrid.row3[2] == 'X'
      ) {
        itsTris();
      }
      if (
        myGrid.row1[2] == 'X' &&
        myGrid.row2[1] == 'X' &&
        myGrid.row3[0] == 'X'
      ) {
        itsTris();
      }
      if (
        myGrid.row1[0] == 'O' &&
        myGrid.row2[1] == 'O' &&
        myGrid.row3[2] == 'O'
      ) {
        itsTris();
      }
      if (
        myGrid.row1[2] == 'O' &&
        myGrid.row2[1] == 'O' &&
        myGrid.row3[0] == 'O'
      ) {
        itsTris();
      }
    }, 100);
  };

  const itsTris = () => {
    props.setTrisDone(true);
    console.log('TRIS');
  };

  const updateCellValue = (rowNum, celNum) => {
    switch (rowNum) {
      case 1:
        if (celNum === 1) {
          setRow1({
            ...row1,
            cel1: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 2) {
          setRow1({
            ...row1,
            cel2: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 3) {
          setRow1({
            ...row1,
            cel3: currentSymbol ? 'X' : 'O',
          });
        }
        break;
      case 2:
        if (celNum === 1) {
          setRow2({
            ...row2,
            cel1: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 2) {
          setRow2({
            ...row2,
            cel2: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 3) {
          setRow2({
            ...row2,
            cel3: currentSymbol ? 'X' : 'O',
          });
        }
        break;
      case 3:
        if (celNum === 1) {
          setRow3({
            ...row3,
            cel1: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 2) {
          setRow3({
            ...row3,
            cel2: currentSymbol ? 'X' : 'O',
          });
        } else if (celNum === 3) {
          setRow3({
            ...row3,
            cel3: currentSymbol ? 'X' : 'O',
          });
        }
        break;
    }
    setCurrentSymbol(!currentSymbol);
    props.setCurrentPlayer(!props.currentPlayer);
    console.log(props.currentPlayer);
  };

  useEffect(() => {
    if (props.newGame === true) {
      setRow1({ ...emptyRow });
      setRow2({ ...emptyRow });
      setRow3({ ...emptyRow });
      setCurrentSymbol(true);
    }
  }, [props.newGame]);

  return (
    <>
      <div className='w-50 p-3 bg-body-tertiary' style={{ minWidth: '430px' }}>
        <div className='d-flex'>
          <FieldCell
            myCell={row1.cel1}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={1}
            cel={1}
            checkTris={checkTris}
            classes='border-bottom border-end'
          />

          <FieldCell
            myCell={row1.cel2}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={1}
            cel={2}
            checkTris={checkTris}
            classes='border-start border-bottom border-end'
          />

          <FieldCell
            myCell={row1.cel3}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={1}
            cel={3}
            checkTris={checkTris}
            classes='border-bottom border-start'
          />
        </div>

        <div className='d-flex'>
          <FieldCell
            myCell={row2.cel1}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={2}
            cel={1}
            checkTris={checkTris}
            classes='border-top border-bottom border-end'
          />

          <FieldCell
            myCell={row2.cel2}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={2}
            cel={2}
            checkTris={checkTris}
            classes='border'
          />

          <FieldCell
            myCell={row2.cel3}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={2}
            cel={3}
            checkTris={checkTris}
            classes='border-top border-bottom border-start'
          />
        </div>

        <div className='d-flex'>
          <FieldCell
            myCell={row3.cel1}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={3}
            cel={1}
            checkTris={checkTris}
            classes='border-top border-end'
          />

          <FieldCell
            myCell={row3.cel2}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={3}
            cel={2}
            checkTris={checkTris}
            classes='border-start border-top border-end'
          />

          <FieldCell
            myCell={row3.cel3}
            trisDone={props.trisDone}
            updateCellValue={updateCellValue}
            row={3}
            cel={3}
            checkTris={checkTris}
            classes='border-start border-top'
          />
        </div>
      </div>

      {props.trisDone && (
        <h4 className='mt-4'>
          Complimenti!{' '}
          {!currentSymbol ? props.playerOneName : props.playerTwoName} ha fatto
          TRIS
        </h4>
      )}
    </>
  );
};

export default GameField;
