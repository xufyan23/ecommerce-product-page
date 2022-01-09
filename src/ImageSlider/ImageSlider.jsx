import {useState, useEffect, useRef} from 'react';
import ImagePopUp from '../ImagePopUp/ImagePopUp';
import "./ImageSlider.scss";


const ImageSlider=({images, setActiveImg, activeImg}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const modalRef = useRef()
  const imageKey = activeImg.slice(-10, -5);

  const handleActiveImg = (image) => {
      setActiveImg(image);
  }
  const handlePopupImage = () => {
    setDisplayModal(true)
  }

	return (
    <div className="img-slider">
      <div className="img-preview" onClick={handlePopupImage}>
        <img src={activeImg} alt="" />
      </div>
      <div className="image-thumbnail">
        {images.map((image) => (
          <div className="img-block">
            <img
              src={image.imageThumbnail}
              alt="shoes"
              key={imageKey}
              onClick={() => handleActiveImg(image.previewImg)}
            />
          </div>
        ))}
      </div>
      <ImagePopUp
        images={images}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        modalImgPreview={activeImg}
      />
    </div>
  );
}

export default ImageSlider;
