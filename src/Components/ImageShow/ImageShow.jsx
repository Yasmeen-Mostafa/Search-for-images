import "./ImageShow.scss";
const ImageShow = ({ imageSrc, imageAlt }) => {
  return (
    <div className="image__show">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};
export default ImageShow;
