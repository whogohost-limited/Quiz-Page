import hero from './hero.jpg'
import {Link} from 'react-scroll'

function Hero() {
    return (
        <div className="container bg-primary hero-image flex flex-col center ">
            <img src={hero} alt="hero image" height={300} width={448} className="rounded"/>
            <h1 className="hero-title bold mb-0">What Type Of Developer You?</h1>
            <p className="lead-text">Take this quiz to find out what kind of developer you are!</p>
            <button className="btn blue-dark white-text bold p-4">
                <Link  to="quiz" spy={true} smooth={true}>Take this Quiz</Link>
            </button>
        </div>
    )
}

export default Hero