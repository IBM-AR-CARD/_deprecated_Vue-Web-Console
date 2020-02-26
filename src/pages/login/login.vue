<template>
  <div >
    <div class="login-section" id="left">
      <img id="leftImage" src="../../assets/loginbackground.png" height="960" width="800" alt="loginbackground"/>
    </div>
    <div class="login-section" id="right" v-if="status===0">
      <p  id="title">IBM AR Business Card</p>
      <p  id="sub_title">{{subtitle}}</p>
      <p  id="error" v-if="error"  style="margin-top: 10px;">{{error}}</p>
      <label  style="height:10px" v-bind:style="[error==='' ? {'margin-top':'48px'} : {'padding-top':'0px;'}]" >
        <input class="input_box"  v-model="email" id="email_box" placeholder="email">
      </label>
      <label  style="margin-top: 40px;" >
        <input class="input_box" v-model="password" type="password" id="password_box" placeholder="Password">
      </label>
      <div   style="margin-top: 40px;">
        <label>
          <input id="checkbox" type="checkbox" v-model="isRemember"><a style="font-family: 'Open Sans';font-weight:bold; font-size: 14px; color:rgb(67,66,93);vertical-align: middle;">Remember me</a>
        </label>
        <a id="forgot" v-on:click="forgetOnClick" style="font-family: 'Open Sans'; font-size:14px; font-weight:bold">Forgot password</a>
      </div>
      <div  style="margin-top: 40px; ">
        <label>
          <button id="login_button" type="button" v-on:click="loginOnClick">Login</button>
        </label>
        <label>
          <button id="signup" type="button" v-on:click="signUpOnClick">Sign up</button>
        </label>
      </div>
      <div class="term_use"><p style="position: absolute; bottom: 0;width:100%; text-align: center"></p></div>
    </div>
    <div class="login-section" id="right" v-if="status===1">
      <h1  id="title">IBM AR Business Card</h1>
      <h2  id="sub_title">Please complete to create your account.</h2>
      <p  id="error" v-if="error"  style="margin-top: 10px;">{{error}}</p>
      <div v-bind:style="[error==='' ? {'margin-top':'48px'} : {'padding-top':'0px;'}]">
        <label  >
          <input class="input_box"  v-model="firstName" id="firstName" placeholder="First name">
        </label>
        <label  >
          <input class="input_box" v-model="lastName"  id="lastName" placeholder="Last name">
        </label>
      </div>
      <label  style="margin-top: 20px">
        <input class="input_box" v-model="username"  id="username" placeholder="Username">
      </label>
      <label  style="margin-top: 20px">
        <input class="input_box" v-model="email"  placeholder="Email">
      </label>
      <label  style="margin-top: 20px">
        <input class="input_box" v-model="password"  type="password" placeholder="Password">
      </label>
      <label  style="margin-top: 20px">
        <input class="input_box" v-model="confirmPassword"  type="password" placeholder="Confirm Password">
      </label>
      <label style="margin-top: 20px">
        <input id="checkbox" type="checkbox" v-model="agree"><a style="font-size: 15px; color:rgb(67,66,93);vertical-align: middle;">I agree with terms and conditions</a>
      </label>
      <label >
        <button id="login_button" type="button" v-on:click="confirmSignUpOnClick" style="margin-top: 20px">Sign up</button>
      </label>
      <a v-on:click="signUpBackToAlreadyOnClick" id="alreadyHave">Already have an account? Sign in.</a>
      <div class="term_use"><p style="position: absolute; bottom: 0;width:100%; text-align: center"></p></div>
    </div>
    <div class="login-section" id="right" v-if="status===2">
      <h1  id="title">IBM AR Business Card</h1>
      <h2  id="sub_title">Enter your email and we send you a password reset link.</h2>
      <p  id="error" v-if="error"  style="margin-top: 10px;">{{error}}</p>
    <div v-bind:style="[error==='' ? {'margin-top':'48px'} : {'padding-top':'0px;'}]">
      <label>
        <input class="input_box"  v-model="email" placeholder="Email">
      </label>
    </div>
      <label style="margin-top: 20px">
        <button id="login_button" type="button" v-on:click="sendRequestOnClick" style="margin-top: 20px">Send Request</button>
      </label>
      <div class="term_use"><p style="position: absolute; bottom: 0;width:100%; text-align: center"></p></div>
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
        error:'',
        firstName:'',
        lastName:'',
        email:'',
        confirmPassword:'',
        agree:false,
        status:0
        // 0: login 1:signup 2:forget
      }
    },
    methods:{
      loginOnClick:function (event) {
        if(this.email === ''){
          this.error = "Empty email address"
          return
        }else if(this.password === ''){
          this.error = "Empty password"
          return
        }
        this.$store.dispatch("userLogin",{
          email:this.email,
          password:this.password
        })
        .then(success =>{
          this.$router.push("/management/"+this.email);
        })
        .catch(error =>{
          var res = JSON.stringify(error.response.data.error);
          this.error = res.slice(1,-1);
        })
      },
      signUpOnClick:function (event) {
        this.password=''
        this.error=''
        this.username=''
        this.isRemember=false
        this.status=1
      },
      confirmSignUpOnClick:function (event) {
        if(this.firstName===''){
          this.error="Empty first name"
        }else if(this.lastName===''){
          this.error="Empty last name"
        }else if(this.username===''){
          this.error="Empty username"
        }else if(this.email===''){
          this.error="Empty Email"
        }else if(this.password===''){
          this.error="Empty password"
        }else if(this.confirmPassword !== this.password){
          this.error="confirm password does not match to password"
        }else if(!this.agree){
          this.error="You have to agree the terms and conditions"
        }else{
          this.$router.push('/management/'+ this.username)
        }
      },
      signUpBackToAlreadyOnClick:function () {
        this.username=''
        this.password=''
        this.isRemember=false
        this.error=''
        this.firstName=''
        this.lastName=''
        this.email=''
        this.confirmPassword=''
        this.agree=false
        this.status=0
      },
      sendRequestOnClick:function (event) {
        this.$store.dispatch("SIGNUP",{
          username:this.username,
          email:this.email,
          password:this.password,
        })
        .then(success =>{
          console.log("success");
          var res = JSON.stringify(success.data.success);
          this.error = res.slice(1.-1);
        })
        .catch(error =>{
          return
        })      
      },
      forgetOnClick:function (event) {
        this.password=''
        this.error=''
        this.username=''
        this.isRemember=false
        this.status=2
      }

    }
  }

</script>

<style scoped>
  .login-section{
    padding-top: 0;
    position: relative;
    width: 50%;
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
    margin-top: 8%;
    height: 5%;
    display: flex;
    font-size:35px;
    font-family:Source Sans Pro,serif;
    font-weight:bold;
    line-height:21px;
    color:rgba(67,66,93,1);
  }
  #sub_title{
    margin-top: auto;
    font-family:Source Sans Pro,serif;
    font-weight:bold;
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
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.5s;
  }
  #firstName{
    width:160px;
    margin-right: 10px;
  }
  #lastName{
    width:160px;
    margin-left: 10px;
  }
  #alreadyHave{
    margin-top: 20px;
    font-size: 15px;
    font-family: Source Code Pro,serif;
    color: rgb(66,67,93);
    text-decoration: underline;
  }
  div {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 1s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
