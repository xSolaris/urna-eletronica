using App.Urna.Eletronica.Model;
using Microsoft.EntityFrameworkCore;

namespace App.Urna.Eletronica.Data
{
    public class UrnaEletronicaDbContext : DbContext 

    {
        public DbSet<CandidateModel> Candidatos { get; set; }
        public DbSet<VoteModel> Votos { get; set; }

        public UrnaEletronicaDbContext(DbContextOptions<UrnaEletronicaDbContext> options)
            : base(options)
        {
            this.Database.EnsureCreated();
        }


    }
}
