// Lets Create a Self-Executing Anomyous Function
(function (document) {

	"use strict";

	//lets define the Init method
	//
	function init() {

		console.log('App : Initializing');

		require(['config'], function() {

			console.log('Require config : Loaded');

			require(['main'], function(App) {
				App.init();
			});

		});
	}

	// Remember:
	// We are not going to use jquery in this project
	// Please refer to http://youmightnotneedjquery.com/
	// This is equivalent to jquery's $(document).ready(); method
	// IT 9+
	if (document.readyState != 'loading') {
		init();
	} else	{
		document.addEventListener('DOMContentLoaded', init);
	}
}( document ));