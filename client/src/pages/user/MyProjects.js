import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Tarjeta } from "../../components/card/Tarjeta";
import "./user.scss";
import "./myprojects.scss";
import { BuyModal } from "../../components/modal/BuyModal";

// Esta pagina esta dentro de usuario (user.js) en ella se muestra todos los 
// porjectos que tiene el usuario asignados junto con un boton de "Añadir proyecto"
// el cual se podra añadir manualmente o comprar

export const MyProjects = ({
  projects,
  setBuyProject,
  buyProject,
  setResetUser,
  resetUser,
  images,
}) => {

  // este useEffect sirve para que la pagina se actualice si algún usario comprara
  // algun proyecto
  useEffect(() => {}, [projects, images]);

  // esta constante cierra y abre el modal de compra
  const [modalBuy, setModalBuy] = useState(false);

  
  useEffect(() => {
    setResetUser(!resetUser);
  }, []);

  // con esta constante abrimos el modal de compra
  const handleCheck = () => {
    setModalBuy(true);
  };

  // aqui mostramos el boton y el componente tarjeta que es donde se mostrara
  // toda la información de los proyectos que tiene el usuario.
  return (
    <>
      <Container className="h-100">
        <Row className="h-100">
          <Col sm={9} lg={8} className="card-container">
            <div>
              <Tarjeta projects={projects} buyProject={buyProject} setBuyProject={setBuyProject}/>
            </div>
          </Col>

          <Col sm={3} lg={4} className="add-container">
            <Button
              className="add-button m-0"
              type="button"
              onClick={handleCheck}
            >
              <div className="d-flex flex-column justify-content-center">
                <div className="add-circle">
                  <h2>+</h2>
                </div>
                <p>Añadir proyecto</p>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>

      <BuyModal onHide={() => setModalBuy(false)} show={modalBuy} />
    </>
  );
};
