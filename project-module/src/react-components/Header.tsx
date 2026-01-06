export const HeaderApp = () => {
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
                    <div className="header_cart-logo"></div>
                </div>
            </div>

        </header>
    )
}