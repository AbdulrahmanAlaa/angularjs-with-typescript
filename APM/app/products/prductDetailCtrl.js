var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = /** @class */ (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = 'Product Details';
                var productResources = this.dataAccessService.getProductResource();
                productResources.get({ productId: $routeParams.productId }, function (product) { return _this.product = product; });
            }
            ProductDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
            return ProductDetailCtrl;
        }());
        angular.module('productManagement')
            .controller('ProductDetailCtrl', ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=prductDetailCtrl.js.map