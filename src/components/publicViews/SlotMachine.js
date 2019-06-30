import React, {Component} from 'react';

class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coins: 20,
        reels: ['-','-','-'],
        play: true,
        haveCoins: false
      };
  };

  spin = () =>{
    fetch('http://localhost:8010/slot_machine/:'+this.state.coins, {
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
    if(data[0].coins === 0){
        this.setState({
            coins: 'You dont have coins',
            haveCoins: true
          });
    }else{
        this.setState({
            coins: data[0].coins,
            reels: data[0].reels
          });
    }
  };
  failureDataResponse = (error) => {
    console.error(error)
  };
  element = () => (
    <div>
        <div className=" d-lg-block col-lg-12" style={{height: (window.innerHeight * .3)}}>
            <div className="list-group">
                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <h4>Question 4:</h4>
                    <h3>Slot Machine</h3>
                    <div
                        className="list-group-item list-group-item-action flex-column align-items-start align-items-center"
                            >
                            <div>
                                <h3>Coins: {this.state.coins}</h3>
                            </div>
                            <div className="row ">                                
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                    <h5>
                                    {this.state.reels[0]}
                                    </h5>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                    <h5 >
                                    {this.state.reels[1]}
                                    </h5>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                    <h5>
                                    {this.state.reels[2]}
                                    </h5>
                                </div>
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                        <button onClick={this.spin} disabled={this.state.haveCoins} className="btn btn-primary">Play</button>
                                </div>
                            </div>
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
export default SlotMachine;