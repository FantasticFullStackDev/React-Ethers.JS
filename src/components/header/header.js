import React  from 'react';
import { useSelector } from 'react-redux';
import { getCurrentPos } from './headerSlice';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
    //----- Global States -----
    const currentPos = useSelector(getCurrentPos);

    const navigate = useNavigate();
    
    //----- Custom Functions -----
    const navToAddNetwork = () => {
        navigate("/add");
    }

    const navToList = () => {
        navigate("/");
    }

    return (
        <React.Fragment>
            <div className='header'>
                <div className='header_logo' onClick={navToList}>
                    Test App
                </div>
                <button className='header_button w3-button w3-black w3-border w3-large' style={{display: currentPos === '' ? 'block' : 'none'}}
                 onClick={navToAddNetwork}>Add a network</button>
                <button className='header_button w3-button w3-black w3-border w3-large' style={{display: currentPos !== '' ? 'block' : 'none'}}
                 onClick={navToList}>Back To List</button>
            </div>
        </React.Fragment>
    );
}

export default Header;