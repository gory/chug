'use strict';

var Main = (function() {
	return {
		initialize: function() {
			console.log('hi');
			this.doSomething();
		},
		doSomething: function() {
			console.log('ppl');
		}
	}

}());

module.exports = Main.initialize();