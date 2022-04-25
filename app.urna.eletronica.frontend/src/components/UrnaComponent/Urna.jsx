import React, { useEffect, useState } from 'react'
import './Urna.css'
import Brasao from '../../Assets/img/brasao-brasil-preto-e-branco.png'

const Urna = () => {

    const [digito, setDigito] = useState(0)
    const [candidatos, setCandidatos] = useState([])
    const [nomeCandidato, setNomeCandidato] = useState("")
    const [nomeViceCandidato, setNomeViceCandidato] = useState("")
    const [showModal, setShowModal] = useState(false)

    
    const handleValueChange = (Valor) => {
        
        if(Valor == 404){
            setDigito("99")
            setNomeCandidato("Voto em Branco")
            setNomeViceCandidato("Voto em Branco")
        }

        if(Valor == 0){
            limparDadosCandidato()
        }
        
        
        let legendaVoto = `${digito}` + `${Valor}` 
        
        if(legendaVoto.length <= 2){
            buscarNomeCandidato(legendaVoto)
            setDigito(parseInt(legendaVoto))
        }else{
            if(Valor == 200){
                efetuarVoto(digito)
                setShowModal(true)
            }
            if(nomeCandidato == "" && digito != 0){
                votoNulo()
            }
        }
    }

    useEffect(() => {
        fetch('https://localhost:44326/api/votes')
            .then(response => response.json())
            .then(response => (setCandidatos(response)))

            console.log(candidatos)
            
    },[])

    function efetuarVoto(legendaPartido){

        const voto = {
            idCandidato: digito,
        }

        fetch('https://localhost:44326/api/vote', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },

            body: JSON.stringify(voto)
        })

        console.log(voto)

    }

    function buscarNomeCandidato(legendaVoto){

        candidatos.forEach(element => {
            if(element.legendaPartido == legendaVoto){
                setNomeCandidato(element.nome)
                console.log(element)
                setNomeViceCandidato(element.nomeViceCandidato)
            }
        });

        
    }

    function votoNulo(){
        setNomeCandidato("Voto Nulo")
        setNomeViceCandidato("Voto Nulo")
    }

    function showModalTrue(){
        document.getElementById("apresentacaoCandidato").innerHTML = "<h1 id='fim' class='text-center'>FIM</h1> <br/> Votação encerrada, clique <a href='/'>aqui<a> para votar novamente"
        setShowModal(false)
        limparDadosCandidato()
        
    }

    function limparDadosCandidato(){
        setDigito("")
        setNomeCandidato("")
        setNomeViceCandidato("")
    }

    return (
        <>
            <div className="main-container">
                <div className="modal-principal">
                    <form name="voto" id="voto">
                        <div className="monitor">
                            <div className="apresentacao-candidato" id="apresentacaoCandidato">

                                {showModal ? showModalTrue() : ""}
                            
                                <h4>SEU VOTO PARA</h4>  
                                <h1>PRESIDENTE</h1>
                                <h3 className="numero-titulo">Número:</h3>

                                <div>
                                    <input className ="input-legendaPartido" type="text" name="posicao1" data-ls-module="charCounter" maxlength="2" id="posicao1" onChange={handleValueChange} value={digito == 0 ? "" : digito}/> 
                                </div>
                                <h3>Candidato: {nomeCandidato}</h3>
                                <h3>Vice: {nomeViceCandidato}</h3>
                            </div>

                            <div className="orientacao">
                                <h4>Aperte a Tecla</h4>
                                <h4>VERDE para CONFIRMAR</h4>
                                <h4>LARANJA para CORRIGIR</h4>
                            </div>

                            <div className="apresentacao-candidato" id="divOculta">

                            </div>
                        
                        
                        </div>
                        <div className="teclado">
                            <div className="justica">

                                <img className="img-logo" src={Brasao} alt="brasao" />
                                Justiça Eleitoral

                            </div>
                            <div className=" teclado-numeros">
                                <div className="tabela-numeros">
                                    <button type="button" className="botao button1" onClick={()=> handleValueChange(1)}>1</button>
                                    <button type="button" className="botao button2" onClick={()=> handleValueChange(2)}>2</button>
                                    <button type="button" className="botao button3" onClick={()=> handleValueChange(3)}>3</button>
                                    <button type="button" className="botao button4" onClick={()=> handleValueChange(4)}>4</button>
                                    <button type="button" className="botao button5" onClick={()=> handleValueChange(5)}>5</button>
                                    <button type="button" className="botao button6" onClick={()=> handleValueChange(6)}>6</button>
                                    <button type="button" className="botao button7" onClick={()=> handleValueChange(7)}>7</button>
                                    <button type="button" className="botao button8" onClick={()=> handleValueChange(8)}>8</button>
                                    <button type="button" className="botao button9" onClick={()=> handleValueChange(9)}>9</button>
                                    <button type="button" className="botao button0" onClick={()=> handleValueChange(0)}>0</button>
                                </div>
                            </div>
                            <div className="btn-operacoes">
                                <button type="button" className="botao branco" onClick={()=> handleValueChange(404)}>BRANCO</button>
                                <button type="reset" className="botao corrige" onClick={()=> handleValueChange(0)}>CORRIGE</button>
                                <button type="button" className="botao confirma" onClick={()=> handleValueChange(200)}>CONFIRMA</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Urna
