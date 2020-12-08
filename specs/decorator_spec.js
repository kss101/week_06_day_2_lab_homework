const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function(){

    let decorator, paint, paint2, room;

    beforeEach( function(){
        decorator = new Decorator("Kurt");
        paint = new Paint("White", 25);
        paint2= new Paint("Light Blue", 50);
        room = new Room("Living Room", 25);
    });

    it("should have a name", function() {
        //Arrage
        
        //Act
        const actual = decorator.name;
        // Assert
        assert.strictEqual(actual, "Kurt");
    });

    it("should be able to add a paint to paint stock", function() {
        //Arrage
        
        //Act
        decorator.addPaint(paint);
        const actual = [decorator.paintStock[0]['colour'], decorator.paintStock[0]['volume']];
        // Assert
        assert.deepStrictEqual(actual, ["White", 25]);
    });

    it("should be able to add another paint to paint stock", function() {
        //Arrage

        //Act
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = [decorator.paintStock[0]['colour'], decorator.paintStock[1]['colour']];
        // Assert
        assert.deepStrictEqual(actual, ["White", "Light Blue"]);
    });


    it("should be able to calculate total volume of paint stock", function() {
        //Arrage
        
        //Act
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        const actual = decorator.quantityOfPaintInStock(decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, 75);
    });

    it("should be able to calculate if there's enough paint to paint a room", function() {
        //Arrage
        
        //Act
        decorator.addPaint(paint);
        const actual = decorator.canPaintRoom(room, decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, true);
    });

    it("should be able to calculate if there's NOT enough paint to paint a room", function() {
        //Arrage
        let paint = new Paint("Off White", 15);
        //Act
        decorator.addPaint(paint);
        const actual = decorator.canPaintRoom(room, decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, false);
    });

    it("should be able to paint a room", function() {
        //Arrage

        //Act
        decorator.addPaint(paint);
        const actual = decorator.paintRoom(room, decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, true);
    });

    it("should NOT be able to paint a room", function() {
        //Arrage
        let paint = new Paint("Off White", 15);
        //Act
        decorator.addPaint(paint);
        const actual = decorator.paintRoom(room, decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, false);
    });

    it("should be able to paint a room, but with more than one paint", function() {
        //Arrage
        let paint = new Paint("Off White", 15);
        let paint1 = new Paint("Cream", 15);
        //Act
        decorator.addPaint(paint);
        decorator.addPaint(paint1);
        const actual = decorator.paintRoom(room, decorator.paintStock);
        // Assert
        assert.deepStrictEqual(actual, true);
    });

})