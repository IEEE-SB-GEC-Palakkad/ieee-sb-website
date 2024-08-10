import React from 'react'
import './Upthinq.css'
import upthinq from '../../assets/images/upthinq.png'
const Upthinq = () => {

    return (
        <>
            <div className="upthinq">
                <div className='upthinq-header'>Upthinq</div>
                <div className="upthinq-details">
                    <div className="upthinq-contents">
                        <p className="upthinq-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        </p>
                        <div className="upthinq-explore">
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="upthinq-image">
                        <img src={upthinq} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Upthinq