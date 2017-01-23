'use strict';

angular.module('demo', ['w11k.select']);

angular.module('demo').controller('TestCtrl', function ($scope) {

  function createOptions() {
    $scope.countries = [{"id":5,"name":"Andorra","code":"AD"},{"id":6,"name":"United Arab Emirates","code":"AE"},{"id":7,"name":"Afghanistan","code":"AF"}];
    $scope.countries.unshift({"id":0,"name":"All Countries","code":"ALL",w11k:{css: "all-countries-item"}});



    $scope.model = [{"id":0,"name":"All Countries","code":"ALL"}, {"id":5,"name":"Andorra","code":"AD"}];
  }

  createOptions();
});
