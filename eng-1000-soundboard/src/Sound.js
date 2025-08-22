export default class Sound {
    text;
    keybinding;
    soundFile;
    videoFile;

    constructor(text, keybinding, soundFile, videoFile = null) {
        this.text = text;
        this.keybinding = keybinding;
        this.soundFile = soundFile;
        this.videoFile = videoFile;
    }
}