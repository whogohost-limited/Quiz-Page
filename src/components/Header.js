import React from 'react'

function Header() {
    return(
        <div className="container menu flex space-between">
            <li className="float-right"><a href="#">Logo</a></li>
            <nav className="menu-items flex">
                <li><a href="#">Save</a></li>
                <li><a href="#">Invest</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Login</a></li>
                <li className="btn blue-dark white-text"><a href="#">Create a Free Account</a></li>
            </nav>
        </div>
    )
}

export default Header