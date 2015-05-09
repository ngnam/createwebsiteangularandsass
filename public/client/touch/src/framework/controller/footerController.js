/**
* Register the footerController class with RequireJS
*/
(function (define) {
	"use strict";

	define( ['model/appModel'],
		function (appModel) 
		{
			/**
			* @constructor
			*/
			var footerController = function($scope, eventManager) 
			{
				console.log("Footer Controller Initialized");
				
				function onMainDataLoaded(event) {
					$scope.menu = appModel.getInstance().getData().menu;
					console.log($scope.menu);
				}

				$scope.$on(eventManager.MAIN_DATA_LOADED, onMainDataLoaded)
			};

			return ["$scope", "eventManager", footerController];
		});	

}( define ));