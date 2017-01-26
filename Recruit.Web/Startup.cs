using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Recruit.Web.Startup))]
namespace Recruit.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
