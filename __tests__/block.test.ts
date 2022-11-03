import {describe, test, expect } from '@jest/globals'
import Block from '../src/lib/block';

describe("Block tests", () => {

    test('Should be valid', () => {
        const block = new Block(1, 'abc', 'block ex.');
        const valid = block.isValid();
        expect(valid).toEqual(true);
    })
    
    test('Should be invalid (previousHash)', () => {
        const block = new Block(1, '', 'block ex.');
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (timestamp)', () => {
        const block = new Block(1, '', 'block ex.');
        block.timestamp = -1;
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (hash)', () => {
        const block = new Block(1, '', 'block ex.');
        block.hash = '';
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (data)', () => {
        const block = new Block(1, '', '');
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (index)', () => {
        const block = new Block(-1, 'abc', 'block ex.');
        const valid = block.isValid();
        expect(valid).toBeFalsy();
    })

})