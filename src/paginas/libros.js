import axios from 'axios';
import React, { useState, useEffect } from 'react';



const Libros = () => {
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:9005/api/general/getLibros')
      .then(response => {
        setLibros(response.data.strAnswer);
      })
      .catch(error => {
        console.error('Error al obtener los libros:', error);
      });
  }, []);

    return (
        <div className="container">
      <h1 className="text-center">Libros</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Autor</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Fecha de Publicación</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>
              <td>{libro.autor}</td>
              <td>{libro.cantidad}</td>
              <td>{libro.fechaPublicacion}</td>
              <td>{libro.nombre}</td>
              <td>{libro.tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Libros;
