import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuItem() {
  return (
    <>
      <li className="nav-item"><NavLink className="nav-link" to="/" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="home">
        <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-chart-pie"></span></span><span className="nav-link-text">DashBoard</span>
        </div>
      </NavLink>
      </li>
      <li className="nav-item"><a className="nav-link dropdown-indicator" href="#esd" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="esd">
        <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-book"></span></span><span className="nav-link-text">ESD</span>
        </div>
      </a>
        <ul className="nav collapse show" id="esd" data-parent="#navbarVerticalCollapse">
          <li className="nav-item active"><NavLink className="nav-link" to="esd/income">Gələnlər</NavLink>
          </li>
          <li className="nav-item"><NavLink className="nav-link" to="esd/outgoing">Göndərilənlər</NavLink>
          </li>
          <li className="nav-item"><NavLink className="nav-link" to="esd/history">Tarixçə</NavLink>
          </li>
        </ul>
      </li>

      <li className="nav-item"><a className="nav-link dropdown-indicator" href="#admin" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="admin">
                    <div className="d-flex align-items-center"><span className="nav-link-icon"><span className="fas fa-laptop-code"></span></span><span className="nav-link-text">Admin</span>
                    </div>
                  </a>
                  <ul className="nav collapse" id="admin" data-parent="#navbarVerticalCollapse">
                    
                    <li className="nav-item"><a className="nav-link dropdown-indicator" href="#admin-esd" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="admin-esd">ESD</a>
                      <ul className="nav collapse" id="admin-esd" data-parent="#admin">
                        <li className="nav-item"><NavLink className="nav-link" to="admin/esd/doctypes">Sənəd Tipləri</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
    </>
  )
}
