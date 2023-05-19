<template>
    <div class="row">
        <div class="col-md-4" v-for="item in lessons" :key="item.id">
            <div class="card card-widget">

                <div class="card-header">

                    <p>
                        <span class="username"><strong>Lesson Title:</strong><br />
                            {{ item.title }}
                        </span>
                    </p>
                    <p>
                        <small>
                            <span class="description"><strong>Unit:</strong>
                                {{ item.unitName }}
                            </span></small>
                    </p>
                </div>
                <div class="card-body">
                    <strong><u>Learning Objectives:</u></strong>
                    <p><span v-html="item.instructional_objective"></span></p>
                    <hr />
                    <router-link :to="{ name: 'admin.lesson.details', params: { id: item.id } }"
                        class="btn btn-primary mr-2 btn-xs">
                        View Lesson Plan
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "ListLessons",
    data() {
        return {
            lessons: [],

        }
    },
    mounted() {
        this.getLessons()
    },
    methods: {
        async getLessons() {
            await axios.get(`http://localhost:8000/api/v1/lesson-management`).then(response => {
                this.lessons = response.data
            }).catch(error => {
                console.log(error)
                this.lessons = []
            })
        },
        deleteClass(id) {
            if (confirm("Are you sure to delete this class ?")) {
                axios.delete(`http://localhost:8000/api/v1/class-setup/${id}`).then(response => {
                    this.getClasses()
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>