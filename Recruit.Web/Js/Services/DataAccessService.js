var Admin;
(function (Admin) {
    var Common;
    (function (Common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getServiceItemResource = function () {
                return this.$resource('/api/apiserviceitem/:Id');
            };
            DataAccessService.prototype.getVacancyResource = function () {
                return this.$resource('/api/apivacancy/:Id');
            };
            DataAccessService.prototype.getEmailResource = function () {
                return this.$resource('/api/apiemail/:Id');
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        Common.DataAccessService = DataAccessService;
        angular.module('common.services').service('dataAccessService', DataAccessService);
    })(Common = Admin.Common || (Admin.Common = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=DataAccessService.js.map