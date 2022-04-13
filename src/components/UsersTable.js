import { FcCancel, FcEditImage } from "react-icons/fc";

const UsersTable = ({ users, handleDelete, handleEdit}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-primary">Id</th>
          <th className="table-primary">Nombre Completo</th>
          <th className="table-secondary">Dirección</th>
          <th className="table-secondary">Teléfono</th>
          <th className="table-primary">Status</th>
          <th className="table-primary">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="table-primary">{user.id}</td>
            <td className="table-primary">{user.name}</td>
            <td className="table-secondary">{user.address}</td>
            <td className="table-secondary">{user.phoneNumber}</td>
            <td className="table-primary">{user.status}</td>
            <td className="table-primary">
              <div className="mb-3">
                <FcEditImage onClick={() => handleEdit(user.id)} />
              </div>
              <div className="mb-3">
                
                <FcCancel onClick={() => handleDelete(user.id)} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
