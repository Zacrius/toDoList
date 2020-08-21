namespace toDoList.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class toDo : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ToDoes", "Reminder", c => c.DateTime(nullable: false));
            DropColumn("dbo.ToDoes", "Time");
        }

        public override void Down()
        {
            AddColumn("dbo.ToDoes", "Time", c => c.DateTime(nullable: false));
            DropColumn("dbo.ToDoes", "Reminder");
        }
    }
}
