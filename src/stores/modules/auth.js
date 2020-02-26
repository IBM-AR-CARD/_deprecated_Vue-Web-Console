import axios from 'axios';

export default{
    state:{},
    getters:{},
    mutations:{},
    actions:{
        userLogin:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/login',payload)
                .then(success=>{
                    if(success.status === 200){
                        localStorage.setItem('token',success.data.token);
                        localStorage.setItem('id',success.data._id);
                        resolve(true);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            });
        },
        userLogout:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/logout',data,{
                    headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
                })
                .then(success=>{
                    if(success.status === 200){
                        resolve(true);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            })
        },
        SIGNUP:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/user/register',payload)
                .then(success=>{
                    if(success.status === 200){
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