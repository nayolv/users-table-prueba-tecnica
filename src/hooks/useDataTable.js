import { useEffect, useState } from 'react'
const useDataTable = () => {

    const [users, setUsers] = useState([]);
    const [updateState, setUpdateState] = useState(false);
//GET

useEffect(() => {
const getUsers = () => {
  fetch('http://localhost:9000/api')
  .then(res => res.json())
  .then(res=>setUsers(res));
}

getUsers();
setUpdateState(false)
}, [updateState])

const [addUser, setAddUser] = useState({
  name: "",
  address: "",
  phoneNumber: "",
  status: "",
}
)

//PETICIONES
const handleChange = (e) => {
  setAddUser({
    ...addUser,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = () => {
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addUser),
  };

  fetch("http://localhost:9000/api", request)
    .then((res) => res.text())
    .then((res) => console.log(res));

};

const handleDelete = (id) => {
  const request = {
    method: "DELETE",
  };

  fetch("http://localhost:9000/api/" + id, request)
    .then((res) => res.text())
    .then((res) => console.log(res));
  setUpdateState(true);
};

const handleEdit = (id) => {
  const request = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addUser),
  };

  fetch("http://localhost:9000/api/" + id, request)
    .then((res) => res.text())
    .then((res) => console.log(res));
  setUpdateState(true);
};

  return {
    users,
    addUser, 
    setAddUser, 
    setUpdateState,
    handleDelete,
    handleEdit,
    handleChange,
    handleSubmit
  }
}

export default useDataTable