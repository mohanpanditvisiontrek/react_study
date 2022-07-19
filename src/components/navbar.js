// import { Link,NavLink } from "react-router-dom"
import { NavLink } from "react-router-dom"


function Navbar(){

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to="/">Visiontrek</NavLink>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink style={({isActive})=>{ return {backgroundColor: isActive ? 'blue':'' }}} className="nav-link active text-white" aria-current="page" to="/">Show</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink style={({isActive})=>{ return {backgroundColor: isActive ? 'blue':'' }}} className="nav-link text-white" to="/upload">Upload</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink style={({isActive})=>{ return {backgroundColor: isActive ? 'blue':'' }}} className="nav-link text-white" to="/contact">Contact</NavLink>
                </li>
                </ul>
            </div>
            </div>
            </nav>
        </>
    )

}


export default Navbar;