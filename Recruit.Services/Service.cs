using System;
using Ninject;
using Recruit.Domain;

namespace Recruit.Services
{
    public class Service : IService
    {
        [Inject]
        public IBaseService<ServiceItem> ServiceItem { get; set; }


        [Inject]
        public IBaseService<Vacancy> Vacancies { get; set; }

        [Inject]
        public IMailService Mail { get; set; }

    }
}
