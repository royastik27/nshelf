import { Link } from 'react-router-dom';

import './../css/Navbar.css';

// MAKING LINK ACTIVE
function makeLinkActive(event) {
    
    const DOMLinks = document.getElementsByClassName('nav-link');
    const DOMLinksLen = DOMLinks.length;
    
    for(let i = 0; i < DOMLinksLen; ++i)
        DOMLinks[i].classList.remove('active');

    event.target.classList.add('active');
}

// NAVBAR COMPONENT
function Navbar({ loggedIn }) {

    return (
        <nav id="main-nav" className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NSHELF</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                    <Link className="nav-link" to="/">📚 HOME</Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/notes">📄 NOTES</Link>
                    </li>

                    {loggedIn ?
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/create">✍ CREATE</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ⚙ MY ACCOUNT
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/mycollections">My Collections</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/logout">Log Out</Link></li>
                                </ul>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">👤 LOGIN</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">📁 SIGNUP</Link>
                            </li>
                        </>
                    }

                </ul>

                <form id="nav-search-box" className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="🔍 Search notes..." aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;