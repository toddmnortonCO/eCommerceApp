import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


class Header extends Component {
    render() {
        return(
            <div>
                <section className="navbar">
                    <section className='flex-container'>
                    <Link 
                    className="link"
                    to="/dashboard"> 
                    Home 
                    </Link>
                    <Link className="link" 
                    to="/customerService"> 
                    Contact Customer Service 
                    </Link>
                    <Link className="link" 
                    to="/orderHistory"> 
                    Order History 
                    </Link>
                    </section>
                    <button >Log Out</button>
                </section>
            </div>
        )
    }
}

export default Header;
