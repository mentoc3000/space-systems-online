import { Named } from './named.class';

describe('Named Class test', () => {

   let named: Named;
   let name: string;
   beforeEach(() => {
      named = new Named();
      name = 'big ass dish';
   });

   it('has no name when first created', function() {
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

});


