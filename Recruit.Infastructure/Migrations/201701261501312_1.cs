namespace Recruit.Infastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ServiceItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Icon = c.String(),
                        Title = c.String(),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ServiceItems");
        }
    }
}
