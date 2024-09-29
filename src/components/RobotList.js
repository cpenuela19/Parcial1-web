import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './RobotList.css'; 
import RobotDetail from './RobotDetail';

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);
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

  const handleRobotClick = (id) => {
    setSelectedRobotId(id);
  };

  return (
    <div className="robot-container">
      <div className="robot-list">
        <table className="custom-table"> 
          <thead>
            <tr className="custom-table-header">
              <th>ID</th>
              <th>Nombre</th>
              <th>Modelo</th>
              <th>Empresa Fabricante</th>
            </tr>
          </thead>
          <tbody>
            {robots.length > 0 ? (
              robots.map((robot) => (
                <tr
                  key={robot.id}
                  className="custom-table-row"
                  onClick={() => handleRobotClick(robot.id)}
                >
                  <td className="custom-table-id">{robot.id}</td> 
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
      </div>
      <div className="robot-detail">
        {selectedRobotId ? (
          <RobotDetail robotId={selectedRobotId} />
        ) : (
          <div>Selecciona un robot para ver sus detalles</div>
        )}
      </div>
    </div>
  );
};

export default RobotList;
