import { Link } from 'react-router-dom';
import logo from './images/logo_movie.png';
import searchIcon from './images/Search-icon.png';


const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="logo">
                <Link to={'/'}>
                    <img src={logo} alt="logo" />
                    <p> Movies</p>
                </Link>
            </div>
            <div className="search">
                <div className="search-group">
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder="Quick Search"/>
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;