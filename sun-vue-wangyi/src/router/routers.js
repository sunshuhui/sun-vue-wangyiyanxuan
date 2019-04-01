import Home from '../pages/Home/Home'
import CateList from '../pages/CateList/CateList'
import FindThings from '../pages/FindThings/FindThings'
import ShopCart from '../pages/ShopCart/ShopCart'
import Person from '../pages/Person/Person'

export default [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/catelist',
    name: 'catelist',
    component: CateList,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/findthings',
    name: 'findthings',
    component: FindThings,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/person',
    name: 'person',
    component: Person,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/',
    redirect:"/home"
  }
]
