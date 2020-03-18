import React,{Fragment} from 'react';
import {revisar_presupuesto} from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto,restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                presupuesto: $ {presupuesto}
            </div>

            <div className={revisar_presupuesto(presupuesto,restante)}>
                restante: $ {restante}
            </div>
        </Fragment>
     );
}
 
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;