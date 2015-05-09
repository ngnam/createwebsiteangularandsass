(function ( define ) {
	"use strict";

	define([], 

		function()
		{
			var _instance,
				AppModel = function()
				{
					var _data = null;

					console.log("AppModel Created");
					
					var setData = function(val)
					{
						_data = val;
					}

					var getData = function()
					{
						return _data;
					}

					// Publish Public API
					return {
						setData: setData,
						getData: getData
					}

				};

			//
			// Singleton Class Creation
			//

			var instance = function() {

				if (!_instance) {
					_instance = new AppModel();
				}

				return _instance;
			}

			return { getInstance: instance };
		});

}( define ));