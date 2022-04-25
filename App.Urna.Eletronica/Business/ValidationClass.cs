using App.Urna.Eletronica.Data;
using App.Urna.Eletronica.Model;
using App.Urna.Eletronica.Repository;

namespace App.Urna.Eletronica.Business
{
    public class ValidationClass : IValidationClass
    {
        private readonly ICandidateRepository _candidateRepository;

        public ValidationClass(ICandidateRepository candidateRepository)
        {
            _candidateRepository = candidateRepository;
        }

        public bool ValidarCandidatoExistente(CandidateModel Candidato)
        {

            if (_candidateRepository.BuscarCandidatoPorLegenda(Candidato.LegendaPartido) == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool ValidarCandidatoPorLegenda(int LegendaPartido)
        {

            if (_candidateRepository.BuscarCandidatoPorLegenda(LegendaPartido) == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool ValidarVotoBranco(VoteModel Voto)
        {
            if(Voto == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public bool ValidarVoto(VoteModel Voto)
        {
            if(Voto.IdCandidato == 0)
            {
                return false;
            }

            if(Voto.DtVoto == null)
            {
                return false;
            }

            return true;
        }
    }
}
