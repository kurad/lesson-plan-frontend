<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Make Your Digital Lesson Plan</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Introduction / Revision</h3>

                    </div>
                    <div class="card-body">
                        <button class="btn btn-primary mb-3 float-right" data-toggle="modal" data-target="#modal-sm">Set
                            Time</button>
                        <table class="table table-bordered mb-4">
                            <thead>
                                <th>Lesson Name</th>
                                <th>Duration</th>
                                <th>Teacher Activities</th>
                                <th>Learner Activities</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lesson</td>
                                    <td>Lesson</td>
                                    <td>Lesson</td>
                                    <td>Lesson</td>
                                    <td>Lesson</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn-success btn-sm mr-2" data-toggle="modal" data-target="#modal-teacher"><i
                                class="fa fa-plus"></i> Teacher
                            Activities</button>
                        <button class="btn btn-success btn-sm mr-2"><i class="fa fa-plus"></i> Learner
                            Activities</button>
                        <button class="btn btn-success btn-sm"><i class="fa fa-plus"></i> Competences</button>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <div class="modal fade" id="modal-sm">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Introduction Duration </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="addTime">
                            <div class="modal-body">

                                <p>{{ lesson.id }}
                                    <input type="number" :value="lesson.id">
                                    <select class="form-control" v-model="type">
                                        <option>Introduction</option>
                                        <option>Lesson Body</option>
                                        <option>Evaluation</option>
                                    </select>
                                    <input type="number" class="form-control" v-model="duration" />
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
                            <h4 class="modal-title">Teacher Activities </h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>

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
            lesson: [],
            type: null,
            duration: null,
            lessonId: null,
        }
    },
    mounted() {

        this.getLesson()

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
        async addTime() {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', {
                type: this.type,
                duration: this.duration,
                lessonId: this.lesson.id,
            }).then(response => (
                this.$router.push({ name: 'units' })
            ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        },
    }

}
</script>