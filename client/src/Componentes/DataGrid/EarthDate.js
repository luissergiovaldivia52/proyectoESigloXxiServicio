import React, { Component } from "react";
import { connect } from "react-redux";


function EarthDate() {
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
    <div className="detalle">
      <div id="detalle-type">
      Earth Date{" "}
     <input/>
     
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

export default EarthDate;
