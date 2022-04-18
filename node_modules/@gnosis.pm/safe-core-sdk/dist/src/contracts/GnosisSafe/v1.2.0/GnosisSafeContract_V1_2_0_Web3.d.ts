import { GnosisSafe } from '../../../../typechain/src/web3-v1/v1.2.0/gnosis_safe';
import GnosisSafeContractWeb3 from '../GnosisSafeContractWeb3';
declare class GnosisSafeContract_V1_2_0_Web3 extends GnosisSafeContractWeb3 {
    contract: GnosisSafe;
    constructor(contract: GnosisSafe);
    getModules(): Promise<string[]>;
    isModuleEnabled(moduleAddress: string): Promise<boolean>;
}
export default GnosisSafeContract_V1_2_0_Web3;
