import { createApp } from 'vue'

createApp({
    data() {
        return {
            peoples: [],
            peopleInModal: {}
        }
    },
    async created() {
        this.peoples = await (await fetch("http://localhost:8088/peoples")).json()
    },
    methods: {
        getGame: async function (id) {
            this.peopleInModal = await (await fetch(`http://localhost:8088/peoples/${id}`)).json()
            const peopleInModal = new bootstrap.Modal(document.getElementById("peopleInModal"), {})
            peopleInModal.show()
        }
    }
}).mount('#app')