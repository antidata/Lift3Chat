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


    };

    $scope.sendMessage = function() {

    };


    $scope.getMessageStyle = function(name) {
      return $scope.user.name == name ? "color:blue; text-align:right;" : "color:red;";
    };
  });
