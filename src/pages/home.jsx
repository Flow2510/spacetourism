import { Link } from "react-router-dom";
import './home.scss'

export default function Home(){
    return(
        <section className="home">
            <p className="home__subtitle">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="home__title">SPACE</h1>
            <p className="home__text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            <Link className="home__link" to='/destinations'>EXPLORE</Link>
        </section>
    )
}