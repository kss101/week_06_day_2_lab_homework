const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){

    let paint;

    beforeEach( function(){
        paint = new Paint("White", 25);
    });

    xit("should have a colour", function() {
        //Arrage
        
        //Act
        const actual = paint.colour;
        // Assert
        assert.strictEqual(actual, "White");
    });

    xit("should have a volume", function() {
        //Arrage
        
        //Act
        const actual = paint.volume;
        // Assert
        assert.strictEqual(actual, 25);
    });

    xit("should start not empty", function() {
        //Arrage
        
        //Act
        const actual = paint.isEmpty;
        // Assert
        assert.strictEqual(actual, false);
    });

    xit("should be able to empty paint can", function() {
        //Arrage
        //Act
        paint.emptyPaintCan();
        const actual = [paint.volume, paint.isEmpty];
        // Assert
        assert.deepStrictEqual(actual, [0, true]);
    });

})