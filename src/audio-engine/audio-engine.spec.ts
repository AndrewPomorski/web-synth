import { AudioEngine } from './audio-engine';

describe('AudioEngine setup', () => {
    it('runs mock test', () => {
        const audioEngineInstance = new AudioEngine();
        expect(audioEngineInstance).toBeTruthy();
    });
});