import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = () => {
  return (
    <div>
        <nav class="navbar container">
            <picture class="navlogo">
                <img src="/img/loguito.png" alt="El logo de la marca PelidaMax"></img>
            </picture>
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i class="ri-menu-line"></i></label>
            <div class="menu">
                <ul class="list s-text">
                <li class="nav-item menu__item">
                        <a class="nav-link" aria-current="page" href="i../../public/index.html">About</a>
                    </li>
                    <li class="nav-item menu__item">
                        <a class="nav-link" href="../../public/index.html">Contact</a>
                    </li>
                    <li class="nav-item menu__item">
                        <a class="nav-link" href="i../../public/index.html">Gallery</a>
                    </li>
                    <li class="nav-item dropdown menu__item">
                        <a class="nav-link dropdown-toggle" href="../../public/index.html" id="navbarDropdownMenuLink"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service
                        </a>
                        <ul class="dropdown-menu sub-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="sub-menu__link dropdown-item" href="../../public/index.html">Procesadores</a></li>
                            <li><a class="sub-menu__link dropdown-item" href="../../public/index.html">RAM</a></li>
                            <li><a class="sub-menu__link dropdown-item" href="../../public/index.html">Fuentes</a></li>
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