<template>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="invoice p-3 mb-1">
                        <div class="row">
                            <div class="col-12">
                                <h5>
                                    <strong>Lesson Title: {{ lessonParts.title }}</strong>
                                    <strong class="float-right">Date: {{ lessonParts.date }}</strong>
                                </h5>
                                <hr />
                            </div>
                        </div>
                        <div class="row invoice-info">
                            <div class="col-sm-6 invoice-col">
                                <address>
                                    Duration: <strong>{{ lessonParts.duration }}</strong><br>
                                    Class: <strong>{{ lessonParts.name }}</strong><br />
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
            <h4 class="mt-4 mb-4"><strong>{{ lessonParts.type }}</strong></h4>
            <button type="submit" class="btn btn-success btn-sm mr-2" data-toggle="modal"
                data-target="#modal-teacher"><i class="fa fa-plus"></i> Teacher Activities</button>
            <button type="submit" class="btn btn-success btn-sm mr-2" data-toggle="modal" data-target="#modal-sm"><i
                    class="fa fa-plus"></i> Learners Activities</button>
            <button type="submit" class="btn btn-success btn-sm" data-toggle="modal" data-target="#modal-sm"><i
                    class="fa fa-plus"></i> Competences</button>

            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Teacher Activities: </h3>
                        </div>
                        <div class="card-body">

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Learners Activities</h3>
                        </div>
                        <div class="card-body">




                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Competences</h3>
                        </div>
                        <div class="card-body">




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="modal-sm">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Introduction Duration </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="setLessonPart">
                    <div class="modal-body">
                        <p>
                            <select class="form-control" v-model="form.type">
                                <option>Introduction</option>
                                <option>Lesson Body</option>
                                <option>Evaluation</option>
                            </select>
                        </p>
                        <p>
                            <input type="number" class="form-control" placeholder="How long is it?"
                                v-model="form.duration" />
                        </p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save </button>
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
                    <h4 class="modal-title">Teacher Activities: {{ lessonParts.type }} </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="saveTeacherActivity">
                    <div class="modal-body">
                        <label>What are the teacher activities?</label>
                        <p>
                            <QuillEditor theme="snow" v-model:content="form.content" content-type="html" />
                        </p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>

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
            form: {
                content: ref(''),
                lessonPartId: null
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
                //console.log(this.lessons)
            }).catch(error => {
                console.log(error)
                this.lessonParts = []
            })
        },

        async getLesson() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/user/${this.$route.params.id}`).then(response => {
                this.lessons = response.data
            }).catch(error => {
                console.log(error)
                this.lessons = []
            })
        },

        async getTeacherActivities() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management/lesson/user/${this.$route.params.id}`).then(response => {
                this.lessons = response.data
            }).catch(error => {
                console.log(error)
                this.lessons = []
            })
        },

        async saveTeacherActivity() {
            await axios.post('http://localhost:8000/api/v1/teacher-activities', {
                content: this.form.content,
                lessonPartId: this.lessonParts.id,
            }).then(response => (
                this.$router.push({ name: 'lesson.parts' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
    },
}
</script>
