var Admin;
(function (Admin) {
    var Domain;
    (function (Domain) {
        var Vacancy = (function () {
            function Vacancy(Location, VacancyType, Description, Pay, Title) {
                this.Location = Location;
                this.VacancyType = VacancyType;
                this.Description = Description;
                this.Pay = Pay;
                this.Title = Title;
            }
            ;
            return Vacancy;
        }());
        Domain.Vacancy = Vacancy;
    })(Domain = Admin.Domain || (Admin.Domain = {}));
})(Admin || (Admin = {}));
//# sourceMappingURL=Vacancy.js.map