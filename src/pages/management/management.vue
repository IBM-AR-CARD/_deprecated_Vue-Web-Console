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
        <p id="navigator_text">Favorite</p>
      </div>
    </div>
    <div class="navigator_item" style="position: absolute;bottom: 20px;width:260px" >
      <div v-on:click="logoutclick" id="navigator_content" style="background-color : rgb(67,66,93)">
        <img class="navigator_image" style="margin-left: 5px" src="../../assets/logout.svg" alt="logout">
        <p id="navigator_text" style="padding-left: 55px">Log out</p>
      </div>
    </div>
    </router-link>
  </div>
  <div id="right">
  <div id="topBar">
    <p id="barTitle" style="font-family: 'Lato', sans-serif;">Management Console</p>
    <div id="right_title" >
      <img src="../../assets/earth.svg" alt="earth" >
      <img src="../../assets/message_icon.svg" alt="message" style="padding-left: 30px">
      <img src="../../assets/Notification.svg" alt="Notification" style="padding-left: 30px">
      <div id="greyBar"></div>
      <p id="userName" style="font-family: 'Lato', sans-serif;">{{id}}</p>
      <img src="../../assets/spanlist.svg" alt="spanlist" style="position:absolute;width: 16px;right: 90px;height:16px;margin-top: -8px;
    top:50%">
      <img class = "avatar" :src="profile"  style="position:absolute;width: 40px;right: 20px;height: 40px;margin-top: -20px;
    top:50%">
    </div>
  </div>
  <div id="content_header">
    <h1 id="content_title" display="inline-block">{{getContentTitle}}</h1>
    <div v-if="status===2||status===3">
    <div id="search_box">
    <input class = "search_input_box" type ="text" name="" placeholder="search" v-model="keyword">
    <img src="../../assets/search.svg" alt="search" class="searchpng" v-on:click="searchOnClick">
    </div>
    </div>
  </div>
    <div id="content" v-bind:style="[status===0||status===1 ? {'background-color':'rgb(255,255,255)'} : {'background-color':'rgb(240,240,247)'}]">
      <div v-if="status===0">
      <div style="margin-top:15px;"  class="row">
        <div class= "profile_box">
          <span class="profile_title">Firstname:</span>
          <input class="input_box" v-model="firstname">
          </div>
          <div style="margin-left:150px" class="profile_box" >
            <span class="profile_title">Lastname:</span>
            <input class="input_box" v-model="lastname">
            </div>
            </div>
    <div class="row">
      <div class="profile_box">
           <span class="profile_title" style="margin-right:35px;">Model:</span>
             <select v-model="model" style="height:20px;">
               <option v-for="option in options" v-bind:value="option.value">
                 {{option.value}}
               </option>
        </select>
      </div>
    </div>
      <div class="profile_box" >
        <span class="profile_title" style="margin-right:18px;" >Gender:</span>
          <input v-model="gender" name="gender" type="radio" value='2' ><label style=" font-family: 'Lato', sans-serif;; font-weight:bold; font-size:14px; margin-left:10px">Male</label>
           <input v-model="gender" name="gender" type="radio" value='1'><label  style=" font-family: 'Lato', sans-serif;'; font-weight:bold; font-size:14px; margin-left:10px">Female</label>
      </div>
    <div class="profile_box">
      <label class="profile_title">One-Sentence Description</label>
      <div>
      <textarea v-model="description" placeholder="tell us more about yourself" class="textarea_inner" style="padding:8px" value="" ></textarea>
      </div>
    </div>
     <div class="profile_box">
      <label class="profile_title">Work experience</label>
      <div>
      <textarea v-model="experience" placeholder="Where do you currently work? How about 3 years ago?" class="textarea_inner" style="padding:8px"></textarea>
      </div>
    </div>
    <div class="profile_box">
      <label class="profile_title">Education</label>
      <div>
      <textarea v-model="education" placeholder="Where did you attend your uni and high school? How was your grade?" class="textarea_inner" style="padding:8px"></textarea>
      </div>
    </div>
  </div>
      <div v-if="status===2" class="people_element" v-for="(history,index) in historyList">
        <img class="avatar" :src="history.profile" alt="icon">
        <div class="brief" >
          <div class="name">
          {{history.name}}<br>
          </div>
          <div class="description">
          {{history.description}}<br>
          {{history.country}}
          </div>
        </div>
        <img v-on:click="deleteItem(index)" class="cross" src="../../assets/cross.svg" alt="cross">
        <div class="horizontal_bar"></div>
      </div>
      <div v-if="status===3" class="people_element" v-for="(favorite,index) in favoriteList">
        <img class="avatar" :src="favorite.profile" alt="icon">
        <div class="brief" >
          <div class="name">
          {{favorite.name}}<br>
          </div>
          <div class="description">
          {{favorite.description}}<br>
          {{favorite.country}}
          </div>
        </div>
        <img v-on:click="deleteItem(index)" class="cross" src="../../assets/cross.svg" alt="cross">
        <div class="horizontal_bar"></div>
      </div>
    </div>
    <div v-if="status===0">
       <div style="margin-bottom:10px;margin-left:400px">
      <label>
        <button class="save_button" type="button" v-on:click="saveOnClick">Save</button>
      </label>
    </div>
  </div>
  
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'management',
    data(){
      return{
        options:[
        {value:'TestMale'},
        {value:'Luffy'},
        {value:'FitFemale'},
        {value:'Jiraiya'},
        {value:'YodaRigged'},
        {value:'BusinessMale'},
        {value:'BusinessFemale'},
        {value:'SmartMale'},
        {value:'SmartFemale'}
        ],
        status:0,
        id:this.$route.params.id,
        username:null,
        historyList:null,
        favoriteList:null,
        card:null,
        profile:null,
        avatar:null,
        gender:null,
        firstname:null,
        lastname:null,
        model:null,
        gender:null,
        description:null,
        experience:null,
        education:null,
        keyword:null,
        // 0: myCard 1:myAccount 2:ScanHistory 3:favorites
      }
    },
    computed:{
      getContentTitle:function (event) {
        if(this.status===0){
          return 'My card and info'
        }else if(this.status===1){
          return 'My account'
        }else if(this.status===2){
          return 'Scan history'
        }else if(this.status===3){
          return 'Favorite'
        }
      }
    },
    mounted(){
      this.getProfile();
      this.getHistoryList();
      this.getFavoriateList();
    },
    methods:{
      getProfile:function(){
        this.$store.dispatch("GET_PROFILE",{
          _id:localStorage.getItem("id")
        })
        .then(success=>{
          this.profile = success.profile;
          this.gender = success.gender;
          this.firstname = success.firstname;
          this.lastname = success.lastname;
          this.model = success.model;
          this.description = success.description;
          this.experience = success.experience;
          this.education = success.education;
          this.gender = success.gender;
        })
        .catch(error=>{
        })
      },
      deleteItem:function (index) {
        this.$store.dispatch("DELETE_FAVORITE",{
          userid:this.favoriteList[index].userid
        })
        .then(success=>{
           this.$delete(this.favoriteList,index);
        })
        .catch(error=>{
          return;
        })
      },
      getHistoryList:function(){
        this.$store.dispatch("GET_HISTORY",{
        })
        .catch(error=>{
          return;
        })
        .then(data=>{
          var newhistorylist = {};
          var length = Object.keys(data.list).length;
          var i = 0;
          for(i = 0; i <length;i++){
            var x = i.toString();
            newhistorylist[x] = JSON.parse(JSON.stringify(data.list[i]));
          }
          this.historyList = newhistorylist;
        })
      },
      getFavoriateList:function(){
        this.$store.dispatch("GET_FAVORIATE",{
        })
        .catch(error=>{
          return;
        })
        .then(data=>{
          var newfavoritelist = {};
          var length = Object.keys(data.list).length;
          var i = 0;
          for(i = 0; i <length;i++){
            var x = i.toString();
            newfavoritelist[x] = JSON.parse(JSON.stringify(data.list[i]));
          }
          this.favoriteList = newfavoritelist;
        })
      },
      logoutclick:function(event){
        this.$store.dispatch("userLogout")
        .catch(error=>{
          return;
        })
        .then(success=>{
          localStorage.removeItem('token');
          this.$router.push("/login");
          })
        },
      saveOnClick:function(event){
      this.$store.dispatch("UPDATE_PROFILE",{
        _id:localStorage.getItem("id"),
        description:this.description,
        experience:this.experience,
        education:this.education,
        model:this.model,
        gender:this.gender
      })
      .then(success=>{
        alert(success);
      })
      .catch(error=>{
        alert("error!");
      })
      },
      searchOnClick:function(event){
        if(this.status === 2){
          this.$store.dispatch("GET_HISTORY",{
        })
        .catch(error=>{
          return;
        })
          .then(data=>{
          var newhistorylist = {};
          var length = Object.keys(data.list).length;
          var i = 0;
          for(i = 0; i <length;i++){
            var x = i.toString();
            newhistorylist[x] = JSON.parse(JSON.stringify(data.list[i]));
          }
        if(this.keyword===null){
          this.historyList = newhistorylist;
          return;
        }
        var searchlist = [];
        var index = 0;
        for(index = 0;index<Object.keys(newhistorylist).length;index++){
          if (newhistorylist[index].name.toUpperCase().indexOf(this.keyword.toUpperCase()) > -1)
        {
        searchlist.push(newhistorylist[index])
        }
        }
      this.historyList = searchlist;
          })
      }
      else if(this.status === 3){
        this.$store.dispatch("GET_FAVORIATE",{
        })
        .catch(error=>{
          return;
        })
          .then(data=>{
         var newfavoritelist = {};
          var length = Object.keys(data.list).length;
          var i = 0;
          for(i = 0; i <length;i++){
            var x = i.toString();
            newfavoritelist[x] = JSON.parse(JSON.stringify(data.list[i]));
          }
        if(this.keyword===null){
           this.favoriteListt = newfavoritelist;
          return;
        }
        var searchlist = [];
        var index = 0;
        for(index = 0;index<Object.keys(newfavoritelist).length;index++){
          if (newfavoritelist[index].name.toUpperCase().indexOf(this.keyword.toUpperCase()) > -1)
        {
        searchlist.push(newfavoritelist[index])
        }
        }
      this.favoriteList = searchlist;
          })
      }
      }
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
  #content_header{
    flex-grow:1;
    width:80%;
    height:5%;
    display:relative;
    flex-direction: row;
    padding:15px 0;
    margin-bottom:2%;
  }
  #content_title{
    font-family: 'Raleway', sans-serif;
    float:left;
    font-size:28px;
    color:rgba(67,66,93,1);
    transition: background-color 0.2s ease-in-out ;
  }
  #content {
    flex-grow: 1;
    width: 80%;
    height: 90%;
    background-color: white;
    margin-bottom: 1%;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #search_box{
    float:right;
    margin-top:20px;
  }

  .search_input_box{
    height:25px;
    width:100px;
    text-align:left;
    border:0px;
    border-bottom: solid 1px rgb(54, 54, 54);
    font-family: 'Lato', sans-serif;
    background-color:rgb(240,240,247)
  }
  div {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.5s;
  }
  h2 {
    margin-block-start: 0.4em;
    margin-block-end: 0.4em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  #gender_button{
    text-align: center;
    border-radius:5px;
    font-size:14px;
    width:70px;
    height:30px;
    margin-left:8px;
  }
  .save_button{
    width: 90px;
    height:30px;
    text-align:center;
    border-radius:5px;
    background-color: rgb(59, 134, 255);
    font-size:14px;
    color:#ddd;
  }
  .textarea_inner{
    font-family: 'Lato', sans-serif;
    font-size:13px;
    width:700px;
    height:60px;
    border:1px solid #ddd;
    font-size:px;
    color:rgb(54, 54, 54);
    border:1px solid #ddd;
    border-radius: 5px;
    resize:none;
    margin-top:5px;
  }
  .profile_box{
    margin-left:80px;
    margin-bottom:10px;
  }
  .row{
    display:flex;
    flex-wrap:wrap;
  }
  .input_box{
    text-align:left;
    width: 80px;
    height:10px;
    font-family: 'Lato', sans-serif;
    font-size:14px;
    margin-left:8px;
    padding:10px
  }
  .profile_title{
    font-family:Source Sans Pro,serif;
    font-size:15px;
    font-weight:bold;
    color:rgb(77, 79, 92);
    
  }
  .people_element{
    width:48%;
    height:30.5%;
    margin-bottom: 20px;
    background:white;
    box-shadow:0 2px 6px rgba(0,0,0,0.04);
    display: flex;
    flex-wrap: wrap;
  }
  .avatar{
    width: 72px;
    height:72px;
    border-radius: 50%;
    margin-top: 14px;
    margin-left: 24px;
    user-select: none;
  }
  .brief{
    width: 70%;
    height :86px;
    margin-top: 14px;
    margin-left: 20px;
    user-select: none;
  }
  .name{
    width:100%;
    height:25px;
    font-size:18px;
    font-family: 'Lato', sans-serif;
    font-weight:bold;
    line-height:13px;
    color:rgba(77,79,92,1);
  }
  .description{
    width:100%;
    height:40px;
    font-size:15px;
    font-family: 'Lato', sans-serif;
    font-weight:400;
    line-height:25px;
    color:rgba(67,66,93,1);
    opacity:0.5;
  }
  .horizontal_bar{
    width:100%;
    height:0;
    border:1px solid rgba(241,241,243,1);
    position: relative;
    bottom: 15px;
  }
  .cross{
    position :relative;
    top:14px;
    right:14px;
    width:15px;
    height: 15px;
    user-select: none;
  }
  .searchpng{
    position:relative;
    top:3px;
    right:20px;
    width:15px;
    height:15px;
    user-select:none;
  }
</style>