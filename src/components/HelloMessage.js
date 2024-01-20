import React from "react";

const HelloMessage=({name})=>{
    return(
      <div>
        <p>Hello,{name? name: 'there'}!</p>
        {name && <img src="img/profil.webp" alt="Aissatou" style={{ width: '18%' }}/>}
      </div>
    );
};
export default HelloMessage;