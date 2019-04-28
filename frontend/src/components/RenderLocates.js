import React, { Component } from "react";



class RenderLocates extends Component {


    render() {
        return (
            <div>
               Owner:{this.props.locates[0]}
               <br/>
               Cost in Wei:{this.props.locates[1]}
               <br/>
               Expiry Block#:{this.props.locates[2]}
               <br/>
               Amount to rent: {this.props.locates[3]}
               <br/>
               Signature:{JSON.stringify(this.props.locates.sig)}

       
            </div>


        );
    }
}



export default RenderLocates;











