<template>
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            <img src="../assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
            <a href="#" class="d-block">{{ loginType }}</a>
        </div>
    </div>
    <nav class="mt-2" v-if="loginType === 'Admin'">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item menu-open">

                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link :to="{ name: 'dashboard' }" class="nav-link">
                            <i class="fas fa-tachometer-alt nav-icon"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'department' }" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Departments</p>
                        </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        Simple Link

                    </p>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="mt-2" v-if="loginType === 'Dean of Academics'">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item menu-open">

                <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Dashboard' }" class="nav-link active">
                            <i class="fas fa-tachometer-alt nav-icon"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>

                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        Simple Link

                    </p>
                </a>
            </li>
        </ul>
    </nav>
    <nav class="mt-2" v-if="loginType === 'Teacher'">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li class="nav-item menu-open">

                <!-- <ul class="nav nav-treeview">
                    <li class="nav-item">
                        <router-link :to="{name: 'Dashboard'}" class="nav-link">
                            <i class="fas fa-tachometer-alt nav-icon"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>

                </ul> -->
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'classes' }" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p> My Classes </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'subject.list' }" class="nav-link">
                    <i class="nav-icon fas fa-book"></i>
                    <p> My Subjects </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'lesson.list' }" class="nav-link">
                    <i class="nav-icon fas fa-book"></i>
                    <p> My Lessons </p>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'lesson.plan.create' }" class="nav-link">
                    <i class="nav-icon fas fa-book"></i>
                    <p> My new Lessons </p>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: '',
            loginType: ''
        }
    },
    created() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        axios.get(`http://localhost:8000/api/user`)
            .then(response => {
                this.user = response.data
                this.loginType = response.data.roles[0].name
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