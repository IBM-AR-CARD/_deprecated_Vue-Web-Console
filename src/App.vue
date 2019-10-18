<template>
  <div id="login">
    <div class="login-section" id="left">

      <img id="leftImage" src="./assets/loginbackground.png" height="960" width="800" alt="loginbackground"/></div>
    <div class="login-section" id="right">
      <h class="center" id="title">IBM AR Business Card</h>
      <h1 class="center" id="sub_title">{{subtitle}}</h1>
      <label class="center " style="margin-top: 80px;" >
        <input class="input_box"  id="username_box" placeholder="Username">
      </label>
      <label class="center" style="margin-top: 40px;" >
        <input class="input_box"  id="password_box" placeholder="Password">
      </label>
      <div  class="center" style="margin-top: 40px;">
        <label>
          <input id="checkbox" type="checkbox" v-model="isRemember"><a style="font-size: 15px; color:rgb(67,66,93);vertical-align: middle;">Remember me</a>
        </label>
        <a id="forgot">Forgot password</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data(){
      return{
        subtitle:"Welcome back! Please login to your account.",
        isRemember:null
      }
    }
  }

</script>

<style scoped>
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #login{
    background-color: rgba(92,108,205,1);
  }
  .login-section{
    padding-top: 0;
    position: relative;
    width: 50%;
    margin-left: 0;
    height: 100vh;
  }
  #left{
    background:linear-gradient(45deg,#1F2234 0%,rgba(87,83,181,1) 100%);
    float: left;
  }
  #right{
    float: right;
  }
  #leftImage{
    width:100%
  }

  #title{
    margin-top: 19%;
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
    display: table-cell;
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

</style>
