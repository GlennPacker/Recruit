var Admin;
(function (Admin) {
    var ServiceAdmin;
    (function (ServiceAdmin) {
        var ServiceAdminCtrl = (function () {
            function ServiceAdminCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.Msg = "Testing";
                var serviceItemResource = dataAccessService.getServiceItemResource();
                serviceItemResource.query(function (data) {
                    _this.Data = data;
                });
            }
            ServiceAdminCtrl.prototype.Add = function () {
                this.Item = new Admin.Domain.ServiceItem("cross", "title", "description");
            };
            ;
            ServiceAdminCtrl.prototype.Edit = function (id) {
                this.Item = this.GetServiceItemFromArray(id);
            };
            ServiceAdminCtrl.prototype.Delete = function (id) {
                var serviceItemResource = this.dataAccessService.getServiceItemResource();
                var toDelete = this.GetServiceItemFromArray(id);
                serviceItemResource.delete(toDelete);
                this.Data = this.Data.filter(function (f) {
                    return f.Id != id;
                });
            };
            ServiceAdminCtrl.prototype.GetServiceItemFromArray = function (id) {
                var result = this.Data.filter(function (v) {
                    return v.Id == id;
                })[0];
                return result;
            };
            ServiceAdminCtrl.prototype.Save = function () {
                if (!this.Item.Id) {
                    this.Data.push(this.Item);
                }
                var serviceItemResource = this.dataAccessService.getServiceItemResource();
                serviceItemResource.save(this.Item);
                this.Item = null;
            };
            ServiceAdminCtrl.$inject = ['dataAccessService'];
            return ServiceAdminCtrl;
        }());
        angular.module("admin").controller("ServiceAdminCtrl", ServiceAdminCtrl);
    })(ServiceAdmin = Admin.ServiceAdmin || (Admin.ServiceAdmin = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=ServiceItemCtrl.js.map