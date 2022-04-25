using App.Urna.Eletronica.Business;
using App.Urna.Eletronica.Model;
using App.Urna.Eletronica.Repository;
using Microsoft.AspNetCore.Mvc;
using System;

namespace App.Urna.Eletronica.Controllers
{
    [Route("api")]
    [ApiController]
    public class VoteController : ControllerBase
    {

        private readonly IVoteRepository _voteRepository;
        private readonly IValidationClass _validations;

        public VoteController(IVoteRepository voteRepository, IValidationClass validations)
        {
            _voteRepository = voteRepository;
            _validations = validations;
        }

        // Post: VotesController/{LegendaPartido}
        [HttpPost("vote")]
        public ActionResult Votar([FromBody] VoteModel Voto)
        {
            if (_validations.ValidarVoto(Voto) && _validations.ValidarCandidatoPorLegenda(Voto.IdCandidato))
            {
                _voteRepository.Votar(Voto);
                return Ok("O voto foi computado com sucesso!");

            }
            else
            {
                Voto.IdCandidato = 98;
                _voteRepository.Votar(Voto);
                return Ok("O voto foi computado com sucesso!");
            }
        }

        // GET VotesController/
        [HttpGet("votes")]
        public ActionResult RecuperarVotosPorCandidato()
        {
            var Candidatos = _voteRepository.RecuperarVotosPorCandidato();
            
            return Ok(Candidatos);
        }
    }
}
