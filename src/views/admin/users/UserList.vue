<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#modal-user">New User</a>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Users</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in users" :key="item.id">
                                    <td>{{ item.f_name }}</td>
                                    <td>{{ item.l_name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.Role }}</td>
                                    <td>{{ item.DepName }}</td>
                                    <td>
                                        <router-link :to='{ name: "users.details", params: { id: item.id } }'
                                            class="btn btn-success btn-xs">
                                            <i class="fas fa-eye"></i>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modal-user" tabindex="-1" aria-labelledby="modaluserLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Add new User </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!--=======================================-->
                <section class="content">
                    <div class="container-fluid">
                        <section class="content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <form @submit.prevent="createUser">
                                                    <div class="modal-body">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Department</label>
                                                                <select class="form-control" v-model="departmentId">
                                                                    <option value="0">-- Select Department --</option>
                                                                    <option v-for="item in departments"
                                                                        :value="item.id">{{
                                                                            item.name
                                                                        }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Firstname</label>
                                                                <input type="text" class="form-control"
                                                                    v-model="userForm.f_name" />

                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Lastname</label>
                                                                <input type="text" class="form-control"
                                                                    v-model="userForm.l_name" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">

                                                            <div class="form-group">
                                                                <label>Email</label>
                                                                <input type="text" class="form-control"
                                                                    v-model="userForm.email" />

                                                            </div>
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
</template>


<script>
import axios from 'axios'
import { Modal } from 'bootstrap'
export default {
    name: "users",
    data() {
        return {
            users: [],
            departments: [],
            departmentId: null,
            userForm: {
                f_name: null,
                l_name: null,
                department_id: null,
                email: null,
                password: 'Pass@123!',
            }
        }
    },
    mounted() {
        this.getUsers()
        this.getDepartments()
        this.modal = new Modal(document.getElementById('modal-user'))
    },
    methods: {
        async getUsers() {
            await axios.get('http://localhost:8000/api/v1/user-management/users').then(response => {
                this.users = response.data
            }).catch(error => {
                console.log(error)
                this.users = []
            })
        },
        deleteUser(id) {
            if (confirm("Are you sure to delete this department ?")) {
                axios.delete(`/api/v1/user-management/${id}`).then(response => {
                    this.getUsers()
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        async getDepartments() {
            await axios.get('http://localhost:8000/api/v1/departments').then(response => {
                this.departments = response.data
            }).catch(error => {
                console.log(error)
                this.departments = []
            })
        },
        async createUser() {
            await axios.post('http://localhost:8000/api/admin/register', {
                f_name: this.userForm.f_name,
                l_name: this.userForm.l_name,
                department_id: this.departmentId,
                email: this.userForm.email,
                password: this.userForm.password
            })

            this.closeModal()
            location.reload()
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