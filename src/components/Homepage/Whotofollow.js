import React, { useState } from 'react';
import style from "./Whotofollow.module.css"




function Whotofollow() {

    const [first, setFirst] = useState('follow');
    const [second, setSecond] = useState('follow');
    const [third, setThird] = useState('follow');
    const [four, setFour] = useState('follow');

    // const [isShown, setIsShown] = useState(false);

    const handelClick = () => {
        (first == 'follow') ? setFirst('following') : setFirst('unfollow')
    }
    const handelClick2 = () => {
        (second == 'follow') ? setSecond('following') : setSecond('unfollow')
    }
    const handelClick3 = () => {
        (third == 'follow') ? setThird('following') : setThird('unfollow')
    }
    const handelClick4 = () => {
        (four == 'follow') ? setFour('following') : setFour('unfollow')
    }
    return (
        <div className={style.firstcontainer}>
            <div className={style.container}>
                <h2>Who to follow</h2>
                <div className={style.MainContaner} >
                    <button className={style.butt}
                        style={{ border: 'none', }}
                        type="button"

                        data-toggle="tooltip"
                        data-placement="top"
                      
                    >
                        <div className={style.container3}>
                            <img className={style.img1} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80" />
                            <h4> Akshay Kumar
                                <img className={style.icon} src='https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=' /> </h4>
                            <button onClick={handelClick} className={style.follow}>{first}</button>
                        </div>
                    </button>
                    
                    <button className={style.butt}
                        style={{ border: 'none' }}
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="tooltip"
                        data-placement="top"

                    >
                        <div className={style.container3}>
                            <img className={style.img1} src="https://c8.alamy.com/comp/PG55RP/portrait-of-a-successful-business-man-isolated-on-white-PG55RP.jpg" />
                            <h4> andeep Kumar..
                                <img className={style.icon} src='https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=' /> </h4>
                            <button onClick={handelClick2} className={style.follow}>{second}</button>
                        </div>
                    </button>


                    <button className={style.butt}
                        style={{ border: 'none' }}
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="tooltip"
                        data-placement="top"

                    >
                        <div className={style.container3}>
                            <img className={style.img1} src="https://st4.depositphotos.com/18610578/21932/i/600/depositphotos_219322862-stock-photo-adult-cheerful-man-smiling-orange.jpg" />
                            <h4> sameer Kumar..
                                <img className={style.icon} src='https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=' /> </h4>
                            <button onClick={handelClick3} className={style.follow}>{third}</button>
                        </div>
                    </button>
                      <div>
                        
                      </div>

                    <button className={style.butt}
                        style={{ border: 'none' }}
                        type="button"
                        class="btn btn-secondary"
                        data-toggle="tooltip"
                        data-placement="top"
                        

                    >
                        <div className={style.container3}>
                            <img className={style.img1} src="https://pbs.twimg.com/media/EZHz5kDXQAEmSF3.png" />
                            <h4> gurav..... singh
                                <img className={style.icon} src='https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=' /> </h4>
                            <button onClick={handelClick4} className={style.follow}>{four}</button>
                        </div>
                    </button>
                    <p className={style.showmore}>Show More</p>
                </div>
            </div> 
        </div>
        
    );
}

export default Whotofollow;
