import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const api_base = "http://localhost:8000"


createApp({
    data() {
        return {
            items: [],
            carInModal: {},
            users: [],
            loginModal:{},
            role: "",
            loginName:"",
            loginPass:"",
            loginError:"",
            token:"",
            isAdmin: ""
        }
    },
    
    async created() {
        this.items = await (await fetch('http://localhost:8000/items')).json();
        this.token = sessionStorage.getItem("token")===null?"":sessionStorage.getItem("token")
        console.log("Created",this.token);

        let data = await (await fetch('http://localhost:8000/users')).json();
        this.users = data.data
        this.token = sessionStorage.getItem("token")===null?"":sessionStorage.getItem("token")
        console.log("Created",this.token);
    },
    methods: {
        getUser: async function() {
            this.users = await (await fetch(`http://localhost:8000/users`)).json()
            console.log(this.users);
          },  

        getItem: async function (id) {
            this.itemInModal = await (await fetch(`http://localhost:8000/items/${id}`)).json()
            console.log(this.itemInModal);
            const itemInfoModal = new bootstrap.Modal(document.getElementById('itemInfoModal'), {})
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
                    body: JSON.stringify({"email":this.loginName, "password":this.loginPass })
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
        doLogOff: async function() {npm 

            await fetch(`${api_base}/logout`)
            window.location.href = "/login"
        }
    
    }}).mount('#app')