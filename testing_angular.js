"use strict";

angular.module("usersResources", [
	"apiConstants", "apiModule"
])
.service("usersResources.users", [
	"$q", "api", function users($q, api){
		var self = this;
		
		this.getUsersURI = function(){
			return "/user";
		};

		this.getUsers = function(){
			var deferred = $q.defer();
			api.get(self.getUsersURI()).then(function(res){
				deferred.resolve(res);
			}, function(){
				deferred.reject.apply(null, Array.prototype.slice.call(arguments));
			});
			return deferred.promise;
		}
	}]);

describe("usersResources.users", function(){
	var RESPONSE_SUCCESS = "Successful API Response";
	var RESPONSE_ERROR = "Failed API Response";

	beforeEach(module("usersResources"));

	describe("usersResources actions", function(){
		var $httpBackend, $q, $rootScope, users, apiUrl, api, mockedApiDeferred, mockedDeferred;
		
		var mockApi = function(){
			var deferred = $q.defer();
			spyOn(api, "get").andReturn(deferred);
			return deferred;
		};

		var mockQ = function(){
			var deferred = jasmine.createSpyObj("deferred", ["resolve", "reject"]);
			spyOn($q, "defer").andReturn(deferred);
			return deferred;
		};

		beforeEach(inject(function($injector, _$q_, _$rootScope_){
			users = $injector.get("usersResources.users");
			apiUrl = $injector.get("apiBaseUrl");
			api = $injector.get("api");
			$q = _$q_;
			$rootScope = _$rootScope_;

			mockedDeferred = mockQ();
			mockedApiDeferred = mockApi();
		}));

		it("should perform an API GET call - success", function(){
			users.getUsers();
			mockedApiDeferred.resolve(RESPONSE_SUCCESS);
			$rootScope.$digest();

			expect(mockedDeferred.resolve).toHaveBeenCalledWith(RESPONSE_SUCCESS);
			expect(api.get).toHaveBeenCalledWith(users.getUsersURI());
		});

		it("should perform an API GET call - failure", function(){
			users.getUsers();
			mockedApiDeferred.reject(RESPONSE_ERROR);
			$rootScope.$digest();

			expect(mockedDeferred.reject).toHaveBeenCalledWith(RESPONSE_ERROR);
			expect(api.get).toHaveBeenCalledWith(users.getUsersURI());
		});
	});
});