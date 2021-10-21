import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ userClickedSong }) => {
  if (!userClickedSong) {
    return <div>Select a Song</div>;
  }
  console.log(userClickedSong);
  return (
    <div>
      <h3>Details For:</h3>

      <h3> Title:</h3>
      <p>{userClickedSong.title}</p>
      <h3>Duration:</h3>
      <p>{userClickedSong.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userClickedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
