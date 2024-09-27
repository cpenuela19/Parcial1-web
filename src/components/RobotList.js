import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RobotList.css';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:3001/robots');
        if (response.ok) {
          const data = await response.json();
          setRobots(data);
        } else {
          setError('Error fetching robot data');
        }
      } catch (error) {
        setError('Unable to connect to the server');
      }
    };

    fetchRobots();
  }, []);

  return (
    <div className="robot-list">
      <h2>Adopta un Robot con Robot Lovers!</h2>
      <img src="" alt="Banner" className="banner-img" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.length > 0 ? (
            robots.map((robot) => (
              <tr key={robot.id}>
                <td>{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                {error || 'Cargando robots...'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default RobotList;
