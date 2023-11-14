import { MessageFactory } from '../lib/registry.mjs';
const suite = describe('when receiving unicode characters over http given an acceptable total character length', () => {
    it('should utilize the message factory and create a message', () => {
        const message = MessageFactory.create('Hello World');
        expect(message).toBeDefined();
        expect(message).not.toBeNull();
    });
});
process.specs.set(suite, []);