
let comments=[
    {id:1,msg:'11111'},
    {id:2,msg:'11111'},
    {id:3,msg:'11111'}
];
let blogs=[
    {id:1,msg:'11111'},
    {id:2,msg:'11111'},
    {id:3,msg:'11111'}
]
let index=4
let listeners = [

];
let DateSource={
    getComments(){
        return comments;
    },
    getBlogPost(){
        return blogs;
    },
    addComment(data){
        comments.push({
            id:index++,
            msg:data
        })
        DateSource.doListener();
        console.log(comments);
    }, 
    addChangeListene(listener){
        listeners.push(listener);
    },
    removeChangeListene(){

    },
    doListener(){
        listeners.forEach((item)=>{
            item();
        })
    }
}
export default DateSource