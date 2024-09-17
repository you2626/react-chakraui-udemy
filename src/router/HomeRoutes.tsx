import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes=[
    {
        path:"/",
        exact:true,
        Children:<Home />
    },
    {
        path:"/user_management",
        exact:false,
        Children:<UserManagement />
    },
    {
        path:"/setting",
        exact:false,
        Children:<Setting />
    },
    {
        path:"*",
        exact:false,
        Children:<Page404 />
    },
]