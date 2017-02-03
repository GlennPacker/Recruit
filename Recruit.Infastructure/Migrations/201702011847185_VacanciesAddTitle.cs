namespace Recruit.Infastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class VacanciesAddTitle : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Vacancies", "Title", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Vacancies", "Title");
        }
    }
}
