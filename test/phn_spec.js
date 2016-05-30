
//var angular = require("angular-mocks");

describe('filter tests', function() {

    beforeEach(module('myApp'));

    it('should format phone number', inject(function(phnNumFormatFilter) {
            expect(phnNumFormatFilter('5857336560')).toBe('+1 (585) 733-6560');
        })
    );
});