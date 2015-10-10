angular
  .module('LiftChat', ['ui.bootstrap'])
  .controller('ChatController', function($scope) {
    "use strict"

    $scope.user = null;
    $scope.name = "";
    $scope.message = "";
    $scope.password = "";
    $scope.messages = [];

    $scope.logUserIn = function() {
      console.log('User: ' + $scope.name + ' Password: ' + $scope.password);
      // Setting the user details
      $scope.user = { name: $scope.name, password: $scope.password };
    };

    $scope.getMessages = function() {
      // Call server func / Roundtrip
      var promise = pageFunctions.getMessages();
      promise.then(function(data) {
        $scope.$apply(function() {
          $scope.messages = $scope.messages + data;
        })
      });
    };

    $scope.sendMessage = function() {
      var promise = pageFunctions.sendMessage({name: $scope.user.name, text: $scope.message});
      promise.then(function(data) {
        $scope.$apply(function() {
          $scope.messages = $scope.messages + data;
        })
      });
    };


    $scope.getMessageStyle = function(name) {
      return $scope.user.name == name ? "color:blue; text-align:right;" : "color:red;";
    };
  });
