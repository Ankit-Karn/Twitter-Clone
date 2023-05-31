import React, { useState } from 'react'
import style from './Icons.module.css';
import { BiHeart,BiRepost,BiComment } from "react-icons/bi";


function Icons() {
    const[heartCount, setHeartCount]=useState(0);
    const[repostCount, setRepostCount]=useState(0);
    const[commentCount, setCommentCount]=useState(0);
   function onHeartClick(){
setHeartCount(heartCount+1)
    }
    function onRepostClick(){
        setRepostCount(repostCount+1);
    }
    function onCommentClick(){
        setCommentCount(commentCount+1);
    }
  return (
    <div>
      <div className={style.postStastics}>
        <div onClick={onHeartClick} className={style.heart} title='Like'>
          <BiHeart  /> {heartCount}
        </div>
        <div onClick={onRepostClick} className={style.repost} title='Repost'>
          <BiRepost  /> {repostCount}
        </div>
        <div onClick={onCommentClick} className={style.comment} title='Comment'>
          <BiComment  /> {commentCount}
        </div>
    
      </div>
    </div>
  )
}

export default Icons;
