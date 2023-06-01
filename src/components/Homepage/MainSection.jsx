import styles from './MainSection.module.css'
import React, { useEffect, useState } from 'react'
import { BsImages } from 'react-icons/bs'
import { MdInsertEmoticon } from 'react-icons/md'
import { AiOutlineFileGif } from 'react-icons/ai'
import { Button } from '@mui/material'


const TweetCard = ({ tweet }) => {
  return (
    <div className={styles.tweetCard}>
      <h3>{tweet.name}</h3>
      <p>{tweet.user_name}</p>
      <p>{tweet.paragraph}</p>
      <img src={tweet.image} />
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
    <>
      <div className={styles.main}>
        <div className={styles.home}>
          <h1>Home</h1>
          <Button className={styles.buttonContainer}>For you</Button>
          <Button className={styles.buttonContainer}>Following</Button>
        </div>

        <div className={styles.whatIsHappening}>
          <div className={styles.imputfield}>
            <img src='https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png' />
            <input placeholder='What is happening?' />
          </div>

          <div className={styles.icons}>
            <BsImages className={styles.BsImages} />
            <MdInsertEmoticon className={styles.emoji} />
            <AiOutlineFileGif className={styles.gif} />
            <button className={styles.btn}><h5>Tweet</h5></button>
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
      
    </>
  )
}

export default MainSection
