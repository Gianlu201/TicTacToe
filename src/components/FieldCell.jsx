import { Component } from 'react';

class FieldCell extends Component {
  render() {
    return (
      <div
        className='fieldCell border-bottom border-end border-1 border-black'
        onClick={() => {
          if (this.props.myCell === '' && !this.props.trisDone) {
            // this.setState({
            //   row1: {
            //     ...this.state.row1,
            //     cel1: this.state.currentSymbol ? 'X' : 'O',
            //   },
            //   currentSymbol: !this.state.currentSymbol,
            // });
            this.props.updateCellValue(this.props.row, this.props.cel);
          }
          this.props.checkTris();
        }}
      >
        {this.props.myCell}
      </div>
    );
  }
}

export default FieldCell;
