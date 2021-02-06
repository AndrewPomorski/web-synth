import { AudioEngine } from './audio-engine';

const audioContextMock = {}

describe('AudioEngine setup', () => {
    it('instantiatest audio engine', () => {
        const audioEngineInstance = new AudioEngine({audioContext: audioContextMock as any});
        expect(audioEngineInstance).toBeTruthy();
    });
});

describe('audioContext', () => {
    it('should get an instance of audio context', () => {
        const engineInstance = new AudioEngine({audioContext: audioContextMock as any});
        expect(engineInstance.getAudioContext()).toBeTruthy();
    });
});