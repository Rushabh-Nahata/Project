import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import { Link,useNavigate} from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigateTo= useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigateTo("/login");
    }
  }, [isAuthenticated, navigateTo]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
