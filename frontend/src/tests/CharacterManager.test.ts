import {CharacterManager} from "../manager/CharacterManager";

// Mock values for the gifs
const idle = 'idle.gif';
const idleBlinking = 'idleBlinking.gif';
const thinking = 'thinking.gif';
const idea = 'idea.gif';


describe('CharacterManager', () => {
    let characterManager: CharacterManager;

    beforeEach(() => {
        characterManager = new CharacterManager();
    });

    it('should return idle for "idle"', () => {
        expect(characterManager.behave('idle')).toBe(idle);
    });

    it('should return idleBlinking for "idleBlinking"', () => {
        expect(characterManager.behave('idleBlinking')).toBe(idleBlinking);
    });

    it('should return thinking for "thinking"', () => {
        expect(characterManager.behave('thinking')).toBe(thinking);
    });

    it('should return idea for "idea"', () => {
        expect(characterManager.behave('idea')).toBe(idea);
    });

    it('should return error for unknown behavior', () => {
        expect(characterManager.behave('unknown')).toBe('error');
    });
});