import React, { Component } from 'react';
import Comment from './Comment'
import DateSource from '../DateSource/DateSource'


class CommentList extends Component {
    constructor(){
        super();
        this.state = {
            comments:DateSource.getComments()
        }
    }
    componentDidMount(){
        DateSource.addChangeListene(this.handleChange);
    }
    handleChange=()=>{
        this.setState({
            comments:DateSource.getComments()
        })
    }
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

export default CommentList;
