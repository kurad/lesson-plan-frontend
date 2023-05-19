<template>
    <div class="row">

        <!-- /.col -->

        <!-- /.col -->
        <div class="col-md-4">
            <!-- Widget: user widget style 1 -->
            <div class="card card-widget widget-user">
                <!-- Add the bg color to the header using any of the bg-* classes -->
                <div class="widget-user-header ">
                    <h3 class="widget-user-username text-left">{{ user.f_name }} {{ user.l_name }}</h3>
                    <h5 class="widget-user-desc mt-2 text-left">{{ user.email }}</h5>
                </div>
                <div class="widget-user-image">
                    <!-- <img class="img-circle" src="../dist/img/user3-128x128.jpg" alt="User Avatar"> -->
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-sm-6 border-right">
                            <div class="description-block">
                                <h5 class="description-header">Department</h5>
                                <span>{{ user.DepName }}</span>

                                <p class="text-right"><a href="#"><i class="fa fa-edit"></i></a></p>
                            </div>
                            <!-- /.description-block -->
                        </div>
                        <!-- /.col -->
                        <div class="col-sm-6 ">
                            <div class="description-block">
                                <h5 class="description-header">Role</h5>
                                <span>{{ user.Role }}</span>
                                <p class="text-right"><a href="#" data-toggle="modal" data-target="#modal-edit-role"><i
                                            class="fa fa-edit"></i></a></p>

                            </div>
                            <!-- /.description-block -->
                        </div>

                    </div>
                    <!-- /.row -->
                </div>
            </div>
            <!-- /.widget-user -->
        </div>
        <!-- /.col -->
    </div>
    <a href="/admin/users" class="btn btn-primary">Go Back </a>

    <div class="modal fade" id="modal-edit-role" tabindex="-1" aria-labelledby="modaledituserroleLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Edit User Role</h4>
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
                                                <form @submit.prevent="editRole">
                                                    <div class="modal-body">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label>Role</label>
                                                                <select class="form-control" v-model="role_id">
                                                                    <option value="0">-- New Role --</option>
                                                                    <option v-for="item in roles" :key="item.id">{{
                                                                        item.name
                                                                    }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="text" v-model="user_role_id" />
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
import axios from 'axios';
import { Modal } from 'bootstrap'

export default {
    name: "User-Detail",
    data() {
        return {
            user: '',
            roles: [],
            role_id: null,
            user_role_id: ''
        }
    },
    mounted() {
        this.getUsers()
        this.getRoles()
        this.getUserRole()
        this.modal = new Modal(document.getElementById('modal-edit-role'))
    },
    methods: {
        async getUsers() {
            await axios.get(`http://localhost:8000/api/user/${this.$route.params.id}`)
                .then(response => {
                    this.user = response.data
                }).catch(error => {
                    console.log(error)
                    this.user = ''
                })
        },
        async getRoles() {
            await axios.get('http://localhost:8000/api/user/roles').then(response => {
                this.roles = response.data
            }).catch(error => {
                console.log(error)
                this.roles = []
            })
        },
        async getUserRole() {
            await axios.get(`http://localhost:8000/api/v1/user-role/${this.$route.params.id}`)
                .then(response => {
                    this.user_role_id = response.data
                }).catch(error => {
                    console.log(error)
                    this.user_role_id = ''
                })
        },
        async editRole() {
            await axios.put(`http://localhost:8000/api/v1/user-role/role/edit/${this.$route.params.id}`, {
                role_id: this.role_id
            })
            this.closeModal()
            location.reload()
        },
        openModal() {
            this.modal.show()
        },
        closeModal() {
            this.modal.hide()
        },
    }

}
</script>