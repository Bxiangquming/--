import React, { Component } from 'react';
import DateSource from '../DateSource/DateSource';

class AddComment extends Component {
    render() {
        return (
            <div>
                <input type='text' ref={inp=>this.inp=inp}/>
                <button onClick={()=>DateSource.addComment(this.inp.value)}>添加评论</button>
            </div>
        );
    }
}

export default AddComment;
