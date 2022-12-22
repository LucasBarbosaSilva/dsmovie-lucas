import React from "react";
import "./styles.css";

const Form = () => {
    const data = {
        id: 1,
        image: "https://cdn.ome.lt/wND2pNNHuSq-wcMgRmrD_XqM1-c=/1200x630/smart/extras/conteudos/o-espetacular-homem-aranha-2-promessas-nunca-cumpridas.jpg",
        title: "O Espetacular Homem Aranha 2",
        count: 2,
        score: 4.5
    }

    function save(){

    }

    function cancel(){

    }
    return(
        <div className="container-form">
            <div className="content-form">
                <img src={data.image} alt="Imagem do filme" />
                
                <div className="container-title">
                    <h3 id="title">
                        {data.title}
                    </h3>
                </div>
                <form action="">
                    <div className="container-inputs">
                        <p>Informe seu email:</p>
                        <input type="text" />
                        <p>Informe sua avaliação:</p>
                        <input type="text" />
                    </div>
                    <div className="container-buttons">
                        <input type="button" id="btnSave" onClick={save} value="Salvar"/>
                        <input type="button" id="btnCancel" onClick={cancel} value="Cancelar"/>
                    </div>
                </form>
            </div>
        </div>
        //01:27:00
    )
}

export {Form}