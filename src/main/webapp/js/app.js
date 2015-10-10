angular
  .module('LiftChat', ['ui.bootstrap'])
  .controller('ChatController', function($scope) {
    "use strict"

    $scope.user = null;
    $scope.name = "";
    $scope.password = "";
    $scope.messages = [{name:"alejo", text:"hoasiodaio"},
    {name:"admin", text:"hoasiodaio"},
    {name:"o", text:"hoasiodaio"},
    {name:"Juan", text:"hoasiodaio"},
    {name:"alejo", text:"hoasiodaio"},
        {name:"o", text:"hoasiodaio"},
        {name:"Juan", text:"hoasiodaio"},
        {name:"alejo", text:"hoasiodaio"},
            {name:"o", text:"hoasiodaio"},
            {name:"Juan", text:"hoasiodaio"},
            {name:"alejo", text:"hoasiodaio"},
                {name:"o", text:"hoasiodaio"},
                {name:"Juan", text:"hoasiodaio"},
                {name:"alejo", text:"hoasiodaio"},
                    {name:"o", text:"hoasiodaio"},
                    {name:"Juan", text:"hoasiodaio"},
    {name:"alejo", text:"dansduiqghrui3qb 3q3 </br> BRAVO!"}
    ];

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

    $scope.sendMessage = function(text) {
      var promise = pageFunctions.sendMessage({name: $scope.user.name, text: text});
      promise.then(function(data) {
        $scope.$apply(function() {
          $scope.messages = $scope.messages + data;
        })
      });
    };


    $scope.getMessageStyle = function(name) {
      return $scope.user.name == name ? "color:blue;" : "color:red;";
    };
  });
