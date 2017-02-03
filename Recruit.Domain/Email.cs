using System.ComponentModel.DataAnnotations;

namespace Recruit.Domain
{
    public class Email
    {
        [Required]
        public string Name { get; set; }

        [Required, DataType("Email")]
        public string ReplyEmail { get; set; }
                
        public string Tel { get; set; }

        [Required]
        public string Enquiry { get; set; }
    }
}
