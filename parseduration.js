"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iso8601_duration_1 = require("iso8601-duration");
function parseDuration(durationString) {
    const duration = (0, iso8601_duration_1.parse)(durationString);
    let totalSeconds = 0;
    totalSeconds += duration.years ? duration.years * 31536000 : 0; //if exists multiples if it doenst its zero
    totalSeconds += duration.months ? duration.months * 2592000 : 0;
    totalSeconds += duration.weeks ? duration.weeks * 604800 : 0;
    totalSeconds += duration.days ? duration.days * 86400 : 0;
    totalSeconds += duration.hours ? duration.hours * 3600 : 0;
    totalSeconds += duration.minutes ? duration.minutes * 60 : 0;
    totalSeconds += duration.seconds ? duration.seconds : 0;
    return totalSeconds;
}
exports.default = parseDuration;
//# sourceMappingURL=parseDuration.js.map