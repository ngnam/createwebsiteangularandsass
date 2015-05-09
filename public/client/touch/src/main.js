/**
* Now let's start our Cops15 and code
* which uses RequireJS to load packages and code
*
*/
define(['angular', 'ngAnimate', 'uiRouter', 'framework/modules', 'framework/routeManager'], 
	function (angular, ngAnimate, uiRouter, modules, routeManager) {

		var app, appName = 'app';
		/**
		* Start the main application
		*/
		var initialize = function() {

			app = angular.module(appName, ["ngAnimate", "ui.router", modules])
			// configure routeManager
			.config(routeManager);

			angular.element(document).ready(function() {
				console.log('App: bootstrapping');
				angular.bootstrap(document, [appName]);
			});
		}
		return {
			init: initialize
		};
});