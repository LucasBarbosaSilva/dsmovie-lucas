import React from 'react';
import './styles.css';
import {ReactComponent as DSMovieLogo} from "../../assets/DSMovie.svg";
import {ReactComponent as GitHubIO} from "../../assets/github.svg";

const NavBar = () => {
    return(
        <header>
            <nav className='container'>
                <div className="content">
                    <DSMovieLogo id='logo'/>
                    <a href='https://github.com/devsuperior'>
                        <span className='container-git'>
                            <GitHubIO/>
                            <p>/devsuperior</p>
                        </span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export {
    NavBar
};