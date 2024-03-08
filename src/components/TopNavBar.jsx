import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TopNavBar() {

  const fullName = "Admin Admin"

  return (
    <nav className="navbar navbar-light navbar-glass navbar-top sticky-kit navbar-expand">

            <button className="btn navbar-toggler-humburger-icon navbar-toggler mr-1 mr-sm-3" type="button" data-toggle="collapse" data-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>
            <a className="navbar-brand mr-1 mr-sm-3" href="/">
              <div className="d-flex align-items-center"><img className="mr-2" src="assets/img/illustrations/LogoTindaYasilTransp.png" alt="" width="40" /><span className="text-sans-serif">Tinda</span>
              </div>
            </a>
            <ul className="navbar-nav align-items-center d-none d-lg-block">
              <li className="nav-item">
                <div className="search-box">
                  <form className="position-relative" data-toggle="search" data-display="static">

                    <input className="form-control search-input" type="search" placeholder="Search..." aria-label="Search" />
                    <span className="fas fa-search search-box-icon"></span>

                  </form>

                  <button className="close" type="button" data-dismiss="search"><span className="fas fa-times"></span></button>
                  
                </div>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-icons ml-auto flex-row align-items-center">
             
           

              <li className="nav-item dropdown dropdown-on-hover">
                <a className="nav-link notification-indicator notification-indicator-primary px-0 icon-indicator" id="navbarDropdownNotification" href="# " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fas fa-bell fs-4" data-fa-transform="shrink-6"></span></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-card" aria-labelledby="navbarDropdownNotification">
                  <div className="card card-notification shadow-none" style={{maxWidth: '20rem'}}>
                    <div className="card-header">
                      <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                          <h6 className="card-header-title mb-0">Bildirişlər</h6>
                        </div>
                        <div className="col-auto"><a className="card-link font-weight-normal" href="# ">Mark all as read</a></div>
                      </div>
                    </div>
                    <div className="list-group list-group-flush font-weight-normal fs--1">
                      <div className="list-group-title border-bottom">NEW</div>
                      </div>
                  </div>
                </div>

              </li>
              <li className="nav-item dropdown dropdown-on-hover"><a className="nav-link pr-0" id="navbarDropdownUser" href="# " role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="avatar avatar-xl">
                    <img className="rounded-circle" src="/assets/img/team/avatar.png" alt="" />

                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right py-0" aria-labelledby="navbarDropdownUser">
                  <div className="bg-white rounded-soft py-2">
                    <span className="mr-1"></span><span> {fullName}</span>

                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" href="# ">Profile &amp; account</NavLink>

                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/Logout">Logout</NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
  )
}
