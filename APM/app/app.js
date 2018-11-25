var app;
(function (app) {
    var main = angular.module('productManagement', [
        'ngRoute',
        'productResourceMock',
        'common.services'
    ]);
    main.config(routesConfig);
    routesConfig.$inject = ['$routeProvider'];
    function routesConfig($routeProvider) {
        $routeProvider
            .when('/productList', {
            templateUrl: '/app/products/productListView.html',
            controller: 'ProductListCtrl as vm'
        })
            .when('/productDetail/:productId', {
            templateUrl: '/app/products/productDetailView.html',
            controller: 'ProductDetailCtrl as vm'
        })
            .otherwise({ redirectTo: '/productList' });
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map