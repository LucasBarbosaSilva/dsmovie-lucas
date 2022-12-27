import React from "react";
import { Link } from "react-router-dom";
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
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={data.image} alt="The Witcher" />
            <div className="dsmovie-card-bottom-container">
                <h3>"The Witcher"</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to={"/"}>
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export {Form}