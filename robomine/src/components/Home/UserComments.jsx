import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCommentImg1 from '../../assets/userComments1.jpeg'
import UserCommentImg2 from '../../assets/userComments2.jpeg'
import UserCommentImg3 from '../../assets/userComments3.jpeg'

export default function UserComments() {
    const settingsUserCommentsSlider = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='user-comments__container'>
            <h2 className='user-comments__title title'>User Comments</h2>
            <Slider  {...settingsUserCommentsSlider}>
                <div className='comment-slide'>
                    <img src={UserCommentImg1} alt="User Icon" />
                    <div className='info'>
                        <div className="left">
                            <span className='info-circle'></span>
                            <div className='info-name'>
                                <p className='job-name'>power yoga scuipt</p>
                                <p className='comment-name'>woodrow nienow</p>
                            </div>
                        </div>
                        <a href="" className="user-comment-btn">popular</a>
                    </div>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda quisquam amet tenetur quibusdam sunt repellat temporibus quasi perferendis corporis ipsam distinctio nemo dolorum velit quis saepe inventore ducimus, sint eveniet totam atque cum consequatur dolor. At modi sed quas minus, temporibus dicta eveniet fugiat corrupti adipisci consequatur quasi praesentium!
                    </p>
                </div>
                <div className='comment-slide'>
                    <img src={UserCommentImg2} alt="User Icon" />
                    <div className='info'>
                        <div className="left">
                            <span className='info-circle'></span>
                            <div className='info-name'>
                                <p className='job-name'>power yoga scuipt</p>
                                <p className='comment-name'>woodrow nienow</p>
                            </div>
                        </div>
                        <a href="" className="user-comment-btn">popular</a>
                    </div>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda quisquam amet tenetur quibusdam sunt repellat temporibus quasi perferendis corporis ipsam distinctio nemo dolorum velit quis saepe inventore ducimus, sint eveniet totam atque cum consequatur dolor. At modi sed quas minus, temporibus dicta eveniet fugiat corrupti adipisci consequatur quasi praesentium!
                    </p>
                </div>
                <div className='comment-slide'>
                    <img src={UserCommentImg3} alt="User Icon" />
                    <div className='info'>
                        <div className="left">
                            <span className='info-circle'></span>
                            <div className='info-name'>
                                <p className='job-name'>power yoga scuipt</p>
                                <p className='comment-name'>woodrow nienow</p>
                            </div>
                        </div>
                        <a href="" className="user-comment-btn">popular</a>
                    </div>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda quisquam amet tenetur quibusdam sunt repellat temporibus quasi perferendis corporis ipsam distinctio nemo dolorum velit quis saepe inventore ducimus, sint eveniet totam atque cum consequatur dolor. At modi sed quas minus, temporibus dicta eveniet fugiat corrupti adipisci consequatur quasi praesentium!
                    </p>
                </div>
                <div className='comment-slide'>
                    <img src={UserCommentImg1} alt="User Icon" />
                    <div className='info'>
                        <div className="left">
                            <span className='info-circle'></span>
                            <div className='info-name'>
                                <p className='job-name'>power yoga scuipt</p>
                                <p className='comment-name'>woodrow nienow</p>
                            </div>
                        </div>
                        <a href="" className="user-comment-btn">popular</a>
                    </div>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda quisquam amet tenetur quibusdam sunt repellat temporibus quasi perferendis corporis ipsam distinctio nemo dolorum velit quis saepe inventore ducimus, sint eveniet totam atque cum consequatur dolor. At modi sed quas minus, temporibus dicta eveniet fugiat corrupti adipisci consequatur quasi praesentium!
                    </p>
                </div>
                <div className='comment-slide'>
                    <img src={UserCommentImg3} alt="User Icon" />
                    <div className='info'>
                        <div className="left">
                            <span className='info-circle'></span>
                            <div className='info-name'>
                                <p className='job-name'>power yoga scuipt</p>
                                <p className='comment-name'>woodrow nienow</p>
                            </div>
                        </div>
                        <a href="" className="user-comment-btn">popular</a>
                    </div>
                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda quisquam amet tenetur quibusdam sunt repellat temporibus quasi perferendis corporis ipsam distinctio nemo dolorum velit quis saepe inventore ducimus, sint eveniet totam atque cum consequatur dolor. At modi sed quas minus, temporibus dicta eveniet fugiat corrupti adipisci consequatur quasi praesentium!
                    </p>
                </div>
            </Slider>
        </div>
    )
}
