using System.Data.Entity;
using Recruit.Domain;

namespace Recruit.Infastructure
{
    public class RecruitContext: DbContext
    {
        public DbSet<ServiceItem> ServiceItems { get; set; }
        public DbSet<Icon> Icons { get; set; }

        public RecruitContext(): base("DefaultConnection")
        {
            
        }
    }
}
