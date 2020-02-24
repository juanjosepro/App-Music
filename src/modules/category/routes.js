import CategoryPage from './pages/CategoryPage';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';

export const CategoryRoutes = [
  {
    path: '/categories',
    component: CategoryPage,
    children : [
      {
        path: 'create',
        name: 'CreateCategory',
        component: CreateCategory
      },
      {
        path: ':id',
        name: 'EditCategory',
        component: EditCategory
      }
    ]
  }
]