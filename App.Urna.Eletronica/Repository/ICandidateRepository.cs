using App.Urna.Eletronica.Data;
using App.Urna.Eletronica.Model;
using System.Collections.Generic;
using System.Linq;

namespace App.Urna.Eletronica.Repository
{
    public interface ICandidateRepository
    {
        bool DeletarCandidato(int IdCandidato);
        void InserirCandidato(CandidateModel Candidato);
        CandidateModel BuscarCandidatoPorId(int IdCandidato);
        CandidateModel BuscarCandidatoPorLegenda(int LegendaPartido);
        IEnumerable<CandidateModel> BuscarCandidatos();
    }
}