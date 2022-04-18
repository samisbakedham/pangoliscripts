exports.WRAPPED_NATIVE_TOKEN;
exports.PNG_SYMBOL = "HOL";
exports.PNG_NAME = "Hollis";
exports.TOTAL_SUPPLY = 6900000000; // 230M
exports.AIRDROP_AMOUNT = 42000000; // 11.5M or 5% of max supply
exports.TIMELOCK_DELAY = 3 * 24 * 60 * 60; // 3 days
exports.MULTISIG = {
  owners: [
    "0xCEcAcEbcc595276f7a707fb6772016C0Ea1ac725", // Trollip
    "0x05DDF0637F80C5f156Dc415e2305aD4d9A2127b5"  // Shung
  ],
  threshold: 2
};
exports.USE_GNOSIS_SAFE = false;
exports.PROPOSAL_THRESHOLD = 20000000; // 1M
exports.PNG_STAKING_ALLOCATION = 500, // 5x weight in minichef
exports.WETH_PNG_FARM_ALLOCATION = 3000, // 30x weight
exports.INITIAL_FARMS = [
];
exports.VESTER_ALLOCATIONS = [
  {
    recipient: "treasury", // community treasury
    allocation: 2105, // 20%
  },
  {
    recipient: "multisig", // team
    allocation: 4579, // 10% team + 5% vc investor
  },
  {
    recipient: "foundation", // HOL Foundation multisig
    allocation: 263, // 2.5% advisory
  },
  {
    recipient: "chef", // MiniChef
    allocation: 3053, // 57.5% LPs & HOLS Staking
    isMiniChef: true
  }
];
exports.REVENUE_DISTRIBUTION = [
  {
    recipient: "foundation", // Hollis Foundation
    allocation: 2000,        // 20%
  },
  {
    recipient: "multisig", // New team
    allocation: 8000,      // 80%
  }
]
