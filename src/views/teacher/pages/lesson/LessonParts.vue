<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="invoice p-3 mb-1">
                        <div class="row">
                            <div class="col-12">
                                <h5>
                                    Lesson Title: {{ lessons.title }}
                                    <small class="float-right">Date: {{ lessons.date }}</small>
                                </h5>
                                <hr />
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- info row -->
                        <div class="row invoice-info">
                            <div class="col-sm-6 invoice-col">
                                <address>
                                    Duration: <strong>{{ lessons.duration }}</strong><br>
                                    Class: {{ lessons.name }}<strong></strong>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                                <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                                    data-target="#modal-evaluation" v-if="lessonParts.length === 3"><i
                                        class="fa fa-plus-circle"></i> Duration:
                                    Evaluation
                                </button>
                                <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                                    data-target="#modal-conclusion" v-if="lessonParts.length === 2"><i
                                        class="fa fa-plus-circle"></i> Duration:
                                    Conclusion
                                </button>

                                <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                                    data-target="#modal-lessonBody" v-if="lessonParts.length === 1"><i
                                        class="fa fa-plus-circle"></i> Duration: Lesson
                                    Body
                                </button>
                                <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                                    data-target="#modal-setTimeIntro" v-if="lessonParts.length === 0"><i
                                        class="fa fa-plus-circle"></i> Duration:
                                    Intro/Revision
                                </button>
                                <template v-if="lessonParts.length === 0">
                                    <p align="center">No lesson Parts found</p>
                                </template>
                                <template v-else>
                                    <table class="table table-bordered mb-4">
                                        <thead>
                                            <th>Lesson Part</th>
                                            <th>Duration</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in lessonParts" :key="item.id">
                                                <td>{{ item.type }}</td>
                                                <td>{{ item.lessonTime }}</td>
                                                <td>
                                                    <a href="#" class="btn btn-secondary btn-xs"><i
                                                            class="fa fa-pencil-alt"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </template>
                                <div class="card card-primary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fas fa-edit"></i>
                                            Lesson Activities
                                        </h3>
                                        <button class="btn btn-secondary btn-xs float-right" @click="exportToPdf"><i
                                                class="fa fa-file-pdf"></i> Export to PDF</button>
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
                                                    <template v-if="!lessonActivities.length || lessonEvaluations.length">
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
                    <div class="modal fade" id="modal-setTimeIntro">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Introduction </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form @submit.prevent="setTimeIntro">
                                    <div class="modal-body">
                                        <input type="number" class="form-control" v-model="duration"
                                            placeholder="How long is the introduction/revision?" />
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modal-lessonBody">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Body </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form @submit.prevent="setTimeBody">
                                    <div class="modal-body">
                                        <input type="number" class="form-control" v-model="duration"
                                            placeholder="How long will be lesson Body" />
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modal-evaluation">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Evaluation </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form @submit.prevent="setTimeEvaluation">
                                    <div class="modal-body">
                                        <input type="number" class="form-control" v-model="duration"
                                            placeholder="How long will be lesson Evaluation" />
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modal-conclusion">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Lesson Conclusion </h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form @submit.prevent="setTimeConclusion">
                                    <div class="modal-body">

                                        <input type="number" class="form-control" v-model="duration"
                                            placeholder="How long will be lesson Conlusion" />
                                    </div>
                                    <div class="modal-footer justify-content-between">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save
                                        </button>
                                    </div>
                                </form>
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
                                                                            <QuillEditor theme="snow" content-type="html"
                                                                                v-model:content="formActivities.teacherActivities" />

                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Learner Activities</label>
                                                                            <QuillEditor theme="snow" content-type="html"
                                                                                v-model:content="formActivities.learnerActivities" />

                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>competences</label>
                                                                            <QuillEditor theme="snow" content-type="html"
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
                                                                            <QuillEditor theme="snow" content-type="html"
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
import { Modal } from 'bootstrap'

import { ref } from 'vue';
export default {

    components: {
        QuillEditor,
    },
    data() {
        return {
            lesson: null,
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
            },
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
        this.getLessonParts()
        this.teacherActivities()
        this.getLessonActivities()
        this.getLessonEvaluations()
        this.modal = new Modal(document.getElementById('modal-setTimeIntro'))
        this.modal = new Modal(document.getElementById('modal-lessonBody'))

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
        async getLessonParts() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/get-lesson/${this.$route.params.id}`).then(response => {

                this.lessonPart = response.data
            }).catch(error => {
                console.log(error)
                this.lessonPart = []
            })
        },
        async setTimeIntro() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.type,
                duration: this.duration,
                lessonId: this.lesson.id,
            })
            $this.closeModal();
            location.reload();
        },

        async setTimeBody() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.body,
                duration: this.duration,
                lessonId: this.lesson.id,
            })
            $this.closeModal();
            location.reload();
        },
        async setTimeEvaluation() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.evaluation,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.details' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        async setTimeConclusion() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.conclusion,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.details' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },

        async teacherActivities() {
            await axios.get(`http://localhost:8000/api/v1/teacher-activities/get-activity/${this.$route.params.id}`).then(response => {
                this.teacherActivity = response.data
            }).catch(error => {
                console.log(error)
                this.teacherActivity = []
            })
        },
        async setTeacherActivityIntro() {
            await axios.post('http://localhost:8000/api/v1/teacher-activities', {
                content: this.formData.content,
                lessonPartId: this.lessonParts.id,
            })
            $this.closeModal();
            location.reload();
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

        async setEvaluation() {
            await axios.post('http://localhost:8000/api/v1/lesson-evaluation', {
                content: this.formEvaluation.content,
                lessonPartId: this.formEvaluation.lessonPartId,
            }).then(response => (
                this.$router.push({ name: 'lesson.activities' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
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
        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        }
        // exportToPdf() {
        //     const doc = new jsPDF();
        //     const repo = this.getLessonEvaluations();

        //     doc.text(repo, 10, 10);
        //     doc.save("a4.pdf");

        // }
    }

}
</script>