"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseDuration_1 = __importDefault(require("./parseDuration"));
const durationString = 'PT1H30M30S';
const durationInSeconds = (0, parseDuration_1.default)(durationString);
console.log(durationInSeconds);
/*

Examples :

PT30S = 30 s
PT2M30S: 150 s
PT1H30M30S: 5430 seconds
PT1H30M30.1S: 5430.1 seconds
P1Y2M10DT2H30M: error month is present
P1Y10DT2H30M: 32409000

*/ 
//# sourceMappingURL=index.js.map