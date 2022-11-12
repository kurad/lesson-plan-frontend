<template>



    <div class="card-body">
        <router-link to="/teacher/subjects" class="btn btn-default float-right btn-sm ml-2">Back to Subjects
        </router-link>
        <a href="#" class="btn btn-primary float-right btn-sm" data-toggle="modal" data-target="#modal-default"><i
                class="fas fa-plus"></i> Add Unit</a><br /><br />

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Unit Title</th>
                        <th>Unit Key competence</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in units" :key="item.id">

                        <td>{{ item.id }}</td>
                        <td>{{ item.subject.name }}</td>
                        <td>Unit {{ item.unit_no }}: {{ item.title }}</td>
                        <td>{{ item.key_unit_competence }}</td>

                        <td>
                            <router-link to='#' class="btn btn-success btn-xs mr-1">
                                <i class="fas fa-pencil-alt"></i>
                            </router-link>
                            <button type="button" @click="deleteDepartment(item.id)" class="btn btn-danger btn-xs">
                                <i class="fas fa-trash-alt sm"></i></button>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add New Unit</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="addUnit">
                        <div class="form-group">
                            <label>Subject</label>
                            <select class="form-control" v-model="units.subject_id">
                                <option value="0">-- Select Subject --</option>
                                <option v-for="item in subjects" :value="item.id">{{ item.name}} </option>

                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="units.title" class="form-control"
                                placeholder="Type Unit title" />
                        </div>
                        <div class="form-group">
                            <input type="number" v-model="units.unit_no" class="form-control"
                                placeholder="Type Unit No" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" v-model="units.key_unit_competence"
                                placeholder="Type Unit key competence here">

                            </textarea>

                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>

            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


</template>



<script>
import axios from 'axios'
export default {
    name: "units",
    data() {
        return {
            units: {
                subject_id: null,
                unit_no: null,
                title: null,
                key_unit_competence: null,
            },
            units: [],
            subjects: [],
            subject: 0
        }
    },
    mounted() {
        this.getUnits(),
            this.getSubjects()
    },
    methods: {
        async getUnits() {
            await axios.get(`http://localhost:8000/api/v1/unit-management/subject/${this.$route.params.id}`).then(response => {
                this.units = response.data
            }).catch(error => {
                console.log(error)
                this.units = []
            })
        },
        getSubjects() {
            axios.get('http://localhost:8000/api/v1/subject-management/user').then(function (response) {
                this.subjects = response.data;
            }.bind(this));
        },
        addUnit() {
            axios
                .post('http://localhost:8000/api/v1/unit-management', {
                    subjectId: this.units.subject_id,
                    unitNo: this.units.unit_no,
                    title: this.units.title,
                    unitCompetence: this.units.key_unit_competence,
                })
                .then(response => (
                    this.$router.push({ name: 'unitList' }),
                    this.$emit('close', this.units)
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    },
    deleteUnit(id) {
        if (confirm("Are you sure to delete this Unit ?")) {
            axios.delete(`http://localhost:8000/api/v1/unit-management/${id}`).then(response => {
                this.getUnits()
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>