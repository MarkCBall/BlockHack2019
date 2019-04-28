import React, { Component } from "react";
import { connect } from "react-redux";


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
        );
    }
}


function mapStateToProps(state) {
    return {
        // privKey : state.LoginDetails.privKey,
        // pubPrivKeypairValid : state.LoginDetails.pubPrivKeypairValid,
        // address: state.LoginDetails.addressSignedIn,
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
