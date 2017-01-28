namespace Recruit.Infastructure.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _2 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Icons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StyleClass = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Icons");
        }
    }
}
