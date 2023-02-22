import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [users, setUsers] = useState([]);

  const setUserHandler = (user) =>{
    setUsers((prevState) =>{
      return [user,...prevState];
    }); 
  };

  return (
    <div>
      <AddUser setUserHandler={setUserHandler} />
      <UserList users={users}/>

    </div>
  );
}

export default App;
