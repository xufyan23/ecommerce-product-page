import {useState, useEffect} from 'react';
import "./ImagePopUp.scss";
import Modal from "react-bootstrap/Modal";
import ArrowLeft from "../images/icon-previous.svg";
import ArrowRight from "../images/icon-next.svg";
import Close from "../images/icon-close.svg";

const ImagePopUp = ({images, displayModal, modalImgPreview, setDisplayModal}) => {
  const [index, setIndex] = useState(0);
  const [modalImg, setModalImg] = useState(modalImgPreview);

  const handleActive = (image) => {
    setModalImg(image)
  }
  const handleClose = () => {
    setDisplayModal(false)
  }
  const handleNextImg = () => {
    if(index < images.length - 1) {
      setIndex((prevState) => prevState + 1);
      // setModalImg(images[index + 1].previewImg)
    }
    else {
      setIndex(0)
    }
  }
  const handlePreviousImg = () => {
    if(index > 0) {
      setIndex((prevState) => prevState - 1);
      // setModalImg(images[index - 1].previewImg)
    }
    else {
      setIndex(images.length -1 )
    }
  }

  useEffect(() => {
    setModalImg(images[index].previewImg);
  },[index])

	return (
    <Modal className="" show={displayModal}>
      <Modal.Header onClick={handleClose}><img src={Close} alt="close"/></Modal.Header>
      <Modal.Body>
        <div className="arrows">
          <button className="arrow-left btn" onClick={handlePreviousImg}>
            <img src={ArrowLeft} alt="slide left" />
          </button>
          <button className="arrow-right btn" onClick={handleNextImg}>
            <img src={ArrowRight} alt="slide right" />
          </button>
        </div>
        <div className="img-slider modal-slider">
          <div className="img-preview">
            <img src={modalImg} alt="" />
          </div>
          <div className="image-thumbnail ">
            {images.map((image, key) => (
              <div className={`img-block ${key=== index ? 'active' : ''}`}>
                <img
                  src={image.imageThumbnail}
                  alt="shoes"
                  onClick={() => handleActive(image.previewImg)}
                />
              </div>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ImagePopUp;
