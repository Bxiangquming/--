import React, { Component } from 'react';
import Comment from '../components/Comment'
import withSubscription from './CommentListWithSubscription';

class CommentList extends Component {
    
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.comments.map((item,index)=>(
                            <Comment comment={item.msg} key={index}/>
                        ))
                    }
                </ul>
                    
            </div>
        );
    }
}

export default withSubscription(CommentList,(ds)=>ds.getComments());
