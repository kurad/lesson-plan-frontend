<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Create Subject</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form @submit.prevent="createSubject">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="subject.name">
                                </div>
                                <div class="form-group">
                                    <label>Class</label>
                                    <select class="form-control" v-model="subject.class_id">
                                        <option value="0">-- Select Class --</option>
                                        <option v-for="item in classes" :value="item.id">{{ item.name}} </option>

                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: '',
            loginType: '',
            classe: 0,
            classes: [],
            subject: {
                subjectName: null,
                userId: null,
                classId: null
            }
        }
    },
    methods: {
        getClasses() {
            axios.get('http://localhost:8000/api/v1/class-setup')
                .then(function (response) {
                    this.classes = response.data;
                }.bind(this));
        },
        createSubject() {
            axios.post('http://localhost:8000/api/v1/subject-management', {
                subjectName: this.subject.name,
                userId: this.user.id,
                classId: this.subject.class_id,
            }).then(response => (
                this.$router.push({ name: 'subjects' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },

    },
    created() {
        this.getClasses();
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