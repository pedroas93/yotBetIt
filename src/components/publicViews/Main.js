import React, {Component} from 'react';
import CountriesList from './CountriesList';
import SpecificName from './SpecificName';
import ArrayStrings from './ArrayStrings';
import SlotMachine from './SlotMachine';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Main: []
    };
  };
  element = () => (
    <div>
        <center><h1 className = "align-items-center">COUNTRIES</h1></center>
        <SpecificName/>
        <ArrayStrings/>
        <CountriesList/>
        <SlotMachine/>
    </div>
  );
  render() {
    return this.element();
  }
}
export default Main;
