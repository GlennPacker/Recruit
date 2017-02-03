using System.Collections.Generic;
using System.Linq;
using Recruit.Domain;
using Recruit.Infastructure;

namespace Recruit.Services
{
    public class ServiceItemService : IBaseService<ServiceItem>
    {
        private readonly IRepository _repo;

        public ServiceItemService(IRepository repo)
        {
            _repo = repo;
        }

        public List<ServiceItem> List()
        {
            var result = _repo.ServiceItem.List().ToList();
            return result;
        }

        public ServiceItem Get(int id)
        {
            var result = _repo.ServiceItem.Get(id);
            return result;
        }

        public void Edit(ServiceItem model)
        {
            _repo.ServiceItem.Edit(model);
        }

        public void Delete(int id)
        {
            _repo.ServiceItem.Delete(id);
        }
    }
}
