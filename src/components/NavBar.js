import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = () => {
  return (
    <div>
        <nav className="navbar container">
            <picture className="navlogo">
                <img src="/img/loguito.png" alt="El logo de la marca PelidaMax"></img>
            </picture>
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list s-text">
                <li className="nav-item menu__item">
                        <a className="nav-link" aria-current="page" href="i../../public/index.html">About</a>
                    </li>
                    <li className="nav-item menu__item">
                        <a className="nav-link" href="../../public/index.html">Contact</a>
                    </li>
                    <li className="nav-item menu__item">
                        <a className="nav-link" href="i../../public/index.html">Gallery</a>
                    </li>
                    <li className="nav-item dropdown menu__item">
                        <a className="nav-link dropdown-toggle" href="../../public/index.html" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </a>
                        <ul className="dropdown-menu sub-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="sub-menu__link dropdown-item" href="../../public/index.html">Procesadores</a></li>
                            <li><a className="sub-menu__link dropdown-item" href="../../public/index.html">RAM</a></li>
                            <li><a className="sub-menu__link dropdown-item" href="../../public/index.html">Fuentes</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
        <ItemListContainer greeting={'Buenas nuevas!'}/>
        
    </div>
  )
}
export default NavBar