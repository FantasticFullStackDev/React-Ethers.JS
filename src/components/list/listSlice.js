import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        list: [
            {
                name: 'Ethereum Mainnet',
                rpcURL: 'https://mainnet.infura.io/v3/',
                chainID: 1,
                symbol: 'ETH',
                explorerURL: 'https://etherscan.io'
            }
        ]
    },
    reducers: {
        addNewNetwork: (state, action) => {
            state.list.push(action.payload);
        },
    },
})

export const { addNewNetwork } = listSlice.actions;

export const getNetworks = (state) => state.list.list;

export default listSlice.reducer;

