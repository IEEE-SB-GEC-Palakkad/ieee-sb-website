import './Societies.css';
import cs from '../../assets/images/cs.png';
import com from '../../assets/images/com.png';
import ias from '../../assets/images/ias.png';
import wie from '../../assets/images/wie.png';

const Societies = () => {
    return (
        <>
            <div className="societies-section">
                <div className="society">
                    <h1>Societies</h1>
                </div>

                <div className="socities-list">



                    <div className="soc-card">
                        <div className="card">
                            <img src={cs} alt="" />
                        </div>
                        <div className="card-btn">
                            <button>Explore</button>
                        </div>
                    </div>
                    
                    <div className="soc-card">
                        <div className="card">
                            <img src={com} alt="" />
                        </div>
                        <div className="card-btn">
                            <button>Explore</button>
                        </div>
                    </div>
                    
                    <div className="soc-card">
                        <div className="card">
                            <img src={wie} alt="" />
                        </div>
                        <div className="card-btn">
                            <button>Explore</button>
                        </div>
                    </div>
                    
                    <div className="soc-card">
                        <div className="card">
                            <img src={ias} alt="" />
                        </div>
                        <div className="card-btn">
                            <button>Explore</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Societies;