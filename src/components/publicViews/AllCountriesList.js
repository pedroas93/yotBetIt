import React, {Component} from 'react';

class AllCountriesList extends Component {

  render() {
    let {value, searchArray} = this.props;
    return(
        <div className="scroll" style={{height: (window.innerHeight * .6)}}>
            <div>
                {searchArray.map(marker => {
                    if(value !== "All"){
                        if (value === marker.name) {                                    
                            return <button
                                    key={Math.random()}
                                    className="list-group-item list-group-item-action flex-column align-items-start "
                                >
                                <div className="justify-content-between">
                                    <small>{marker.region}</small>
                                    <h5 className="mb-1">
                                    {marker.name}
                                    </h5>
                                </div>
                                <p className="mb-1">
                                    {marker.subregion}
                                </p>
                            </button>
                        }
                    }else {
                        if(marker.name !== "All"){
                            return <button
                            key={Math.random()}
                            className="list-group-item list-group-item-action flex-column align-items-start "
                                >
                                <div className="justify-content-between">
                                    <small>{marker.region}</small>
                                    <h5 className="mb-1">
                                    {marker.name}
                                    </h5>
                                </div>
                                <p className="mb-1">
                                    {marker.subregion}
                                </p>
                            </button>
                        }
                    }
                })}
            </div>
        </div>
    )
  }
}
export default AllCountriesList;
