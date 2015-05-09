/**
* Register the AppController class with RequireJS
*/
(function ( define ) {
	"use strict";

	define( ['model/appModel'], 

		function (appModel) 
		{
			/**
			* AppController
			* @constructor
			*/
			var appController = function(appDelegate, eventManager) 
			{
				console.log("AppController Initialized");
				var _appModel = appModel.getInstance();

				// private function
				function loadData() {
					appDelegate.loadData('../api/data.json')
						.then( function( response )
						{
							console.log("data loaded");
							_appModel.setData(response.data);

							console.log(_appModel.getData());

							eventManager.sendMessage(eventManager.MAIN_DATA_LOADED);
						});
				}

				//loads the data
				loadData();

			};

			return ["appDelegate", "eventManager", appController];
		});
	
}( define ));