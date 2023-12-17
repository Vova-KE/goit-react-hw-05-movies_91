import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const AppBar = () => {
  return (
    <>
      <header>
        <nav className={style.navBox}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : style.btn)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? style.active : style.btn)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default AppBar;
