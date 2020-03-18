import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardar_restante, guardar_presupuesto,actualizar_pregunta}) => {

    //DEFINIR EL STATE DE LA CANTIDAD
    const [cantidad, guardar_cantidad] = useState(0);
    const [error, guardar_error] = useState(false); //No hay error al inicio


    //FUNCION QUE LEE EL PRESUPUESTO
    const definir_presupuesto = (e) => {
        // console.log(parseInt(e.target.value)); //VERIFICAR EN CONSOLA PORQUE ES UN STRING
        guardar_cantidad(parseInt(e.target.value));
    }

    //SUBMIT PARA DEFINIR EL PRESUPUESTO
    const agregar_presupuesto = e => {
        e.preventDefault();

        //VALIDAR
        if(cantidad < 1 || isNaN(cantidad)) {
            guardar_error(true);
            return;
        }

        //SI SE PASA LA VALIDACIÓN
        guardar_error(false);
        
        guardar_presupuesto(cantidad);
        guardar_restante(cantidad);
        actualizar_pregunta(false);

    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es Incorrecto"/> : null}
            <form onSubmit={agregar_presupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definir_presupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment> 
     );
}

Pregunta.propTypes = {
    guardar_restante: PropTypes.func.isRequired,
    guardar_presupuesto: PropTypes.func.isRequired,
    actualizar_pregunta: PropTypes.func.isRequired
}

export default Pregunta;