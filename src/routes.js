import Home from "./page/home/Home"
import UserList from "./page/Users/UserList"
import NewUsers from "./page/newUsers/NewUsers"
import Products from "./page/products/Products"
import Product from "./page/product/Product"

let routes =[
    {path:'/', element: <Home />},
    {path:'/users', element: <UserList />},
    {path:'/newUsers', element: <NewUsers />},
    {path:'/products', element: <Products />},
    {path: '/product/:productID', element: <Product />},
]
export default routes