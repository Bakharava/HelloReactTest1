import { useSelector } from 'react-redux';

const User = () => {
  console.log(useSelector((state: any) => state));
  const users = useSelector((state: any) => state.users).users;

  return (
    <div>
      {users.length > 0 ? (
        users.map((item: any) => {
          return (
            <div key={item.name} style={{ color: 'red' }}>
              {item.name}
            </div>
          );
        })
      ) : (
        <div>No users</div>
      )}
    </div>
  );
};

export default User;
