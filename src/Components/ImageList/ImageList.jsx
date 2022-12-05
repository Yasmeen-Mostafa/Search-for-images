import ImageShow from "../ImageShow/ImageShow";

import "./ImageList.scss";
const ImageList = ({ listOfImages }) => {
  return (
    <div className="image__list">
      {listOfImages.map((e) => {
        return (
          <ImageShow
            imageSrc={e.urls.regular}
            key={e.id}
            imageAlt={e.alt_description}
          />
        );
      })}
    </div>
  );
};

export default ImageList;
