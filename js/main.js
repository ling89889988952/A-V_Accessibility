
    import playerComponent from './modules/playerComponent.js';
    
    const vm = new Vue({
      
        data:{
            authenticated: true,
            condition: false,
            subcondition:false,
            volume:'',

            mediadata:[
              { name: "queen brand album picture", cover:"queen.png", vidsource:"queen.mp3", type:"audio/mpeg",vttsource:"queen.vtt",description:"Your browser doesn't support HTML5 audio. Here is a <a href='media/queen.mp3'>link to the audio</a> instead."},
              { name: "home alone picture", cover:"home.jpg", vidsource:"movie.mp4", type:"video/mp4",vttsource:"home.vtt",description:"Your browser doesn't support HTML5 video. Here is a <a href='media/movie.mp4'>link to the video</a> instead."},
              { name: "Friends Picture", cover:"friends.png", vidsource:"tvshow.mp4", type:"video/mp4",vttsource:"friends.vtt",description:"Your browser doesn't support HTML5 video. Here is a <a href='media/tvshows.mp4'>link to the video</a> instead."},
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

            
            headphone(){
              this.volume = 0.2;
            },

          
          addsubstitle(){
            this.subcondition = true;
            },

          startVideo({vidsource,type, vttsource, description}) {
 
            this.media.vidsource = vidsource;
            this.media.type = type;
            this.media.vttsource = vttsource;
            this.media.description = description;
      
            // make the movie details show up
            this.showDetails = true;
            this.condition = true;
          },

         

          },
            components:{
              player:playerComponent,}

    }).$mount('#app');
