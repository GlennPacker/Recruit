using System.Web.Http;
using Recruit.Services;

namespace Recruit.Web.Controllers.Api
{
    public class ApiBaseController<T>: ApiController
    {
        private IBaseService<T> _service;

        public ApiBaseController(IBaseService<T> service)
        {
            _service = service;
        }

        public IHttpActionResult Get()
        {
            var data = _service.List();
            return Ok(data);
        }

        public IHttpActionResult Get(int id)
        {
            var data = _service.Get(id);   
            return data == null ? (IHttpActionResult)BadRequest() : (IHttpActionResult)Ok(data);
        }

        public IHttpActionResult Post(T model)
        {
            if(ModelState.IsValid)
            {
                _service.Edit(model);
                return Ok(model);
            }
            return BadRequest();
        }

        public IHttpActionResult Delete(int id)
        {
            if (id == 0) return BadRequest("Id can not be 0");
            _service.Delete(id);
            return Ok();
        }
    }
}