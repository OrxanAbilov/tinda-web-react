import React from 'react'
import LogoBar from './LogoBar'
import MenuItem from './MenuItem'

export default function Side() {
    
    return (
        <nav className="navbar navbar-vertical navbar-expand-xl navbar-light">

            <LogoBar />
            <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                <div className="navbar-vertical-content perfect-scrollbar scrollbar">
                    <ul className="navbar-nav flex-column">
                        <MenuItem />
                    </ul>
                    

                </div>
            </div>
        </nav>
    )
}
