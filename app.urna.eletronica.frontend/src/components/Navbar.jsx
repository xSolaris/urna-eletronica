import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top navbar-shrink">
        <div class="container">
            <div class="navbar-header page-scroll">
                <a class="navbar-brand page-scroll" href="/">App Urna Eletrônica</a>
            </div>

            <div>
                <ul class="nav">
                    <li class="">
                        <a class="page-scroll" href="/">Votar</a>
                    </li>
                    <li class="">
                        <a class="page-scroll" href="/ListarVotos">Listar Votos</a>
                    </li>
                    <li class="">
                        <a class="page-scroll" href="/CadastrarCandidato">Cadastro</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar