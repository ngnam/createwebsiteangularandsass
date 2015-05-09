/**
* Register the homeController class with RequireJS
*/
(function (define) {
	"use strict";

	define( ['model/appModel'],
		function (appModel) 
		{
			/**
			* @constructor
			*/
			var homeController = function($scope) 
			{
				console.log("Home Controller Initialized");
				$scope.content = appModel.getInstance().getData().pages[0].content;
			};

			return ["$scope", homeController];
		});	

}( define ))