<template>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="loginForm">
                        <div class="input-group mb-3">
                            <input type="email" v-model="email" class="form-control" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" v-model="password" class="form-control" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <!-- /.col -->
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>

                    <!-- <div class="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" class="btn btn-block btn-primary">
                            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" class="btn btn-block btn-danger">
                            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
            message: ''
        }
    },
    created() {
        if (this.$route.params.message !== undefined) {
            this.message = this.$route.params.message + ' Please login!'
        }
    },
    methods: {
        loginForm() {
            axios.post('http://localhost:8000/api/v1/auth/login', {
                email: this.email,
                password: this.password
            })
                .then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data.user))
                    localStorage.setItem('token', response.data.token)

                    let loginType = response.data.user.roles[0].name
                    if (loginType === 'Admin') {
                        this.$router.push('dashboard')
                    } else if (loginType === 'Teacher') {
                        this.$router.push('teacher')
                    } else if (loginType === 'Dean of Academics') {
                        this.$router.push('dos')
                    } else {
                        this.$router.push('home')
                    }

                    this.$emit('loggedIn')

                })
                .catch(error => {
                    this.error = error.response.data.error;
                });
        }
    }
}
</script>
  