import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'

const Gig = () => {
    return (
        <div className='gig'>
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">FIVER &gt; GRAPHICS {"&"} DESIGN &gt;</span>
                    <h1>I will create AI generated art for you</h1>

                    <div className="user">
                        <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png" alt="" />
                        <span>John Doe</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slideToShow={1} arrowsScroll={1} className="slider">
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/298071852/original/71cb915bb64cad4ebc3778bd89ed83e3221802ab/create-unique-characters-art-using-midjourney-ai.jpg" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/323215516/original/7190f9688e56f6d71fd95c926f2406046974a449/create-amazing-ai-artwork-images-using-midjourney-ai.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/323215516/original/f95a785ed214a35fb7a4a7ff5612590e5c62cf59/create-amazing-ai-artwork-images-using-midjourney-ai.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0be4b8af5ebf24e2794aebf5281d27c8-1691776604/AI%20Images%20(1)/create-amazing-ai-artwork-images-using-midjourney-ai.png" alt="" />
                        <img src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/dccb4b7a6ca0223b4cc133a7a9f8f2f4-1691753130/AI%20Images%20(1)/create-amazing-ai-artwork-images-using-midjourney-ai.png" alt="" />
                    </Slider>
                    <h2>About this gig</h2>
                    <p>
                        In this gig, I{"'"}ll create amazing ai character design, and digital art, using AI! for your personal or commercial use.
                        I will make any style according to your request, All I need is your idea or image reference. If you don{"'"}t have any of these, don{"'"}t worry just INBOX me so that we can discuss and bring your design to life.
                    </p>
                    <div className="seller">
                        <h2>About the seller</h2>
                        <div className="user">
                            <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png" alt="" />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">USA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2022</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg. response time</span>
                                    <span className="desc">2 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last delivery</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Language</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                Hi, I{"’"}m Ramzi,
                                A UI/UX Designer and Ai artist with 3+ years of experience from Algeria.
                                In these 3 years, I have worked on many projects in Algeria and globally which helped many businesses reach their goal and users get their needs.
                                On the side, I create content & courses for teaching UX/UI Design and Ai in general on Instagram with the intention of educating the next generation of product designers.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                            </div>
                            <p>
                            This seller has exactly the right skills to create an AI male model, suitable for a book cover! He does what he says he{"'"}s going to do and charges fairly. I highly recommend this seller and will use him again.
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.jpg" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.jpg" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                            </div>
                            <p>
                            This seller has exactly the right skills to create an AI male model, suitable for a book cover! He does what he says he{"'"}s going to do and charges fairly. I highly recommend this seller and will use him again.
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.jpg" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.jpg" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className='pp' src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png" alt="" />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <span>5</span>
                            </div>
                            <p>
                            This seller has exactly the right skills to create an AI male model, suitable for a book cover! He does what he says he{"'"}s going to do and charges fairly. I highly recommend this seller and will use him again.
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.jpg" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.jpg" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Gig