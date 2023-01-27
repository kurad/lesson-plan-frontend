<template>
    <section class="content">
        <div class="container-fluid">
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Lesson Plan Setup</h3>
                            </div>
                            <div class="card-body">
                                <section class="content ">
                                    <div class="container-fluid">
                                        <div class="row mb-2">
                                            <div class="col-12">
                                                <div class="invoice p-3 mb-1">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h5>
                                                                Lesson Title: {{ lesson.title }}
                                                                <small class="float-right">Date: {{
                                                                    lesson.date
                                                                }}</small>
                                                            </h5>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                    <div class="row invoice-info">
                                                        <div class="col-sm-6 invoice-col">
                                                            <address>
                                                                Duration: <strong>{{ lesson.duration }}</strong><br>
                                                                Class: {{ lesson.name }}<strong></strong><br />

                                                            </address>

                                                        </div>
                                                        <div class="col-sm-6 invoice-col">

                                                            <address>
                                                                <strong>Learning Objectives:</strong> <span
                                                                    v-html="lesson.objectives"></span>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fas fa-edit"></i>
                                            Lesson Activities
                                        </h3>
                                        <button class="btn btn-secondary btn-xs float-right"
                                            @click="getPDFLessonPlan"><i class="fa fa-file-pdf"></i> Export to
                                            PDF</button>
                                        <a href="#" class="btn btn-primary btn-xs float-right mr-2" data-toggle="modal"
                                            data-target="#modal-lessonEvaluation"><i class="fa fa-plus-circle"></i> Add
                                            Evaluation</a>
                                        <a href="#" class="btn btn-primary btn-xs float-right mr-2" data-toggle="modal"
                                            data-target="#modal-teacher"><i class="fa fa-plus-circle"></i> Add
                                            Activity</a>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">
                                            <table class="table table-bordered mb-4">
                                                <thead>
                                                    <th>Lesson Part</th>
                                                    <th>Teacher Activities</th>
                                                    <th>Learner Activities</th>
                                                    <th>Competences</th>
                                                    <th>Action</th>
                                                </thead>
                                                <tbody>
                                                    <template
                                                        v-if="!lessonActivities.length || lessonEvaluations.length">
                                                        <tr>
                                                            <td colspan="5" align="center"><b>No Lesson Activities
                                                                    available</b></td>
                                                        </tr>
                                                    </template>
                                                    <template v-else>
                                                        <tr v-for="item in lessonActivities" :key="item.id">
                                                            <td>
                                                                {{ item.type }}<br />
                                                                <small>{{ item.partDuration }}</small>
                                                            </td>
                                                            <td>
                                                                <p v-html="item.teacher_activities"></p>
                                                            </td>
                                                            <td>
                                                                <p v-html="item.learner_activities"></p>
                                                            </td>
                                                            <td>
                                                                <p v-html="item.competences"></p>
                                                            </td>
                                                            <td>
                                                                <router-link class="btn btn-warning btn-xs ml-2"
                                                                    :to="{ name: 'lesson.activities', params: { id: item.id } }">
                                                                    <i class="fa-solid fas fa-pencil-alt sm"></i>
                                                                </router-link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>{{ lessonEvaluations.type }} <br />
                                                                <small>{{ lessonEvaluations.partDuration }}</small>
                                                            </td>
                                                            <td colspan="3">
                                                                <p v-html="lessonEvaluations.content"></p>
                                                            </td>
                                                        </tr>
                                                    </template>
                                                </tbody>
                                            </table>
                                            <router-link class="btn btn-success" :to="{ name: 'lesson.list' }">Back to
                                                Lessons</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" id="modal-teacher">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Plan Activities </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <!--=======================================-->
                                <section class="content">
                                    <div class="container-fluid">
                                        <section class="content">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <form @submit.prevent="setLessonActivities">
                                                                    <div class="modal-body">
                                                                        <div class="col-md-4">
                                                                            <div class="form-group">
                                                                                <label>Lesson Part</label>
                                                                                <select class="form-control"
                                                                                    v-model="formActivities.lessonPartId">
                                                                                    <option v-for="item in lessonParts"
                                                                                        :key="item.id" :value="item.id">
                                                                                        {{ item.type }}</option>
                                                                                </select>

                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Teacher Activities</label>
                                                                            <QuillEditor theme="snow"
                                                                                content-type="html"
                                                                                v-model:content="formActivities.teacherActivities" />

                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Learner Activities</label>
                                                                            <QuillEditor theme="snow"
                                                                                content-type="html"
                                                                                v-model:content="formActivities.learnerActivities" />

                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Competences</label>
                                                                            <QuillEditor theme="snow"
                                                                                content-type="html"
                                                                                v-model:content="formActivities.competences" />

                                                                        </div>

                                                                    </div>

                                                                    <button type="submit"
                                                                        class="btn btn-primary ml-4 ">Save</button>

                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modal-lessonEvaluation">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Evaluation </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <section class="content">
                                    <div class="container-fluid">
                                        <section class="content">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <form @submit.prevent="setEvaluation">
                                                                    <div class="modal-body">
                                                                        <div class="col-md-4">
                                                                            <div class="form-group">
                                                                                <label>Lesson Part</label>
                                                                                <select class="form-control"
                                                                                    v-model="formEvaluation.lessonPartId">
                                                                                    <option v-for="item in lessonParts"
                                                                                        :key="item.id" :value="item.id">
                                                                                        {{ item.type }}</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Evaluation Questions</label>
                                                                            <QuillEditor theme="snow"
                                                                                content-type="html"
                                                                                v-model:content="formEvaluation.content" />
                                                                        </div>
                                                                    </div>

                                                                    <button type="submit"
                                                                        class="btn btn-primary ml-4 ">Save</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from "axios";
import { ref } from 'vue';
import { jsPDF } from "jspdf";
export default {

    components: {
        QuillEditor,
    },
    data() {
        return {
            lesson: {},
            type: 'Introduction',
            body: 'Lesson body',
            conclusion: 'Conclusion',
            evaluation: 'Evaluation',
            duration: null,
            lessonId: null,
            lessonParts: [],
            lessonPart: [],
            lessonActivities: [],
            lessonEvaluations: [],

            formActivities: {
                lessonPartId: null,
                teacherActivities: ref(''),
                learnerActivities: ref(''),
                competences: ref(''),
            },
            formEvaluation: {
                content: ref(''),
                lessonPartId: null
            },

        }
    },
    mounted() {

        this.getLesson()
        this.getLessonPart()
        this.teacherActivities()
        this.getLessonActivities()
        this.getLessonEvaluations()

    },
    methods: {
        async getLesson() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/user/${this.$route.params.id}`).then(response => {
                this.lesson = response.data

            }).catch(error => {
                console.log(error)
                this.lesson = []
            })
        },
        async getLessonPart() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/lesson/${this.$route.params.id}`).then(response => {
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

        async setLessonActivities() {
            await axios.post('http://localhost:8000/api/v1/lesson-activities', {
                teacherActivities: this.formActivities.teacherActivities,
                learnerActivities: this.formActivities.learnerActivities,
                competences: this.formActivities.competences,
                lessonPartId: this.formActivities.lessonPartId,
            }).then(response => (
                this.$router.push({ name: 'lesson.activities' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        async getLessonActivities() {
            await axios.get(`http://localhost:8000/api/v1/lesson-activities/activities/${this.$route.params.id}`).then(response => {
                this.lessonActivities = response.data
            }).catch(error => {
                console.log(error)
                this.lessonActivities = []
            })
        },

        async getLessonEvaluations() {
            await axios.get(`http://localhost:8000/api/v1/lesson-evaluation/evaluations/${this.$route.params.id}`).then(response => {
                this.lessonEvaluations = response.data
            }).catch(error => {
                console.log(error)
                this.lessonEvaluations = []
            })
        },
        async getPDFLessonPlan() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/pdf/${this.$route.params.id}`).then(response => {
                this.lessonEvaluations = response.data
            }).catch(error => {
                console.log(error)
                this.lessonEvaluations = []
            })
        }

    }

}
</script>