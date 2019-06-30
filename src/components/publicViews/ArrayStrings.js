import React, {Component} from 'react';
import 'antd/dist/antd.css';

import { Tag, Input, Tooltip, Icon } from 'antd';

class ArrayStrings extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tags: ['write the tring: '],
        inputVisible: false,
        inputValue: '',
        countries: [],
      };
  };
  searchCountry = () =>{
    this.setState({
        countries: []
      });
    this.state.tags.forEach(element => {
        fetch('http://localhost:8010/country_partialName/:'+element, {
            method: "GET",
            body: JSON.stringify(),
          }).then(
              function(u){ 
                  return u.json();
                }
            )
            .then(this.successDataResponse)
            .catch(this.failureDataResponse);
    });
  }
  successDataResponse = (data) => {
    //   console.log('ENTER2????', data)
      if(!data[0].status){
        //   console.log('DATA NAME IS-->', data[0], 'the state countries is-->', this.state.countries );
          if(!( this.state.countries.includes( data[0] ) )){
            //   console.log('ENTER TO HERE????---->', data[0]);
              
              data[0].forEach(element => {
                console.log('ELEMENT IS --->', element);
                this.setState({
                    countries: [element, ...this.state.countries]
                  });
              });
          }
      }
      // this.setState({searchArray: data[0], error: false})
  };
  failureDataResponse = (error) => {
      console.log('ENTER333???');
    console.error(error)
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        <div className=" d-lg-block col-lg-12" style={{height: (window.innerHeight * .5)}}>
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <h4>Question 2:</h4>
                    <h3>Array of String Contries</h3>
                    <div>
                        {tags.map((tag, index) => {
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? (
                                <Tooltip title={tag} key={tag}>
                                {tagElem}
                                </Tooltip>
                            ) : (
                                tagElem
                            );
                            })}
                            {inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type="text"
                                size="small"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                            />
                            )}
                            {!inputVisible && (
                            <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                                <Icon type="plus" /> New Tag
                            </Tag>
                            )}
                    </div>
                    <br/>
                    <div className="">
                        <button onClick={this.searchCountry} className="btn btn-primary">Search</button>
                    </div>
                    <div className="scroll" style={{height: (window.innerHeight * .2)}} >
                        <div>
                            {this.state.countries.map(marker => {
                                return <button
                                key={Math.random()}
                                className="list-group-item list-group-item-action flex-column align-items-start scroll "
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
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ArrayStrings;