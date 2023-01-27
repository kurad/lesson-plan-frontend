<template>
    <div class="card mr-3">
        <h5 class="card-header bg-primary mb-3">All Units</h5>
        <div class="card-body">

            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Unit No</th>
                        <th>Subject</th>
                        <th>Unit Title</th>
                        <th>Unit Key Competence</th>
                        <th>Class</th>
                        <th>Teacher</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in units" @key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.unit_no }}</td>
                        <td>{{ item.subjectName }}</td>
                        <td>{{ item.title }}</td>
                        <td>
                            <span v-html="item.key_unit_competence"></span>
                        </td>
                        <td>{{ item.className }}</td>
                        <td>{{ item.f_name }} {{ item.l_name }}</td>


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
            await axios.get(`http://localhost:8000/api/v1/unit-management`)
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