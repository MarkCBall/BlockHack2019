

import { Provider } from "react-redux";
import store from "./redux/index";
import React, { Component } from "react";

import Login from "./components/Login";
import CoRow from "./components/CoRow";

import './App.css';


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Login />
                    <br/>
                    <br/>
                    <div className="row line-below">
                        <div className="col-4 col-solid">Name</div>
                        <div className="col-1 col-solid">Ticker</div>
                        <div className="col-1 col-solid">Price</div>
                        <div className="col-1 col-solid">Change</div>
                        <div className="col-1 col-solid">Holdings</div>
                        <div className="col-4"></div>
                    </div>

                    <CoRow
                        name="Fake stock company"
                        ticker="FAKE"
                        price="99"
                        change="+2(+2.02%)"
                        holding="300"
                    />

                    <CoRow
                        name="ImagineTech"
                        ticker="IMTE"
                        price="13"
                        change="-1(-8%)"
                        holding="120"
                    />
                    <CoRow
                        name="Better Chain Block"
                        ticker="BCB"
                        price="260"
                        change="+600(+30%)"
                        holding="5"
                    />
                    <CoRow
                        name="Prospestive"
                        ticker="PRO"
                        price="20"
                        change="+0(+0%)"
                        holding="0"
                    />
                    <CoRow
                        name="Node Send"
                        ticker="NS"
                        price="3"
                        change="-1(-25%)"
                        holding="0"
                    />
                    
                </div>
            </Provider>
        );
    }
}
export default App;
