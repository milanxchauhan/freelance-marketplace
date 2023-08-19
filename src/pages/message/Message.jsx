import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
    return (
        <div className='message'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to="/messages">MESSAGES</Link> {">"} JOHN DOE {">"}
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/pf-icon.jpg" alt="" />
                        <p>Lorem ipsum aveo waffeoiffio aivre iveori ieenoer ionvvoiern afnevioern iojjoiasd iojvoiasddj foiwoiwj wiofsdioj wddfidwj vivirod i ewjowef</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder='Write a message' id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message