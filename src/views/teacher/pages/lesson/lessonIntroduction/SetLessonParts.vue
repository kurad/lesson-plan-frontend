<template>
    <section class="content ">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-12">
                    <div class="invoice p-3 mb-1">
                        <div class="row">
                            <div class="col-12">
                                <h5>
                                    Lesson Title: {{ lesson.title }}
                                    <small class="float-right">Date: {{ lesson.date }}</small>
                                </h5>
                                <hr />
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- info row -->
                        <div class="row invoice-info">
                            <div class="col-sm-6 invoice-col">
                                <address>
                                    Duration: <strong>{{ lesson.duration }}</strong><br>
                                    Class: {{ lesson.name }}<strong></strong><br />

                                </address>

                            </div>
                            <div class="col-sm-6 invoice-col">

                                <address>
                                    <strong>Learning Objectives:</strong> <span v-html="lesson.objectives"></span>
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
                    <div class="col-12">
                        <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                            data-target="#modal-evaluation" v-if="lessonParts.length === 3"><i
                                class="fa fa-plus-circle"></i> Duration:
                            Evaluation
                        </button>
                        <button class="btn btn-primary btn-sm mb-3 mr-1 float-right" data-toggle="modal"
                            data-target="#modal-evaluation" v-if="lessonParts.length === 2"><i
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
                                        <button type="button" class="btn btn-default"
                                            data-dismiss="modal">Close</button>
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
                                <form @submit.prevent="">
                                    <div class="modal-body">
                                        <input type="number" class="form-control" v-model="duration"
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
                                        <button type="button" class="btn btn-default"
                                            data-dismiss="modal">Close</button>
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
                                <form @submit.prevent="">
                                    <div class="modal-body">

                                        <input type="number" class="form-control" v-model="duration"
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
                        </div>
                    </div>


                </div>
            </section>
        </div>
    </section>

    <router-link :to="{ name: 'lesson.list' }" class="btn btn-success btn-sm mb-3"> Back to Lessons</router-link>

</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from 'axios';
export default {
    components: {
        QuillEditor,
    },
    data() {
        return {
            lessons: {},
            lessonParts: {},
            // lesson: 0,

            lesson: {},
            type: 'Introduction',
            body: 'Lesson body',
            conclusion: 'Conclusion',
            evaluation: 'Evaluation',
            duration: null,
            lessonId: null,
            form: {
                type: null,
                duration: null,
                lessonId: null
            }
        }
    },
    mounted() {
        this.getLessonParts()
        this.getLesson()
    },
    methods: {
        async getLessonParts() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/lesson/${this.$route.params.id}`).then(response => {

                this.lessonParts = response.data
            }).catch(error => {
                console.log(error)
                this.lessonParts = []
            })
        },

        async getLesson() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/user/${this.$route.params.id}`).then(response => {
                this.lesson = response.data
            }).catch(error => {
                console.log(error)
                this.lesson = []
            })
        },

        async setLessonPart() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.form.type,
                duration: this.form.duration,
                lessonId: this.lessons.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.parts' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
        async setTimeIntro() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.type,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.part' })
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
                this.$router.push({ name: 'lesson.part' })
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
    },
}
</script>
