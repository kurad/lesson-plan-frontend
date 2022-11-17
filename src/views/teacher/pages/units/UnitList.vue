<template>
    <div class="card mr-3">
        <h5 class="card-header bg-primary mb-3">Class Subjects</h5>
        <div class="card-body">
            <div class="col-12 mb-2 text-end">
                <router-link :to="{ name: 'unit.create' }" class="btn btn-primary btn-sm float-right mr-4"><i
                        class="fas fa-plus mr-1"></i>Add
                    New Unit</router-link>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject</th>
                        <th>Unit Title</th>
                        <th>Unit Key Competence</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in units" @key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.subject.name }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.key_unit_competence }}</td>
                        <td>
                            <router-link :to="{ name: 'subject.units', params: { id: item.id } }"
                                class="btn btn-default">
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
            unit: 0,
            units: []
        }
    },
    methods: {

        async getUnits() {
            await axios.get(`http://localhost:8000/api/v1/unit-management/subject/`)
                .then(response => {
                    this.units = response.data
                }).catch(error => {
                    console.log(error)
                    this.units = []
                })
        },
    },
    created() {
        this.getUnits();
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