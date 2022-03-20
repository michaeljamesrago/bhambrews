import React from 'react'
import bhambay from "../bhambay.jpg"

const PageHeader = () => {
    return (
        <div className="page-header">
            <h1 className="header-text">Breweries of Bellingham</h1>
            <img className="main-image" src={bhambay} />
        </div>
    )
}

export default PageHeader