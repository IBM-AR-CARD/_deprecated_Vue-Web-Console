import axios from 'axios';


export default{
    state:{},
    getters:{},
    mutations:{},
    actions:{
        GET_HISTORY:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.get('/history/get',{
                    params:{
                        _id:payload
                    }
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
        GET_FAVORIATE:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.get('/favorite/get',{
                    params:{
                        _id:payload
                    }
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