import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import css from './MainLayout.module.css'

function MainLayout() {
    return (
        <div >
            <div className={css.header}>
                {/* <NavLink to='/home'>home</NavLink> */}
                <NavLink to='/users'>users</NavLink>
                <NavLink to='/posts'>posts</NavLink>
                {/* <NavLink to='/about'>about</NavLink> */}
            </div>
            <hr/>
            <Outlet/>
        </div>
    )
}

export { MainLayout }