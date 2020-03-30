import StartComponent   from "./modules/startComponent.js"
import ChanelComponent  from "./modules/chanelComponent.js";



(() => {
    let router = new VueRouter({
        routes: [
            {path:'/', redirect: { name: "start" }},
            {path:'/start', name:'start', component:StartComponent},
            {path:'/chanel', name:'chanel', component:ChanelComponent},
        ]
    });

    const vm = new Vue({
        data:{
            authenticated: false,
        },
        methods: {
            setAuthenticated(status) {
              this.authenticated = status;
            },

            logout() {
                // push user back to login page
                this.$router.push({ name: "start" });
                this.authenticated = false;

                // if(localStorage.getItem("startUser")){
                //   localStorage.removeItem("startUser");
                // }
        
              },


            brightness() {
              const el = document.body;
              el.classList.toggle("changeColor");
              const container = document.querySelector('.chanel-container');
              container.classList.toggle("changeBck");
            },

            zoomin(){
              const el = document.body;
              if(el.style.zoom == "100%"){
              el.style.zoom = "200%";
            }else{
              el.style.zoom = "100%";
            }
            },

            speechcontent(){
              if ('speechSynthesis' in window) {
                var synthesis = window.speechSynthesis;
              
              } else {
                console.log('Text-to-speech not supported.');
              }
            },

            soundoff(){
              const audio_control = document.querySelectorAll('audio_control');

              if(audio_control.muted = true){
              audio_control.muted = false;
              
              }else{
                audio_control.muted = true;
              }
            }

            },

            // created:function(){
            //   if(localStorage.getItem("startUser")){
            //     this.authenticated = true;
            //     this.$router.push({ name:"channel" });
            //   }else{
            //     this.$router.push({ name: "start"});
            //   }
            // },

        router: router  
    }).$mount('#app');

    router.beforeEach((to, from, next) => {
        //console.log('router guard fired!', to, from, vm.authenticated);
    
        if (vm.authenticated == false) {
          next("/start");
        } else {
          next();
        }
      });

})();