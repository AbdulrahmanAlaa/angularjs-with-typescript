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
    main.run([
        '$rootScope',
        function ($rootScope) {
            // see what's going on when the route tries to change
            $rootScope.$on('$routeChangeStart', function (event, next, current) {
                // next is an object that is the route that we are starting to go to
                // current is an object that is the route where we are currently
                var currentPath = current;
                var nextPath = next;
                console.log('Starting to leave  to go to', currentPath, nextPath);
            });
        }
    ]);
})(app || (app = {}));
