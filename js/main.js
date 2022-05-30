const app = new Vue({
    el: '#app',
    data: {
        randomMail: [],
    },
    created() {
        for (let i = 0 ; i < 10 ; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((elem) => {
                console.log(elem)
                this.randomMail.push(elem);
            })
        }
    }    
});