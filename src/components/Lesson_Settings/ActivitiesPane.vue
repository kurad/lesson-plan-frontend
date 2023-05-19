<script>
// import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from "axios";
import { ref } from 'vue';
import lessonActivities from '../../views/teacher/components/lessonActivities/LessonActivities.vue'
// import { Modal } from 'bootstrap'

export default {

    components: {
        lessonActivities,
        // QuillEditor,
    },
    data() {
        return {
            lesson: {},
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
        // this.getLesson()
        this.teacherActivities()
        this.getLessonActivities()
        // this.getLessonEvaluations()
        // this.modal = new Modal(document.getElementById('modal-teacher'))
    },
    methods: {

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
        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        }
    }
}
</script>
<template>
    <div class="tab-pane" id="activities">
        <!-- The timeline -->
        <div class="timeline timeline-inverse">
            <!-- timeline time label -->
            <div class="time-label">
                <span class="bg-danger">
                    {{ teacherActivity }}
                </span>
            </div>
            <!-- /.timeline-label -->
            <!-- timeline item -->
            <div>
                <i class="fas fa-envelope bg-primary"></i>

                <div class="timeline-item">
                    <lessonActivities />
                </div>
            </div>
            <!-- END timeline item -->
            <!-- timeline item -->
            <div>
                <i class="fas fa-user bg-info"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 5 mins ago</span>

                    <h3 class="timeline-header border-0"><a href="#">Sarah Young</a>
                        accepted your friend request
                    </h3>
                </div>
            </div>
            <!-- END timeline item -->
            <!-- timeline item -->
            <div>
                <i class="fas fa-comments bg-warning"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 27 mins ago</span>

                    <h3 class="timeline-header"><a href="#">Jay White</a> commented on your
                        post</h3>

                    <div class="timeline-body">
                        Take me to your leader!
                        Switzerland is small and neutral!
                        We are more like Germany, ambitious and misunderstood!
                    </div>
                    <div class="timeline-footer">
                        <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                    </div>
                </div>
            </div>
            <!-- END timeline item -->
            <!-- timeline time label -->
            <div class="time-label">
                <span class="bg-success">
                    3 Jan. 2014
                </span>
            </div>
            <!-- /.timeline-label -->
            <!-- timeline item -->
            <div>
                <i class="fas fa-camera bg-purple"></i>

                <div class="timeline-item">
                    <span class="time"><i class="far fa-clock"></i> 2 days ago</span>

                    <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos
                    </h3>


                </div>
            </div>
            <!-- END timeline item -->
            <div>
                <i class="far fa-clock bg-gray"></i>
            </div>
        </div>
    </div>
</template>