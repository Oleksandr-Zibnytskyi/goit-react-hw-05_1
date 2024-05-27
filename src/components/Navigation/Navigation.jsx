import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import clsx from 'clsx';

const getLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active)
}

export default function Novigation () {
    return (
        <div>
            <header className={css.header}>
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/Movies" className={getLinkClass}>Movies</NavLink>
            </header>
        </div>
    );
}