import React,{ Component} from "react";

class Timestamp extends Component{
    render(){
        return(
            <span className="timestamp">{this.props.time}</span>
        )
    }
}

export default Timestamp