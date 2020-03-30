export default {
    template: `
    <div class="main-container">
        <div class="start-container">
            <h2>Free Music, Movies and TV. For you.</h2>
            <div class="row">
                <img src="images/rokuchannel.png" alt="Roku Channel">
                <div class="intro">
                    <p> Music, cult classics, Tv shows and more. All in Roku.</p>
                    <button @click="start">Get Start!</button>
                </div>
            </div>
        </div>
    </div>
    `,

    methods:{
        start(){
            this.$emit("authenticated", true);
            this.$router.replace({ name: "chanel" });
        }
    }
}