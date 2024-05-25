import {NavLink, Outlet} from 'react-router-dom'
import { Suspense } from 'react'
import Loader from '../Loader/Loader'
import css from './Navigation.module.css'
import clsx from 'clsx'

const getLinkCLass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation () {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
            <NavLink to="/" className={getLinkCLass}>
                Home
            </NavLink>
            <NavLink to="/movies" className={getLinkCLass}>
                Movies
            </NavLink>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
            </nav>
        </header>
    )
}