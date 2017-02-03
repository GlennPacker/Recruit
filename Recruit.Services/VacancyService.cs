using System.Collections.Generic;
using System.Linq;
using Recruit.Domain;
using Recruit.Infastructure;

namespace Recruit.Services
{
    public class VacancyService : IBaseService<Vacancy>
    {
        private readonly IRepository _repo;

        public VacancyService(IRepository repo)
        {
            _repo = repo;
        }

        public List<Vacancy> List()
        {
            var result = _repo.Vacancies.List().ToList();
            return result;
        }

        public Vacancy Get(int id)
        {
            var result = _repo.Vacancies.Get(id);
            return result;
        }

        public void Edit(Vacancy model)
        {
            _repo.Vacancies.Edit(model);
        }

        public void Delete(int id)
        {
            _repo.Vacancies.Delete(id);
        }
    }
}
