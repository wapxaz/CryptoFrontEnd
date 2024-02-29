import { cryptoData, cryptoAssets } from "./data"

export function getCryptoData() { //fakeFetchCrypto
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 1000);
    })
}

export function getCryptoAssets() { //fetchAssets
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 1000);
    })
}