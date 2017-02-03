module Admin.ServiceAdmin {

    interface IServiceAdminCtrl {
        Data: Admin.Domain.IServiceItem[];
        Item: Admin.Domain.IServiceItem;
        Msg: string;
        Save(): void;
        Edit(id: number): void;
        Add(): void;
    }

    class ServiceAdminCtrl implements IServiceAdminCtrl {
        Data: Admin.Domain.IServiceItem[];
        Msg: string;
        Item: Admin.Domain.IServiceItem;
        
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Admin.Common.DataAccessService) {
            this.Msg = "Testing";
            var serviceItemResource = dataAccessService.getServiceItemResource();
            serviceItemResource.query((data: Admin.Domain.IServiceItem[]) => {
                this.Data = data;
            });            
        }

        Add(): void {
            this.Item = new Admin.Domain.ServiceItem("cross", "title", "description");
        };

        Edit(id: number): void {
            this.Item = this.GetServiceItemFromArray(id); 
        }

        Delete(id: number): void {
            var serviceItemResource = this.dataAccessService.getServiceItemResource();
            var toDelete: Admin.Domain.IServiceItem = this.GetServiceItemFromArray(id);
            serviceItemResource.delete(toDelete);
            this.Data = this.Data.filter(function (f) {
                return f.Id != id;
            })
        }

        GetServiceItemFromArray(id: number): Admin.Domain.IServiceItem {
            var result = this.Data.filter(function (v) {
                return v.Id == id;
            })[0];
            return result;
        }

        Save(): void {
            if (!this.Item.Id) {
                this.Data.push(this.Item);
            }
            var serviceItemResource = this.dataAccessService.getServiceItemResource();
            serviceItemResource.save(this.Item);
            this.Item = null;
        }
    }

    angular.module("admin").controller("ServiceAdminCtrl", ServiceAdminCtrl);
}
