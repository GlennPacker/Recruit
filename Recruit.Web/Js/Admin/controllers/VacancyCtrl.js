var Admin;
(function (Admin) {
    var ServiceAdmin;
    (function (ServiceAdmin) {
        var VacancyAdminCtrl = (function () {
            function VacancyAdminCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.Msg = "Testing";
                var vacancyResource = dataAccessService.getVacancyResource();
                vacancyResource.query(function (data) {
                    _this.Data = data;
                });
            }
            VacancyAdminCtrl.prototype.Add = function () {
                this.Item = new Admin.Domain.Vacancy("", "", "", 0, "");
            };
            ;
            VacancyAdminCtrl.prototype.Edit = function (id) {
                this.Item = this.GetVacancyFromArray(id);
            };
            VacancyAdminCtrl.prototype.Delete = function (id) {
                var vacancyResource = this.dataAccessService.getVacancyResource();
                var toDelete = this.GetVacancyFromArray(id);
                vacancyResource.delete(toDelete);
                this.Data = this.Data.filter(function (f) {
                    return f.Id != id;
                });
            };
            VacancyAdminCtrl.prototype.GetVacancyFromArray = function (id) {
                var result = this.Data.filter(function (v) {
                    return v.Id == id;
                })[0];
                return result;
            };
            VacancyAdminCtrl.prototype.Save = function () {
                if (!this.Item.Id) {
                    this.Data.push(this.Item);
                }
                var vacancyResource = this.dataAccessService.getVacancyResource();
                vacancyResource.save(this.Item);
                this.Item = null;
            };
            VacancyAdminCtrl.$inject = ['dataAccessService'];
            return VacancyAdminCtrl;
        }());
        angular.module("admin").controller("VacancyAdminCtrl", VacancyAdminCtrl);
    })(ServiceAdmin = Admin.ServiceAdmin || (Admin.ServiceAdmin = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=VacancyCtrl.js.map