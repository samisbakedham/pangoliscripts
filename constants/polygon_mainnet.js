const WMATIC = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
exports.WRAPPED_NATIVE_TOKEN = WMATIC;
exports.PNG_SYMBOL = "HOL";
exports.PNG_NAME = "Hollis";
exports.TOTAL_SUPPLY = 690000000; // 230M
exports.AIRDROP_AMOUNT = 21500000; // 11.5M or 5% of max supply
exports.TIMELOCK_DELAY = 3 * 24 * 60 * 60; // 3 days
exports.MULTISIG = {
  owners: [
    "0xCEcAcEbcc595276f7a707fb6772016C0Ea1ac725", // Trollip
    "0x05DDF0637F80C5f156Dc415e2305aD4d9A2127b5"  // Shung
  ],
  threshold: 2
};
exports.USE_GNOSIS_SAFE = true;
exports.PROPOSAL_THRESHOLD = 2000000; // 100K
exports.PNG_STAKING_ALLOCATION = 500, // 5x weight in minichef
exports.WETH_PNG_FARM_ALLOCATION = 3000, // 30x weight
exports.INITIAL_FARMS = [
  {
    tokenA: "0x5423063af146F5abF88Eb490486E6B53FA135eC9", // Axelar UST
    tokenB: WMATIC,
    weight: 1000
  }
];
exports.VESTER_ALLOCATIONS = [
  {
    recipient: "treasury", // community treasury
    allocation: 2105, // 20%
  },
  {
    recipient: "multisig", // fPNG team
    allocation: 5579, // 10% team + 5% vc investor
  },
  {
    recipient: "foundation", // PNG Foundation multisig
    allocation: 263, // 2.5% advisory
  },
  {
    recipient: "chef", // MiniChef
    allocation: 2053, // 57.5% LPs & PNG Staking
    isMiniChef: true
  }
];
exports.REVENUE_DISTRIBUTION = [
  {
    recipient: "foundation", // Pangolin Foundation
    allocation: 2000,        // 20%
  },
  {
    recipient: "multisig", // New team
    allocation: 8000,      // 80%
  }
]
