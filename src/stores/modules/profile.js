import axios from 'axios';


export default{
    state:{},
    getters:{},
    mutations:{},
    actions:{
        GET_PROFILE:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/profile/get')
                .then(success=>{
                    if(success.status=== 200){
                        resolve(success.data);
                    }
                })
                .catch(error=>{
                    reject(error)
                })
            });
        },

        UPDATE_PROFILE:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('/profile/update',payload)
                .then(success=>{
                    if(success.status === 200){
                        resolve(success.data);
                    }
                })
                .catch(error=>{
                    reject(error)
                })
            })
        },
        GET_HISTORY:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.get('/history/get',{
                    headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
                }).then(success=>{
                    if(success.status === 200){               
                        resolve(success.data);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            });
        },
        DELETE_FAVORITE:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post('favorite/remove',payload,{
                    headers:{
                        'Authorization':'Bearer ' + localStorage.getItem('token')
                    }
                })
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
    
        GET_FAVORIATE:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.get('/favorite/get',{
                    headers:{'Authorization':'Bearer ' + localStorage.getItem('token')}
                }).then(success=>{
                    if(success.status === 200){
                        resolve(success.data);
                    }
                })
                .catch(error=>{
                    reject(error);
                })
            });
        }
    }
}