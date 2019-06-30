import React, {Component} from 'react';
import FieldCountry from './FieldCountry';
import AllCountriesList from './AllCountriesList';

class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchArray: [],
        search: 'All'
      };
  };
  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all', {
      method: "GET",
      body: JSON.stringify(),
    }).then(
        function(u){ return u.json();}
      )
      .then(this.successDataResponse)
      .catch(this.failureDataResponse);
  }
  successDataResponse = (data) => {
    this.setState({
        searchArray: [{name: "All"}, ...data],
        mapArray: data
      })
  };
  failureDataResponse = (error) => {
    console.error(error)
  };
  onSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };
  element = () => (
    <div>
        <div className=" d-lg-block col-lg-12 scroll" style={{height: (window.innerHeight * .9)}}>
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <h4>Question 3:</h4>
                    <h3>List of Contries</h3>
                    <h1>Select country</h1>
                    <div>
                        <FieldCountry
                            value={this.state.search}
                            onSearch={this.onSearch}
                            searchArray={this.state.searchArray}
                        />
                    </div>
                    <div>
                        <AllCountriesList
                            value={this.state.search}
                            searchArray={this.state.searchArray}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
  render() {
    return this.element();
  }
}
export default CountriesList;
