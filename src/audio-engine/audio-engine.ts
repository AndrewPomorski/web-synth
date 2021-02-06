export class AudioEngine {

    constructor ({
        audioContext = new AudioContext(),
    }) {
        this.audioContext = audioContext;
    }

    private audioContext: AudioContext;

    getAudioContext(): AudioContext {
        return this.audioContext;
    }
}