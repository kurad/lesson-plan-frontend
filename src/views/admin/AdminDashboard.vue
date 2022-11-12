<template>

    <body class="hold-transition sidebar-mini">
        <div class="wrapper">

            <nav class="main-header navbar navbar-expand navbar-white navbar-light">

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i
                                class="fas fa-bars"></i></a>
                    </li>

                </ul>

                <ul class="navbar-nav ml-auto">

                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-user"></i>

                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">

                            <div class="dropdown-divider"></div>
                    <li class="nav-item"><span v-if="isLoggedIn" class="nav-link" @click="logout">Logout</span></li>

                    <div class="dropdown-divider"></div>

        </div>
        </li>

        </ul>
        </nav>


        <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <a href="index3.html" class="brand-link">
                <img src="../../assets/img/AdminLTELogo.png" alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light"> {{loginName}}</span>
            </a>

            <div class="sidebar">

                <Navbar />

            </div>

        </aside>

        <div class="content-wrapper">

            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Lesson Plan System</h1>
                        </div>

                    </div>
                </div>
            </div>


            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <router-view></router-view>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="main-footer">

            <strong>Copyright &copy; 2022-2023 <a href="#">Education</a>.</strong> All rights
            reserved.
        </footer>
        </div>
    </body>
</template>
<script>
import Navbar from '../../inc/Nav.vue'
import Dashboard from '@/views/admin/Dashboard.vue';
import axios from 'axios'
export default {
    components: {
        Navbar,
        Dashboard
    },
    data() {
        return {
            user: '',
            loginType: '',
            loginName: '',
            //isLoggedIn: localStorage.getItem('token') != null
        }
    },
    // mounted() {
    //     this.setDefaults()
    // },
    // methods: {
    //     setDefaults() {
    //         if (this.isLoggedIn) {
    //             let user = JSON.parse(localStorage.getItem('token.user'))
    //             this.loginName = user.f_name
    //             this.loginType = user.data.roles[0].name
    //         }
    //     }
    // },
    // change() {
    //     this.isLoggedIn = localStorage.getItem('token.jwt') != null
    //     this.setDefaults()
    // },
    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('token')
        this.change()
        this.$router.push('/login')
    },
    created() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        axios.get(`http://localhost:8000/api/user`)
            .then(response => {
                this.user = response.data
                this.loginType = response.data.roles[0].name
                this.loginName = response.data.f_name
            })
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.clear();
                    this.$router.push('/login')
                }
                console.error(error);
            })
    }

}
</script>