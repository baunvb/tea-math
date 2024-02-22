const { Connection, PublicKey } = require ("@solana/web3.js");

const solanaInfo = async (address) => {
  const connection = new Connection("https://mainnet.helius-rpc.com/?api-key=aca63091-cd78-41da-a734-243830b9035b");
  let info = await connection.getAccountInfo(new PublicKey(address))
  return info
}

const sum = (a, b) => a + b
const div = (a, b) => {
  try {
    return a / b
  } catch (error) {
    console.log(error)
  }
}
const mul = (a, b) => a * b
const sub = (a, b) => a - b

exports.sum = sum
exports.div = div
exports.mul = mul
exports.sum = sub
exports.info = solanaInfo