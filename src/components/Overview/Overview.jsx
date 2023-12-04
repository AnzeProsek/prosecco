import React, { useRef, useEffect, useState } from "react";
import images from "../../constants/images";
import "./Overview.css";

const Overview = () => {
  const overviewRef = useRef(null);
  const levoRef = useRef(null);
  const desnoRef = useRef(null);
  const [showFullText, setShowFullText] = useState(false);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(overviewRef.current);
    observer.observe(levoRef.current);
    observer.observe(desnoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="overview" ref={overviewRef} id="overview">
      <div className="overview-levo" ref={levoRef}>
        <img src={images.notr} alt="header_img" />
      </div>
      <div className="overview-desno" ref={desnoRef}>
        <div className="overview-title">
          <img className="ikonca" src={images.houseicon} alt="header_img" />
          <h2>Our apartment overview</h2>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        {!showFullText ? (
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, illum iure, tempore alias dolor, expedita quas deleniti
              blanditiis laboriosam repudiandae facilis. Ad corporis qui
              tempora, voluptas earum laboriosam, rerum molestiae, delectus
              asperiores eaque quos quisquam. Fugit officiis tempora aperiam,
              aut accusamus, similique dolorem autem odit assumenda ratione
              praesentium impedit libero!
            </p>
            <div class="button" id="button-2" onClick={toggleFullText}>
              <div id="slide"></div>
              <div className="klik">Read more</div>
            </div>
          </div>
        ) : (
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              culpa assumenda inventore facilis ipsa a, dolor dolores ducimus
              consequatur molestiae, at officiis cumque animi delectus minus eum
              totam suscipit voluptatibus. Rem ipsa, facilis assumenda sed
              facere illo eius modi, explicabo temporibus veniam cumque eaque
              nihil ipsum odio eos similique quibusdam, error veritatis ab
              dolorem pariatur voluptatem molestiae magnam. Ducimus quaerat
              voluptatem est eaque distinctio praesentium labore, eum quas quo
              quam quod? Doloremque iusto eaque vero nemo excepturi dignissimos,
              impedit quo aut culpa ea quasi mollitia a magnam cum rem dolor,
              voluptatem perspiciatis ut accusantium quod at. Fuga consequatur
              adipisci vero! Quidem fuga earum nemo dolore, assumenda
              consequuntur sit maiores! Exercitationem, id illum! Saepe,
              consectetur unde voluptatum magni perspiciatis eos dolor ad libero
              laborum, quia officia velit dolores tempore consequatur error
              blanditiis quaerat. Ex obcaecati sunt dolorum officia, laboriosam
              ad, quis nisi sint accusamus magnam soluta sapiente similique,
              velit accusantium in voluptate? Distinctio voluptatibus tempore
              culpa alias ea nobis et aperiam. Id quas a praesentium corporis,
              maiores, assumenda ullam quo culpa deserunt laboriosam tempore.
              Soluta vitae aliquid eaque ad quae quasi, enim reiciendis sit
              natus, eos nesciunt est. Omnis commodi, corrupti quo iure natus
              veniam hic incidunt rem sunt. Laborum, accusantium.
            </p>
            <div class="button" id="button-2" onClick={toggleFullText}>
              <div id="slide"></div>
              <div className="klik">read less</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
