/**
* Register the participantController class with RequireJS
*/
(function (define) {
	"use strict";

	define( ['model/appModel'],
		function (appModel) 
		{
			/**
			* @constructor
			*/
			var participantController = function($scope) 
			{
				console.log("Participant Controller Initialized");
				$scope.content = appModel.getInstance().getData().pages[3].content;
			};

			return ["$scope", participantController];
		});	

}( define ))