<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Lesson Plan</h1>
                </div>

            </div>
        </div>
    </section>

    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="invoice p-3 mb-3">
                        <div class="row">
                            <div class="col-12">
                                <h4>
                                    Lesson Title: ({{ lesson.id }}) {{ lesson.title }}
                                    <small class="float-right">Date: {{ lesson.date }}</small>
                                </h4>
                                <hr />
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- info row -->
                        <div class="row invoice-info">
                            <div class="col-sm-6 invoice-col">
                                <address>
                                    Unit No: <strong>{{ lesson.unit_id }} </strong>
                                    <br>
                                    Topic Area: <strong>{{ lesson.topic_area }}</strong><br>
                                    Duration: <strong>{{ lesson.duration }}</strong><br>
                                    Class: <strong>{{ lesson.name }}</strong>
                                </address>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6 invoice-col">
                                Learning Objectives:
                                <address>
                                    <span v-html="lesson.objectives"></span><br>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <template v-if="step === 1">
        <SetLessonPartsVue />
    </template>


</template>
<script>
import axios from 'axios';
import LessonIntroductionVue from './LessonIntroduction.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import LessonParts from './LessonParts.vue'
import SetLessonPartsVue from './lessonIntroduction/SetLessonParts.vue';
export default {
    name: "Lesson Plan ",
    components: {
        QuillEditor,
        LessonIntroductionVue,
        LessonParts,
        SetLessonPartsVue,

    },

    data() {
        return {
            lesson: [],
            step: 1
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

        addLessonPart() {

        }
    }
}
</script>

