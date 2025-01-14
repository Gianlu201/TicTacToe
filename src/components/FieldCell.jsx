import { Component } from 'react';

class FieldCell extends Component {
  render() {
    return (
      <div
        className={`fieldCell border-1 border-black ${this.props.classes}`}
        onClick={() => {
          if (this.props.myCell === '' && !this.props.trisDone) {
            this.props.updateCellValue(this.props.row, this.props.cel);
            setTimeout(() => {
              this.props.checkTris();
            }, 100);
          }
        }}
      >
        {this.props.myCell}
      </div>
    );
  }
}

export default FieldCell;
