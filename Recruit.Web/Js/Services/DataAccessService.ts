module Admin.Common {
    interface IDataAccessService {
    }

    interface IServiceItemResource extends angular.resource.IResource<Admin.Domain.IServiceItem> {

    }

    interface IVacancyResource extends angular.resource.IResource<Admin.Domain.IVacancy> {

    }

    interface IEmailResource extends angular.resource.IResource<Admin.Domain.IEmail> {

    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        getServiceItemResource(): ng.resource.IResourceClass<IServiceItemResource> {
            return this.$resource('/api/apiserviceitem/:Id');
        }

        getVacancyResource(): ng.resource.IResourceClass<IVacancyResource> {
            return this.$resource('/api/apivacancy/:Id');
        }

        getEmailResource(): ng.resource.IResourceClass<IEmailResource> {
            return this.$resource('/api/apiemail/:Id');
        }
    }

    angular.module('common.services').service('dataAccessService', DataAccessService);
}