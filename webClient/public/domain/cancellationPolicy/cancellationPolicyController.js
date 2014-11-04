angular.module('ngRooms.domain.cancellationPolicy', [])
    .controller('CancellationPolicyController',
    ['$scope', '$routeParams','$location', 'CancellationPolicyService',
        function($scope, $routeParams, $location, cancellationPolicyService){

            $scope.populateSingleCancellationPolicy = function(id){

                    cancellationPolicyService.single(id).then(function(data){
                        $scope.cancellationPolicy = data;
                    });

            };

            $scope.addCancellationPolicy = function() {
                cancellationPolicyService.add($scope.name, $scope.description).then(function(){
                    $location.path('/cancellationPolicies');
                });
            };

            $scope.editCancellationPolicy = function() {
                cancellationPolicyService.edit($routeParams.id, $scope.cancellationPolicy.name, $scope.cancellationPolicy.description).then(function(){
                    $location.path('/cancellationPolicies');
                });
            };

            $scope.populateSingleCancellationPolicy($routeParams.id);
        }]);