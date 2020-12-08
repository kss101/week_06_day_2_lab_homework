const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){

    let room;

    beforeEach( function(){
        room = new Room("Living Room", 25);
    });

    xit("should have a name", function() {
        //Arrage
        
        //Act
        const actual = room.name;
        // Assert
        assert.strictEqual(actual, "Living Room");
    });

    xit("should have an area", function() {
        //Arrage
        
        //Act
        const actual = room.area;
        // Assert
        assert.strictEqual(actual, 25);
    });

    xit("should start not painted", function() {
        //Arrage
        
        //Act
        const actual = room.isPainted;
        // Assert
        assert.strictEqual(actual, false);
    });

    xit("should be able to be painted", function() {
        //Arrage
        //Act
        room.paintRoom();
        const actual = room.isPainted;
        // Assert
        assert.strictEqual(actual, true);
    });

})