
describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter the favorite food correctly', function() {
    var testList = [{
      name: 'Test 1',
      favoriteFood: 'Cake'
    }, {
      name: 'Test 2',
      favoriteFood: 'Pizza'
    }, {
      name: 'Test 3',
      favoriteFood: 'Cereal'
    }];
    var results = $filter('favoriteFood')(testList, 'Cereal');
    expect(results[0].name).toBe('Test 3');
  });
});
