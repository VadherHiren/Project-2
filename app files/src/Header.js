import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Component/Home.js';
import Login from './Component/Login.js';
import Shop from './Component/Shop.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';
import SingleShop from './Component/SingleShop.js';
import Registration from './Component/Registration.js';
import Cart from './Component/Cart.js';
import Checkout from './Component/Checkout.js';

function Header() {
  const [displayusername, displayusernameupdate] = useState('');
  const [showmenu, showmenuupdateupdate] = useState(false);
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/registration') {
      showmenuupdateupdate(false)
    }
    else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem('name');
      if (username === '' || username === null) {
        navigate('/login')
      }
      else {
        displayusernameupdate(`welcome ` +username)
      }
    }
  }, [location])
  return (
    <div>
      {/* <!-- Start Header/Navigation --> */}
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

        <div className="container">
          <a className="navbar-brand" href="/home">Car<span>.</span></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li><Link className="nav-link" to="/shop">Shop</Link></li>
              <li><Link className="nav-link" to="/about">About us</Link></li>
              <li><Link className="nav-link" to="/contact">Contact us</Link></li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li><Link className="nav-link" to="/cart"><img src="/images/cart.svg"></img></Link></li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              {/* <li><a className="nav-link" href="#"><img src="images/user.svg"></img></a></li> */}
              {/* <li><Link className="nav-link" to="/cart"><img src="/images/cart.svg"></img></Link></li> */}
              {/* <li><Link className="nav-link" to="/login">SignIn</Link></li> */}
              <li>
                {showmenu &&
                    <li className='row'><span className='nav-link'>{displayusername}</span><Link to='/login' className='nav-link'> <b>Logout</b></Link></li>
                    }
              </li>
              {/* <li>1</li> */}
              {/* <li><button type="button" class="btn btn-outline-light">SignOut</button></li> */}
            </ul>
          </div>
        </div>

      </nav>
      {/* <!-- End Header/Navigation --> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/view/:id' element={<SingleShop />}></Route>
        {/* <Route path='/cart/:eid' element={<Cart />}></Route> */}
      </Routes>



      {/* <!-- Start Footer Section --> */}
      <footer className="footer-section">
        <div className="container relative">

          <div className="sofa-img">
            <img src="/images/car/foo-car.jpg" alt="Image" className="img-fluid img-fluid-custom"></img>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="col-auto">
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary custom-padding">
                      <span className="fa fa-paper-plane custom-padding">Send</span>
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>

          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Car<span>.</span></a></div>
              <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

              <ul className="list-unstyled custom-social">
                <li><a href="#"><span className="fa fa-brands fa-facebook-f"></span>FB</a></li>
                <li><a href="#"><span className="fa fa-brands fa-twitter"></span>IG</a></li>
                <li><a href="#"><span className="fa fa-brands fa-instagram"></span>LI</a></li>
                <li><a href="#"><span className="fa fa-brands fa-linkedin"></span>TW</a></li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Knowledge base</a></li>
                    <li><a href="#">Live chat</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Our team</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>

                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li><a href="#">Nordic Chair</a></li>
                    <li><a href="#">Kruzo Aero</a></li>
                    <li><a href="#">Ergonomic Chair</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>
                </p>
              </div>

              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </footer>
      {/* <!-- End Footer Section -->	 */}
    </div>
  )
}

export default Header
