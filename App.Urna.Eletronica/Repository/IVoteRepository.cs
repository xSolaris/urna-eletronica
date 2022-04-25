using App.Urna.Eletronica.Model;
using System.Collections.Generic;

namespace App.Urna.Eletronica.Repository
{
    public interface IVoteRepository
    {
        IEnumerable<CandidateModel> RecuperarVotosPorCandidato();
        void Votar(VoteModel Voto);
    }
}