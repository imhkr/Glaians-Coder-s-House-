import React, { useState } from "react";
import styles from "./ResourceCard.module.css";
import SubResouceDialog from "../SubResouceDialog/SubResouceDialog";
const ResourceCard = ({ _id, imageLink, Heading, Content, CreatorName }) => {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal((prev) => !prev);
  }
  return (
    <div onClick={openModal} className="cursorP">
      {showModal && <SubResouceDialog postId={_id} />}
      <div className="PostCardWrapper">
        <div className={styles.card}>
          <img
            src="https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg"
            width={160}
            height={160}
          ></img>
          <div>
            <div className={styles.names}>
              <h3>{Heading}</h3>
            </div>
            <div className={styles.Creator}>
              <p>By:{CreatorName}</p>
            </div>
          </div>
          <div className={styles.peopleCount}>
            <p>{Content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
