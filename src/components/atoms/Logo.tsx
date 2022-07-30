import React from 'react'

function Logo() {
    return (
        <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex">
            <h1 className="font-title text-primary flex px-2 text-lg transition-all duration-200 md:text-3xl">
                <span className="uppercase">Holymoly</span>
                <span className="text-base-content lowercase">.log</span>
            </h1>
        </div>
    )
}

export default Logo
