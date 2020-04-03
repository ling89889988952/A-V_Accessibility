export default {
  props: ['media','subs'],

  template:`
      <div class="playarea">
          <video  controls autoplay width="100%" class="audio-volume" :key="media.vidsource">
            <source :src="'video/'+ media.vidsource" :type="media.type">
            <track  v-if="subs" :src="'video/'+ media.vttsource"  kind="subtitles" srclang="en" label="English" default>
            <p>{{ media.description }}</p>
          </video>
          <p v-html="media.notice" class="notice">{{ media.notice }}</p>    
      </div>
        
    `,
  
}

  