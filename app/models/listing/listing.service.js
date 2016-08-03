class ListingModel {
  constructor($http, API_URL) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  get(id) {
    return this.$http.get(this.API_URL + '/listings/' + id);
  }

  query() {
    return this.$http.get(this.API_URL + '/listings');
  }
}

ListingModel.$inject = ['$http', 'API_URL'];

export default ListingModel;
