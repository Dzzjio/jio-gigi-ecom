import { Link } from "react-router-dom"
import { Role } from "../../types/user.interface"
import { isAdmin } from "../../utils"

const SideBar = ({role}: {role?:Role}) => {


    return (
        <div>
            <ul>
                {isAdmin(role) && <li>
                    <Link to='admin'>AdminPanel</Link>    
                </li>}
            </ul>
        </div>
    )
}

export default SideBar