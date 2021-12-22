import React, { useState } from "react";
import editIcon from "../../assets/bx_bx-edit.svg";
import deleteIcon from "../../assets/ic_baseline-delete-forever.svg";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";
import moment from "moment";
import { connect } from "react-redux";

const Post = (props) => {
  const [modal_delete, setModalDelete] = useState({
    openDeleteModal: false,
    activeItemId: "",
  });

  const [modal_edit, setModalEdit] = useState({
    openDeleteModal: false,
    activeItemId: "",
  });

  function openModalDelete(item) {
    setModalDelete({
      openDeleteModal: true,
      activeItemId: item.id,
    });
  }

  function closeModalDelete(item) {
    setModalDelete({
      openDeleteModal: false,
      activeItemId: item.id,
    });
  }

  function openModalEdit(item) {
    setModalEdit({
      openDeleteModal: true,
      activeItemId: item.id,
    });
  }

  function closeModalEdit() {
    setModalEdit({
      openDeleteModal: false,
      activeItemId: "",
    });
  }

  return (
    <div className="post">
      <div className="header">
        <h2>{props.post.title}</h2>
        <div className="icons">
          {props.post.username === props.username && (
            <>
              <img
                onClick={() => {
                  openModalEdit(props.post);
                }}
                src={editIcon}
                alt="edit post"
              />

              <img
                onClick={() => {
                  openModalDelete(props.post);
                }}
                src={deleteIcon}
                alt="delete post"
              />
            </>
          )}
        </div>
      </div>

      <div className="content">
        <div className="header-content">
          <p className="author">{props.post.username}</p>
          <p className="date">
            {moment(props.post.created_datetime).from(new Date())}
          </p>
        </div>

        <p className="content-paragraph">{props.post.content}</p>
      </div>
      <ModalEdit
        show={modal_edit.openDeleteModal}
        idItem={modal_edit.activeItemId}
        handleClose={closeModalEdit}
      />
      <ModalDelete
        show={modal_delete.openDeleteModal}
        idItem={modal_delete.activeItemId}
        handleClose={closeModalDelete}
      />
    </div>
  );
};

export default connect()(Post);