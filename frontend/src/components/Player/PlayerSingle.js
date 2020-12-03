import React from 'react'

const PlayerSingle = (props) => {
  console.log(props)  
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="soccer.jpg" alt="soccer"/>
            <span className="card-title">{props.player.firstName} {props.player.lastName} </span>
          </div>
          <div className="card-content">
            <p>email: { props.player.firstName} - Phone: { props.player.phone}</p>
            <p>endurance: { props.player.endurance} - skill: { props.player.skill}</p>
          </div>
          <div className="card-action">
            Team: { props.player.team}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerSingle;
