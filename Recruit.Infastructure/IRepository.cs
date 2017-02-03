using Recruit.Domain;

namespace Recruit.Infastructure
{
    public interface IRepository
    {
        IRepositoryBase<ServiceItem> ServiceItem { get; set; }
        IRepositoryBase<Vacancy> Vacancies { get; set; }
        IRepositoryBase<Icon> Icon { get; set; }
    }
}