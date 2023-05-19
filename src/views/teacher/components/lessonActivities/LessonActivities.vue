<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from "axios";
import { ref } from 'vue';
import $ from 'jquery'
// import Swal from 'sweetalert2'
// import { Modal } from 'bootstrap'
// import { mapState } from 'vuex';

export default {

    components: {
        QuillEditor,
        // LessonPart,
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
            activityEditingId: '',
            activityId: null,

            lessonActivities: [],
            lessonActivity: [],
            teacherActivities: [],
            lessonEvaluations: [],

            form: {
                id: null,
                teacher_activities: ref(''),

            },
            formEvaluation: {
                content: ref(''),
                lessonPartId: null
            },


        }
    },
    // computed:{
    //     ...mapState([])
    // },
    mounted() {

        this.getLesson()
        // this.getLessonPart()
        // this.teacherActivities()
        this.getLessonActivities()
        this.getLessonActivity()
        this.getLessonEvaluations()
    },
    methods: {
        setToEditing(item) {
            this.activityEditingId = item.activity_id;
            //this.activityId = item.

        },
        async getLesson() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/user/${this.$route.params.id}`).then(response => {
                this.lesson = response.data

            }).catch(error => {
                console.log(error)
                this.lesson = []
            })
        },
        editTeacherActivity(form) {
            $('#EditTeacherActivity').modal('show');
            this.form = {
                id: form.id,
                teacher_activities: form.teacher_activities,

            };
        },
        async updateTeacherActivity(form) {
            //console.log(form.activityEditingId);
            await axios.put('http://localhost:8000/api/v1/lesson-activities/teacher-activity/' + this.form.id, form)
                .then((response) => {
                    const index = this.teacherActivities.findIndex(form => form.id === response.data.id);
                    this.teacherActivities[index] = response.data;
                }).catch((error) => {
                    console.log(error);
                });
        },

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

        async getLessonActivity() {
            await axios.get(`http://localhost:8000/api/v1/lesson-activities/get-activity/${this.$route.params.id}`).then(response => {
                this.lessonActivity = response.data
                this.formActivities.id = response.data.id
            }).catch(error => {
                console.log(error)
                this.lessonActivity = []
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
            const a = document.createElement("a");
            a.href = `http://localhost:8000/api/v1/lesson-management/lesson/pdf/${this.$route.params.id}`
            a.target = "_blank";
            a.click();
        },

    }

}
</script>
<template>
    <div class="col-md-12">
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-edit"></i>
                    Lesson Activities
                </h3>
                <button class="btn btn-secondary btn-xs float-right" @click="getPDFLessonPlan"><i
                        class="fa fa-file-pdf"></i> Export to
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
                    <div class="panel-body">
                        <table class="table mb-4">
                            <thead>
                                <th>#</th>
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
                                    <tr v-for="item in lessonActivities" :key="item.activity_id">
                                        <td>{{ item.activity_id }}</td>
                                        <td>
                                            {{ item.type }}<br />
                                            <small>{{ item.partDuration }}</small>
                                        </td>
                                        <td v-if="activityEditingId == item.activity_id">
                                            <QuillEditor theme="snow" content-type="html"
                                                v-model:content="item.teacher_activities"
                                                @keydown.enter="updateTeacherActivity(item.teacher_activities)"
                                                @blur="updateTeacherActivity(item.teacher_activities)" />

                                            <button class="btn btn-primary btn-sm"
                                                @click="updateTeacherActivity(item.teacher_activities)">Save</button>

                                        </td>
                                        <td v-else @click="setToEditing(item)">
                                            <p v-html="item.teacher_activities"></p>
                                            <span><a href="#" class="btn-xs"
                                                    @click.prevent="editTeacherActivity(item.teacher_activities)"><i
                                                        class="fa fa-edit"></i></a></span>
                                        </td>
                                        <td v-if="activityEditingId == item.activity_id">

                                        </td>
                                        <td v-else>
                                            <p v-html="item.learner_activities"></p>
                                        </td>
                                        <td>
                                            <p v-html="item.competences"></p>
                                        </td>
                                        <td>
                                            <router-link class="btn btn-warning btn-xs ml-2"
                                                :to="{ name: 'lesson.activities', params: { id: item.activity_id } }">
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
                    </div>
                </div>
            </div>
        </div>
        <router-link class="btn btn-success" :to="{ name: 'lesson.list' }">Back to
            Lessons</router-link>
    </div>
    <div class="modal fade" id="EditTeacherActivity">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit Lesson Part </h4>
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
                                                <form @submit.prevent="updateLessonPart(form)">
                                                    <div class="modal-body">

                                                        <div class="form-group">
                                                            <label>How Long?</label>
                                                            <QuillEditor theme="snow" content-type="html"
                                                                v-model:content="lessonActivity.teacher_activities" />
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary ml-4 ">Update</button>
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
</template>