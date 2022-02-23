import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    
    render() { 
        //Destructuring 'this.props' arguments
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <button 
                    onClick={ onReset }
                    className="btn btn-primary m-2"
                > Reset </button>

                { counters.map( counter => 
                    <Counter 
                        key={ counter.id }
                        onDelete={ () => onDelete(counter.id) } 
                        onIncrement={ () => onIncrement(counter) }
                        onDecrement={ () => onDecrement(counter) }
                        counter={ counter }
                    /> 
                )}
            </div>
        );
    }
}
 
export default Counters;