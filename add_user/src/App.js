import AddUser from "./components/Users/AddUser";
import UsersLists from "./components/Users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersLists users={[]} />
    </div>
  );
}

export default App;
