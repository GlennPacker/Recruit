namespace Recruit.Infastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Vacancies : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Vacancies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Location = c.String(),
                        VacancyType = c.Int(nullable: false),
                        Pay = c.Int(nullable: false),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Vacancies");
        }
    }
}
