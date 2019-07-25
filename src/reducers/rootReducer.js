const initState={
  posts:[
    {id:'1', title:'Başlık 1', body:'Body 1'},
    {id:'2', title:'Başlık 2', body:'Body 2'},
    {id:'3', title:'Başlık 3', body:'Body 3'},
    {id:'4', title:'Başlık 4', body:'Body 4'},
    {id:'5', title:'Başlık 5', body:'Body 5'},
  ]
}

const rootReducer=(state=initState, action)=>{
  console.log(action);

  if(action.type === 'DELETE'){
    let newPost=state.posts.filter(post=>{
      return action.id !== post.id
    })
    return {
      ...state,
      posts:newPost
    }
  }
  return state;
}

export default rootReducer;