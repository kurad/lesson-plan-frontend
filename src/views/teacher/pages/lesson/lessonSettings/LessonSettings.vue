<script>
import { ref } from 'vue';
import axios from 'axios';
import ActivitiesPane from '@/components/Lesson_Settings/ActivitiesPane.vue';
export default {
    components: {
        ActivitiesPane

    },
    data() {
        return {
            lessons: ref([]),
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
                this.lessons = response.data

            }).catch(error => {
                console.log(error)
                this.lessons = []
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
    }
}
</script>
<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Lesson Settings</h1>
                </div>
            </div>
        </div>
    </section>
    <hr />
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="card card-primary card-outline">
                        <div class="card-body box-profile">
                            <h3 class="profile-username">Lesson: {{ lessons.title }}</h3>
                            <p class="text-muted"><small>Date: {{
                                lessons.date
                            }}</small></p>
                            <p class="text-muted"><small>
                                    Duration: <strong>{{ lessons.duration }}'</strong><br>
                                </small></p>
                            <p class="text-muted"><small>
                                    Class: <small>{{ lessons.name }}</small>
                                </small></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card">
                        <div class="card-header p-2">
                            <ul class="nav nav-pills">
                                <li class="nav-item"><a class="nav-link active" href="#lessonParts" data-toggle="tab">Lesson
                                        Parts</a></li>
                                <li class="nav-item"><a class="nav-link" href="#activities" data-toggle="tab">Lesson
                                        Activities</a>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="#evaluation" data-toggle="tab">Lesson
                                        Evaluation</a>
                                </li>
                            </ul>
                        </div><!-- /.card-header -->
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="active tab-pane" id="lessonParts">
                                    <!-- Post -->
                                    <div class="post">
                                        <a href="#" class="btn btn-primary btn-sm mb-2"><i class="fa fa-plus"></i> Add</a>
                                        <template v-if="lessonParts.length === 0">
                                            <p class="text-center">No lesson Parts found</p>
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
                                </div>
                                <!-- Activities Pane -->
                                <ActivitiesPane />
                                <!-- End Activities Pane -->
                                <div class="tab-pane" id="evaluation">
                                    <form class="form-horizontal">
                                        <div class="form-group row">
                                            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input type="email" class="form-control" id="inputName" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="email" class="form-control" id="inputEmail"
                                                    placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputName2" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputName2" placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputExperience" class="col-sm-2 col-form-label">Experience</label>
                                            <div class="col-sm-10">
                                                <textarea class="form-control" id="inputExperience"
                                                    placeholder="Experience"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputSkills" class="col-sm-2 col-form-label">Skills</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="inputSkills"
                                                    placeholder="Skills">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-sm-2 col-sm-10">
                                                <div class="checkbox">
                                                    <label>
                                                        <input type="checkbox"> I agree to the <a href="#">terms and
                                                            conditions</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="offset-sm-2 col-sm-10">
                                                <button type="submit" class="btn btn-danger">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- /.tab-pane -->
                            </div>
                            <!-- /.tab-content -->
                        </div><!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
</template>