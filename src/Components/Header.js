
function Header() {
  return (
       <div>
     <header className="ud-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="assets/images/logo/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler">
                  <span className="toggler-icon"> </span>
                  <span className="toggler-icon"> </span>
                  <span className="toggler-icon"> </span>
                </button>
                <div className="navbar-collapse">
                  <ul id="nav" className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="ud-menu-scroll" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="ud-menu-scroll" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="ud-menu-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="ud-menu-scroll" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="ud-menu-scroll" href="#contact">Contact</a>
                    </li>
                    <li className="nav-item nav-item-has-children">
                      <a href="javascript:void(0)"> Pages </a>
                      <ul className="ud-submenu">
                        <li className="ud-submenu-item">
                          <a href="about.html" className="ud-submenu-link">
                            About Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="pricing.html" className="ud-submenu-link">
                            Pricing Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="contact.html" className="ud-submenu-link">
                            Contact Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="blog.html" className="ud-submenu-link">
                            Blog Grid Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="blog-details.html" className="ud-submenu-link">
                            Blog Details Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="signin" className="ud-submenu-link">
                            Sign In Page
                          </a>
                        </li>
                        <li className="ud-submenu-item">
                          <a href="404.html" className="ud-submenu-link">404 Page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="navbar-btn d-none d-sm-inline-block">
                  <a href="/signin" className="ud-main-btn ud-login-btn">
                    Sign In
                  </a>
                  <a  href="/signup"  className="ud-main-btn ud-white-btn">
                    Sign Up
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

       </div>
  );
}

export default Header;
