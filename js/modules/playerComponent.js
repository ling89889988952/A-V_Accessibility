export default {
  props: ['media'],

  template:`
      <div class="playarea">
          <video  controls autoplay width="100%" class="audio-volume" >
            <source :src="'video/'+ media.vidsource" :type="media.type">
            <track  v-if="sub" :src="'media/'+ media.vttsource"  kind="subtitles" srclang="en" label="English">
            <p>{{ media.description }}</p>
          </video>    
      </div>
        
    `,
    data(){
      return{
        sub : this.$root.subcondition,
        // sub:''
      }
    }
}