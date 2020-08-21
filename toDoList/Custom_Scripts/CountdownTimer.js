var myModule = angular.module("todoReminder", []);

myModule.controller("counterCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.counter = 100; var stopped;

    $scope.countdown = function () {
        stopped = $timeout(function () {
            console.log($scope.counter);
            $scope.counter--;
            $scope.countdown();
        }, 1000);
    };

    $scope.stop = function () {
        $timeout.cancel(stopped);
    };
}

]);