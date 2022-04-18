"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGnosisSafeProxyFactoryContractInstance = exports.getMultiSendContractInstance = exports.getSafeContractInstance = void 0;
const GnosisSafeContract_V1_1_1_Web3_1 = __importDefault(require("./GnosisSafe/v1.1.1/GnosisSafeContract_V1_1_1_Web3"));
const GnosisSafeContract_V1_2_0_Web3_1 = __importDefault(require("./GnosisSafe/v1.2.0/GnosisSafeContract_V1_2_0_Web3"));
const GnosisSafeContract_V1_3_0_Web3_1 = __importDefault(require("./GnosisSafe/v1.3.0/GnosisSafeContract_V1_3_0_Web3"));
const GnosisSafeProxyFactoryContract_V1_1_1_Web3_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.1.1/GnosisSafeProxyFactoryContract_V1_1_1_Web3"));
const GnosisSafeProxyFactoryContract_V1_3_0_Web3_1 = __importDefault(require("./GnosisSafeProxyFactory/v1.3.0/GnosisSafeProxyFactoryContract_V1_3_0_Web3"));
const MultiSendContract_V1_1_1_Web3_1 = __importDefault(require("./MultiSend/v1.1.1/MultiSendContract_V1_1_1_Web3"));
const MultiSendContract_V1_3_0_Web3_1 = __importDefault(require("./MultiSend/v1.3.0/MultiSendContract_V1_3_0_Web3"));
function getSafeContractInstance(safeVersion, safeContract) {
    switch (safeVersion) {
        case '1.3.0':
            return new GnosisSafeContract_V1_3_0_Web3_1.default(safeContract);
        case '1.2.0':
            return new GnosisSafeContract_V1_2_0_Web3_1.default(safeContract);
        case '1.1.1':
            return new GnosisSafeContract_V1_1_1_Web3_1.default(safeContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getSafeContractInstance = getSafeContractInstance;
function getMultiSendContractInstance(safeVersion, multiSendContract) {
    switch (safeVersion) {
        case '1.3.0':
            return new MultiSendContract_V1_3_0_Web3_1.default(multiSendContract);
        case '1.2.0':
        case '1.1.1':
            return new MultiSendContract_V1_1_1_Web3_1.default(multiSendContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getMultiSendContractInstance = getMultiSendContractInstance;
function getGnosisSafeProxyFactoryContractInstance(safeVersion, gnosisSafeProxyFactoryContract) {
    switch (safeVersion) {
        case '1.3.0':
            return new GnosisSafeProxyFactoryContract_V1_3_0_Web3_1.default(gnosisSafeProxyFactoryContract);
        case '1.2.0':
        case '1.1.1':
            return new GnosisSafeProxyFactoryContract_V1_1_1_Web3_1.default(gnosisSafeProxyFactoryContract);
        default:
            throw new Error('Invalid Safe version');
    }
}
exports.getGnosisSafeProxyFactoryContractInstance = getGnosisSafeProxyFactoryContractInstance;
//# sourceMappingURL=contractInstancesWeb3.js.map