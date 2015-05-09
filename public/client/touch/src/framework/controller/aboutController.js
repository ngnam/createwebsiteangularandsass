/**
* Register the aboutController class with RequireJS
*/
(function (define) {
	"use strict";

	define( ['model/appModel'],
		function (appModel) 
		{
			/**
			* @constructor
			*/
			var aboutController = function($scope) 
			{
				console.log("About Controller Initialized");
				$scope.content = appModel.getInstance().getData().pages[1].content;
			};

			return ["$scope", aboutController];
		});	

}( define ))