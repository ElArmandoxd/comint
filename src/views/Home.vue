<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <h1 class="title"><strong style="color: white">COM</strong><strong style="color: yellow">INT</strong></h1>
        <p class="subtitle">Music for musicians</p>
        <br>
        <br>
        <div class="input-group">
          <p class="subtitle">User sign in </p>
          <div class="input-label">
          <label for="">Username</label>
            <ion-item>
              <ion-input type="text" v-model="username"></ion-input>
            </ion-item>
          </div>
          <div class="input-label">
          <label for="">Password</label>
            <ion-item>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
          </div>
          <br>
          <router-link to="/forgot" class="a-link">Forgot password? click here.</router-link>
          <ion-button expand="block">SIGN IN</ion-button>
          <router-link to="/Register"><ion-button expand="block">REGISTER</ion-button></router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import axios from 'axios';
import config from '../config/config'
import { IonContent, IonPage, IonItem, IonInput, IonButton} from '@ionic/vue';

export default {
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonButton
  },
  data(){
    return{
      username: null,
      password: null,
    }
  },
  created(){

  },
  methods:{
    login(){
      axios.post(config.SERVERURL+'/api/login', {
        username: this.username,
        password: this.password
      })
      .then(
        response => {
          console.log(response.data);
        }
      )
      .catch(
        error =>{
          console.log(error);
        }
      )
    }
  }
}
</script>

<style scoped>
ion-button{
  margin:20px;
}

.a-link{
  margin: 30px;
}

ion-item{
  margin: 15px
}
ion-content{
  --background: url('../../public/imgs/fondo.jpg') no-repeat center/cover fixed;
  --color: white;
}

.container{
  margin: 20px;
  background: rgba(0, 0, 0, 0.521);
  border-radius: 15px;
}
.title{
  margin-top: 100px;
  text-align: center;
  font-size: 60px;
}

.subtitle{
  text-align: center;
  font-size: 17px;
  color: yellow;
}

.input-group{
  text-align: left;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>