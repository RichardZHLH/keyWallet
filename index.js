'use strict'

const fs = require('fs');
const path = require('path');
const EthAccount = require('web3-eth-accounts')
class KeyWallet {
    constructor(option){
        if(option && option.chain){
            this.chain = option.chain
            if(!option.keyPath) {
                this.keyPath  = this.defaultPath(option.chain)
            } else {
                this.keyPath  = option.keyPath
            }
        } else {
            this.chain = 'wanchain'
            this.keyPath  = this.defaultPath(this.chain)
        }
        this.mkdirSync(this.keyPath)
        console.log(":", this.chain, this.keyPath)
    }
    mkdirSync(pathname, mode='0755'){
        console.log(pathname)
        let parent = path.dirname(pathname)
        if(!fs.existsSync(parent)){
            this.mkdirSync(parent)
        }
        fs.mkdirSync(pathname)
    }
    defaultPath(chain){
        let middle = ''
        let keyStorePath = ''
        switch(chain){
            case 'wanchain':
                middle = '.wanchain/'
                break
            case 'wanchain-testnet':
                middle = '.wanchain/testnet/'
                break
            case 'ethereun':
                middle = '.ethereum/'
                break
            case 'rinkeby':
            case 'koven':
            case 'ropsten':
                middle = '.ethereum/testnet/'
                break
            default:
                throw("Not supported chain")
        }
        if (process.platform === 'darwin') {
            keyStorePath = path.join(process.env.HOME, '/Library/',middle,'keystore');
        } else if (process.platform === 'freebsd' || process.platform === 'linux' || process.platform === 'sunos') {
            keyStorePath = path.join(process.env.HOME, middle,'keystore');
        } else if (process.platform === 'win32') {
            keyStorePath = path.join(process.env.APPDATA,  middle, 'keystore');
        }
        return keyStorePath
    }
    load(){

    }
    decrypt(password,address){

    }
}
class Account {
    static create() {
        let ethAccount = new EthAccount.create()
        return {
            address:ethAccount.address,
            privateKey:ethAccount.privateKey
        }
    }
    static save(obj){

    }
    static encrypt(obj){

    }
    static decrypt(obj){
        
    }
}
module.exports = {
    KeyWallet,
    Account
} 