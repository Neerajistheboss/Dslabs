import React,{Component} from "react";

class Practice extends Component{
    constructor(props) {
        super(props);
        this.state={
            num:1
        };
        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(e){
        let rand=Math.ceil(Math.random()*10);
        this.setState({num:rand});
    }

    render() {
        return (
            <div>
                <h1>Your Number is {this.state.num}</h1>
                <button onClick={this.clickHandler}>Try Again</button>
            </div>
        )
    }
}

export  default Practice;