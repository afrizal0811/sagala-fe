import {
  BarChartOutlined,
  HomeFilled,
  LockFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'

export const items = [
  {
    icon: <HomeFilled />,
    link: '/',
    name: 'Main Dashboard',
  },
  {
    icon: <ShoppingCartOutlined />,
    link: '/nft',
    name: 'NFT Marketplace',
  },
  {
    icon: <BarChartOutlined />,
    link: '/tables',
    name: 'Data Tables',
  },
  {
    icon: <UserOutlined />,
    link: '/profile',
    name: 'Profile',
  },
  {
    icon: <LockFilled />,
    link: '/sign-in',
    name: 'Sign In',
  },
  {
    icon: <HomeFilled />,
    link: '/admin',
    name: 'RTL Admin',
  },
]
