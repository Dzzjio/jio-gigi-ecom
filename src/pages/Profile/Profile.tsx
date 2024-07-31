import { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router";
import UserProfile from "./UserProfile";
import authStore from "../../stores/Auth.store";
import SectionWrapper from "../../components/SectionWrapper";
import userServices from "../../services/UserServices";
import { Heading, InfoItem, ProfileContainer } from "./styled";
import Button from "../../components/UI/Button";

const Profile = () => {
  const { fullUser, setFullUser, clearTokens } = authStore();

  const navigate = useNavigate();
  useEffect(() => {
    userServices
      .getCurrent()
      .then(({ data }) => {
        setFullUser(data);
      })
      .catch(() => {
        if (!fullUser) {
          navigate("/auth");
        }
      });
  }, []);

  const handleLogout = () => {
    clearTokens();
    alert("User logged out.");
  };

  return (
    <div>
      <SideBar role={fullUser?.role} /> 
      <SectionWrapper>
        <Outlet />
      </SectionWrapper>
      <UserProfile />
      <ProfileContainer>
      <Heading>პარამეტრები</Heading>
      <InfoItem>
        <span>მეილი</span>
        <span>{fullUser?.email}</span>
      </InfoItem>
      <InfoItem>
        <span>სახელი, გვარი</span>
        <span>{fullUser?.first_name}, {fullUser?.last_name}</span>
      </InfoItem>
      <InfoItem>
        <span>მობილურის ნომერი</span>
        <span>{fullUser?.phone_number}</span>
      </InfoItem>
      <Button onClick={handleLogout} className="log-out-btn">
        <span className="log-out-icon"><svg xmlns="http://www.w3.org/2000/svg" width='20px' height='20px' viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg></span>
        <span>გამოსვლა</span>
      </Button>
    </ProfileContainer>
    </div>
  );
};

export default Profile;