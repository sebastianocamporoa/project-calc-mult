//Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./App.css";

//components
import Header from "./components/Header/Header";

const App = () => (
  <>
    <div class="context">
      <Container className="p-3">
        <h1 className="header">Proyecto final calculo multivariado</h1>
        <Header>
          El objetivo de este proyecto es mostrar los temas vistos en la clase
          de calculo multivariado. Desarrollado por: Sebastián Ocampo Roa, Carol
          Perdomo, Julian García y Esteban Alvarado.
        </Header>
      </Container>
      <Container className="p-5">
        <Form.Select
          size="lg"
          onChange={() => {
            alert("aaaa");
          }}
        >
          <option>Seleccione un tema</option>
          <option value="1">Laboratorio</option>
        </Form.Select>
        <br />
      </Container>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </>
);

export default App;
