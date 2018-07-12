using FApi.Data.Entities.CRM;
using FApi.Data.Entities.Dominios;
using Microsoft.EntityFrameworkCore;

namespace FApi.Data
{
    public partial class ApplicationDbContext
    {
        #region Tables 

        #region Dominios

        public DbSet<Sexo> Sexos { get; set; }

        #endregion
        
        #region CRM

        public DbSet<Pessoa> Pessoas { get; set; }

        #endregion

        #endregion
    }
}
