using Ninject;

namespace Recruit.Services
{
    public interface IService
    {
        [Inject]
        IServiceItemService ServiceItem { get; set; }
    }
}