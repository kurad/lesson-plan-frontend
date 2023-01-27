<template>
    <div class="row">

        <ul v-for="item in classes" :key="item.id">
            <li>{{ item.name }}</li>
        </ul>


    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "classes",
    data() {
        return {
            classes: []
        }
    },
    mounted() {
        this.getClasses()
    },
    methods: {
        async getClasses() {
            await axios.get('http://localhost:8000/api/v1/class-setup/user').then(response => {
                this.classes = response.data
            }).catch(error => {
                console.log(error)
                this.classes = []
            })
        },
        deleteClass(id) {
            if (confirm("Are you sure to delete this class ?")) {
                axios.delete(`http://localhost:8000/api/v1/class-setup/${id}`).then(response => {
                    this.getClasses()
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>