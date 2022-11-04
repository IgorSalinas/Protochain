import {describe, test, expect, beforeAll } from '@jest/globals'
import Block from '../src/lib/block';

describe("Block tests", () => {

    let genesis: Block;

    beforeAll(() => {
        genesis = new Block(0, '', 'Genesis Block');
    })

    test('Should be valid', () => {
        const block = new Block(1, genesis.hash, 'block ex.');
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toEqual(true);
    })
    
    test('Should be invalid (previousHash)', () => {
        const block = new Block(1, '', 'block ex.');
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (timestamp)', () => {
        const block = new Block(1, genesis.hash, 'block ex.');
        block.timestamp = -1;
        block.hash = block.getHash();
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (hash)', () => {
        const block = new Block(1, genesis.hash, 'block ex.');
        block.hash = '';
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (data)', () => {
        const block = new Block(1, genesis.hash, '');
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeFalsy();
    })

    test('Should be invalid (index)', () => {
        const block = new Block(-1, genesis.hash, 'block ex.');
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid).toBeFalsy();
    })

})