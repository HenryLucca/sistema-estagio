import React from 'react'

const inicio = () => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <h2 className="logo">Trainne</h2>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#entrar">Entrar</a></li>
                        <li><a href="formularioCadastro/cadastro.html" className="btn">Cadastre-se</a></li>
                    </ul>
                </nav>
            </div>
            <div className="content" id="inicio">
                <h1>Conheça a sua nova comunidade profissional</h1>
                <img src="formularioCadastro/assets/images.png" alt="imagem home" />
            </div>
            <div className="page">
                <h1>Aqui o coordenador encontra: </h1>

                <div className="row">
                    <div className="card caracteristicas">
                        <a href="">
                            <h2>Um ambiente personalizado para fácil entendimento</h2>
                        </a>
                    </div>

                    <div className="card caracteristicas">
                        <a href="">
                            <h2>Um ambiente filtrado e com informações dispostas e atualizadas sempre que eu quiser</h2>
                        </a>
                    </div>
                    <div className="card caracteristicas">
                        <a href="">
                            <h2>Um ambiente com chat para conversar facilmente com os alunos</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default inicio