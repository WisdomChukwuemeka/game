import { Link } from "react-router-dom"
import { Data } from "./data"

export const Home = () => {
    return(
        <>
           <div className="home">
                <div className="home_content">
                    <h1 className="h1">Hi my name is Wisdom!</h1>
                    <h2 className="h2">Welcome to my game</h2>
                    <p className="p">Click the button below to start playing</p>
                    <div className="button-div">
                        <Link to="/start">
                        <button className="home-button">Start</button>
                        </Link>
                    </div>  
                </div>
            </div>

            <div>
                <div className="data-div">
                    {Data.map((data) => (
                        <div className="data" key={data.id}>
                            <div className={data.icon}></div>
                            <h3 className="name">{data.name}</h3>
                            <p className="download">{data.downloads}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}