import React, { Component } from "react";



class RenderLocates extends Component {


    render() {
        return (
            <div>
               {/* Owner:{this.props.locates[0]._hex}
               <br/>
               Cost in Wei:{this.props.locates[1]._hex}
               <br/>
               Expiry Block#:{this.props.locates[2]._hex}
               <br/>
               Amount to rent: {this.props.locates[3]._hex}
               <br/>
               Signature:{JSON.stringify(this.props.locates.sig)} */}
                {JSON.stringify(this.props.locates)}
       
            </div>


        );
    }
}



export default RenderLocates;











