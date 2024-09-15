import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes=[
    {
        path:"/",
        Children:<Home />
    },
    {
        path:"/user_management",
        Children:<UserManagement />
    },
    {
        path:"/setting",
        Children:<Setting />
    },
]