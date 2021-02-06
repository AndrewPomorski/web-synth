import { Synth } from './synth';

describe('Synth', () => {
    it('get synth instance', () => {
        const synth = new Synth();
        expect(synth).toBeTruthy();
    });
});