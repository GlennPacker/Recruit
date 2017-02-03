module Admin.ServiceAdmin {

    interface IVacancyAdminCtrl {
        Data: Admin.Domain.IVacancy[];
        Item: Admin.Domain.IVacancy;
        Msg: string;
        Save(): void;
        Edit(id: number): void;
        Add(): void;
    }

    class VacancyAdminCtrl implements IVacancyAdminCtrl {
        Data: Admin.Domain.IVacancy[];
        Msg: string;
        Item: Admin.Domain.IVacancy;
        
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Admin.Common.DataAccessService) {
            this.Msg = "Testing";
            var vacancyResource = dataAccessService.getVacancyResource();
            vacancyResource.query((data: Admin.Domain.IVacancy[]) => {
                this.Data = data;
            });            
        }

        Add(): void {
            this.Item = new Admin.Domain.Vacancy("", "", "", 0, "");
        };

        Edit(id: number): void {
            this.Item = this.GetVacancyFromArray(id); 
        }
        
        Delete(id: number): void {
            var vacancyResource = this.dataAccessService.getVacancyResource();
            var toDelete: Admin.Domain.IVacancy = this.GetVacancyFromArray(id);
            vacancyResource.delete(toDelete);
            this.Data = this.Data.filter(function (f) {
                return f.Id != id;
            })
        }

        GetVacancyFromArray(id: number): Admin.Domain.IVacancy {
            var result = this.Data.filter(function (v) {
                return v.Id == id;
            })[0];
            return result;
        }

        Save(): void {
            if (!this.Item.Id) {
                this.Data.push(this.Item);
            }
            var vacancyResource = this.dataAccessService.getVacancyResource();
            vacancyResource.save(this.Item);
            this.Item = null;
        }
    }

    angular.module("admin").controller("VacancyAdminCtrl", VacancyAdminCtrl);
}
