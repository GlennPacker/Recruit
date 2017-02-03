using Recruit.Services;
using Recruit.Domain;

namespace Recruit.Web.Controllers.Api
{
    public class ApiServiceItemController: ApiBaseController<ServiceItem>
    {
        private IService _service;

        public ApiServiceItemController(IService service) : base(service.ServiceItem)
        {
            _service = service;
        }
    }
}