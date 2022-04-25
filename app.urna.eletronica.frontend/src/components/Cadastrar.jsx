import React,  { useState } from 'react'
import './Cadastrar.css'

const Cadastrar = () => {

    const candidato = {

        Nome: "",
        NomeViceCandidato: "",
        LegendaPartido: 0
    }

    const[values, setValues] = useState(candidato)

    function onChange(ev){
        const {name, value} = ev.target;
        setValues({...values, [name]: value})

        console.log(values)
    }

    function cadastrarCandidato(){    

        const candidatoCad = {
            Nome: values.Nome,
            NomeViceCandidato: values.NomeViceCandidato,
            LegendaPartido: parseInt(values.LegendaPartido)
        }

                fetch('https://localhost:44326/api/candidate', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
    
                body: JSON.stringify(candidatoCad)
            })

        console.log(candidatoCad)
    }


  return (

    
    <div class="content">      
      <div id="cadastro">
        <form> 
          <h1>Cadastro</h1> 
          
          <p> 
            <label htmlFor='Nome'>Nome do Candidato</label>
            <input className=" input-info-Cadastro" id="Nome" name="Nome" required="required" type="text" onChange={onChange}/>
          </p>
          
          <p> 
            <label htmlFor='NomeViceCandidato'>Nome do Vice Candidato</label>
            <input className=" input-info-Cadastro" id="NomeViceCandidato" name="NomeViceCandidato" required="required" type="text" onChange={onChange}/> 
          </p>
          
          <p> 
            <label htmlFor='Nome'>Legenda do partido</label>
            <input className=" input-info-Cadastro" id="LegendaPartido" name="LegendaPartido" required="required" type="text" onChange={onChange}/>
          </p>
          
          <p> 
            <input type="submit" className="input-btn-submit input-info-Cadastro" onClick={()=> {cadastrarCandidato()}}/> 
          </p>
        </form>
      </div>
    </div>
  )
}

export default Cadastrar