using System.Collections.Generic;
using Recruit.Domain;

namespace Recruit.Services
{
    public interface IServiceItemService
    {
        List<ServiceItem> List();
        void Edit(ServiceItem model);
        ServiceItem Get(int id);
    }
}