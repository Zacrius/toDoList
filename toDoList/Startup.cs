using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(toDoList.Startup))]
namespace toDoList
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
