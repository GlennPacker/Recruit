module Admin.VacancyAdmin {

    interface IVacancyCtrl {
        Data: Admin.Domain.IVacancy[];
        Msg: string;
    }

    class VacancyCtrl implements IVacancyCtrl {
        Data: Admin.Domain.IVacancy[];
        Msg: string;
                
        static $inject = ['dataAccessService'];
        constructor(private dataAccessService: Admin.Common.DataAccessService) {
            this.Msg = "Testing";
            var vacancyResource = dataAccessService.getVacancyResource();
            vacancyResource.query((data: Admin.Domain.IVacancy[]) => {
                this.Data = data;
            });            
        }
    }

    angular.module("app").controller("VacancyCtrl", VacancyCtrl);
}
