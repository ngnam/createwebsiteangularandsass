/*
* AppDelegate Service
*/
(function ( define ) {
	"use strict";

	define([
		],
		function()
		{
			//App Delegate
			var AppDelegate = function ( $http, $q)
			{
				var resolve = function( response )
				{
					/**
					* A service that help you run function asynchronously,
					* return values (or exceptions) when they are done processing,
					*
					* --> https://docs.angularjs.org/api/ng/service/$q
					*
					*/
					var _q = $q.defer();
					_q.resolve( response );
					return _q.promise;
				},

				loadData = function(url) 
				{
					//loads JSON from api
					return $http
						.get(url)
						.then( function( response )
						{
							return resolve(response.data);
						});
				}

				// Returns a Public Method
				return{
					loadData: loadData
				};

			};

			return [ "$http", "$q", AppDelegate ];
		});

} ( define ));