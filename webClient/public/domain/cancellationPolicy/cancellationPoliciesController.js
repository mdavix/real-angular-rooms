angular.module('ngRooms.domain.cancellationPolicy')
	.controller('CancellationPoliciesController',
	['$scope', '$location', 'CancellationPolicyService',
	function($scope, $location, cancellationPolicyService){

	$scope.populateCancellationPoliciesTable = function(){
		cancellationPolicyService.list().then(function(data){
			$scope.cancellationPolicies = data;
		});
	};

	$scope.removeCancellationPolicy = function(id){
		cancellationPolicyService.remove(id).then(function(){
			$scope.populateCancellationPoliciesTable();
		});
	};

	$scope.navigateToNavigationPoliciesNew = function(){
		$location.path('/cancellationPolicies/new');
	};

	$scope.navigateToNavigationPoliciesEdit = function(id){
		$location.path('/cancellationPolicies/edit/' + id);
	};

	$scope.populateCancellationPoliciesTable();

}]);