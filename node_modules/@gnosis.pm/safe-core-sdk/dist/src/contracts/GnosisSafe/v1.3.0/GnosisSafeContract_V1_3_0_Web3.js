"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../utils/constants");
const GnosisSafeContractWeb3_1 = __importDefault(require("../GnosisSafeContractWeb3"));
class GnosisSafeContract_V1_3_0_Web3 extends GnosisSafeContractWeb3_1.default {
    constructor(contract) {
        super(contract);
        this.contract = contract;
    }
    async getModules() {
        const { array } = await this.contract.methods.getModulesPaginated(constants_1.SENTINEL_ADDRESS, 10).call();
        return array;
    }
    async isModuleEnabled(moduleAddress) {
        return this.contract.methods.isModuleEnabled(moduleAddress).call();
    }
}
exports.default = GnosisSafeContract_V1_3_0_Web3;
//# sourceMappingURL=GnosisSafeContract_V1_3_0_Web3.js.map