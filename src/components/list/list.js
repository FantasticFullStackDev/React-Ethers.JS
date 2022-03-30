import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPos } from '../header/headerSlice';
import { getNetworks } from './listSlice';
import {ethers} from 'ethers';

const List = (props) => {
    //----- Global States -----
    const networks = useSelector(getNetworks);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [currentNum, setCurrentNum] = useState(0);
    const [walletAddress, setWalletAddress] = useState('0x032bffd57f0ea4764b4e4b43050817b9d922318f');
    const [balance, setBalance] = useState("");
    const [symbol, setSymbol] = useState("");
    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos(''));
    }, [])

    //----- Custom Functions -----
    const selectNetwork = (index) => {
        setCurrentNum(index);
        setBalance("");
        setSymbol("");
    }

    const getBalance = () => {
        if(walletAddress !== "") {
            try {
                ethers.utils.getAddress(walletAddress);
                const jsonProviderUri = networks[currentNum].rpcURL + '753cc78f52604510b0dc93c72f623740';
                console.log(jsonProviderUri);
                const provider = new ethers.providers.JsonRpcProvider(jsonProviderUri);
                console.log(provider);
                provider.getBalance(walletAddress).then((balance) => {
                    const balanceInEth = ethers.utils.formatEther(balance)
                    setBalance(balanceInEth);
                    setSymbol(networks[currentNum].symbol)
                })
                .catch((e) => alert(e))
            }
            catch (e) {
                alert("Your wallet address isn't valid. Please input correct address.");
            } 
        } else 
            alert("Input your wallet address.");      
    }

    //----- Render -----
    return (
        <React.Fragment>
            <div className="w3-row">
                <div className="w3-col m6">
                    <h1 style={{textAlign: 'center'}}> Network Lists</h1>
                    <ul className="w3-ul w3-hoverable w3-large" style={{width:'50%', margin: '30px auto'}}>
                        {
                            networks.map((item, index) => {
                                return <li key={index} onClick={() => selectNetwork(index)}> {item.name} </li>
                            })
                        }
                    </ul>
                </div>
                <div className="w3-col m6">
                    <h1 style={{textAlign: 'center'}}> Details </h1>
                    <h4 style={{marginTop: 30}}> Network Name : &nbsp;&nbsp;&nbsp; {networks[currentNum].name} </h4>
                    <h4 style={{marginTop: 30}}> New RPC URL : &nbsp;&nbsp;&nbsp; {networks[currentNum].rpcURL} </h4>
                    <h4 style={{marginTop: 30}}> Chain ID : &nbsp;&nbsp;&nbsp; {networks[currentNum].chainID} </h4>
                    <h4 style={{marginTop: 30}}> Currency Symbol : &nbsp;&nbsp;&nbsp; {networks[currentNum].symbol} </h4>
                    <h4 style={{marginTop: 30}}> Block Explorer URL : &nbsp;&nbsp;&nbsp; {networks[currentNum].explorerURL} </h4>
                </div>
            </div>
            <hr/>
            <div>
                <h1 style={{textAlign: 'center'}}> Get The Balance </h1>
                <div style={{width: '50%', marginLeft: '25%'}}>
                    <h4><label>Your Wallet Address</label>
                    <input className="w3-input w3-border" name="address" type="text" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)}></input></h4>
                    <button className="w3-button w3-black w3-border" onClick={getBalance}>Get Balance</button>
                    <br/>
                    <h4 style={{marginTop: 30}}> Your Balance is : &nbsp;&nbsp;&nbsp; {balance + " " + symbol} </h4>
                    <br/><br/><br/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default List;