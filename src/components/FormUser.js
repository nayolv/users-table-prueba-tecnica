import React from "react";

const FormUser = ({ handleChange, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit} className="row g-3 border border-secondary m-1">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Dirección
        </label>
        <input
          name="address"
          onChange={handleChange}
          type="text"
          id="address"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Telefono
        </label>
        <input
          name="phoneNumber"
          onChange={handleChange}
          type="text"
          id="phoneNumber"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          Status
        </label>
        <input
          name="status"
          onChange={handleChange}
          type="text"
          id="status"
          className="form-control"
        />
      </div>
      <button className="btn btn-outline-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default FormUser;
