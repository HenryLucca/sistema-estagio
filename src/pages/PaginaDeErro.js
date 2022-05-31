import {NavLink} from 'react-router-dom';
import './PaginaDeErro.css';

const PaginaDeErro = () => {
    return (
        <div>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>4<span ></span>4</h1>
                    </div>
                    <h2>Oops! Página não encontrada.</h2>
                    <p>A página que você tentou acessar não existe =(</p>
                    <NavLink className='a' to="/">Voltar a página inicial</NavLink>
                </div>
            </div>
        </div>
    )
}

export default PaginaDeErro