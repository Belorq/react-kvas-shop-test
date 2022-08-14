import React from 'react';
import Prod from './Prod';


const Posts = (props) => {
  return (
    <div>
        {props.state.main.posts.map(post =>
            <Prod post={post} key={props.state.main.posts.id} />
        )}
    </div>
  );
}

export default Posts