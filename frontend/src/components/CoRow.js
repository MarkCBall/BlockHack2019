import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';
import ShortSell from "../redux/actions/ShortSell"


const customStyles = {
    overlay: {
        position: 'absolute',
        top: 300,
        left: 100,
        right: 100,
        bottom: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
  };
Modal.setAppElement(document.getElementById('root'));

class CoRow extends Component {
    constructor() {
        super();
        this.state = {
          locateModalIsOpen: false,
          shortModalIsOpen: false,
          expiry:100,
          fee:100000000000,

        };
    }

    openLocateModal = () => {
        this.setState({
            ...this.state,
            locateModalIsOpen: true,
            shortModalIsOpen: false,
        });
    }
    openShortModal = () => {
        this.setState({
            ...this.state,
            shortModalIsOpen: true,
            locateModalIsOpen: false,
        });
    }
    closeModals = () => {
        this.setState({
            ...this.state,
            locateModalIsOpen: false,
            shortModalIsOpen:false,
        });
    }


    
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
            return <button 
                className="btn btn-success"
                onClick={this.openLocateModal}
            >Lend Locate</button>
        }
    }
    shortBtn = () =>{
       return <button 
            className="btn btn-danger"
            onClick={this.openShortModal}
        >Rent Locate</button>
    }

    handleExpiryChange = (event) => {
        this.setState({
            ...this.state,
            expiry:event.target.value
        })
    }
    handleFeeChange = (event) => {
        //use bigNumber here
        this.setState({
            ...this.state,
            fee:event.target.value
        })
    }

    render() {
        return (
           <div>
               <Modal
                    isOpen={this.state.locateModalIsOpen}
                    style={customStyles}
                >
                    <strong>OFFER LOCATE</strong>
                    <br/>Ticker: {this.props.ticker}
                    <br/>Expiry Block Number: <input type="text" value={this.state.expiry} onChange={(event)=>this.handleExpiryChange(event)}/>
                    <br/>Locate Fee: <input type="text" value={this.state.fee} onChange={(event)=>this.handleFeeChange(event)}/>
                    <br/>Amount: {this.props.holding}
                    <br/>My Address: {this.props.address}
                    <br/><button
                        onClick={()=>{
                            this.props.offerLocate(
                                this.props.ticker,
                                this.props.address,
                                this.state.fee,
                                this.state.expiry,
                                this.props.holding
                            )
                        }}
                    >Submit</button>

                    <br/><br/><br/> <button onClick={this.closeModals}>Close</button>
                </Modal>


                <Modal
                    isOpen={this.state.shortModalIsOpen}
                    style={customStyles}
                >
                    <strong>BORROW TO SHORT</strong>
                    <br/>Ticker: {this.props.ticker}
                    <br/>Current Offers:

                    <br/><br/><br/> <button onClick={this.closeModals}>Close</button>
                    
                </Modal>






                <div className="row line-below">               
                    <div className="col-4 col-solid">{this.props.name}</div>
                    <div className="col-1 col-solid">{this.props.ticker}</div>
                    <div className="col-1 col-solid">{this.props.price}</div>
                    <div className="col-1 col-solid">{this.props.change}</div>
                    <div className="col-1 col-solid">{this.props.holding}</div>
                    <div className="col-1 col-solid"><button>Buy</button></div>
                    <div className="col-1 col-solid">{this.sellBtn()}</div>
                    <div className="col-1 col-solid">{this.shortBtn()}</div>
                    <div className="col-1">{this.locateBtn()}</div>
                </div>

           </div>
            
            
        );
    }
}


function mapStateToProps(state) {
    return {
        address: state.LoginDetails.addressSignedIn,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        offerLocate: (ticker,owner,weiFee,expiryBN,amount) => {
            dispatch(ShortSell.offerLocate(dispatch, ticker,owner,weiFee,expiryBN,amount))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoRow);




//export default Login;
