<template>
  <div id="login">
    <div class="login-section" id="left">
      <img id="leftImage" src="../../assets/loginbackground.png" height="960" width="800" alt="loginbackground"/>
    </div>
    <div class="login-section" id="right">
      <h1  id="title">IBM AR Business Card</h1>
      <h2  id="sub_title">{{subtitle}}</h2>
      <p  id="error" v-if="error"  style="margin-top: 40px;">{{error}}</p>
      <label class="center " style="height:10px" v-bind:style="[error==='' ? {'margin-top':'78px'} : {'padding-top':'0px;'}]" >
        <input class="input_box"  v-model="username" id="username_box" placeholder="Username">
      </label>
      <label  style="margin-top: 40px;" >
        <input class="input_box" v-model="password" type="password" id="password_box" placeholder="Password">
      </label>
      <div   style="margin-top: 40px;">
        <label>
          <input id="checkbox" type="checkbox" v-model="isRemember"><a style="font-size: 15px; color:rgb(67,66,93);vertical-align: middle;">Remember me</a>
        </label>
        <a id="forgot">Forgot password</a>
      </div>
      <div  style="margin-top: 40px; ">
        <label>
          <button id="login_button" type="button" v-on:click="loginOnClick">Login</button>
        </label>
        <label>
          <button id="signup" type="button">Sign up</button>
        </label>
      </div>
      <div class="term_use"><p style="position: absolute; bottom: 0;width:100%; text-align: center">Term of use. Privacy policy</p></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data(){
      return{
        subtitle:"Welcome back! Please login to your account.",
        username:'',
        password:'',
        isRemember:false,
        error:''
      }
    },
    methods:{
      loginOnClick:function (event) {
        if(this.username === ''  ){
          this.error = "Empty username"
        }else if(this.password === ''){
          this.error = "Empty password"
        }else{
          this.error = "invalid account"
        }
      }
    }
  }

</script>

<style scoped>
  .login-section{
    padding-top: 0;
    position: relative;
    width: 50%;
    margin-left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #left{
    background:linear-gradient(45deg,#1F2234 0%,rgba(31,34,52,1) 100%);
    float: left;
  }
  #right{
    float: right;
    height:100vh;
  }
  #leftImage{
    width:100%;
    height:100vh;
    margin:0;
  }

  #title{
    margin-top: 12%;
    height: 5%;
    display: flex;
    font-size:35px;
    font-family:Source Sans Pro,serif;
    font-weight:bold;
    line-height:21px;
    color:rgba(67,66,93,1);
  }
  #sub_title{

    font-family:Source Sans Pro,serif;
    font-weight:bold;
    line-height:21px;
    color:rgba(77,79,92,0.5);
    font-size: 18px;
  }
  .input_box{
    width:350px;
    height:40px;
    border: none;
    border-bottom: 2px solid rgb(233,233,240);
    vertical-align: middle;
  }
  #checkbox{
    padding-right: 110px;
    width:18px;
    height:18px;
    vertical-align: middle;
  }
  #forgot{
    font-size:15px ;
    color:rgb(67,66,93);
    padding-left: 110px;
  }
  #login_button{
    text-align: center;
    border-radius: 5px;
    color: white;
    background-color: rgb(67,66,93);
    font-size: 18px;
    width: 160px;
    height: 50px;
    margin-right: 20px;
  }
  #signup{
    text-align: center;
    border-radius: 5px;
    font-size: 18px;
    width: 160px;
    height: 50px;
    margin-left: 20px;
  }
  .term_use{
    font-family: Source Sans Pro,serif;
    font-size: 11px;
    color: #43425D;
    bottom: 10px;
    flex-grow: 1;
    width: 100%;

  }
  #error{
    font-size: 16px;
    color: rgb(255,106,106);

  }
</style>
