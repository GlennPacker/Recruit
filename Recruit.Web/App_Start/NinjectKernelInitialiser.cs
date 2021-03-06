using System.Configuration;
using Ninject;
using Recruit.Infastructure;
using Recruit.Services;
using Recruit.Domain;

namespace Recruit.Web
{
	public class NinjectKernelInitialiser
	{
	    public static void Configure(IKernel kernel)
		{
			if (ConfigurationManager.AppSettings["Virtual.Mode"] != null &&
			    ConfigurationManager.AppSettings["Virtual.Mode"].ToUpper() == "TRUE")
				BindFakes(kernel);
			else
				BindReal(kernel);
		}

		private static void BindReal(IKernel kernel)
		{
            kernel.Bind<RecruitContext>().To<RecruitContext>();
            kernel.Bind(typeof(IRepositoryBase<>)).To(typeof(RepositoryBase<>));
		    kernel.Bind<IRepository>().To<Repository>();
            kernel.Bind<IBaseService<ServiceItem>>().To<ServiceItemService>();
            kernel.Bind<IBaseService<Vacancy>>().To<VacancyService>();
            kernel.Bind<IService>().To<Service>();
            kernel.Bind<IMailService>().To<MailService>();

		    //kernel.Bind<IConnectionInfo>().To<ConnectionInfo>();
		}

		private static void BindFakes(IKernel kernel)
		{
		}
	}
}