import React from "react";
import "./App.css"

const Me = () => {

    return (
        <div>
            <div>
                <img className="img" src="./img/me.jpg" alt="yo"></img>
            </div>
            <div>
            <h3>MITZI VERÓNICA ESPARZA DE LA CRUZ</h3><br></br>
            <h5>ESTOS SON MIS HOBBIES</h5><br></br>

            <div class="hobbies">
        <table>
            <tr>
                <td>1-Practicar boxeo</td>
            </tr>
            <tr>
                <td>2-Escuchar música </td>
            </tr>
            <tr>
                <td>3-Obsesionarme con series y/o peliculas</td>
            </tr>
            <tr>
                <td>4-Salir de viaje siempre que puedo</td>
            </tr>
            <tr>
                <td>5-Salir de fiesta siempre que tengo la oportunidad</td>
            </tr>
        </table>
    </div>
            </div>
        </div>
     );

};
export default Me;