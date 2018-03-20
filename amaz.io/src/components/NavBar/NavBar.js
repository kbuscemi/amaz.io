import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav>
                <div className='nav-wrapper'>
                    <a href='/' className='brand-logo'>Amazio</a>
                    <ul className='right hide-on-med-and-down'>
                        <li>
                            <a href='/catalogue'><i className="material-icons">shopping</i></a>
                        </li>
                        <li>
                            <a href='/checkout'><i className="material-icons">shopping_cart</i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;