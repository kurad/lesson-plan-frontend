<template>
    <div class="card mr-3">
        <h5 class="card-header bg-primary mb-3">Class Subjects</h5>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject Name</th>
                        <th>Class Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in subjects" @key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.class_id}}</td>
                        <td>
                            <router-link :to="{name: 'subject.units',  params: {id: item.id}}" class="btn btn-default">
                                <i class="fas fa-bars"></i> Subject Details
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: '',
            subject: 0,
            subjects: []
        }
    },
    methods: {

        async getSubjects() {
            await axios.get(`http://localhost:8000/api/v1/subject-management/user`)
                .then(response => {
                    this.subjects = response.data
                }).catch(error => {
                    console.log(error)
                    this.subjects = []
                })
        },
    },
    created() {
        this.getSubjects();
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        axios.get(`http://localhost:8000/api/user`)
            .then(response => {
                this.user = response.data
                this.loginType = response.data.roles[0].name
            })
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.clear();
                    this.$router.push('/login')
                }
                console.error(error);
            })
    }
}
</script>