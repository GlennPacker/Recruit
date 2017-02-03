var Admin;
(function (Admin) {
    var VacancyAdmin;
    (function (VacancyAdmin) {
        var VacancyCtrl = (function () {
            function VacancyCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.Msg = "Testing";
                var vacancyResource = dataAccessService.getVacancyResource();
                vacancyResource.query(function (data) {
                    _this.Data = data;
                });
            }
            VacancyCtrl.$inject = ['dataAccessService'];
            return VacancyCtrl;
        }());
        angular.module("app").controller("VacancyCtrl", VacancyCtrl);
    })(VacancyAdmin = Admin.VacancyAdmin || (Admin.VacancyAdmin = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=VacancyCtrl.js.map