import RolePage from './pages/RolePage';

export const RoleRoutes = [
  {
    path: '/role',
    component: RolePage,
    meta: {
      requiresAuth: true
    }
  }
]