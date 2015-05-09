/**
* Register the eventController class with RequireJS
*/
(function (define) {
	"use strict";

	define( ['model/appModel'],
		function (appModel) 
		{
			/**
			* @constructor
			*/
			var eventController = function($scope) 
			{
				console.log("Event Controller Initialized");
				$scope.content = appModel.getInstance().getData().pages[2].content;
			};

			return ["$scope", eventController];
		});	

}( define ))