using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace App.Urna.Eletronica.Model
{
    public class CandidateModel
    {
        [Key]
        public int LegendaPartido { get; set; }
        public string Nome { get; set; }
        public string NomeViceCandidato { get; set; }
        public DateTime DtRegistro { get; set; }

        public ICollection<VoteModel> Votes { get; set; }

    }
}
