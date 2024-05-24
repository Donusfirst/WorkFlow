import { useRef } from "react";
import "../Styles/Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>Task Progress</h3>
            <nav ref={navRef}>
                <a href="/#">Inicio</a>
                <a href="/#">Mesa de ayuda</a>
                <a href="/#">Recursos Humanos</a>
                <a href="/#">Bibliotega digital</a>
                <a href="/Perfil">Mi Perfil</a>
                <a href="/">Cerrar Sesion</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    x
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                Menu
            </button>
        </header>
    );
}

export default Navbar;
