import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div className="container">
            <ul className="list">
                <li className="item"><Link href="/"><a>Home</a></Link></li>
                <li className="item"><Link href="/blog"><a>Blog</a></Link></li>
                <li className="item"><Link href="/users"><a>Users</a></Link></li>
            </ul>
            </div>
        </header>
    )
}

export default Header
