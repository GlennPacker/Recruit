using System.Web;
using System.Web.Optimization;

namespace Recruit.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js",
                        "~/Scripts/modernizr-*",
                        "~/Scripts/jquery.validate*",
                        "~/Scripts/angular.js",
                        "~/Scripts/angular-toastr.js",
                        "~/Scripts/angular-resource.js",
                        "~/Scripts/angular-ui-router.js"
                        //"~/Scripts/",
                        //"~/Scripts/",
                        //"~/Scripts/",
                        //"~/Scripts/",
                        //"~/Scripts/",
                        //"~/Scripts/",
                        //"~/Scripts/",
                        ));
            
            bundles.Add(new ScriptBundle("~/bundles/customjs").Include(
                "~/Js/agency.js",
                "~/Js/admin/admin.js",
                "~/Js/admin/controllers/ServiceItemCtrl.js")
                );

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/agency.css",
                      "~/Content/font-awesome.css",
                      "~/Content/site.css"));
        }
    }
}
