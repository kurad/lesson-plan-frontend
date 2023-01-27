import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import DeanDashboard from '../views/dean/DeanDashboard.vue'
import TeacherDashboard from '../views/teacher/TeacherDashboard.vue'
import DepartmentList from '../views/admin/pages/DepartmentList.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import CreateDepartment from '../views/admin/pages/department/createDepartment.vue'
import EditDepartment from '../views/admin/pages/department/editDepartment.vue'
import TeacherClasses from '../views/teacher/pages/classes/ClassesView.vue'
import ViewClass from '../views/teacher/pages/classes/ViewClass.vue'
import CreateSubject from '../views/teacher/pages/subjects/SubjectCreate.vue'
import SubjectDetails from '../views/teacher/pages/subjects/SubjectDetails.vue'
import SubjectList from '../views/teacher/pages/subjects/SubjectsList.vue'
import CreateClass from '@/views/teacher/pages/classes/CreateClass.vue'
import SubjectUnits from '@/views/teacher/pages/units/UnitView.vue'
import LessonCreateSteps from '@/views/teacher/pages/lesson/LessonCreateSteps.vue'
import LessonList from '@/views/teacher/pages/lesson/LessonList.vue'
import LessonDetails from '@/views/teacher/pages/lesson/LessonDetails.vue'
import LessonPlanCreate from '@/views/teacher/pages/lesson/LessonPlanCreate.vue'
import UnitList from '@/views/teacher/pages/units/UnitList'
import UnitCreate from '@/views/teacher/pages/units/UnitCreate'
import LessonView from '@/views/teacher/pages/lesson/LessonPlanCreate'
import LessonPartSetup from '@/views/teacher/pages/lesson/lessonIntroduction/SetLessonParts'
import LessonIntroduction from '@/views/teacher/pages/lesson/lessonIntroduction/LessonIntroduction'
import LessonActivities from '@/views/teacher/pages/lesson/lessonIntroduction/SetLessonActivities'
import LessonParts from '@/views/teacher/pages/lesson/LessonParts'
import Units from '@/views/admin/pages/units/ViewUnits.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
      isAdmin: true
    },
    children: [
      { path: '/dashboard', name: 'dashboard', component: Dashboard },
      {
        path: '/department', name: 'department', component: DepartmentList
      },

      {
        path: '/department/create', name: 'department.create', component: CreateDepartment
      },
      {
        path: '/department/edit/:id', name: 'edit', component: EditDepartment
      },
      {
        path: '/admin/units', name: 'admin.units', component: Units
      }
    ]
  },
  {
    path: '/dos',
    name: 'dos',
    component: DeanDashboard,
    meta: {
      requiresAuth: true,
      isDean: true
    }
  },
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
        path: '/teacher/units', name: 'units', component: UnitList
      },
      {
        path: '/teacher/unit/create', name: 'unit.create', component: UnitCreate
      },
      {
        path: '/teacher/lesson/new', name: 'lesson.new', component: LessonCreateSteps
      },
      {
        path: '/teacher/lessons', name: 'lesson.list', component: LessonList
      },
      {
        path: '/teacher/lesson/:id/details', name: 'lesson.details', component: LessonDetails
      },

      {
        path: '/teacher/lesson/plan/create/:id', name: 'lesson.plan.create', component: LessonPlanCreate
      },

      {
        path: '/teacher/lesson/parts/:id', name: 'lesson.part', component: LessonPartSetup
      },
      {
        path: '/teacher/lesson/parts/activities/:id', name: 'lesson.parts.activities', component: LessonIntroduction
      },
      {
        path: '/teacher/lesson/activities/:id', name: 'lesson.activities', component: LessonActivities
      },
      {
        path: '/teacher/lesson/parts/:id', name: 'lesson.parts', component: LessonParts
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
