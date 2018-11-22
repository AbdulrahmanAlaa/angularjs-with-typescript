module app.common {
    interface IDataAccessService {

    }

    interface IProductService extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService implements IDataAccessService {
        static $inject = ['$resource'];

        constructor(private $resource:ng.resource.IResourceService){
        }

        getProductResource():ng.resource.IResourceClass<IProductService>{
            return this.$resource('/api/products/:productId');
        }
    }
    angular.module('common.services').service('dataAccessService',DataAccessService);
}