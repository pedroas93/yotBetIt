import React, {Component} from 'react';

class SearchWithName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    let {valueSearch, handleChange, searchCountry}= this.props; 
    return (
        <div className="row">
                <div className="col-md-8">
                    <input className="form-control" id="address.street" type="text" placeholder="search"
                        value={valueSearch}
                        required onChange={handleChange}
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                        <button onClick={searchCountry} className="btn btn-primary">Search</button>
                </div>
        </div>
    )
  }
}
export default SearchWithName;
