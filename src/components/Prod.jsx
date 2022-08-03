import React from 'react'

const Prod = (props) => {
  return (
    <div className='prodClas' style={props.post.grad}>
        <div className='desc'>
            <div className='pic' style={props.post.pic}></div>
            <div>
            <h1 className='titlePr'>{props.post.title}</h1>
            <div className='description'>{props.post.body}</div>
            </div>
            <br />
        </div>
    </div>
  )
}

export default Prod

