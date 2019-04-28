
import { serverIpAndPort } from "../constants/Other"

export default {

    offerLocate: (dispatch, ticker, owner, ethFee, expiryBN, amount) => {
        return async (dispatch, getState) => {
            //calculate the signature
            let sigTypes = ['address', 'uint', 'uint', 'uint']
            let sigValues = [owner, ethFee, expiryBN, amount]
            let gameHash = ethers.utils.solidityKeccak256(sigTypes, sigValues);
            let arrayifiedGameHash = ethers.utils.arrayify(gameHash)
            let wallet = new ethers.Wallet(getState().LoginDetails.privKey)
            let flatSig = await wallet.signMessage(arrayifiedGameHash)
            let sig = ethers.utils.splitSignature(flatSig);
            //post the data and sig to the database
            let body = {
                ...sigValues,
                sig:sig
            }
            //console.log("posting ", body)
            await fetch(serverIpAndPort+"/Locate/PostOffering", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "ticker": ticker,
                },
                body: JSON.stringify(body)
            })
        }
    },
}