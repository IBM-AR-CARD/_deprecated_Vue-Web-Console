import axios from 'axios';

export default{
    state:{},
    getters:{},
    mutations:{},
    actions:{
        LOGIN:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/login',payload)
                .then(({data,status})=>{
                    if(status === 200){
                        resolve(data.success);
                    }
                })
                .catch(function(error){
                    reject(error.response.error);
                })
            });
        },
        SIGNUP:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/register',payload)
                .then(({data,status})=>{
                    if(status === 200){
                        resolve(data.response.data.success);
                    }
                })
                .catch(({data,status})=>{
                    reject(data.error);
                })
            });
        }
    }
}