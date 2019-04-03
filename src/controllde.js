// import React, { Component } from 'react';

// class Controlled extends Component {
//     constructor(){
//         super();
//         this.state={
//             inputValue:'hello',
//             list:[1,2,3]
//         }
//     }
//     handChanhe=(e)=>{
//        // console.log(e.target.value)
//         this.setState({inputValue:e.target.value})
//     }
//     handClick=()=>{
//         // console.log(this.inp.value);
//         // this.inp.focus();

//         // let li=this.state.list;
//         //li.push(this.state.inputValue);
//         this.setState({
//             list:[...this.state.list,this.state.inputValue]
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input  id='inp' type="text" onChange={this.handChanhe} value={this.state.inputValue}/>
//                 <button className='btn' onClick={this.handClick}>提交</button>
//                 <ul>
//                     {this.state.list.map((item,index)=>{
//                         return <li dangerouslySetInnerHTML={{__html:item}}></li>
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default Controlled;
