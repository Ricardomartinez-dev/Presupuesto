import React,{ useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  //DEFINIR UN STATE DE 
  const [presupuesto, guardar_presupuesto] = useState(0);
  const [restante, guardar_restante] = useState(0);
  const [mostrar_pregunta, actualizar_pregunta] = useState(true);
  const [gastos, guardar_gastos] = useState([]);
  const [gasto, guardar_gasto] =useState({});
  const [crear_gasto, guardar_crear_gasto] = useState(false);


  //useEffect que actualiza el restante
  useEffect(() => {
    
    if(crear_gasto){
        //AGREGA EL NUEVO PRESUPUESTO
        guardar_gastos([
          ...gastos,
          gasto
        ]);
    

    //RESTA DEL PRESUPUESTO ACTUAL
    const presupuesto_restante = restante - gasto.cantidad;
    guardar_restante(presupuesto_restante);

    //RESETEAR A FALSE
    guardar_crear_gasto(false);
      }

  }, [gasto,crear_gasto,gastos,restante]);


  // //SE EJECUTA CUANDO SE AGREGUE UN NUEVO GASTO
  // const agregar_nuevo_gasto = (gasto) => {
  //   guardar_gastos([
  //     ...gastos,
  //     gasto
  //   ]);
  // }

  return (
      <div className="container">
        <header>
          <h1>Gasto semanal</h1>
            <div className="contenido-principal contenido">
              {mostrar_pregunta ? 
                (
                  <Pregunta 
                  guardar_presupuesto= {guardar_presupuesto}
                  guardar_restante = {guardar_restante}
                  actualizar_pregunta={actualizar_pregunta}
                  />
                ) :
                (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario 
                        guardar_gasto = {guardar_gasto}
                        guardar_crear_gasto = {guardar_crear_gasto}
                      />
                    </div>

                    <div className="one-half column">
                      <Listado 
                        gastos = {gastos}
                      />

                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante = {restante}
                      />

                    </div>

                  </div>
                )
              }
              
              
            </div>
        </header>
      </div>
  );
}

export default App;
