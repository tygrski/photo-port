import React from "react";
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from "../../utils/helpers";
// import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
  const { name, description } = props.currentCategory;
  console.log(props);
  

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(string(name))}</h1>
      <p> {description}</p>
      <PhotoList category={name} />
    </section>
  );
}
export default Gallery;
