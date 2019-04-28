
import { serverIpAndPort } from "../constants/Other"
import { smartContractAddr } from "../constants/Other";
import { smartContractAbi } from "../constants/Other";
import { ethers } from "ethers";
import { provider } from "../constants/Other";

import { GET_LOCATES } from "../constants/ActionTypes"

export default {

    offerLocate: (dispatch, ticker, owner, weiFee, expiryBN, amount) => {
        return async (dispatch, getState) => {
            //calculate the signature
            let sigTypes = ['address', 'uint', 'uint', 'uint']
            let sigValues = [owner, weiFee, expiryBN, amount]
            let gameHash = ethers.utils.solidityKeccak256(sigTypes, sigValues);
            let arrayifiedGameHash = ethers.utils.arrayify(gameHash)
            let wallet = new ethers.Wallet(getState().LoginDetails.privKey)
            let flatSig = await wallet.signMessage(arrayifiedGameHash)
            let sig = ethers.utils.splitSignature(flatSig);
            //post the data and sig to the database
            let body = {
                ...sigValues,
                sig: sig
            }
            //console.log("posting ", body)
            await fetch(serverIpAndPort + "/Locate/PostOffering", {
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
    getLocates: (dispatch, ticker) => {
        return async (dispatch, getState) => {
            let response = await fetch(serverIpAndPort + "/Locate/GetOfferings", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "ticker": ticker,
                },
            })
            let resJSON = await response.json();
            dispatch({
                type: GET_LOCATES,
                payload: resJSON
            })
        }
    },
    purchaseLocate:(dispatch, ticker, locate) => {
        return async (dispatch, getState) => {
            let activeWallet = new ethers.Wallet(getState().LoginDetails.privKey).connect(provider)
            let callableContract = new ethers.Contract(smartContractAddr, smartContractAbi, activeWallet)
            await callableContract.takeLocate(
                locate.sig.v,
                locate.sig.r,
                locate.sig.s,
                locate[0],
                locate[1],
                locate[2],
                locate[3]
            )
        }
    }
}