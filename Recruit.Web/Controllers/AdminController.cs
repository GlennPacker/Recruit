using System.Web.Mvc;

namespace Recruit.Web.Controllers
{
    [Authorize]
    [RequireHttps]
    public class AdminController: Controller    
    {
        public ActionResult Index()
        {
            return View("Index");
        }
    }
}