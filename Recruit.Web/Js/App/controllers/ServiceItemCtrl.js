var Admin;
(function (Admin) {
    var ServiceAdmin;
    (function (ServiceAdmin) {
        var ServiceItemCtrl = (function () {
            function ServiceItemCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.Msg = "Testing";
                var serviceItemResource = dataAccessService.getServiceItemResource();
                serviceItemResource.query(function (data) {
                    _this.Data = data;
                    if (_this.Data && _this.Data.length > 3) {
                        _this.Data = _this.Data.slice(0, 2);
                    }
                });
            }
            ServiceItemCtrl.$inject = ['dataAccessService'];
            return ServiceItemCtrl;
        }());
        angular.module("app").controller("ServiceItemCtrl", ServiceItemCtrl);
    })(ServiceAdmin = Admin.ServiceAdmin || (Admin.ServiceAdmin = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=ServiceItemCtrl.js.map