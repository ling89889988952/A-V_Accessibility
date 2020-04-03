
    import playerComponent from './modules/playerComponent.js';

    var vid = document.getElementsByTagName('video');
    
    const vm = new Vue({
      
        data:{
            authenticated: true,
            condition: false,
            subT:false,
            volume:'',

            mediadata:[
              { name: "queen brand album picture", cover:"queen.png", vidsource:"queen.mp3", type:"audio/mpeg",vttsource:"queen.vtt",description:"This is bohemian rhapsody audio file from queen", notice:"If your browser doesn't support HTML5 audio. Here is a <a href='video/queen.mp3'>link to the audio</a> instead."},
              { name: "home alone picture", cover:"home.jpg", vidsource:"movie.mp4", type:"video/mp4",vttsource:"home.vtt",description:"This is home alone video file", notice:"If your browser doesn't support HTML5 video. Here is a <a href='video/movie.mp4'>link to the video</a> instead."},
              { name: "Friends Picture", cover:"friends.png", vidsource:"tvshow.mp4", type:"video/mp4",vttsource:"friends.vtt",description:"This is frineds video file", notice:"If your browser doesn't support HTML5 video. Here is a <a href='video/tvshows.mp4'>link to the video</a> instead."},
            ],

            media:{
              vidsource:"",
            },

            showDetails: false

        },
        methods: {
            
            brightness() {
              const el = document.body;
              el.classList.toggle("changeColor");
            },

            zoomin(){
              const el = document.body;
              if(el.style.zoom == "100%"){
              el.style.zoom = "150%";
            }else{
              el.style.zoom = "100%";
            }
            },

            // headephone(){
            //   vid[0].volume =0.5;
            // },

            subcondition(){
              if(this.subT == false){
                this.subT = true;
              }else{
                this.subT = false;
              }
            },

          

          startVideo({vidsource,type, vttsource, description,notice}) {
 
            this.media.vidsource = vidsource;
            this.media.type = type;
            this.media.vttsource = vttsource;
            this.media.description = description;
            this.media.notice = notice;
      
            // make the movie details show up
            this.showDetails = true;
            this.condition = true;
          },

         

          },
            components:{
              player:playerComponent,}

    }).$mount('#app');
