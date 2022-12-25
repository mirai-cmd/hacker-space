import "./header.css"
import React from 'react'
import Search from "../search/Search"
export default function Header({items}) {
  return (
    <div className="header">
        <span className="head1">Look for specific articles in cybersecurity</span>
        <div className="head2">
            <Search items={items}/>
        </div>
    </div>
  )
}
