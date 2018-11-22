module app.productList {
    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }
    class ProductListController implements IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        static $inject = ['dataAccessService']
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = 'Products Title';
            this.showImage = false;
            this.products = [];
            const productResource = this.dataAccessService.getProductResource();
            productResource.query((products: app.domain.IProduct[]) => this.products = products);
        }
        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    // Note: that we shall place it in the bottom because of transpile output
    angular.module('productManagement')
        .controller('ProductListCtrl', ProductListController);
}
