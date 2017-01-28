using System.ComponentModel.DataAnnotations;

namespace Recruit.Domain
{
    public class ServiceItem: EntityBase
    {
        public string Icon { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
