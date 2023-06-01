import styles from './MainSection.module.css'
import React, { useEffect, useState } from 'react'
import { BsImages } from 'react-icons/bs'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { Button } from '@mui/material'
import { BsFiles } from "react-icons/bs";



const TweetCard = ({ tweet }) => {
  return (
    <div className={styles.tweetCard}>

    <div className={styles.tweetCard2}>
      <img src={tweet.image}  className={styles.tweetCardImgP}/>
      
      <div className={styles.tweetCard2Detail}>
      <h3 className={styles.tweetCardh3}>{tweet.name}</h3>
      <p className={styles.tweetCardh4}> {tweet.user_name}</p>
      <p className={styles.tweetCardpara}>{tweet.paragraph.slice(0,20)}</p>
      </div>

     
    </div>
   
   
     
    <img src={tweet.image}  className={styles.tweetCardImg}/>

    </div>
  )
}

const MainSection = () => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/tweet.json');
        const data = await response.json();
        setTweets(data);
      }
      catch (error) {
        console.error('Error occured:', error);
      }
    };
    fetchTweets();
  }, []);

  return (
    <div className={styles.main}>
    
      <div className={styles.home}>

      <div className={styles.homeh1}>
          <h1>Home</h1>
          </div>
      
          <div className={styles.btn1}>
          <button className={styles.btn}>For you</button>
          <button className={styles.btn}>Following</button>
          </div>


     </div>



        <div className={styles.whatIsHappening}>

          <div className={styles.imputfield}>
            <img src='https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png' />
            <input type="text" placeholder='What is happening?' />
          </div>

          <div className={styles.icons}>

              <div classname={styles.Icon}>
              <BsImages className={styles.BsImages} />
              <MdInsertEmoticon className={styles.emoji} />
              <AiOutlineFileGif className={styles.gif} />
              <BsFiles className={styles.file} />
              </div>

              <div className={styles.tweetbutton}>
                 <button className={styles.tweetbtn}>Tweet</button>
              </div>

          </div>

          

        

        </div>


        <div className='homeLower'>

        </div>
        <div className={styles.tweetSection}>
           
          {
            tweets.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))
            
          }
          </div>
      
    </div>
  )
}

export default MainSection
