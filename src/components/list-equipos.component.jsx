import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ListaEquipos from "./ListaEquipos";

function ListEquipos() {
    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/equipos')
            .then(({ data }) => {
                setEquipos(data);
            })
            .catch((error) => {
                console.log('Error 404 ' + error);
            });
    }, []);

    const tableData = () => {
        return equipos.map((equipo, index) => {
            return (
                <ListaEquipos equipoObj={equipo} key={index} />
            );
        });
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nombre Equipo</th>
                    <th>Nombres Integrantes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableData()}
            </tbody>
        </Table>
    );
}

export default ListEquipos;