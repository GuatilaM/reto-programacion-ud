import { useState } from "react";
import axios from "axios";
import FormJugador from "./FormJugador";

function CrearJugador() {
    const [formValues, setFormValues] = useState(
        {
            nombreJugador: '', 
            emailJugador: '',
        }
    );

    const onSubmit = (jugadorObject) => {
        axios.post('http://localhost:3000/torneo/torneo', jugadorObject)
            .then((response) => {
                if (response.status === 200){
                    alert('Jugador creado');
                } else {
                    Promise.reject();
                }
            })
            .catch((error) => alert('Ha ocurrido un error'));
    }
    return (
        <FormJugador 
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize
        />
    );
}

export default CrearJugador;