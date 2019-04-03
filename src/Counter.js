import React, { Component } from 'react';
import store from './store';
console.log(store.getState());

class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{ 
            this.setState({
                num:store.getState().counter
            });
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action={type:'DEC'};
        store.dispatch(action);
    }
    incrementIfOdd=()=> {
      let action={type:'add_odd'};
      if(store.getState().counter % 2 !== 0){
          store.dispatch(action);
      }
    }
    //
    incrementAsync(delay = 1000) {
      let action={type:'add_async'};
      setTimeout(function(){
          store.dispatch(action);
      },1000);
    }
    render() {
        return (
            <div>
                <p>
                  Clicked: <span>{this.state.num}</span> times
                  <br />
                  <button onClick={this.handleAdd}>+</button>
                  <button onClick={this.handleDec}>-</button>
                  <br />
                  <button onClick={this.incrementIfOdd}>Increment if odd</button>
                  <button onClick={this.incrementAsync}>Increment async</button>
                  </p>
            </div>
        );
    }
}

export default Counter;
