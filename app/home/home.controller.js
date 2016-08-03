class HomeController {
  constructor($http, ListingModel) {
    this.$http = $http;
    this.ListingModel = ListingModel;
  }

  $onInit() {
    this.ListingModel.query()
      .then((response) => {
        this.listings = response.data;
      });
  }
}

HomeController.$inject = ['$http', 'ListingModel'];

export default HomeController;
