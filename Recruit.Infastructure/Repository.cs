using System;
using Ninject;
using Recruit.Domain;

namespace Recruit.Infastructure
{
    public class Repository : IRepository
    {
        [Inject]
        public IRepositoryBase<ServiceItem> ServiceItem { get; set; }

        [Inject]
        public IRepositoryBase<Icon> Icon { get; set; }

        [Inject]
        public IRepositoryBase<Vacancy> Vacancies { get; set; }
        
    }
}
