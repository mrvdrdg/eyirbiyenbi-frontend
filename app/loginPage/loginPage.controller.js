class LoginPageController {
  constructor($http, $state, $stateParams, $cookiesStore, API_URL) {
    this.$http = $http;
    this.$state = $state;
    this.$stateParams = stateParams;
    this.$cookiesStorage = cookiesStore;
    //console.log(ListingModel.getGreeting());
    this.userCredentials = {
      'user':{
    'email': null,
    'password' :null
  }
  }

  this.url = API_URL + '/user_login/';
}

  $onInit() {
    //console.log(this.$cookiesStore);

    }
    login(email,password){
      //some http request
      this.$http.post(this.url,this.userCredentials)
      .then((response) => {
        this.$cookiesStore.put('eyirbiyenbi-token',response.data.token);
        this.$state.go('home')
      })
    }
    }

export default LoginPageController;
