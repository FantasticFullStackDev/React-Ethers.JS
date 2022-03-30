import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCurrentPos } from '../header/headerSlice';
import { addNewNetwork } from '../list/listSlice';

const Add = () => {
    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [name, setName] = useState('');
    const [rpcURL, setRpcURL] = useState('');
    const [chainID, setChainID] = useState('');
    const [symbol, setSymbol] = useState('');
    const [explorerURL, setExplorerURL] = useState('');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos('add'));
    }, [])

    //----- Custom Functions -----
    const addNetwork = () => {
        if(name !== '' && rpcURL !== '' && chainID !== '' && symbol !== '' && explorerURL !== '') {
            var data = {
                name: name,
                rpcURL: rpcURL,
                chainID: chainID,
                symbol: symbol,
                explorerURL: explorerURL
            };
            dispatch(addNewNetwork(data));
            alert("Successfully Added !");
            navigate('/')
        } else {
            alert('ERROR : Fill All the fields !')
        }
    }

    //----- Render -----
    return (
        <React.Fragment>
            <div>
                <h1 style={{textAlign: 'center'}}> Add a new network </h1>
                <div style={{width: '50%', marginLeft: '25%'}}>
                    <h4><label>Network Name</label>
                    <input className="w3-input w3-border" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input></h4>
                    <h4><label>New RPC URL</label>
                    <input className="w3-input w3-border" name="rpcURL" type="text" value={rpcURL} onChange={(e) => setRpcURL(e.target.value)}></input></h4>
                    <h4><label>Chain ID</label>
                    <input className="w3-input w3-border" name="chainID" type="text" value={chainID} onChange={(e) => setChainID(e.target.value)}></input></h4>
                    <h4><label>Currency Symbol</label>
                    <input className="w3-input w3-border" name="symbol" type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)}></input></h4>
                    <h4><label>Block Explorer URL</label>
                    <input className="w3-input w3-border" name="explorerURL" type="text" value={explorerURL} onChange={(e) => setExplorerURL(e.target.value)}></input></h4>
                    <br/>
                    <button class="w3-button w3-black w3-border" onClick={addNetwork}>Save</button>
                    <br/><br/><br/><br/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Add;