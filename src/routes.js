import Home from "./page/home/Home"
import UserList from "./page/Users/UserList"
import NewUsers from "./page/newUsers/NewUsers"


let routes =[
    {path:'/', element: <Home />},
    {path:'/users', element: <UserList />},
    {path:'/newUsers', element: <NewUsers />},
    {path:'/products', element: <products />},
]
export default routes