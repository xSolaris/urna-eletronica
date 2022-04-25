import React, { useEffect, useState } from 'react'

import './ListarVotos.css'

const ListarVotos = () => {

    const [candidatos, setCandidatos] = useState([])

    useEffect(() => {
        fetch('https://localhost:44326/api/votes')
            .then(response => response.json())
            .then(candidatos => (setCandidatos(candidatos)))

            
    }, [])

    function deletarCandidato(legendaPartido){

        const canditatoDel = {
            legendaPartido: legendaPartido,
        }

        fetch(`https://localhost:44326/api/candidate/${legendaPartido}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },

            body: JSON.stringify(canditatoDel)
        })

        window.location.href = "/ListarVotos";
    }

    return (

        <>
            <h1 class="pt-3 pb-3 text-center">Lista de Candidatos</h1>
            
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Legenda</th>
                            <th scope="col">Candidato</th>
                            <th scope="col">Vice</th>
                            <th scope="col">Qtd Votos</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="data">

                       


                        {candidatos.map(candidato =>(

                            <tr>
                                <th id="idCandidato">{candidato.legendaPartido}</th>
                                <th id="nomeCandidato">{candidato.nome}</th>
                                <th id="nomeViceCandidato">{candidato.nomeViceCandidato}</th>
                                <th id="votosCandidato">{candidato.votes.length}</th>
                                <th>
                                    <button className="btnDel" onClick={() => {deletarCandidato(candidato.legendaPartido)}}>Deletar</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ListarVotos





