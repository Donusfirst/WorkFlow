import React, { useRef } from "react";
import "../Styles/Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <div className="navbar-container">
            <div className="navbar-header">
                <h3>Task Progress</h3>
                <nav ref={navRef} className="navbar-nav">
                    <a href="/#">Inicio</a>
                    <a href="/#">Mesa de ayuda</a>
                    <a href="/#">Recursos Humanos</a>
                    <a href="/#">Biblioteca digital</a>
                    <a href="/Perfil">Mi Perfil</a>
                    <a href="/">Cerrar Sesión</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        x
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
<<<<<<< HEAD
=======
                    Menú
>>>>>>> 0417e631d4d12af8ecc1e5bac045d7291484230a
                </button>
            </div>
        </div>
    );
}

export default Navbar;
