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
                                            <div class="col-8">
                                                <div class="invoice p-3 mb-1">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <h5>
                                                                Lesson Title: {{ lesson.title }}

                                                            </h5>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                    <div class="row invoice-info">
                                                        <div class="col-sm-6 invoice-col">
                                                            <address>
                                                                Duration: <strong>{{ lesson.duration }}</strong><br>
                                                                Class: {{ lesson.name }}<strong></strong><br />
                                                                Date: {{ lesson.date }}

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
                                            <div class="col-4">
                                                <!-- Lesson part component -->
                                                <LessonPart />
                                                <!-- End Lesson part component -->
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <!-- Lesson Activities component -->
                                <!-- <LessonActivities /> -->
                                <!-- End Lesson Activities component -->


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
                                                                            <label>Competences</label>
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
                <div class="row">
                    <div class="col-md-6">
                        <router-link :to="{ name: 'lesson.parts.activities' }" class="btn btn-primary">Lesson
                            Activities</router-link>
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
import { Modal } from 'bootstrap'
import LessonPart from "../../components/lessonParts/LessonPart.vue";
// import LessonActivities from '@/views/teacher/components/lessonActivities/LessonActivities.vue'
// import LessonParts from "./LessonParts.vue";

export default {

    components: {
        QuillEditor,
        LessonPart,
        // LessonActivities,
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
        this.modal = new Modal(document.getElementById('modal-teacher'))
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


        // async teacherActivities() {
        //     await axios.get(`http://localhost:8000/api/v1/teacher-activities/teacher/activity/${this.$route.params.id}`).then(response => {
        //         this.teacherActivity = response.data
        //     }).catch(error => {
        //         console.log(error)
        //         this.teacherActivity = []
        //     })
        // },

        async setLessonActivities() {
            await axios.post('http://localhost:8000/api/v1/lesson-activities', {
                teacherActivities: this.formActivities.teacherActivities,
                learnerActivities: this.formActivities.learnerActivities,
                competences: this.formActivities.competences,
                lessonPartId: this.formActivities.lessonPartId,
            })
            this.closeModal()
            location.reload()
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
        },
        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        }

    }

}
</script>