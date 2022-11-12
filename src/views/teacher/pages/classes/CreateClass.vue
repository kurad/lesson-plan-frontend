<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Class Setup</h4>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <form @submit.prevent="addClass">
                                <div class="form-group">
                                    <label>Class Name</label>
                                    <input type="text" class="form-control" v-model="classe.name">
                                </div>
                                <div class="form-group">
                                    <label>Class Size</label>
                                    <input type="number" class="form-control" v-model="classe.size">
                                    <label>SEN</label>
                                    <input type="number" class="form-control" v-model="classe.learner_with_SEN">
                                </div>
                                <div class="form-group">
                                    <label>Class Location</label>
                                    <input type="text" class="form-control" v-model="classe.location">
                                </div>

                                <button type="submit" class="btn btn-primary">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    data() {
        return {
            classe: {
                name: null,
                size: null,
                learner_with_SEN: null,
                location: null

            }
        }
    },
    methods: {
        addClass() {
            axios
                .post('http://localhost:8000/api/v1/class-setup', {
                    name: this.classe.name,
                    size: this.classe.size,
                    SEN: this.classe.learner_with_SEN,
                    location: this.classe.location
                })
                .then(response => (
                    this.$router.push({ name: 'classes' })
                ))
                .catch(err => console.log(err))
                .finally(() => this.loading = false)
        }
    }
}
</script>