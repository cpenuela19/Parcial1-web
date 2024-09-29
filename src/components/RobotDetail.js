import React, { useEffect, useState } from 'react';
import './RobotDetail.css';

const RobotDetail = ({ robotId }) => {
  const [robot, setRobot] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRobotDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3001/robots/${robotId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.imagen.includes("github.com")) {
            data.imagen = data.imagen.replace("github.com", "raw.githubusercontent.com").replace("blob/", "");
          }
          setRobot(data);
        } else {
          setError('Error fetching robot details');
        }
      } catch (error) {
        setError('Unable to connect to the server');
      }
    };

    fetchRobotDetail();
  }, [robotId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!robot) {
    return <div>Cargando detalles del robot...</div>;
  }

  return (
    <div className="robot-detail-card">
      {/* Nombre del robot (centrado) */}
      <h3 className="robot-name"><strong>{robot.nombre}</strong></h3>
      
      {/* Contenedor de la imagen */}
      <div className="robot-image-container">
        <img src={robot.imagen} alt={robot.nombre} />
      </div>
      
      <h3 className="robot-detail"><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</h3>
      <h3 className="robot-detail"><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</h3>
      <h3 className="robot-detail"><strong>Humor:</strong> {robot.humor}</h3>
    </div>
  );
};

export default RobotDetail;
