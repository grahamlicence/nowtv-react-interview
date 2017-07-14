import {getById} from './util';

describe('utilities getById()', () => {

    it('should return an object with the specified id', () => {
        const array = [{id: 1}, {id: 3}];

        const expected = {id: 1};

        const actual = getById(array, 1);

        expect(expected).toEqual(actual);
    });

    it('should return null when the specified id is not found', () => {
        const array = [{id: 1}, {id: 3}];

        const expected = null;

        const actual = getById(array, 2);

        expect(expected).toEqual(actual);
    });

});
