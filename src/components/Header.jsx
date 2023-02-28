import { render } from '@testing-library/react';
import React from 'react';
import "./Header.css";

class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <h1>Gallery of Horns</h1>

            </div>
        )
    }
}
 
export default Header;