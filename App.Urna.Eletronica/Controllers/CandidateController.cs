using App.Urna.Eletronica.Business;
using App.Urna.Eletronica.Model;
using App.Urna.Eletronica.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

namespace App.Urna.Eletronica.Controllers
{
    [Route("api")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidateRepository _candidateRepository;
        private readonly IValidationClass _validationRules;

        public CandidateController(ICandidateRepository candidateRepository, IValidationClass validationRules)
        {
            _candidateRepository = candidateRepository;
            _validationRules = validationRules;
        }

        // POST /Candidates
        [HttpPost("candidate")]
        public ActionResult RegistrarCandidato([FromBody] CandidateModel Candidato)
        {

            if (!(Candidato == null))
            {
                if (_validationRules.ValidarCandidatoExistente(Candidato))
                {
                    return BadRequest("Já existe um candidato cadastrado com essa Legenda.");
                }
                else
                {
                    try
                    {
                        Candidato.DtRegistro = DateTime.Now.Date;
                        _candidateRepository.InserirCandidato(Candidato);
                        var uri = Url.Action("Recuperar", new {id = Candidato.LegendaPartido});
                        return Created(uri ,Candidato); //201
                    }catch(Exception ex)
                    {
                        return BadRequest(ex.Message);   
                    }
                }
            }
            else
            {
                return BadRequest(); //400
            }
        }

        // DELETE api/<CandidatesController>/5
        [HttpDelete("candidate/{IdCandidato}")]
        public ActionResult DeletarCandidato(int IdCandidato)
        {
            try
            {

                if (_candidateRepository.DeletarCandidato(IdCandidato))
                {
                    return NoContent(); //204
                }
                else
                {
                    return NotFound("Não foi localizado um candidato com esse Id para realizar a Deleção");
                } 
            }
            catch
            {
                return BadRequest(); //400
            }
        }

        [HttpGet("candidate/recover/{id}")]
        public IActionResult Recuperar(int id)
        {
            var model = _candidateRepository.BuscarCandidatoPorId(id);
            if (model == null)
            {
                return NotFound(); //404
            }
            return Ok(model); //200
        }
    }
}
