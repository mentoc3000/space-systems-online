import { expect } from 'chai';

describe('Named Class test', () => {

   it('true is true', () => expect(true).to.equal(true));

/*
   beforeEach(angular.mock.module('SSOApp'));

   var NamedClass, named, name;
   beforeEach(inject(function(_NamedClass_){
      NamedClass = _NamedClass_;
      named = new NamedClass();
      name = 'big ass dish';
   }));

   it('has no name when first created',function() {
      expect(named.getName()).toEqual('');
   });

   it('sets a name', function() {
      expect(function() {
         named.setName(name);
      }).not.toThrow();
   });

   it('gets the set name', function() {
      named.setName(name);
      expect(named.getName()).toEqual(name);
   });
   
   it('deletes the name', function() {
      named.setName(name);
      named.deleteName();
      expect(named.getName()).toEqual('');
   });

   it('throws an error if the name is not a string',function() {
      var err = 
      expect(function() {
         var badName = {
            x: 123
         };
         named.setName(badName);
      }).toThrowError(TypeError);

      expect(function() {
         var badName = 123;
         named.setName(badName);
      }).toThrowError(TypeError);
      
      expect(function() {
         var badName;
         named.setName(badName);
      }).toThrowError(TypeError);
      
      expect(function() {
         var badName = null;
         named.setName(badName);
      }).toThrowError(TypeError);
      
      expect(function() {
         var badName = true;
         named.setName(badName);
      }).toThrowError(TypeError);
      
   });
*/

});


