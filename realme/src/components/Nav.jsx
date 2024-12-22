

const Nav = ()=>{
    return(
        // navbar start 
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top p-0">
            <div className="container-fluid">
                <a className="navbar-brand ms-5 text-bold fs-4" href="#">realme</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">realme smartphone</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">narzo smartphone
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Audio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
    
                    </ul>
                    <div className="navbar-text me-5">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Brand</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">contact</a>
                            </li>
    
                        </ul>
                    </div>
                </div>
    
            </div>
        </nav>
    </header>
    )
        // navbar end
}

export default Nav