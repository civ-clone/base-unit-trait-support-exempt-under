"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportExemptUnder = void 0;
const UnitTrait_1 = require("@civ-clone/core-unit/UnitTrait");
/**
 * Costs its city no support while its player's government is one of `governments` (government classes, passed as
 *  constructors so this needs no government package).
 */
class SupportExemptUnder extends UnitTrait_1.default {
    constructor(...governments) {
        super();
        this.governments = Object.freeze([...governments]);
    }
}
exports.SupportExemptUnder = SupportExemptUnder;
exports.default = SupportExemptUnder;
//# sourceMappingURL=SupportExemptUnder.js.map