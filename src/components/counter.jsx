import React, { Component } from 'react';

const spanStyle = {
    width: '45px'
};


class Counter extends Component {
    render() {

        //Destructuring 'this.props' arguments
        const { counter, onIncrement, onDecrement, onDelete,  } = this.props;

        return (
            <React.Fragment>
                <h5> Product #{ counter.id } </h5>
                <span style={spanStyle} className={this.getBadgeClasses()}> 
                    { this.countValue() } 
                </span>

                <button 
                    className="btn btn-secondary btn-sm m-2" 
                    onClick={ onIncrement }
                > 
                    + 
                </button>

                <button 
                    className="btn btn-secondary btn-sm" 
                    disabled={this.decrementDisabled()} 
                    onClick={ onDecrement }
                > 
                    - 
                </button>

                <button onClick={ onDelete } className="btn btn-danger btn-sm m-2">Delete</button>

                <br/>

            </React.Fragment>
        );
    }

    decrementDisabled(){
        return this.props.counter.value>0? false : true;
    }

    getBadgeClasses() {
        return "badge m-2 badge-" + (this.props.counter.value === 0 ? "warning" : "primary");
    }

    countValue(){
        //Destructuring 'this.props' arguments
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;