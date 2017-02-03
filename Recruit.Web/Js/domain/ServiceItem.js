var Admin;
(function (Admin) {
    var Domain;
    (function (Domain) {
        var ServiceItem = (function () {
            function ServiceItem(Icon, Title, Description) {
                this.Icon = Icon;
                this.Title = Title;
                this.Description = Description;
            }
            ;
            return ServiceItem;
        }());
        Domain.ServiceItem = ServiceItem;
    })(Domain = Admin.Domain || (Admin.Domain = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=ServiceItem.js.map