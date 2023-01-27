<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12">
                    <div class="card card-primary card-tabs">
                        <div class="card-header p-0 pt-1">
                            <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill"
                                        href="#custom-tabs-one-home" role="tab" aria-controls="custom-tabs-one-home"
                                        aria-selected="true">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill"
                                        href="#custom-tabs-one-profile" role="tab"
                                        aria-controls="custom-tabs-one-profile" aria-selected="false">Intro/Revision</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-one-body-tab" data-toggle="pill"
                                        href="#custom-tabs-one-body" role="tab" aria-controls="custom-tabs-one-body"
                                        aria-selected="false">Lesson Body</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="custom-tabs-one-evaluation-tab" data-toggle="pill"
                                        href="#custom-tabs-one-evaluation" role="tab"
                                        aria-controls="custom-tabs-one-evaluation" aria-selected="false">Evaluation</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content" id="custom-tabs-one-tabContent">

                                <div class="tab-pane fade" id="custom-tabs-one-profile" role="tabpanel"
                                    aria-labelledby="custom-tabs-one-profile-tab">
                                    <section class="content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card card-primary">
                                                    <div class="card-header">
                                                        <h3 class="card-title">Introduction / Revision</h3>

                                                    </div>
                                                    <div class="card-body">
                                                        <button class="btn btn-primary btn-sm mb-3 mr-1 float-right"
                                                            data-toggle="modal"
                                                            data-target="#modal-evaluation">Duration: Evaluation
                                                        </button>

                                                        <button class="btn btn-primary btn-sm mb-3 mr-1 float-right"
                                                            data-toggle="modal"
                                                            data-target="#modal-lessonBody">Duration: Lesson Body
                                                        </button>
                                                        <button class="btn btn-primary btn-sm mb-3 mr-1 float-right"
                                                            data-toggle="modal"
                                                            data-target="#modal-setTimeIntro">Duration: Intro/Revision
                                                        </button>


                                                        <button class="btn btn-success btn-sm mr-2" data-toggle="modal"
                                                            data-target="#modal-teacher"><i class="fa fa-plus"></i>
                                                            Teacher
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm mr-2"><i
                                                                class="fa fa-plus"></i> Learner
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm"><i
                                                                class="fa fa-plus"></i> Competences</button>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <!-- Box Comment -->
                                                                <div class="card card-widget">
                                                                    <div class="card-header">
                                                                        <div>
                                                                            <span class="username"><strong>Lesson
                                                                                    Title:</strong> <a
                                                                                    href="#"></a></span><br />
                                                                            <small><span class="description"><strong>Lesson
                                                                                        Part:</strong><br />
                                                                                </span></small>
                                                                            <small><span
                                                                                    class="description"><strong>Duration:</strong>
                                                                                </span></small>
                                                                        </div>
                                                                    </div>

                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Teacher
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Learner
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Competences</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- /.card-body -->
                                                </div>
                                                <!-- /.card -->
                                            </div>
                                            <div class="modal fade" id="modal-setTimeIntro">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Lesson Introduction </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form @submit.prevent="setTimeIntro">
                                                            <div class="modal-body">
                                                                <input type="number" class="form-control"
                                                                    v-model="duration"
                                                                    placeholder="How long is the introduction/revision?" />

                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit" class="btn btn-primary">Save
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>

                                            <div class="modal fade" id="modal-lessonBody">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Lesson Body </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form @submit.prevent="setTimeBody">
                                                            <div class="modal-body">

                                                                <input type="number" class="form-control"
                                                                    v-model="duration"
                                                                    placeholder="How long will be lesson Body" />

                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit" class="btn btn-primary">Save
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>

                                            <div class="modal fade" id="modal-evaluation">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Lesson Evaluation </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form @submit.prevent="setTimeEvaluation">
                                                            <div class="modal-body">

                                                                <input type="number" class="form-control"
                                                                    v-model="duration"
                                                                    placeholder="How long will be lesson Evaluation" />

                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit" class="btn btn-primary">Save
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <!-- /.modal-content -->
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>

                                            <div class="modal fade" id="modal-teacher">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Teacher Activities </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form>
                                                            <div class="modal-body">

                                                                <p>
                                                                    <QuillEditor theme="snow" content-type="html" />
                                                                </p>
                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit"
                                                                    class="btn btn-primary">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                        </div>

                                    </section>
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-one-body" role="tabpanel"
                                    aria-labelledby="custom-tabs-one-body-tab">

                                    <section class="content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card card-primary">
                                                    <div class="card-header">
                                                        <h3 class="card-title">Lesson Body</h3>

                                                    </div>
                                                    <div class="card-body">
                                                        <button class="btn btn-primary btn-sm mb-3 float-right"
                                                            data-toggle="modal" data-target="#modal-lessonBody">Duration
                                                        </button>

                                                        <button class="btn btn-success btn-sm mr-2" data-toggle="modal"
                                                            data-target="#modal-teacher"><i class="fa fa-plus"></i>
                                                            Teacher
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm mr-2"><i
                                                                class="fa fa-plus"></i> Learner
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm"><i
                                                                class="fa fa-plus"></i> Competences</button>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <!-- Box Comment -->
                                                                <div class="card card-widget">
                                                                    <div class="card-header">
                                                                        <div>
                                                                            <span class="username"><strong>Lesson
                                                                                    Title:</strong> <a
                                                                                    href="#"></a></span><br />
                                                                            <small><span class="description"><strong>Lesson
                                                                                        Part:</strong><br />
                                                                                </span></small>
                                                                            <small><span
                                                                                    class="description"><strong>Duration:</strong>
                                                                                </span></small>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Teacher
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Learner
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Competences</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- /.card-body -->
                                                </div>
                                                <!-- /.card -->
                                            </div>

                                            <div class="modal fade" id="modal-teacher">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Teacher Activities </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form>
                                                            <div class="modal-body">

                                                                <p>
                                                                    <QuillEditor theme="snow" content-type="html" />
                                                                </p>
                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit"
                                                                    class="btn btn-primary">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                        </div>

                                    </section>
                                </div>
                                <div class="tab-pane fade" id="custom-tabs-one-evaluation" role="tabpanel"
                                    aria-labelledby="custom-tabs-one-evaluation-tab">
                                    <section class="content">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="card card-primary">
                                                    <div class="card-header">
                                                        <h3 class="card-title">Lesson Evaluation</h3>

                                                    </div>
                                                    <div class="card-body">
                                                        <button class="btn btn-primary btn-sm mb-3 float-right"
                                                            data-toggle="modal" data-target="#modal-evaluation">Duration
                                                        </button>

                                                        <button class="btn btn-success btn-sm mr-2" data-toggle="modal"
                                                            data-target="#modal-teacher"><i class="fa fa-plus"></i>
                                                            Teacher
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm mr-2"><i
                                                                class="fa fa-plus"></i> Learner
                                                            Activities</button>
                                                        <button class="btn btn-success btn-sm"><i
                                                                class="fa fa-plus"></i> Competences</button>
                                                        <hr />
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <!-- Box Comment -->
                                                                <div class="card card-widget">
                                                                    <div class="card-header">
                                                                        <div>
                                                                            <span class="username"><strong>Lesson
                                                                                    Title:</strong> <a
                                                                                    href="#"></a></span><br />
                                                                            <small><span class="description"><strong>Lesson
                                                                                        Part:</strong><br />
                                                                                </span></small>
                                                                            <small><span
                                                                                    class="description"><strong>Duration:</strong>
                                                                                </span></small>
                                                                        </div>
                                                                    </div>

                                                                    <div class="card-body">
                                                                        <div class="row">
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Teacher
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Learner
                                                                                                    Activities</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-sm-4">
                                                                                <!-- Box Comment -->
                                                                                <div class="card card-widget">
                                                                                    <div class="card-header">
                                                                                        <div>
                                                                                            <span
                                                                                                class="username"><strong>Competences</strong>
                                                                                                <a
                                                                                                    href="#"></a></span><br />

                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="card-body">
                                                                                        <strong><u>Objectives:</u></strong>

                                                                                        <hr />


                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- /.card-body -->
                                                </div>
                                                <!-- /.card -->
                                            </div>


                                            <div class="modal fade" id="modal-teacher">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title">Teacher Activities </h4>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <form>
                                                            <div class="modal-body">

                                                                <p>
                                                                    <QuillEditor theme="snow" content-type="html" />
                                                                </p>
                                                            </div>
                                                            <div class="modal-footer justify-content-between">
                                                                <button type="button" class="btn btn-default"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="submit"
                                                                    class="btn btn-primary">Save</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <!-- /.modal-dialog -->
                                            </div>
                                        </div>

                                    </section>
                                </div>
                            </div>
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
                                            <router-link :to="{ name: 'lesson.activities', params: { id: item.id } }">
                                                <i class="fa-solid fas fa-arrow-right"></i> Setup
                                            </router-link>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
    </section>
</template>
<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from "axios";
import { ref } from 'vue';
export default {

    components: {
        QuillEditor
    },
    data() {
        return {
            lesson: null,
            type: 'Introduction',
            body: 'Lesson body',
            evaluation: 'Evaluation',
            duration: null,
            lessonId: null,
            lessonParts: [],
        }
    },
    mounted() {

        this.getLesson()
        this.getLessonPart()

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
        async setTimeIntro() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.type,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.details' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },

        async setTimeBody() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.body,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.details' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
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
    }

}
</script>