export const mockWETHABI =[
	'event Approval(address indexed src, address indexed guy, uint256 wad)',
	'event Deposit(address indexed dst, uint256 wad)',
	'event Transfer(address indexed src, address indexed dst, uint256 wad)',
	'event Withdrawal(address indexed src, uint256 wad)',
	'function allowance(address, address) view returns (uint256)',
	'function approve(address guy, uint256 wad) returns (bool)',
	'function balanceOf(address) view returns (uint256)',
	'function decimals() view returns (uint8)',
	'function deposit() payable',
	'function getFromFaucet()',
	'function name() view returns (string)',
	'function symbol() view returns (string)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address dst, uint256 wad) returns (bool)',
	'function transferFrom(address src, address dst, uint256 wad) returns (bool)',
	'function withdraw(uint256 wad)'
]; 

export const assetsAccountantABI = [
	'event HouseRegistered(address house, bytes32 indexed typeOfHouse, address indexed asset)',
	'event Upgraded(address indexed implementation)',
	'event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)',
	'event URI(string value, uint256 indexed id)',
	'function balanceOf(address account, uint256 id) view returns (uint256)',
	'function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[])',
	'function burn(address account, uint256 id, uint256 amount)',
	'function houseOfCoins(address) view returns (address)',
	'function houseOfReserves(uint256) view returns (address)',
	'function isApprovedForAll(address account, address operator) view returns (bool)',
	'function mint(address account, uint256 id, uint256 amount, bytes data)',
	'function registerHouse(address houseAddress, address asset)',
	'function getReservesIds(address, address) view returns (uint256[])',
	'function uri(uint256) view returns (string)'
];


export const houseOfReserveABI = [
	'event UserDeposit(address indexed user, address indexed asset, uint256 amount)',
	'event UserWithdraw(address indexed user, address indexed asset, uint256 amount)',
	'event Upgraded(address indexed implementation)',
	'event MaxLTVChanged(uint256 newMaxLTV)',
	'event LiquidationFactorChanged(uint256 newLiqudationFactor)',
	'event DepositLimitChanged(uint256 newLimit)',
	'function WRAPPED_NATIVE() view returns (address)',
	'function HOUSE_TYPE() view returns (bytes32)',
	'function assetsAccountant() view returns (address)',
	'function backedAsset() view returns (address)',
	'function backedTokenID() view returns (uint256)',
	'function checkMaxWithdrawal(address user) view returns (uint256 max)',
	'function deposit(uint256 amount)',
	'function liquidationFactor() view returns (uint256)',
	'function maxLTVFactor() view returns (uint256)',
	'function reserveAsset() view returns (address)',
	'function reserveTokenID() view returns (uint256)',
	'function withdraw(uint256 amount)'
];

export const houseOfCoinABI = [
	'event CoinMinted(address indexed user, uint256 indexed backedTokenId, uint256 amount)',
	'event CoinPayback(address indexed user, uint256 indexed reservetokenID, uint256 amount)',
	'event Upgraded(address indexed implementation)',
	'function HOUSE_TYPE() view returns (bytes32)',
	'function assetsAccountant() view returns (address)',
	'function backedAsset() view returns (address)',
	'function checkRemainingMintingPower(address user, address hOfReserve) view returns (uint256)',
	'function computeUserHealthRatio(address user, address hOfReserve) view returns (uint256)',
	'function getLatestPrice(address houseOfReserveAddress) view returns (uint256 price)',
	'function getLiqParams() view returns (tuple(uint256 marginCallThreshold, uint256 liquidationThreshold, uint256 liquidationPricePenaltyDiscount, uint256 collateralPenalty))',
	'function mintCoin(address reserveAsset, address houseOfReserve, uint256 amount) returns (bool success)',
	'function paybackCoin(uint256 _backedTokenID, uint256 amount)',
];

export const XOCABI = [
	'event Transfer(address indexed from, address indexed to, uint256 value)',
	'event Approval(address indexed owner, address indexed spender, uint256 value)',
	'event Upgraded(address indexed implementation)',
	'event Paused(address account)',
	'event Unpaused(address account)',
	'event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)',
	'function allowance(address owner, address spender) view returns (uint256)',
	'function approve(address spender, uint256 amount) returns (bool)',
	'function balanceOf(address account) view returns (uint256)',
	'function burn(address to, uint256 amount)',
	'function decimals() view returns (uint8)',
	'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
	'function flashFee(address token, uint256 amount) view returns (uint256)',
	'function flashLoan(address receiver, address token, uint256 amount, bytes data) returns (bool)',
	'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
	'function maxFlashLoan(address token) view returns (uint256)',
	'function mint(address to, uint256 amount)',
	'function name() view returns (string)',
	'function pause()',
	'function paused() view returns (bool)',
	'function symbol() view returns (string)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address to, uint256 amount) returns (bool)',
	'function transferFrom(address from, address to, uint256 amount) returns (bool)',
	'function unpause()',
];

export const accountLiquidatorABI = [
	'event Liquidation(address indexed userLiquidated, address indexed liquidator, uint256 collateralAmount)',
	'event MarginCall(address indexed user, address indexed mintedAsset, address indexed reserveAsset)',
	'function assetsAccountant() view returns (address)',
	'function computeCostOfLiquidation(address user, address reserveAsset) view returns (uint256 costAmount, uint256 collateralAtPenalty)',
	'function getLatestPrice(address houseOfReserveAddress) view returns (uint256 price)',
	'function liquidateUser(address userToLiquidate, address reserveAsset)',
];
