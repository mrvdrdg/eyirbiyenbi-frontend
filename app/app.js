import 'bootstrap/dist/css/bootstrap.css';
import 'app.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';

import AppComponent from './app.component';
import Home from './home';
import User from './models/user';
import Listing from './models/listing';
import UserPage from './userPage';
import ListingPage from './listingPage';
import LoginPage from './loginPage';

const root = angular
  .module('eyirbiyenbiApp', [
    Home,
    uiRouter,
    ngCookies,
    User,
    Listing,
    UserPage,
    ListingPage,
    LoginPage

  ])
  .config(($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .constant('API_URL', 'http://localhost:3000')
  .component('app', AppComponent)
  .name;

export default root;
