namespace Recruit.Domain
{
    public class Vacancy: EntityBase
    {
        public string Title { get; set; }
        public string Location { get; set; }
        public VacancyType VacancyType { get; set; }
        public int Pay { get; set; }
        public string Description { get; set; }
    }
}
