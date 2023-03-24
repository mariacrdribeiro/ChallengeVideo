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
M = value * 60
H = value * 3600

Examples :

PT30S = 30 s
PT2M30S: 150 s
PT1H30M30S: 5430 seconds  q

*/ 
//# sourceMappingURL=index.js.map