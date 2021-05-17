import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CreateVacancy from '../pages/CreateVacancy';
import QuestionsList from '../pages/QuestionsList';
import Question from '../pages/Question';
import VacanciesList from '../pages/VacanciesList';
import Vacancy from '../pages/Vacancy';
import NotFound from '../pages/NotFound';
import Shop from '../pages/Shop';
import ShopProduct from '../pages/ShopProduct';

export const authOnlyRoutes = [
  {
    path: '/vacancy-create',
    component: CreateVacancy,
    navbarDisplay: false
  }
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
  }
  /*{
    path: '/notfound',
    component: NotFound,
    navbarDisplay: false
  }*/
];