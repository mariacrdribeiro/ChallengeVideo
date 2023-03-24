"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseDuration_1 = __importDefault(require("./parseDuration"));
describe('parseDuration', () => {
    test('should return the correct seconds', () => {
        expect((0, parseDuration_1.default)('PT30S')).toEqual(30);
        expect((0, parseDuration_1.default)('PT2M30S')).toEqual(150);
        expect((0, parseDuration_1.default)('PT1H30M30S')).toEqual(5430);
        expect((0, parseDuration_1.default)('PT1H30M30.1S')).toEqual(5430.1);
    });
});
//# sourceMappingURL=parseDuration.test.js.map