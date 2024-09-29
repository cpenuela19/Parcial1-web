import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './RobotList.css'; 
import RobotDetail from './RobotDetail';
import { FormattedMessage } from 'react-intl'; // Importamos FormattedMessage

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
              <th><FormattedMessage id="robotList.id" defaultMessage="ID" /></th> 
              <th><FormattedMessage id="robotList.name" defaultMessage="Nombre" /></th> 
              <th><FormattedMessage id="robotList.model" defaultMessage="Modelo" /></th> 
              <th><FormattedMessage id="robotList.manufacturer" defaultMessage="Empresa Fabricante" /></th> 
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
          <div><FormattedMessage id="robotDetail.additionalFeatures" defaultMessage="Selecciona un robot para ver sus detalles" /></div>
        )}
      </div>
    </div>
  );
};

export default RobotList;
