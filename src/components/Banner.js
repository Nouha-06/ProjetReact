import '../styles/Banner.css'
import logo from '../asserts/logo.png'
import Recommendation from './Recommendation';
function Banner() {

    return (
        <div className='lmj-banner'>
            <div>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </div>
            <Recommendation/>
        </div>)
}

export default Banner;