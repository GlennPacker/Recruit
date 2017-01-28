using System.ComponentModel.DataAnnotations;

namespace Recruit.Domain
{
    public class EntityBase
    {
        [Key]
        public int Id { get; set; }
    }
}
