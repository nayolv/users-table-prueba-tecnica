import "bootstrap/dist/css/bootstrap.min.css";
import FormUser from "./components/FormUser";
import UsersTable from "./components/UsersTable";
import useDataTable from "./hooks/useDataTable";

function App() {
  const { users, addUser, setAddUser, setUpdateState, handleDelete, handleEdit, handleChange, handleSubmit } = useDataTable();

  return (
    <>
      <div className="container">
        <div className="col">
          <h1 style={{ textAlign: "center" }}>Usuarios</h1>
          <UsersTable setUpdateState={setUpdateState} addUser={addUser} users={users} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <h2 style={{ textAlign: "center" }}>Registra un usuario</h2>
            <FormUser setAddUser={setAddUser} addUser={addUser} handleChange={handleChange} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
