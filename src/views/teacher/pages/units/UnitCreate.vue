<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Create Unit</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="createUnit">
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label>Unit No</label>
                                    <input type="number" class="form-control" v-model="unit.unitNo">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Unit Title</label>
                                    <input type="text" class="form-control" v-model="unit.title">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Class</label>
                                    <select class="form-control" v-model="unit.subjectId">
                                        <option value="0">-- Select Class --</option>
                                        <option v-for="item in subjects" :value="item.id">{{ item.name }} </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Key Unit Competence</label>
                                    <QuillEditor theme="snow" v-model:content="unit.unitCompetence" content-type="html">
                                    </QuillEditor>
                                </div>
                                <div class="form-group">

                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref } from 'vue'
export default {
    name: "Create Unit",
    components: {
        QuillEditor
    },
    data() {
        return {
            user: '',
            loginType: '',
            subject: 0,
            subjects: [],
            unit: {
                unitNo: null,
                title: null,
                unitCompetence: ref(''),
                subjectId: null
            }
        }
    },
    methods: {
        getSubjects() {
            axios.get('http://localhost:8000/api/v1/subject-management/user')
                .then(function (response) {
                    this.subjects = response.data;
                }.bind(this));
        },
        createUnit() {
            axios.post('http://localhost:8000/api/v1/unit-management', {
                title: this.unit.title,
                unitNo: this.unit.unitNo,
                unitCompetence: this.unit.unitCompetence,
                subjectId: this.unit.subjectId,
            }).then(response => (
                this.$router.push({ name: 'units' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
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