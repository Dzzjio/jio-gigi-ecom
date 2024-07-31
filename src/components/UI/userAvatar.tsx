import { Link } from "react-router-dom";
import authStore from "../../stores/Auth.store";
import Avatar from "./avatar";

const UserAvatar = () => {
  const { user } = authStore();
  return (
    <div>
      <Link to={"/profile"}>
        <Avatar firstName={user?.first_name} lastName={user?.last_name} role={user?.role} />
      </Link>
    </div>
  );
};

export default UserAvatar;