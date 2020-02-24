import UserPage from './pages/UserPage'
import CreateUser from './components/CreateUser'
import ListUsers from './components/ListUsers'
import EditUser from './components/EditUser'

export const UserRoutes = [
  {
    path: '/users',
    name: 'users',
    component: UserPage,
    redirect: { name: 'list' },
    meta: {
      requiresAuth: true
    },
    children : [
      {
        path: 'create',
        name: 'create',
        component: CreateUser
      },
      {
        path: 'list',
        name: 'list',
        component: ListUsers
      },
      {
        path: ':id',
        name: 'editUser',
        component: EditUser
      }
    ]
  }
]