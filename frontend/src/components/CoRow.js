import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'absolute',
        top: 300,
        left: 100,
        right: 100,
        bottom: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content : {
    //   top                   : '50%',
    // transparency: 1,
    //   left                  : '50%',
    //   right                 : 'auto',
    //   bottom                : 'auto',
    //   marginRight           : '-50%',
    //   transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement(document.getElementById('root'));

class CoRow extends Component {
    
    owned = () =>{
        return parseInt(this.props.holding) > 0
    }
    sellBtn = () =>{
        if (this.owned()){
            return <button>Sell</button>
        }
    }
    locateBtn = () =>{
        if (this.owned()){
            return <button className="btn btn-success">Locate</button>
        }
    }

    render() {
        return (
           <div>
               <Modal
                    isOpen={true}
                    style={customStyles}
                >
                <strong>OFFER LOCATE</strong>
                <br/>Ticker: {this.props.ticker}
                <br/>Expiry Block Number 
                <br/>Locate Fee
                <br/>Amount: {this.props.holding}
                <br/>My Address: {this.props.address}
                <br/><button>Submit</button>

                <br/><br/><br/> <button>Close</button>
                </Modal>



                <div className="row line-below">               
                    <div className="col-4 col-solid">{this.props.name}</div>
                    <div className="col-1 col-solid">{this.props.ticker}</div>
                    <div className="col-1 col-solid">{this.props.price}</div>
                    <div className="col-1 col-solid">{this.props.change}</div>
                    <div className="col-1 col-solid">{this.props.holding}</div>
                    <div className="col-1 col-solid"><button>Buy</button></div>
                    <div className="col-1 col-solid">{this.sellBtn()}</div>
                    <div className="col-1 col-solid"><button className="btn btn-danger">ShortSell</button></div>
                    <div className="col-1">{this.locateBtn()}</div>
                </div>

           </div>
            
            
        );
    }
}


function mapStateToProps(state) {
    return {
        // privKey : state.LoginDetails.privKey,
        // pubPrivKeypairValid : state.LoginDetails.pubPrivKeypairValid,
        address: state.LoginDetails.addressSignedIn,
        // addressIsValid: state.LoginDetails.addressIsValid,
        //pendingChannels: state.API_Database.PendingChannels
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // updateChButtons: (addressSignedIn) => {
        //     dispatch(LoginRedux.renderChButtons(dispatch, addressSignedIn))
        // },
        // handleAddressChange: (Event) => {
        //     dispatch(LoginRedux.handleAddressChange(dispatch, Event.target.value))  
        // },
        // handlePrivKeyChange: (Event) => {
        //     dispatch(LoginRedux.handlePrivKeyChange(dispatch, Event.target.value))
        // }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoRow);




//export default Login;
