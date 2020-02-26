import * as types from './mutation-types';

export const mutations = {
    [types.LOGIN](state,data){
        state.token = data.token;
        state.id = data._id
        localStorage.setItem('token',data.token);
        localStorage.setItem('id',data._id);
    }
}

export default mutations