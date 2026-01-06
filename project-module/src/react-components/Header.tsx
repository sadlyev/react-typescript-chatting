import { useState } from "react"

export const HeaderApp = () => {
    

    const  handleTap = () => {
         console.log("cliked")
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h2 className="header_text">TechStore</h2>
                    <div className="header_search">
                        <label className="header_search-label">
                            <input className="header_search-input" placeholder="Search products"></input>
                        </label>
                    </div>
                    <div className="header_cart-logo" onClick={handleTap}>
                        <svg width="30" height="30">
                            <use xlinkHref="./src/img/file.svg#cart-icon"></use>
                        </svg>
                    </div>
                </div>
            </div>

        </header>
    )
}