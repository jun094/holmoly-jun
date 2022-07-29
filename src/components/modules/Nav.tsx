import React from 'react'

function Nav() {
    return (
        <nav
            className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
        bg-base-100 text-base-content shadow-s"
        >
            <div className="navbar w-full">
                <button className="btn btn-primary">button</button>
            </div>
        </nav>
    )
}

export default Nav
