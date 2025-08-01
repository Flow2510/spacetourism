import { Link } from "react-router-dom";
import './home.scss'

export default function Home(){
    return(
        <div>
            <div className="background-home"></div>
            <section className="home">
                <div className="home__content">
                    <p className="home__content-subtitle">SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className="home__content-title">SPACE</h1>
                    <p className="home__content-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home__link">
                    <Link className="home__link-link" to='/destinations'>EXPLORE</Link>
                </div>
            </section>
        </div>
    )
}