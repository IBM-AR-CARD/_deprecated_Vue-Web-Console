import axios from 'axios';

export default{
    state:{},
    getters:{},
    mutations:{},
    actions:{
        LOGIN:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/login',payload)
                .then(success=>{
                    if(success.status === 200){
                        resolve(true);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            });
        },
        SIGNUP:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/register',payload)
                .then(success=>{
                    if(success.response.status === 200){
                        resolve(true);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            });
        }
    }
}