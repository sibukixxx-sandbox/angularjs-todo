var app = angular.module('App', []);

app.controller('AppController', function($scope){
    $scope.display = function(){
        var str = $scope.displayText;
        $scope.text = str;
    }
});