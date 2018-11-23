module app {
    var main = angular.module('productManagement',
        [
            'ngRoute',
            'productResourceMock',
            'common.services'
        ]);

    main.config(routesConfig);

    routesConfig.$inject = ['$routeProvider'];
    function routesConfig($routeProvider: ng.route.IRouteProvider) :void{
        $routeProvider
            .when('/productList', {
                templateUrl: '/app/products/productListView.html',
                controller: 'ProductListCtrl as vm'
            })
            .when('/productDetail/:productId', {
                templateUrl: '/app/products/productDetailView.html',
                controller: 'ProductDetailCtrl as vm'
            })
            .otherwise({ redirectTo:'/productList'});
    }
    
}