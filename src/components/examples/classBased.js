import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as  Action_Creator from './../helpers/Counter/Action_Creator';
class ClassBased extends Component {
    // state={
    //     Age : 21
    // }
    // AgeclickHandler=()=>{
    //     this.setState({
    //         ...this.state,
    //         Age : this.state.Age + 1
    //     })
    // }

    // AgeclickHandlerDec=()=>{
    //     this.setState({
    //         ...this.state,
    //         Age : this.state.Age - 1
    //     })
    // }
    render() {
        return (
            // <div onClick={this.props.clickHandler}>Hello I am Class</div>
            <div className="">
                <span>Age: <small>{this.props.age}</small></span>
                <button onClick={this.props.AgeclickHandler}>AGE UP</button>
                <button onClick={this.props.AgeclickHandlerDec}>AGE UP</button>
                    
                <hr />
                <div>History</div>
                <div>
                    <ul className="person">
                        {this.props.history.map(el => (
                            <li
                                className="historyItem"
                                key={el.id}
                                onClick={() => this.props.onDelEntry(el.id)}>
                                {el.age}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.counter.age, //need to define as which you defined on rootreducer
        history: state.counter.history
    }
}


const mapDispachToProps = (dispach) => {
    return {
        AgeclickHandler: () => dispach(Action_Creator.AgeclickHandler()),
        AgeclickHandlerDec: () => dispach(Action_Creator.AgeclickHandlerDec()),
        onDelEntry: (id) => dispach({ type: "DEL_ENTRY", id: id })
    }
}
export default connect(mapStateToProps, mapDispachToProps)(ClassBased);