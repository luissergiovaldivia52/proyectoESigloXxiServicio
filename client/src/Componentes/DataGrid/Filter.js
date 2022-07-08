import React, { Component } from "react";
import { connect } from "react-redux";
// import { setFilter, setFilterOrder } from "../folderRedux/actions/pokemonActions";

function Filter() {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }

  // handleSelectFilterOrigen = async (e) => {
  //     await this.props.setFilterOrder(e.target.value);
  // };
  // handleSelectFilterType = async (e) => {
  //     await this.props.setFilter(this.props.pokemons, e.target.value);
  // };

  return (
    <div className="filter">
      <div id="filter-type">
        Filter by Camaras{" "}
        <select
          name="choiceFilterOrigen"
          // value={this.props.size}
          // onChange={this.handleSelectFilterType}
        >
          <option value=" ">ALL</option>
          <option value="fhaz">FHAZ</option>
          <option value="rhaz">RHAZ</option>
          <option value="mast">MAST</option>
          <option value="chemcam">CHEMCAM</option>
          <option value="mahli">MAHLI</option>
          <option value="mardi">MARDI</option>
          <option value="navcam">NAVCAM</option>
          <option value="pancam">PANCAM</option>
          <option value="minites">MINITES</option>
        </select>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//     return {
//         pokemon: state.pokemon,
//         pokemons: state.pokemons,

//         size: state.size,
//         page: state.page,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         setFilter: (pokemons, filter) => dispatch(setFilter(pokemons, filter)),
//         setFilterOrder: (filter) => dispatch(setFilterOrder(filter))
//     };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export default Filter;
