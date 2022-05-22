import React from 'react';
import imgr from './photo2.jpg';
import PropTypes  from 'prop-types';

function ProfileComponent(props, handleName) {
  return (
    <div>
 <img style={{width: "100%",heigth: "80%", borderRaduis:"15%"}} src={imgr}/>
<h1 className='text'>{props.personne.FullName}</h1>
<p className='para'>{props.personne.Bio}</p>
<p className='para'>{props.personne.Profession}</p>
<button onClick={()=>handleName=("defaultProps.FullName")}>Click here</button>
</div>
  )
}
ProfileComponent.defaultProps={
    FullName:"sannouna"
}
ProfileComponent.propTypes ={
    FullName:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
};
export default ProfileComponent