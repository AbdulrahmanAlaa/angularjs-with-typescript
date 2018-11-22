var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListController = /** @class */ (function () {
            function ProductListController(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Products Title';
                this.showImage = false;
                this.products = [];
                var productResource = this.dataAccessService.getProductResource();
                productResource.query(function (products) { return _this.products = products; });
            }
            ProductListController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListController.$inject = ['dataAccessService'];
            return ProductListController;
        }());
        // Note: that we shall place it in the bottom because of transpile output
        angular.module('productManagement')
            .controller('ProductListCtrl', ProductListController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
