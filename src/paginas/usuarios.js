import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Usuarios = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:9005/api/general/getUsuarios')
      .then(response => {
        setUsers(response.data.strAnswer);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">Usuarios</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Edad</th>
            <th scope="col">Correo</th>
            <th scope="col">Celular</th>
            <th scope="col">Nombre de Libro</th>
            <th scope="col">Tiempo de Renta</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.edad}</td>
              <td>{user.correo}</td>
              <td>{user.celular}</td>
              <td>{user.nombreLibro}</td>
              <td>{user.tiempoRenta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
