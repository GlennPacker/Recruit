using Recruit.Domain;
using Recruit.Services;
using System.Web.Http;

namespace Recruit.Web.Controllers.Api
{
    public class ApiEmailController : ApiController
    {
        private IService _service;

        public ApiEmailController(IService service)
        {
            _service = service;
        }

        public IHttpActionResult Post(Email model)
        {
            if (ModelState.IsValid)
            {
                _service.Mail.Send(model);
                return Ok(model);
            }
            return BadRequest();
        }
    }
}
