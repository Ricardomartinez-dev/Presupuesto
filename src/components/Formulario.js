import React,{useState} from 'react';
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Formulario = ({guardar_gasto,guardar_crear_gasto}) => {

    const [nombre, guardar_nombre] = useState('');
    const [cantidad, guardar_cantidad] = useState(0);
    const [error, guardar_error] = useState(false);

    //CUANDO EL USUARIO AGREGA UN GASTO
    const agregar_gasto = e =>{
        e.preventDefault();


        //VALIDAR
        if(cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            guardar_error(true);
            return;
        }
        guardar_error(false);

        //CONTRUIR EL GASTO
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // console.log(gasto);


        //PASAR EL GASTO AL COMPONENTE PRINCIPAL
        guardar_gasto(gasto);
        guardar_crear_gasto(true);

        //RESETEAR EL FORM
        guardar_nombre('');
        guardar_cantidad(0);

    }
    return ( 
        <form 
        onSubmit={agregar_gasto}>
            <h2>Agrega tus gastos aquí</h2>
                {error ? <Error mensaje="Ambos campos son obligatorios/Presupuesto incorrecto"/> :null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardar_nombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardar_cantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
     );
}
 
Formulario.propTypes = {
    guardar_gasto: PropTypes.func.isRequired,
    guardar_crear_gasto: PropTypes.func.isRequired
}

export default Formulario;