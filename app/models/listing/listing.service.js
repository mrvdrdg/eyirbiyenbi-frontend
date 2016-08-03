class ListingModel {
  constructor($http) {
    this.$http = $http;
  }

  getGreeting() {
    return 'hi i\'m a listing';
  }
}

ListingModel.$inject = ['$http'];

export default ListingModel;
