var App;
(function (App) {
    var EmailAdmin;
    (function (EmailAdmin) {
        var EmailCtrl = (function () {
            function EmailCtrl(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.Sent = false;
                this.Msg = new Admin.Domain.Email();
            }
            EmailCtrl.prototype.Send = function (valid) {
                if (!valid)
                    return;
                var emailResource = this.dataAccessService.getEmailResource();
                emailResource.save(this.Msg);
                this.Msg = new Admin.Domain.Email();
                this.Sent = true;
            };
            EmailCtrl.$inject = ['dataAccessService'];
            return EmailCtrl;
        }());
        angular.module("app").controller("EmailCtrl", EmailCtrl);
    })(EmailAdmin = App.EmailAdmin || (App.EmailAdmin = {}));
})(App || (App = {}));
//# sourceMappingURL=EmailCtrl.js.map