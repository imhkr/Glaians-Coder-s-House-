import React, { useState, useEffect } from "react";
import styles from "./SubResourceDialog.module.css";
import { useHistory } from "react-router-dom";
import { getUser, deleteUser, getUsers } from "../../Service/api";
import axios from "axios";
const SubResouceDialog = ({ postId }) => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getPost(postId);
  }, [postId]);
  function editPost(postId) {
    history.push(`/edit/${postId}`);
  }
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  const getAllUsers = async () => {
    console.log("getAllUsers");
    let response = await getUsers();
    // console.log("getAllUsers response ", response);

    setUsers(response.data);
  };
  const [data, setData] = useState([]);
  const getPost = async (postId) => {
    console.log("getAllUsers");
    let response = await getUser(postId);
    console.log("getAllUsers response ", response);
    setData(response.data);
  };
  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>{data.Heading}</h3>
          <h2 className={styles.subHeading}>{data.Content} </h2>
        </div>
        <div className={styles.modalFooter}>
          <button
            className={styles.footerButton}
            onClick={() => editPost(postId)}
          >
            <img
              src="/images/edit.png"
              width={20}
              height={20}
              alt="celebration"
            />
            <span>Edit</span>
          </button>
          <button
            className={styles.footerButton}
            onClick={() => deleteUserData(postId)}
          >
            <img
              src="/images/delete.png"
              width={20}
              height={20}
              alt="celebration"
            />
            <span>Delete</span>
          </button>
          <h6>** Edit/Delete (Only Works if your are content owner)</h6>
        </div>
      </div>
    </div>
  );
};

export default SubResouceDialog;
