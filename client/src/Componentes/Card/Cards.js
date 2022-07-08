import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";



function Cards({ photosMars }) {
  // acá va tu código
  // tip, podés usar un map
  const page = useSelector((state) => state.page);

let photosMarsWork = photosMars.slice(0, 40);

let pos = 0, numElemento = 5
pos = (page - 1) * numElemento
let photoXPage = page  * numElemento;
//console.log(page, pos , numElemento);
let photosMarsSlice = photosMarsWork.slice(pos, photoXPage);


//console.log("ESte es el array slice " + photosMarsSlice);
//console.log ("valor delo lenght " + photoXPage)




  return (
    <div className="card">
      {/* {this.props.pokemons?.result?.length >= 0 &&
       !this.props.pokemon?.length !== 0 && */}
      {photosMarsSlice?.length >= 0 &&
      photosMarsSlice?.length !== 0 &&
        photosMarsSlice.map((e) => {
          return <Card image={e.img_src} name={e.camera.name} id={e.id} />;
        })}
      {/* {this.props.pokemon?.length >= 0 &&
        this.props.pokemon.map((e) => { */}
        {/* {cities?.length >= 0 &&
        cities.map((e) => {
          return <Card image={e.imagen} name={e.name} id={e.id} />;
        })} */}
    </div>
  );
}

export default Cards;
