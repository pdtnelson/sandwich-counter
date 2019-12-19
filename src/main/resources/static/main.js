new Vue({
    el: "#app",
    data: {
        todos: [
            { text: "Learn JavaScript", done: false },
            { text: "Learn Vue", done: false },
            { text: "Play around in JSFiddle", done: true },
            { text: "Build something awesome", done: true }
        ],
        sandwich: {
            sandwichType: '',
            breadType: '',
            ingredients: []
        },
        newSandwich: null
    },
    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        },
        setBread(bread) {
            this.sandwich.breadType = bread
        },
        setSandwichType(type) {
            this.sandwichType = type
        },
        async makeSandwich() {
            const axios = new Axios()
            const response = await axios.post('/api/sandwich', this.sandwich)
            this.newSandwich = response.data
        }
    }
})
