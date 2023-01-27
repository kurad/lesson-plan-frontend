<template>
    <section class="content">
        <div class="container-fluid">
            <div class="card card-default">
                <div class="card-body">
                    <form @submit.prevent="addLesson">
                        <template v-if="steps === 1">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Select Subject</label>
                                        <select class="form-control select2" v-model="subject" @change="getUnits()">
                                            <option value="0">-- Select Subject --</option>
                                            <option v-for="item in subjects" :key="item.id" :value="item.id">{{
                                                    item.subjectName
                                            }} </option>

                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>Select Unit</label>
                                        <select class="form-control select2" v-model="formData.unit_id">
                                            <option value="">-- Select Unit --</option>
                                            <option v-for="item in units" :key="item.id" :value="item.id">{{ item.title
                                            }} </option>

                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label>Lesson Title</label>
                                            <input type="text" class="form-control" v-model="formData.title"
                                                placeholder="Lesson Title" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                </div>
                            </div>
                        </template>
                        <template v-if="steps === 2">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Topic Area</label>
                                        <input type="text" class="form-control" v-model="formData.topic_area"
                                            placeholder="Type Topic Area" />
                                    </div>
                                    <div class="form-group">
                                        <label>Duration</label>
                                        <input type="number" class="form-control" v-model="formData.duration"
                                            placeholder="How long is your lesson?" />
                                    </div>
                                    <div class="form-group">
                                        <label>Lesson Date</label>
                                        <input type="date" class="form-control" v-model="formData.date"
                                            placeholder="Lesson Date" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="steps === 3">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>What are your Instructional Objectives?</label>
                                        <QuillEditor v-model:content="formData.instructional_objective"
                                            content-type="html" theme="snow" />

                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="steps === 4">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Knowledge and Understanding</label>
                                        <QuillEditor v-model:content="formData.knowledge_and_understanding"
                                            content-type="html" theme="snow" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Skills</label>
                                        <QuillEditor v-model:content="formData.skills" content-type="html"
                                            theme="snow" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="steps === 5">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Attitude & Value</label>
                                        <QuillEditor content-type="html" theme="snow"
                                            v-model:content="formData.attitudes_and_values" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Teaching Aids</label>
                                        <QuillEditor theme="snow" v-model:content="formData.teaching_materials"
                                            content-type="html" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-if="steps === 6">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Learning Description</label>
                                        <QuillEditor theme="snow" v-model:content="formData.description_of_teaching"
                                            content-type="html" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>References</label>
                                        <QuillEditor theme="snow" content-type="html"
                                            v-model:content="formData.reference" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <button v-if="steps > 1" @click.prevent="previousStep" type="button"
                            class="btn btn-danger">Previous </button>
                        <button type="submit" v-if="steps === 6" class="btn btn-success float-right mr-2">Save </button>
                        <button type="button" v-if="steps != 6" @click.prevent="nextStep"
                            class="btn btn-primary float-right mr-2">Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import axios from "axios";
import { ref } from 'vue';
export default {
    name: "Create Lesson",
    components: {
        QuillEditor,
        VueEditor,
    },
    data() {
        return {
            //const formData = ref('');
            subject: 0,
            subjects: [],
            unit: 0,
            units: [],
            steps: 1,
            formData: {
                title: ref(''),
                unit_id: ref(''),
                topic_area: ref(''),
                duration: null,
                date: ref(''),
                instructional_objective: ref(''),
                knowledge_and_understanding: ref(''),
                skills: ref(''),
                attitudes_and_values: ref(''),
                teaching_materials: ref(''),
                description_of_teaching: ref(''),
                reference: ref(''),

            }
        }
    },
    created() {
        this.getSubjects()
    },

    methods: {
        nextStep() {
            this.steps++
        },
        previousStep() {
            this.steps--
        },
        getSubjects() {
            axios.get('http://localhost:8000/api/get-subjects').then(function (response) {
                //console.log(this.subjects = response.data)
                this.subjects = response.data;
            }.bind(this));
        },
        getUnits() {
            axios.get('http://localhost:8000/api/get-units', {
                params: {
                    subject_id: this.subject
                }
            }).then(function (response) {
                //console.log(this.units = response.data)
                this.units = response.data
            }.bind(this));
        },
        async addLesson() {
            await axios.post('http://localhost:8000/api/v1/lesson-management', {
                title: this.formData.title,
                unitId: this.formData.unit_id,
                topicArea: this.formData.topic_area,
                duration: this.formData.duration,
                lessonDate: this.formData.date,
                instructions: this.formData.instructional_objective,
                knowledge: this.formData.knowledge_and_understanding,
                skills: this.formData.skills,
                attitudes: this.formData.attitudes_and_values,
                materials: this.formData.teaching_materials,
                description: this.formData.description_of_teaching,
                reference: this.formData.reference,
            })
                .then(response => (
                    this.$router.push({ name: 'lesson.plan.create' }),
                    console.log(response)
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    },
}

</script>