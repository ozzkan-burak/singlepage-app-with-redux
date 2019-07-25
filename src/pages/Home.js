import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class HomePage extends Component {

  
  

  render() {
    const {posts} = this.props;
    const postsList = posts.length ? (
      posts.map(post=> {
        return(
          <div className="card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p className="card-body">{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>Veriler Yükleniyor</div>
    )
    return(
      <div className="container">
        <h4 className="center">Anasayfa</h4>
        {postsList}
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(HomePage);