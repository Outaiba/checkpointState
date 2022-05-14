import React from "react";

function Profile({ el }) {
  return (
    <div>
      <h1>{el.name}</h1>
      <h1>{el.age}</h1>
      <img src={el.image} style={{ width: "30%" }}></img>
    </div>
  );
}

export default Profile;
