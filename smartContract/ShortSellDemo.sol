pragma solidity 0.5.0;

//START OF COPIED CODE FROM WIKIPEDIA
//https://en.wikipedia.org/wiki/ERC-20
library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

contract ERC20{

    using SafeMath for uint;

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    //original code in next Event
    event LocateFound(address indexed owner, address indexed borrower, uint amount)

    address public owner;
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowed;

    //original code in next mapping
    mapping (address => mapping(address=>uint)) public located;

    constructor(uint supply) public {
        owner = msg.sender;
        symbol = "FIXED";
        name = "Example Fixed Supply Token";
        decimals = 18;
        _totalSupply = supply;
        balances[owner] = _totalSupply;
        emit Transfer(address(0), owner, _totalSupply);
    }
    function totalSupply() public view returns (uint) {
        return _totalSupply;
    }
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        require(allowed[from][to] >= tokens);
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
//END OF COPIED CODE FROM WIKIPEDIA


//    mapping (address => mapping(address=>uint)) public located;

    function sellShort(uint8 v, bytes32 r, bytes32 s, address owner, uint ethFee, uint expiryBN, uint amount){
        bytes32 DataHash = keccak256(abi.encodePacked(owner, ethFee, expiryBN, amount));
        address calcAddr = addrFromHashAndSig(DataHash, v,r,s);
        //the owner of the token must have approved this transaction
        require ( owner == calcAddr );
        //the locate recipient must pay the owner up front
        require ( owner.transfer(ethFee) );
        located[owner][msg.sender] = amount;

        //transfer the tokens
        balances[owner] = balances[owner].sub(amount);
        allowed[owner][msg.sender] = allowed[from][msg.sender].add(amount);
        balances[msg.sender] = balances[msg.sender].add(amount);
        emit LocateFound(owner, msg.sender, amount);
        

    }

    function swapShort(uint8 v, bytes32 r, bytes32 s, address owner, uint ethFee, uint expiryBN, uint amount, address rebateAddress,){
        bytes32 DataHash = keccak256(abi.encodePacked(owner, ethFee, expiryBN, amount, rebateAddress));
        address calcAddr = addrFromHashAndSig(DataHash, v,r,s);
        require (owner == calcAddr) 
    }
    function rebateShort(owner,amount){

    }

    function addrFromHashAndSig(bytes32 DataHash, uint8 v, bytes32 r, bytes32 s) private pure returns(address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = keccak256(abi.encodePacked(prefix, DataHash));
        return ecrecover(prefixedHash, v, r, s);
    }
}