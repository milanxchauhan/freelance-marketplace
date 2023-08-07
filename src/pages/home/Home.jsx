import React from 'react';
import Featured from '../../components/featured/Featured';
import "./Home.scss";
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import  {cards} from "../../data"
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card=>(
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>The best part? Everything.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Stick to your budget
                        </div>
                        <p>
                            Find the right service for every price point. No hourly rates, just project-based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get quality work done quickly
                        </div>
                        <p>
                            Hand your project over to a talented freelancer in minutes, get long-lasting results.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Pay when you are happy
                        </div>
                        <p>
                            Upfront quotes mean no surprises. Payments only get released when you approve.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on 24/7 support
                        </div>
                        <p>
                            Our round-the-clock support team is available to help anytime, anywhere.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./img/video.mp4" controls></video>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>fiverr business</h1>
                        <h1>A business solution designed for teams</h1>
                        <p>Upgrade to a curated experience  packed with tools and benefits, dedicated to businesses.</p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Access top freelancers and professional business tools for any project
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Build your own branded marketplace of certified experts
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
                        </div>
                        <button>Explore Fiverr Business</button>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home