import React, {Component} from 'react';

class FieldCountry extends Component {

  render() {
    let {value, onSearch, searchArray} = this.props;
    return(
        <div>
          <select className="form-control" value={value} onChange={onSearch}>
            {searchArray.map(marker => {
              return <option key={Math.random()}> {marker.name}</option>
            })}
          </select>
        </div>
    )
  }
}
export default FieldCountry;
