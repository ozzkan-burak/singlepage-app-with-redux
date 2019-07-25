import React, { Component } from 'react';
import {connect} from 'react-redux';

import {deletePost} from '../actions/deleteActions'; 

class Post extends Component {

  handleClick=()=>{
    console.log(this.props);
    this.props.dltPost(this.props.data.id);
    this.props.history.push('/');
  }

  render() {

    const post=this.props.data ? (
      <div>
        <h4 className="center">{this.props.data.title}</h4>
        <p>{this.props.data.body}</p>
        <button className="btn grey" onClick={this.handleClick}>Sil</button>
      </div>
    ) : (
      <div className ="center">
        <h6>Veri Yükleniyor</h6>
        </div>
    )

    return(
      <div className="conatiner">
          {post}
      </div>
    );
  }
}

const mapStatetoProps = (state, selfProps) => {
  let id=selfProps.match.params.postId;
  return{
    data:state.posts.find(post=>post.id===id)
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    dltPost:(id)=>{
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Post);