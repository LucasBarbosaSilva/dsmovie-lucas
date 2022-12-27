import { Link } from "react-router-dom";
import { MovieScore } from "../MovieScore";
import "./styles.css";
function MovieCard() {
  const movie = {
    id: 1,
    image: "https://cdn.ome.lt/wND2pNNHuSq-wcMgRmrD_XqM1-c=/1200x630/smart/extras/conteudos/o-espetacular-homem-aranha-2-promessas-nunca-cumpridas.jpg",
    title: "O Espetacular Homem Aranha 2",
    count: 2,
    score: 4.5
  }
  return (
      <div className="container-movie">
          <img src={movie.image} alt="Imagem do filme" />
          <div className="container-info">
            <h3 id="title">
              {movie.title}
            </h3>
            <MovieScore/>
            <Link to={`/form/${movie.id}`}>
              <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </Link>
          </div>
      </div>
  );
}

export { MovieCard }