import { typesof } from '../index';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();

describe('typesof suit', () => {
   it('should return nan, when args is nan', () => {
      // @ts-ignore
      expect(typesof(1+undefined)).toBe('nan');
   });

   it('should return null, when args is null', () => {
      expect(typesof(null)).toBe('null');
   });

   it('should return array, when args is array', () => {
      expect(typesof([])).toBe('array');
   });

   it('should return Blob constructor, when args is Blob', () => {
      expect(typesof(new window.Blob())).toBe('blob');
   });

   it('should return symbol, when args is symbol', () =>{
      expect(typesof(Symbol())).toBe('symbol');
   });

   it('should return object, when args is object', () => {
      expect(typesof({})).toBe('object');
   });

   it('should return string, when args is string', () => {
      expect(typesof("string")).toBe('string');
   });

   it('should return function, when args is function', () => {
      expect(typesof(function name() {})).toBe('function')
   });
});
