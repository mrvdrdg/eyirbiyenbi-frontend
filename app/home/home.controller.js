class HomeController {
  constructor($http, ListingModel) {
    this.$http = $http;
    console.log(ListingModel.getGreeting());
  }

  $onInit() {
  }
}

HomeController.$inject = ['$http', 'ListingModel'];

export default HomeController;
