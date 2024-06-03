import React from 'react'
import "./mvp.css"

export default function MvpCard(props) {
    return (
        <div className='testi_card_container'>
            <div className="upper_card">
                <div className="testi_img">
                    <img src={process.env.PUBLIC_URL + '/images/logo/dubey.jpg'} alt="Img" />
                </div>
            </div>
            <div className="lower_card">
                <div className="testi_name">
                    <div className="name">
                        {props.name}

                    </div>
                    
                </div>

                <div className="letter_detail">
                    {props.detail}
                </div>

            </div>
        </div>
    )
}
