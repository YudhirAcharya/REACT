import { useAppContext } from "./navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello {user?.name?.toUpperCase()}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

export default UserContainer;
