import { createRouter, createWebHistory } from 'vue-router'

import TeacherDashboard from '../views/teacher/TeacherDashboard.vue'

import TeacherClasses from '../views/teacher/pages/classes/ClassesView.vue'
import ViewClass from '../views/teacher/pages/classes/ViewClass.vue'
import CreateSubject from '../views/teacher/pages/subjects/SubjectCreate.vue'
import SubjectDetails from '../views/teacher/pages/subjects/SubjectDetails.vue'
import SubjectList from '../views/teacher/pages/subjects/SubjectsList.vue'
import CreateClass from '@/views/teacher/pages/classes/CreateClass.vue'
import SubjectUnits from '@/views/teacher/pages/units/UnitView.vue'
import LessonCreateSteps from '@/views/teacher/pages/lesson/LessonCreateSteps.vue'
import LessonList from '@/views/teacher/pages/lesson/LessonList.vue'
import LessonPlanCreate from '@/views/teacher/pages/lesson/LessonPlanCreate.vue'

const routes = [

    {
        path: '/teacher',
        name: 'teacher',
        component: TeacherDashboard,
        meta: {
            requiresAuth: true,
            isTeacher: true
        },
        children: [
            {
                path: '/classes', name: 'classes', component: TeacherClasses
            },
            {
                path: '/class/view/:id', name: 'classes.view', component: ViewClass
            },
            {
                path: '/subject/create', name: 'subject.create', component: CreateSubject
            },
            {
                path: '/subject/details/:id', name: 'subject.details', component: SubjectDetails
            },
            {
                path: '/teacher/subjects', name: 'subject.list', component: SubjectList
            },
            {
                path: '/teacher/class/create', name: 'class.create', component: CreateClass
            },
            {
                path: '/teacher/subject/unit/:id', name: 'subject.units', component: SubjectUnits
            },

            {
                path: '/teacher/lesson/new', name: 'lesson.new', component: LessonCreateSteps
            },
            {
                path: '/teacher/lessons', name: 'lesson.list', component: LessonList
            },

            {
                path: '/teacher/lesson/plan/create', name: 'lesson.plan.create', component: LessonPlanCreate
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let token = localStorage.getItem('token') != null;
        if (!token) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            let roles = user.roles.map(role => role.name)
            console.log(roles[0]);
            if (to.matched.some(record => record.meta.isTeacher)) {
                if (roles.includes('Teacher')) next()
                else if (roles[0] === 'Admin') {
                    next({
                        name: 'admin'
                    })
                } else if (roles[0] === 'Dean of Academics') {
                    next({
                        name: 'dos'
                    })
                } else next({
                    name: 'home'
                })
            } else if (to.matched.some(record => record.meta.isAdmin)) {
                if (roles.includes('Admin')) next()
                else if (roles[0] === 'Dean of Academics') {
                    next({
                        name: 'dos'
                    })
                } else if (roles[0] === 'Teacher') {
                    next({
                        name: 'teacher'
                    })
                } else next({
                    name: 'home'
                })

            } else if (to.matched.some(record => record.meta.isDean)) {
                if (roles.includes('Dean of Academics')) next()
                else if (roles[0] === 'Teacher') {
                    next({
                        name: 'teacher'
                    })
                } else if (roles[0] === 'Admin') {
                    next({
                        name: 'admin'
                    })
                } else next({
                    name: 'home'
                })

            } else {
                next()
            }
        }
    } else {
        next()
    }
})
export default router
