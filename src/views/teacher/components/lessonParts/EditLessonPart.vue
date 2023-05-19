<template>
    <div class="invoice p-3 mb-1">
        <div class="row">
            <div class="col-12">
                <h5>
                    Lesson Parts
                    <a href="" class="btn btn-primary btn-xs mb-2 float-right" data-toggle="modal"
                        data-target="#modal-lessonPart"><i class="fa fa-plus-circle"></i></a>
                </h5>
            </div>
        </div>
        <section class="content">
            <div class="container-fluid">
                <section class="content">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <form>
                                            <div class="modal-body">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Lesson Part</label>
                                                        <select class="form-control">

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label>How Long?</label>
                                                    <input type="text" class="form-control">
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary ml-4 ">Update</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
// import { Modal } from 'bootstrap'
//const showModal = ref(false);
//const hideModal = ref(true);
export default {
    data() {
        return {
            lessonParts: [],
            lessonPart: [],
            showModal: ref(false),
            hideModal: ref(true),
            form: {
                lesson_id: null,
                type: null,
                duration: null
            },
            formValues: null,
        }

    },
    mounted() {
        this.getLessonPart()
        // this.modal = new Modal(document.getElementById('modal-lessonPart'))
    },
    methods: {
        async getLessonPart() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/${this.$route.params.id}`).then(response => {
                this.lessonPart = response.data
            }).catch(error => {
                console.log(error)
                this.lessonParts = []
            })
        },

        // editPart(item) {
        //     this.openModal()
        //     this.formValues.value = {
        //         id: item.id,
        //         type: item.type,
        //         duration: item.duration
        //     };

        // },
        async updateLessonPart() {
            await axios.patch(`http://localhost:8000/api/vi/lesson-part-management/${this.$route.params.id}`, {
                type: this.form.type,
                duration: this.form.duration,
                lesson_id: this.lessonPart.id

            })
            // this.closeModal()
            // location.reload()
        }
    }

}
</script>

