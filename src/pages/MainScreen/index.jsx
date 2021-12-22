import React from 'react'
import {connect,useSelector} from "react-redux";
import './styles.css'
import PostForm from "../../components/PostForm/index";
import Post from '../../components/Post/index';

const selectPosts = (state)=>state.data

function MainScreen({location}){
  const username = location.state.username;
  const posts = useSelector(selectPosts)
  return(
    <div id="container-mainscreen">
      <div className="header">
      <h2>CodeLeap Network</h2>
      </div>

      <PostForm username={username}/>

      <main>
        {posts.map((post) => (
          <div key={post.id}>
            <Post username={username} post={post} key={post.id} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default connect() (MainScreen);