<template>
<div style="display: inline-flex;height: 100vh;width: 100%">
  <div id="left">
    <div id="navigator_box"><p id="navigator_title">IBM AR BUSINESS CARD</p></div>
    <div class="navigator_item" @click="status=0">
      <div id="purpleBar" v-bind:style="[status===0 ? {'background-color':'rgb(163,160,251)'} : {'background-color':'rgb(67,66,93)'}]"></div>
      <div id="navigator_content" v-bind:style="[status===0 ? {'background-color':'rgb(86,85,110)'} : {'background-color':'rgb(67,66,93)'}]">
        <img class="navigator_image" src="../../assets/mycard.svg" alt="my card">
        <p id="navigator_text">My cards</p>
      </div>
    </div>
    <div class="navigator_item" @click="status=1">
      <div id="purpleBar" v-bind:style="[status===1 ? {'background-color':'rgb(163,160,251)'} : {'background-color':'rgb(67,66,93)'}]"></div>
      <div id="navigator_content" v-bind:style="[status===1 ? {'background-color':'rgb(86,85,110)'} : {'background-color':'rgb(67,66,93)'}]">
        <img class="navigator_image" src="../../assets/myaccount.svg" alt="account">
        <p id="navigator_text">My account</p>
      </div>
    </div>
    <div class="navigator_item" @click="status=2">
      <div id="purpleBar" v-bind:style="[status===2 ? {'background-color':'rgb(163,160,251)'} : {'background-color':'rgb(67,66,93)'}]"></div>
      <div id="navigator_content" v-bind:style="[status===2 ? {'background-color':'rgb(86,85,110)'} : {'background-color':'rgb(67,66,93)'}]">
        <img class="navigator_image" src="../../assets/history.svg" alt="history">
        <p id="navigator_text">Scan history</p>
      </div>
    </div>
    <div class="navigator_item" @click="status=3">
      <div id="purpleBar" v-bind:style="[status===3 ? {'background-color':'rgb(163,160,251)'} : {'background-color':'rgb(67,66,93)'}]"></div>
      <div id="navigator_content" v-bind:style="[status===3 ? {'background-color':'rgb(86,85,110)'} : {'background-color':'rgb(67,66,93)'}]">
        <img class="navigator_image" src="../../assets/favourite.svg" alt="favourite">
        <p id="navigator_text">Favourite</p>
      </div>
    </div>
    <router-link :to="{path:'/login'}"><div class="navigator_item" style="position: absolute;bottom: 20px;width:260px">
      <div id="navigator_content" style="background-color : rgb(67,66,93)">
        <img class="navigator_image" style="margin-left: 5px" src="../../assets/logout.svg" alt="logout">
        <p id="navigator_text" style="padding-left: 55px">Log out</p>
      </div>
    </div></router-link>
  </div>
  <div id="right">
  <div id="topBar">
    <p id="barTitle">Management Console</p>
    <div id="right_title" >
      <img src="../../assets/earth.svg" alt="earth" >
      <img src="../../assets/message_icon.svg" alt="message" style="padding-left: 30px">
      <img src="../../assets/Notification.svg" alt="Notification" style="padding-left: 30px">
      <div id="greyBar"></div>
      <p id="userName" >{{id}}</p>
      <img src="../../assets/spanlist.svg" alt="spanlist" style="position:absolute;width: 16px;right: 90px;height:16px;margin-top: -8px;
    top:50%">
      <img src="../../assets/tempAvatar.svg" alt="avatar" style="position:absolute;width: 40px;right: 20px;height: 40px;margin-top: -20px;
    top:50%">
    </div>
  </div>
    <h1 id="content_title">{{getContentTitle}}</h1>
    <transition name="fade">
    <div id="content"></div>
    </transition>
  </div>
</div>
</template>

<script>
  export default {
    name: 'management',
    data(){
      return{
        status:0,
        id:this.$route.params.id
        // 0: myCard 1:myAccount 2:ScanHistory 3:favourites
      }
    },
    computed:{
      getContentTitle:function (event) {
        if(this.status===0){
          return 'My card and info'
        }else if(this.status===1){
          return 'My account'
        }else if(this.status===2){
          return 'History'
        }else if(this.status===3){
          return 'Favourite'
        }
      }
    },
    created() {
      console.log('Component has been created!');
    }
  }
</script>

<style scoped>
  #left{
    display: flex;
    flex-direction: column;
    height:100vh;
    width:260px;
    background:rgba(41,43,66,1);
    white-space: nowrap;
  }
  #right{
    height: 100vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: rgb(240,240,247);
    align-items: center;
    justify-content: center;
  }
  #navigator_box{
    width:260px;
    height:70px;
    background:rgba(31,34,52,1);
    box-shadow:0 2px 3px rgba(0,0,0,0.05);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  #navigator_title{
    width:180px;
    height:21px;
    font-size:15px;
    font-family:Source Sans Pro,serif;
    font-weight:bold;
    line-height:21px;
    color:rgba(255,255,255,1);
    text-align: center;
    margin: 0 auto;
    user-select: none;
  }
  .navigator_item{
    width: 100%;
    height: 53px;
    display:inline-flex;
    margin-top: 8px;
  }
  #purpleBar{
    height: 100%;
    width: 5px;
    transition: background-color 0.2s ease-in-out ;

  }
  #navigator_content{
    transition: background-color 0.3s ease-in-out;
    position: relative;
    height: 100%;
    width:100%;

  }
  .navigator_image{
    width: 16px;
    height: 16px;
    padding-left: 20px;
    position: absolute;
    margin-top: -8px;
    top:50%;
    user-select: none;
  }
  #navigator_text{
    margin-top: 6.5%;
    padding-left: 50px;
    width:49px;
    height:21px;
    font-size:15px;
    font-family:Source Sans Pro,serif;
    font-weight:400;
    line-height:21px;
    color:rgba(255,255,255,1);
    opacity:1;
    user-select: none;
  }
  #topBar{
    width:100%;
    height:70px;
    background-color:rgba(255,255,255,1);
    box-shadow:0 2px 6px rgba(0,0,0,0.04);
    display: inline-flex;
    justify-content: space-between;
    top: 0;
  }
  #barTitle{
    width:200px;
    font-size:18px;
    font-family:Source Sans Pro,serif;
    font-weight:400;
    line-height:20px;
    color:rgba(77,79,92,1);
    opacity:1;
    padding-left: 40px;
    position: relative;
    margin-top: -9px;
    top:50%
  }
  #right_title{
    height: 100%;
    position: relative;
    width:500px;
    margin-right: 0;
    display: inline-flex;

  }
  #greyBar{
    width:1px;
    height:28px;
    background-color:rgba(235,235,242,1);
    margin-left: 30px;
    position: relative;
    margin-top: -14px;
    top:50%
  }
  #userName{
    width:260px;
    padding-left: 10px;
    height:18px;
    font-size:20px;
    font-family:Source Sans Pro,serif;
    font-weight:400;
    line-height:20px;
    color:rgba(77,79,92,1);
    position: relative;
    margin-top: -9px;
    top:50%;
    text-align: center;
  }
  #content_title{
    vertical-align: center;
    width: 80%;
    height:70px;
    font-size:28px;
    font-family:Source Sans Pro,serif;
    font-weight:400;
    line-height:40px;
    color:rgba(67,66,93,1);
    transition: background-color 0.2s ease-in-out ;
  }
  #content {
    flex-grow: 1;
    width: 80%;
    height: 90%;
    background-color: white;
    margin-bottom: 5%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  div {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.5s;
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
