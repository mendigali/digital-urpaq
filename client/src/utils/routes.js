import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateVacancy from '../pages/CreateVacancy';
import QuestionsList from '../pages/QuestionsList';
import Question from '../pages/Question';
import VacanciesList from '../pages/VacanciesList';
import Vacancy from '../pages/Vacancy';
import Shop from '../pages/Shop';
import ShopProduct from '../pages/ShopProduct';
import CreateQuestion from '../pages/CreateQuestion';
import Profile from '../pages/Profile';
import PostsList from '../pages/PostsList';
import Post from '../pages/Post';
import CreateNews from '../pages/CreateNews';
import CreateProduct from '../pages/CreateProduct';
import EditQuestion from '../components/EditQuestion';
import Cart from '../cart/Cart';
import UpdateNews from '../pages/UpdateNews';
import UpdateVacancy from '../pages/UpdateVacancy';
import UpdateQuestion from '../pages/UpdateQuestion';
import CreatePersonal from '../pages/CreatePersonal';
import UpdatePersonal from '../pages/UpdatePersonal';
export const authOnlyRoutes = [
  {
    path: '/vacancy-create',
    component: CreateVacancy,
    navbarDisplay: false
  },
  {
    path: '/product-create',
    component: CreateProduct,
    navbarDisplay: false
  },
  {
    path: '/question-create',
    component: CreateQuestion,
    navbarDisplay: false
  },
  {
    path: '/news-create',
    component: CreateNews,
    navbarDisplay: false
  },
  {
    path: '/questions-edit/:id',
    component: EditQuestion,
    navbarDisplay: false
  },
  {
    path: '/profile',
    component: Profile,
    navbarDisplay: true,
    navbarName: 'Profile'
  },
  {
    path: '/news/update/:id',
    component: UpdateNews,
    navbarDisplay: false
  },
  {
    path: '/vacancy/update/:id',
    component: UpdateVacancy,
    navbarDisplay: false
  },
  {
    path: '/question/update/:id',
    component: UpdateQuestion,
    navbarDisplay: false
  },
  {
    path: '/profile/create',
    component: CreatePersonal,
    navbarDisplay: false
  },
  {
    path: '/profile/update/:id',
    component: UpdatePersonal,
    navbarDisplay: false
  },
];
export const publicOnlyRoutes = [
  {
    path: '/signin',
    component: SignIn,
    navbarDisplay: true,
    navbarName: 'Sign In'
  },
  {
    path: '/signup',
    component: SignUp,
    navbarDisplay: true,
    navbarName: 'Sign Up'
  }
];
export const publicAndAuthRoutes = [
  {
    path: '/news',
    component: PostsList,
    navbarDisplay: true,
    navbarName: 'News'
  },
  {
    path: '/news/:id',
    component: Post,
    navbarDisplay: false
  },
  {
    path: '/questions',
    component: QuestionsList,
    navbarDisplay: true,
    navbarName: 'Questions'
  },
  {
    path: '/questions/:id',
    component: Question,
    navbarDisplay: false
  },
  {
    path: '/vacancy',
    component: VacanciesList,
    navbarDisplay: true,
    navbarName: 'Vacancies'
  },
  {
    path: '/vacancy/:id',
    component: Vacancy,
    navbarDisplay: false
  },
  {
    path: '/shop',
    component: Shop,
    navbarDisplay: true,
    navbarName: 'Shop'
  },
  {
    path: '/shop/:id',
    component: ShopProduct,
    navbarDisplay: false
  },
  {
    path: '/cart',
    component: Cart,
    navbarDisplay: false,
    navbarName: 'Cart'
  }
  /*{
    path: '/notfound',
    component: NotFound,
    navbarDisplay: false
  }*/
];