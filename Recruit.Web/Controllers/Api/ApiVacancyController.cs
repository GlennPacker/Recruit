using Recruit.Services;
using Recruit.Domain;

namespace Recruit.Web.Controllers.Api
{
    public class ApiVacancyController: ApiBaseController<Vacancy>
    {
        private IService _service;

        public ApiVacancyController(IService service) : base(service.Vacancies)
        {
            _service = service;
        }
    }
}