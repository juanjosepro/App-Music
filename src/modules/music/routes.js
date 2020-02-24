import MusicPage from "./pages/MusicPage";
import CreateMusic from "./components/CreateMusic";
import ListMusic from "./components/ListMusic";
import AllMusic from "./components/AllMusic";

export const MusicRoutes = [
  {
    path: '/music',
    name: 'music',
    component: MusicPage,
    redirect: { name: 'allmusic' },
    children : [
      {
        path: 'by-category/:id',
        name: 'by-category',
        component: ListMusic
      },
      {
        path: 'all',
        name: 'allmusic',
        component: AllMusic
      }
    ]
  },
  {
    path: 'create',
    name: 'createmusic',
    component: CreateMusic,
    meta: {
      requiresAuth: true
    },
  },
]