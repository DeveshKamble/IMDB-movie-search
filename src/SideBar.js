import { Link } from 'react-router-dom';
import React from 'react';

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="pages">
                <nav>
                    <Link to='/home'>Search Results</Link>
                    <Link to='/AllTeam'>All Team</Link>
                    <Link to='/Core'>Core</Link>
                    <Link to='/Developers'>Developers</Link>
                    <Link to='/Designers'>Designers</Link>
                    <Link to='/Mentors'>Mentors</Link>
                </nav>
            </div>
            <div className="add-button">
                <Link to='/Add'>+ Add</Link>
            </div>
        </div>
    );
}
 
export default SideBar;