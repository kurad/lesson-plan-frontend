<template>
    <section class="content">
        <div class="container-fluid">
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Lesson Part: {{ lessonParts.type }} - ( {{ lessonParts.lessonTime
}}
                                    min )
                                </h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <!-- Box Comment -->
                                        <form @submit.prevent="setTeacherActivity">
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label>Teacher Activities</label>
                                                    <QuillEditor theme="snow" content-type="html"
                                                        v-model:content="formData.content" />

                                                </div>

                                            </div>

                                            <button type="submit" class="btn btn-primary ml-4 ">Save</button>

                                        </form>
                                        <form @submit.prevent="setLearnerActivity">
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label>Learner Activities</label>
                                                    <QuillEditor theme="snow" content-type="html"
                                                        v-model:content="formLearner.content" />

                                                </div>

                                            </div>
                                            <button type="submit" class="btn btn-primary ml-4">Save</button>
                                        </form>

                                        <form @submit.prevent="setCompetence">
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <label>Competences</label>
                                                    <QuillEditor theme="snow" content-type="html"
                                                        v-model:content="formCompetence.content" />

                                                </div>

                                            </div>

                                            <button type="submit" class="btn btn-success float-right mr-4">Done</button>
                                            <button type="submit" class="btn btn-primary ml-4">Save</button>

                                        </form>

                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                </div>

            </section>
        </div>
    </section>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from 'axios';
import { ref } from "vue";
export default {
    components: {
        QuillEditor,
    },
    data() {
        return {
            lessons: {},
            lessonParts: {},
            lesson: 0,
            teacherActivity: [],
            learnerActivity: [],
            formData: {
                content: ref(''),
                lessonPartId: null
            },
            formLearner: {
                content: ref(''),
                lessonPartId: null
            },
            formCompetence: {
                content: ref(''),
                lessonPartId: null
            }
        }
    },
    mounted() {
        this.getLessonParts()
        this.teacherActivities()
        this.learnerActivities()
    },
    methods: {
        async getLessonParts() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/get-lesson/${this.$route.params.id}`).then(response => {

                this.lessonParts = response.data
            }).catch(error => {
                console.log(error)
                this.lessonParts = []
            })
        },

        async teacherActivities() {
            await axios.get(`http://localhost:8000/api/v1/teacher-activities/get-activity/${this.$route.params.id}`).then(response => {
                this.teacherActivity = response.data
            }).catch(error => {
                console.log(error)
                this.teacherActivity = []
            })
        },

        async learnerActivities() {
            await axios.get(`http://localhost:8000/api/v1/learner-activities/learner/get-activity/${this.$route.params.id}`).then(response => {
                this.learnerActivity = response.data
            }).catch(error => {
                console.log(error)
                this.learnerActivity = []
            })
        },
        async competences() {
            await axios.get(`http://localhost:8000/api/v1/teacher-activities/get-activity/${this.$route.params.id}`).then(response => {
                this.teacherActivity = response.data
            }).catch(error => {
                console.log(error)
                this.teacherActivity = []
            })
        },

        async setTeacherActivity() {
            await axios.post('http://localhost:8000/api/v1/teacher-activities', {
                content: this.formData.content,
                lessonPartId: this.lessonParts.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.activities' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },

        async setLearnerActivity() {
            await axios.post('http://localhost:8000/api/v1/learner-activities', {
                content: this.formLearner.content,
                lessonPartId: this.lessonParts.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.activities' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        async setCompetence() {
            await axios.post('http://localhost:8000/api/v1/lesson-competence', {
                content: this.formCompetence.content,
                lessonPartId: this.lessonParts.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.activities' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
    },
}
</script>