import logo from '../Chronicle-wordmark.svg';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className="App-logo" alt="logo"/>
            <Navbar/>
            <button className="join-beta-button">
               <span>Join Beta</span>
               <span>Join Beta</span>
            </button>
        </div>
    );
}

export default Header;