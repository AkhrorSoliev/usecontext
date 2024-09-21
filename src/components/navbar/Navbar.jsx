// styles
import styles from "./Navbar.module.css";

// react icons
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes, FaHeart } from "react-icons/fa";

// rrd imports
import { Link } from "react-router-dom";

// react icons
import { FcCameraIdentification } from "react-icons/fc";
import { useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
      <div className={`container ${styles.header__container}`}>
        <Link to="/">
          <FcCameraIdentification className={styles.header__icon} />
        </Link>

        <nav className={styles.header__navbar}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/likedImages">
            <FaHeart />
          </Link>
        </nav>

        <div
          className={`${styles.hidden__navbar} ${
            showNav ? styles.hidden__navbar__show : ""
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {!showNav && (
          <FaBarsStaggered
            onClick={() => setShowNav(!showNav)}
            className={styles.toggle__input}
          />
        )}
        {showNav && (
          <FaTimes
            onClick={() => setShowNav(!showNav)}
            className={styles.toggle__input}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
