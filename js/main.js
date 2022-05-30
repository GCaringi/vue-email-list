const app = new Vue({
    el: '#app',
    data: {
        randomMail: [],
    },
    created() {
        const interval = setInterval(() => {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((elem) => {
                console.log(elem)
                this.randomMail.push(elem);
            })
        }, 2000);
    }    
});