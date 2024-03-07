import { Link } from "react-router-dom";

function Navbar(){
      return <>
            <header className="d-flex bg-dark flex-wrap justify-content-center py-3 mb-2 border-bottom">
                  <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <h4 className="text-center px-3 heading">WHITE BOARD</h4>
                  </a>

                  <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link nav1" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to="/board" className="nav-link nav2">Board</Link></li>
                  </ul>
            </header>
      </>
}
export default Navbar;