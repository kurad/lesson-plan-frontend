<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to="{ name: 'lesson.new' }" class="btn btn-primary btn-sm float-right mr-4"><i
                    class="fas fa-plus mr-1"></i>Add
                New Lesson</router-link>
        </div>
        <table class="table">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Unit</th>
                <th>Topic Area</th>
                <th>Action</th>
            </tr>
            <tbody>
                <tr v-for="(item, index) in lessons" @key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.unitName }}</td>
                    <td>{{ item.topic_area }}</td>
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
    name: "Lessons",
    data() {
        return {
            lessons: []
        }
    },
    mounted() {
        this.getLessons()
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

    },
    methods: {
        async getLessons() {
            await axios.get('http://localhost:8000/api/v1/lesson-management/lessons/user').then(response => {
                this.lessons = response.data
            }).catch(error => {
                console.log(error)
                this.lessons = []
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