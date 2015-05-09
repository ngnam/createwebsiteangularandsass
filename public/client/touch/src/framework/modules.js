// Register Modules

(function ( define ) {
	"use strict";

	define([
			'angular',
			'controller/appController',
			'controller/homeController',
			'controller/aboutController',
			'controller/eventController',
			'controller/participantController',
			'controller/footerController',
			'framework/delegate/appDelegate',
			'framework/manager/eventManager'
		],
		function (angular, appController, homeController, aboutController, eventController, participantController, footerController, appDelegate, eventManager)
		{
			var moduleName = "app.modules";
			angular.module(moduleName, [])

				//Services
				.service( "appDelegate", appDelegate )
				.service( "eventManager", eventManager )
				//controllers
				.controller( "appController", appController )
				.controller( "homeController", homeController )
				.controller( "aboutController", aboutController )
				.controller( "eventController", eventController )
				.controller( "participantController", participantController )
				.controller( "footerController", footerController )

			console.log("Modules Loaded");

			return moduleName;		
		});

}( define ));