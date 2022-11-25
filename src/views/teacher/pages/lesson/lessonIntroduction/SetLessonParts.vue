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
            <h4 class="mt-4 mb-4">Lesson Parts</h4>
            <div class="row">
                <div class="col-md-4" v-for="item in lessonParts" :key="item.id" v-if="item">
                    <div class="card card-widget widget-user">
                        <div class="widget-user-header bg-info">
                            <h3> {{ item.type }}</h3>
                        </div>
                        <div class="card-footer">
                            Duration: {{ item.duration }}
                        </div>
                    </div>

                </div>
                <div class="col-md-4" v-else>
                    <button type="submit" class="btn btn-success"><i class="fa fa-plus"></i> Set Lesson Parts</button>
                </div>
            </div>

        </div>
    </section>


</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            lessons: {},
            lessonParts: {},
            lesson: 0
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
                this.lessons = []
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
    },
}
</script>
