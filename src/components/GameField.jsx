import { Component } from 'react';
import '/public/assets/css/gameField.css';
import FieldCell from './FieldCell';

class GameField extends Component {
  state = {
    currentSymbol: true,
    row1: { cel1: '', cel2: '', cel3: '' },
    row2: { cel1: '', cel2: '', cel3: '' },
    row3: { cel1: '', cel2: '', cel3: '' },
    trisDone: false,
  };

  rows = ['row1', 'row2', 'row3'];
  cels = ['cel1', 'cel2', 'cel3'];

  getRowsArray = () => {
    const myObj = {
      row1: [
        `${this.state.row1.cel1}`,
        `${this.state.row1.cel2}`,
        `${this.state.row1.cel3}`,
      ],
      row2: [
        `${this.state.row2.cel1}`,
        `${this.state.row2.cel2}`,
        `${this.state.row2.cel3}`,
      ],
      row3: [
        `${this.state.row3.cel1}`,
        `${this.state.row3.cel2}`,
        `${this.state.row3.cel3}`,
      ],
    };
    return myObj;
  };

  checkTris = () => {
    let myGrid;
    setTimeout(() => {
      myGrid = this.getRowsArray();

      // controllo tris sulle righe
      for (const [, value] of Object.entries(myGrid)) {
        if (value.every((element) => element === 'X')) {
          console.log('TRIS');
          this.setState({ trisDone: true });
        }
        if (value.every((element) => element === 'O')) {
          console.log('TRIS');
          this.setState({ trisDone: true });
        }
      }

      // controllo tris sulle colonne
      for (let i = 0; i < 3; i++) {
        if (
          myGrid.row1[i] == 'X' &&
          myGrid.row2[i] == 'X' &&
          myGrid.row3[i] == 'X'
        ) {
          console.log('TRIS');
          this.setState({ trisDone: true });
        }
        if (
          myGrid.row1[i] == 'O' &&
          myGrid.row2[i] == 'O' &&
          myGrid.row3[i] == 'O'
        ) {
          console.log('TRIS');
          this.setState({ trisDone: true });
        }
      }

      // controllo tris sulle diagonali
      if (
        myGrid.row1[0] == 'X' &&
        myGrid.row2[1] == 'X' &&
        myGrid.row3[2] == 'X'
      ) {
        console.log('TRIS');
        this.setState({ trisDone: true });
      }
      if (
        myGrid.row1[2] == 'X' &&
        myGrid.row2[1] == 'X' &&
        myGrid.row3[0] == 'X'
      ) {
        console.log('TRIS');
        this.setState({ trisDone: true });
      }
      if (
        myGrid.row1[0] == 'O' &&
        myGrid.row2[1] == 'O' &&
        myGrid.row3[2] == 'O'
      ) {
        console.log('TRIS');
        this.setState({ trisDone: true });
      }
      if (
        myGrid.row1[2] == 'O' &&
        myGrid.row2[1] == 'O' &&
        myGrid.row3[0] == 'O'
      ) {
        console.log('TRIS');
        this.setState({ trisDone: true });
      }
    }, 100);
  };

  updateCellValue = (rowNum, celNum) => {
    this.setState({
      row1: {
        ...this.state.row1,
        cel1: this.state.currentSymbol ? 'X' : 'O',
      },
      currentSymbol: !this.state.currentSymbol,
    });
  };

  render() {
    return (
      <>
        <div
          className='w-50 p-3 bg-body-tertiary'
          style={{ minWidth: '430px' }}
        >
          <div className='d-flex'>
            {/* <div
              className='fieldCell border-bottom border-end border-1 border-black'
              onClick={() => {
                if (this.state.row1.cel1 === '' && !this.state.trisDone) {
                  this.setState({
                    row1: {
                      ...this.state.row1,
                      cel1: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                }
                this.checkTris();
              }}
            >
              {this.state.row1.cel1}
            </div> */}
            <FieldCell
              myCell={this.state.row1.cel1}
              trisDone={this.state.trisDone}
              updateCellValue={this.updateCellValue}
              row={1}
              cel={1}
              checkTris={this.checkTris}
            />
            <div
              className='fieldCell border-start border-bottom border-end border-1 border-black'
              onClick={() => {
                if (this.state.row1.cel2 === '' && !this.state.trisDone) {
                  this.setState({
                    row1: {
                      ...this.state.row1,
                      cel2: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                }
                this.checkTris();
              }}
            >
              {this.state.row1.cel2}
            </div>
            <div
              className='fieldCell border-start border-bottom border-1 border-black'
              onClick={() => {
                if (this.state.row1.cel3 === '' && !this.state.trisDone) {
                  this.setState({
                    row1: {
                      ...this.state.row1,
                      cel3: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                }
                this.checkTris();
              }}
            >
              {this.state.row1.cel3}
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='fieldCell border-top border-end border-bottom border-1 border-black'
              onClick={() => {
                if (this.state.row2.cel1 === '' && !this.state.trisDone) {
                  this.setState({
                    row2: {
                      ...this.state.row2,
                      cel1: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row2.cel1}
            </div>
            <div
              className='fieldCell border border-1 border-black'
              onClick={() => {
                if (this.state.row2.cel2 === '' && !this.state.trisDone) {
                  this.setState({
                    row2: {
                      ...this.state.row2,
                      cel2: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row2.cel2}
            </div>
            <div
              className='fieldCell border-top border-bottom border-start border-1 border-black'
              onClick={() => {
                if (this.state.row2.cel3 === '' && !this.state.trisDone) {
                  this.setState({
                    row2: {
                      ...this.state.row2,
                      cel3: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row2.cel3}
            </div>
          </div>
          <div className='d-flex'>
            <div
              className='fieldCell border-top border-end border-1 border-black'
              onClick={() => {
                if (this.state.row3.cel1 === '' && !this.state.trisDone) {
                  this.setState({
                    row3: {
                      ...this.state.row3,
                      cel1: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row3.cel1}
            </div>
            <div
              className='fieldCell border-start border-end border-top border-1 border-black'
              onClick={() => {
                if (this.state.row3.cel2 === '' && !this.state.trisDone) {
                  this.setState({
                    row3: {
                      ...this.state.row3,
                      cel2: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row3.cel2}
            </div>
            <div
              className='fieldCell border-start border-top border-1 border-black'
              onClick={() => {
                if (this.state.row3.cel3 === '' && !this.state.trisDone) {
                  this.setState({
                    row3: {
                      ...this.state.row3,
                      cel3: this.state.currentSymbol ? 'X' : 'O',
                    },
                    currentSymbol: !this.state.currentSymbol,
                  });
                  this.checkTris();
                }
              }}
            >
              {this.state.row3.cel3}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GameField;
