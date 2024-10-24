import logoXbox from '../../assets/images/logo-xbox.png'
import './Header.scss'


export function Header() {
    return (
        <>
            <header>
                    <nav>
                            <ul>
                                <img src={logoXbox} alt="Logo Xbox" />
                                <li className='background-different'>VISÃO GERAL</li>
                                <li>JOGOS</li>
                                <li>GALERIA</li>
                                <li>UNBOX</li>
                            </ul>

                            <button>VER DISPONIBILDADE</button>
                    </nav>
            </header>
        </>
    )
}