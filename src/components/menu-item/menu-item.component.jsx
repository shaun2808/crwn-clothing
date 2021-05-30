import React from 'react'
import './menu-item.styles.scss'

export default function MenuItem({title,url,size}) {
    return (
        <div className={`${size} menu-item`}>
            <div className="background-image"
             style={{backgroundImage:`url(${url})`}}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <p className="subtitle">SHOP NOW</p>
            </div>
        </div>
    )
}
