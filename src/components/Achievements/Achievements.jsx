import React from 'react'
import './Achievements.css'
import AchievementsData from '../../helpers/Achievements.json'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'

const Achievements = () => {
    const [Achievements, setAchievements] = React.useState([0])

    return (
        <>
            <div className="achievements">
                <div className='achievements-header'>Achievements</div>
                <div className="achievement-details">
                    <div className="achievement-contents">
                        <h3 className="achievement-name">
                            {AchievementsData[0][Achievements].name}
                        </h3>
                        <p className="achievement-description">
                            {AchievementsData[0][Achievements].details}
                        </p>
                        <div className="achievement-explore">
                            <button>Explore</button>
                        </div>
                        <div className="nav-btn">
                            <button onClick={()=>setAchievements(Math.abs(Achievements-1)%3)}>
                                <img src={left} alt="" />
                            </button>
                            <button onClick={()=>setAchievements((Achievements+1)%3)}>
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="achievement-image">
                        <img src={AchievementsData[0][Achievements].img} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Achievements