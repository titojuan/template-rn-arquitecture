import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
    list: {
        loading: false,
        response: null,
        error: null
    },
    info: {
        loading: false,
        response: null,
        error: null
    }
    },
    reducers: {
        getUsersStart: (state) => ({
            ...state,
            list: {
                ...state.info,
                loading: true,
                error: null
            }
        }),
        getUsersSuccess: (state, {payload}: PayloadAction<any>) => ({
            ...state,
            list: {
                ...state.info,
                loading: false,
                response: payload.data
            }
        }),
        getUsersFail: (state, {payload}: PayloadAction<any>) => ({
            ...state,
            list: {
                ...state.info,
                loading: false,
                error: payload
            }
        }),
        getUserStart: (state) => ({
            ...state,
            info: {
                ...state.info,
                loading: true,
                error: null
            }
        }),
        getUserSuccess: (state, {payload}: PayloadAction<any>) => ({
            ...state,
            info: {
                ...state.info,
                loading: false,
                response: payload.data
            }
        }),
        getUserFail: (state, {payload}: PayloadAction<any>) => ({
            ...state,
            info: {
                ...state.info,
                loading: false,
                error: payload
            }
        })
    },
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFail,
    getUserStart,
    getUserSuccess,
    getUserFail
} = userSlice.actions;

export { userSlice };

export default userSlice.reducer;
