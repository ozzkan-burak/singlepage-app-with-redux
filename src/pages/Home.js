import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Colors from '../component/HOC/Renkler'
import Axios from 'axios';
import { thisExpression } from '@babel/types';


class HomePage extends Component {

  state={
    posts:[]
  }
  
  componentWillMount() {
    // component derlenmeden önce
  }
  

  componentDidMount() {
    // component derlendikten sonra ekrana render olmadan önce
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=> {
      console.log(res);
      this.setState({
        posts:res.data.slice(0,10)
      })
    })
  }
  

  render() {
    const {posts} = this.state;
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

export default Colors(HomePage);