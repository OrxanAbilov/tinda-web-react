import React from 'react'

export default function LogoBar() {
  return (
    <div className="d-flex align-items-center">
            <div className="toggle-icon-wrapper">

              <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-toggle="tooltip" data-placement="left" title="Toggle Navigation"><span className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>

            </div><a className="navbar-brand" href="/">
              <div className="d-flex align-items-center py-3"><img className="mr-2" src="/assets/img/illustrations/LogoTindaYasilTransp.png" alt="" width="40" /><span className="text-sans-serif">Tinda</span>
              </div>
            </a>
          </div>
  )
}
