angular.module('ngRooms.domain.cancellationPolicy')

.factory('CancellationPolicyService', ['Restangular', function(restangular) {

	var domain = 'cancellationPolicies';

	return {

		list: function(){
			return restangular.all(domain).getList();
		},

		remove: function(id){
			return restangular.one(domain, id).remove();
		},

		add: function(name, description){

			var id = 1000; //TODO

			var cp = {
				id: id,
				type: "cancellationPolicy",
				name: name,
				description: description
			}

			return restangular.all(domain + '/new').post(cp);
		}

	};

}]);