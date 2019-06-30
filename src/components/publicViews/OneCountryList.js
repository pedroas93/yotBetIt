import React, {Component} from 'react';

class OneCountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    let {searchArray, error}= this.props; 
    if( !error ){
        return (
            <div className=" d-lg-block col-lg-12" style={{height: (window.innerHeight * .4)}} >
                <div>
                    {searchArray.map(marker => {
                        return <button
                        key={Math.random()}
                        className="list-group-item list-group-item-action flex-column align-items-start scroll "
                            >
                            <div className="justify-content-between ">
                                <small>{marker.region}</small>
                                <h5 className="mb-1">
                                {marker.name}
                                </h5>
                            </div>
                            <p className="mb-1">
                                {marker.subregion}
                            </p>
                        </button>
                    })}
                </div>
            </div>
        )
    }else{
        return(
            <h3> This country don't exist</h3>
        )
    }
  }
}
export default OneCountryList;
