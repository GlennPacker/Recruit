module Admin.ServiceAdmin {

    interface IServiceItemCtrl {
        Data: Admin.Domain.IServiceItem[];
        Msg: string;
    }

    class ServiceItemCtrl implements IServiceItemCtrl {
        Data: Admin.Domain.IServiceItem[];
        Msg: string;
                
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Admin.Common.DataAccessService) {
            this.Msg = "Testing";
            var serviceItemResource = dataAccessService.getServiceItemResource();
            serviceItemResource.query((data: Admin.Domain.IServiceItem[]) => {
                this.Data = data;
                if (this.Data && this.Data.length > 3) {
                    this.Data = this.Data.slice(0, 2);
                }
            });            
        }
    }

    angular.module("app").controller("ServiceItemCtrl", ServiceItemCtrl);
}
