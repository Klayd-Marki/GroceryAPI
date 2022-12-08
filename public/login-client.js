import { createApp } from 'vue'
const api_base = "http://localhost:8000"

createApp({
    data() {
        return {
            items: [],
            itemInModal: {},
            loginModal:{},
            loginName:"",
            loginPass:"",
            loginError:"",
            token:"",
        }
    },
    
    async created() {
        this.items = await (await fetch(`${api_base}/index`)).json()
        this.token = sessionStorage.getItem("token")===null?"":sessionStorage.getItem("token")
        console.log("Created",this.token);
    },
    methods: {
        getItem: async function (id) {
            this.itemInModal = await (await fetch(`${api_base}/items/${id}`)).json()
            const itemInfoModal = new bootstrap.Modal(document.getElementById("itemInfoModal"), {})
            itemInfoModal.show()
        },
        showLogin: function(event) {
            console.log(event);
            event.preventDefault()
            this.loginModal = new bootstrap.Modal(document.getElementById("loginModal"), {})
            this.loginModal.show()
        },
        doLogIn: async function(){
            console.log("doLogIn");
            const response = await fetch(`${api_base}/login`,
                {
                    method:"post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ "email":this.loginName, "password":this.loginPass })
                }
            )
            console.log(response)
            const result = await response.json()
            if(response.ok){                
                if(result.success){
                    this.token = result.data.token
                    sessionStorage.setItem("token", this.token);
                    this.loginModal.hide()
                    
                    this.$router.push(response.loaction)
                    
                }
            } else {
                this.loginError = result.error
            }
        },
        doLogOff: function() {
            // delete user cookies
            this.token = ""
            sessionStorage.removeItem("token")
            this.$router.push("/")

        }
    }
}).mount('#app')