<template>
    <form>
        <section class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="invoice p-3 mb-3">
                            <div class="row">
                                <div class="col-12">
                                    <h4>
                                        Lesson Introduction / Revision

                                    </h4>
                                    <hr />
                                </div>
                                <!-- /.col -->
                            </div>
                            <!-- info row -->
                            <div class="row invoice-info">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Duration</label>
                                            <input type="number" class="form-control">
                                        </div>
                                    </div>
                                    <!-- <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Lesson ID</label>
                                            {{ lesson.id }}
                                            <input type="number" class="form-control" value="{{lesson.id}}">
                                        </div>
                                    </div> -->
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Teacher Activities</label>
                                            <QuillEditor content-type="html" theme="snow" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Students Activities</label>
                                            <QuillEditor theme="snow" content-type="html" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <button v-if="steps > 1" @click.prevent="previousStep" type="button" class="btn btn-danger">Previous </button>
        <button type="submit" v-if="steps === 6" class="btn btn-success float-right mr-2">Save </button>
        <button type="button" v-if="steps != 6" @click.prevent="nextStep" class="btn btn-primary float-right mr-2">Save
            & Continue
        </button>
    </form>
</template>
<script>
import axios from 'axios';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
    name: "Lesson Introduction ",
    components: {
        QuillEditor,
    },
    data() {
        return {
            lesson: [],
            type: 'Introduction',
            duration: null,

        }
    },
    mounted() {
        this.getLesson()
    },
    methods: {
        async getLesson() {
            await axios.get('http://localhost:8000/api/v1/lesson-management/latest').then(response => {
                this.lesson = response.data
            }).catch(error => {
                console.log(error)
                this.lesson = []
            })
        },
    }
}
</script>