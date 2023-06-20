import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Sucursales = () => {
  const [sucursales, setSucursales] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:9005/api/general/getSucursales')
      .then(response => {
        setSucursales(response.data.strAnswer);
      })
      .catch(error => {
        console.error('Error al obtener los sucursales:', error);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">Sucursales</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {sucursales.map(sucursal => (
            <tr key={sucursal.id}>
              <td>{sucursal.ciudad}</td>
              <td>{sucursal.direccion}</td>
              <td>{sucursal.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sucursales;
