<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to="{name: 'class.create'}" class="btn btn-primary btn-sm float-right mr-4"><i
                    class="fas fa-plus mr-1"></i>Add
                New Class</router-link>
        </div>
        <table class="table">
            <tr>
                <th>#</th>
                <th>Class</th>
                <th>Class Size</th>
                <th>SEN</th>
                <th>Action</th>
            </tr>
            <tbody>
                <tr v-for="item in classes" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.size}}</td>
                    <td>{{item.learner_with_SEN}}</td>
                    <td>
                        <router-link to="#" class="btn btn-primary mr-2 btn-sm"><i class="fas fa-ellipsis-v"></i> Select
                        </router-link>

                        <router-link to="#" class="btn btn-success btn-sm"><i class="fas fa-pencil-alt"></i> Edit
                        </router-link>
                    </td>
                </tr>
            </tbody>


        </table>

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
            await axios.get('http://localhost:8000/api/v1/class-setup').then(response => {
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