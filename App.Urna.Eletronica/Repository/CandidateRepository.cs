using App.Urna.Eletronica.Data;
using App.Urna.Eletronica.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace App.Urna.Eletronica.Repository
{
    public class CandidateRepository : ICandidateRepository
    {
        private readonly UrnaEletronicaDbContext _DbContext;

        public IQueryable<CandidateModel> All => _DbContext.Set<CandidateModel>().AsQueryable();
        public CandidateRepository(UrnaEletronicaDbContext DbContext)
        {
            _DbContext = DbContext;
        }

        public void InserirCandidato(CandidateModel Candidato)
        {
            Candidato.DtRegistro = DateTime.Now;

            try
            {
                _DbContext.Candidatos.Add(Candidato);
                _DbContext.SaveChanges();
            }catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool DeletarCandidato(int Id)
        {
            var Candidato = _DbContext.Candidatos.Find(Id);
            if(Candidato == null)
            {
                return false;
            }
            else
            {
                _DbContext.Candidatos.Remove(Candidato);
                _DbContext.SaveChanges();
                return true;
            }
        }

        public CandidateModel BuscarCandidatoPorId(int Id)
        {
            return _DbContext.Candidatos.Find(Id);
        }

        public CandidateModel BuscarCandidatoPorLegenda(int LegendaPartido)
        {
            
            var Resultado = _DbContext.Candidatos.Where(x=> x.LegendaPartido == LegendaPartido).FirstOrDefault();
            return Resultado;
        }

        public IEnumerable<CandidateModel> BuscarCandidatos()
        {
            return _DbContext.Candidatos.ToList();
        } 
    }
}
