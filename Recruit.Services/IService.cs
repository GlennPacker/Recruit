using Ninject;
using Recruit.Domain;

namespace Recruit.Services
{
    public interface IService
    {
        [Inject]
        IBaseService<ServiceItem> ServiceItem { get; set; }

        [Inject]
        IBaseService<Vacancy> Vacancies { get; set; }

        [Inject]
        IMailService Mail { get; set; }
    }
}