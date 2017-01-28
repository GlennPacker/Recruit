using Ninject;

namespace Recruit.Services
{
    public class Service : IService
    {
        [Inject]
        public IServiceItemService ServiceItem { get; set; }
    }
}
