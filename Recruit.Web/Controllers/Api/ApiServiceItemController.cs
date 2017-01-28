using System.Web.Http;
using Recruit.Services;
using Recruit.Domain;

namespace Recruit.Web.Controllers.Api
{
    public class ApiServiceItemController: ApiController
    {
        private IService _service;

        public ApiServiceItemController(IService service)
        {
            _service = service;
        }

        public IHttpActionResult Get()
        {
            var data = _service.ServiceItem.List();
            return Ok(data);
        }

        public IHttpActionResult Get(int id)
        {
            var data = _service.ServiceItem.Get(id);
            return data == null ? (IHttpActionResult)BadRequest() : (IHttpActionResult)Ok(data);
        }

        public IHttpActionResult Post(ServiceItem model)
        {
            if(ModelState.IsValid)
            {
                _service.ServiceItem.Edit(model);
                return Ok(model);
            }
            return BadRequest();
        }
    }
}