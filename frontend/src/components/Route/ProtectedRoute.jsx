/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate , Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin,element: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate  to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navigate  to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
