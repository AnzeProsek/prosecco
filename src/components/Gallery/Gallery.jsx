import images from "../../constants/images";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    const galleryElement = document.querySelector(".gallery-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            galleryElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    observer.observe(galleryElement);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  const imageArray = [
    { original: images.kucica, thumbnail: images.kucica },
    { original: images.kucica, thumbnail: images.kucica },
    { original: images.kucica, thumbnail: images.kucica },
    { original: images.kucica, thumbnail: images.kucica },
    { original: images.kucica, thumbnail: images.kucica },
    { original: images.kucica, thumbnail: images.kucica },
  ];
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Apartment gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptate consequuntur cum, ratione assumenda dolores numquam aut
            dignissimos error accusamus consequatur doloremque? Similique
            delectus architecto, doloribus ad quasi saepe explicabo!
          </p>
          <div class="gallery-button" id="gallery-button-2">
            <div id="gallery-slide"></div>
            <div className="gallery-klik">Lorem ipsum</div>
          </div>
        </div>
        <div className="imported-gallery">
          <ImageGallery items={imageArray} showPlayButton={false} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
