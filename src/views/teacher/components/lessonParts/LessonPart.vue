<template>
    <div class="invoice p-3 mb-1">
        <div class="row">
            <div class="col-12">
                <h5>
                    Lesson Parts
                    <a href="" class="btn btn-primary btn-xs mb-2 float-right" @click.prevent="addLessonPart"><i
                            class="fa fa-plus-circle"></i></a>
                </h5>
            </div>
        </div>
        <div class="row invoice-info">
            <div class="col-sm-12 invoice-col">
                <table class="table table-sm">
                    <thead>
                        <!-- <th>#</th> -->
                        <th>Part</th>
                        <th>Time</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in lessonParts" :key="item.id">
                            <!-- <td>{{ item.id }}</td> -->
                            <td>{{ item.type }}</td>
                            <td>{{ item.duration }}'</td>
                            <td>
                                <button @click.prevent="editPart(item)" class="btn btn-success btn-xs"><i
                                        class="fas fa-edit"></i></button>
                                <!-- <router-link :to="{ name: 'edit.lesson.part', params: { id: item.id } }" class="btn-xs"><i
                                        class="fas fa-edit"></i></router-link> | -->
                                <button @click="partToDelete(item)" class="btn btn-danger btn-xs ml-2"><i
                                        class="fa fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="addLessonPart">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add Lesson Part </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <section class="content">
                        <div class="container-fluid">
                            <section class="content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <form @submit.prevent="createLessonPart(form)">
                                                        <div class="modal-body">
                                                            <div class="col-md-4">
                                                                <input type="hidden" v-model="form.lessonId">
                                                                <div class="form-group">
                                                                    <label>Lesson Part</label>
                                                                    <select class="form-control" v-model="form.type">
                                                                        <option selected>--Select here--</option>
                                                                        <option value="Introduction">Introduction</option>
                                                                        <option value="Lesson Body">Lesson Body</option>
                                                                        <option value="Conclusion">Conclusion</option>
                                                                        <option value="Evaluation">Evaluation</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group">
                                                                <label>How Long?</label>
                                                                <input type="number" class="form-control"
                                                                    v-model="form.duration">
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-primary ml-4 ">Save</button>
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
            </div>
        </div>
        <div class="modal fade" id="EditLessonPart">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Edit Lesson Part </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <section class="content">
                        <div class="container-fluid">
                            <section class="content">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <form @submit.prevent="updateLessonPart(form)">
                                                        <div class="modal-body">

                                                            <div class="form-group">
                                                                <label>How Long?</label>
                                                                <input type="number" class="form-control"
                                                                    v-model="form.duration">
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
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery'
import Swal from 'sweetalert2'
// import { ref } from 'vue'
export default {
    data() {
        return {
            lessonParts: [],
            lessonPart: [],
            lessonId: [],
            partIdBeingDeleted: null,

            form: {
                lessonId: null,
                type: null,
                duration: null
            },

        }

    },
    mounted() {
        this.getLessonPart()
        //this.getLessonPartId()
    },
    methods: {
        async getLessonPart() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/lesson/${this.$route.params.id}`).then(response => {
                this.lessonParts = response.data
            }).catch(error => {
                console.log(error)
                this.lessonParts = []
            })
        },
        async getLessonPartId() {
            await axios.get(`http://localhost:8000/api/v1/lesson-part-management/single/${this.$route.params.id}`).then(response => {
                //this.lessonId = response.data
                this.form.lessonId = response.data.lessonId
            }).catch(error => {
                console.log(error)
                this.lessonId = []
            })
        },
        reset() {
            this.form = {
                id: null,
                lesson_id: null,
                type: null,
                duration: null
            }
        },
        addLessonPart() {
            this.getLessonPartId();
            // this.lesson_id = this.lessonId;
            $('#addLessonPart').modal('show');
        },
        async createLessonPart(form) {
            await axios.post('http://localhost:8000/api/v1/lesson-part-management', form)
                .then((response) => {
                    this.lessonParts.unshift(response.data);
                    $('#addLessonPart').modal('hide');

                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    this.reset();
                    $('#addLessonPart').modal('hide');

                });
        },
        editPart(part) {
            $('#EditLessonPart').modal('show');
            this.form = {
                id: part.id,
                type: part.type,
                duration: part.duration,
            };
        },
        async updateLessonPart(form) {
            await axios.put('http://localhost:8000/api/v1/lesson-part-management/' + this.form.id, form)
                .then((response) => {
                    const index = this.lessonParts.findIndex(form => form.id === response.data.id);
                    this.lessonParts[index] = response.data;
                    $('#EditLessonPart').modal('hide');
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    this.reset();
                });
        },

        partToDelete(part) {
            console.log(part);

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('http://localhost:8000/api/v1/lesson-part-management/' + part.id)
                        .then((response) => {
                            // this.lessonParts.data = this.lessonParts.data.filter(part => part.id !== part.id);
                            Swal.fire(
                                'Deleted',
                                'The record is deleted',
                                'success'
                            )
                            this.lessonParts.unshift(response.data);
                            this.getLessonPart()
                        });

                }
            })
        }
    }

}
</script>
