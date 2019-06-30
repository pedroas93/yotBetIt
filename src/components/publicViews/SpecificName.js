import React, {Component} from 'react';
import SearchWithName from './SearchWithName';
import OneCountryList from './OneCountryList';

class SpecificName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valueSearch: '',
        searchArray: [],
        error: false,
      };
  };

  onSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  searchCountry = () =>{
    fetch('http://localhost:8010/country_fullName/:'+this.state.valueSearch, {
        method: "GET",
        body: JSON.stringify(),
      }).then(
          function(u){ 
              return u.json();
            }
        )
        .then(this.successDataResponse)
        .catch(this.failureDataResponse);
  }
  successDataResponse = (data) => {
    if(data[0].status){
        this.setState({error: true}) 
    }else{
        this.setState({searchArray: data[0], error: false})
    }
  };
  failureDataResponse = (error) => {
    console.error(error)
  };
  handleChange = (valueSearch) =>{
    this.setState({valueSearch: valueSearch.target.value});
  }
  element = () => (
    <div>
        <div className=" d-lg-block col-lg-12" >
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <h4>Question 1:</h4>
                    <h3>Search Name Specific</h3>
                    <SearchWithName
                        valueSearch = {this.state.valueSearch}
                        handleChange = {this.handleChange}
                        searchCountry = {this.searchCountry}
                    />
                    <OneCountryList
                        searchArray = {this.state.searchArray}
                        error = {this.state.error}
                    />
                </div>
            </div>
        </div>
    </div>
  );
  render() {
    return this.element();
  }
}
export default SpecificName;
