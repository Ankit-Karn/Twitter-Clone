import React from 'react'
import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  


     
      
  return (
    <div className={styles.logoBox}>
     <h2>What's happening</h2>

    <div className={styles.content} >
       
        <h6 style = {{color :"grey"}}>Politics · Trending</h6>
        <h5>#modi_Go_back</h5>
        <h6 style = {{color :"grey"}}>120K Tweets</h6>
    <div className={styles.second}>
        <h6 style = {{color :"grey"}}>Politics · Trending</h6>
        <h5>#modi_Go_back</h5>
        <h6 style = {{color :"grey"}}>120K Tweets</h6>
    </div>
        <div className={styles.second}>
        <h6 style = {{color :"grey"}}>Politics · Trending</h6>
        <h5>#modi_Go_back</h5>
        <h6 style = {{color :"grey"}}>120K Tweets</h6>
        </div>

        <div  className={styles.second}>
            <h6 style = {{color :"grey"}}>Politics · Trending</h6>
            <h5>#AnuragThakur</h5>
        </div>
     
    </div>
 
    
    </div>
  )
}
