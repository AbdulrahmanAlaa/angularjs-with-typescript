module app.productDetail {
    interface IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetailModel {

        title: string;
        product: app.domain.IProduct;

        static $inject = ['$routeParams', 'dataAccessService'];

        constructor(
            private $routeParams: IProductParams,
            private dataAccessService: app.common.DataAccessService
        ) {
            this.title = 'Product Details';
            const productResources = this.dataAccessService.getProductResource();
            productResources.get({ productId: $routeParams.productId }, (product: app.domain.IProduct) => this.product = product);
        }
    }
    angular.module('productManagement')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
}