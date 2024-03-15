import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='w-full px-5 py-3 flex justify-between items-center shadow-md'>
                <div>
                    {/* logo section */}
                    <p class="text-2xl font-bold bg-gradient-to-r from-teal-700 to-indigo-700 text-transparent bg-clip-text">
                        IssueTracker.Io
                    </p>
                </div>
                <div>
                    <ul className='flex'>
                        <li>
                            <Link to="/"
                                className='text-indigo-600 text-lg font-bold px-4 py-2 hover:bg-indigo-600 hover:text-white rounded-md' >Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/"
                                className='text-slate-400 text-lg px-4 py-2 hover:bg-indigo-600 hover:text-white rounded-md'>API</Link></li>
                        <li>
                            <Link to="/"
                                className='text-slate-400 text-lg px-4 py-2 hover:bg-indigo-600 hover:text-white rounded-md'>Documentation</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header