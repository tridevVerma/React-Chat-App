import React from "react";
import { StyledProfileViewModal } from "../styles";
import { useDispatch } from "react-redux";
import { deleteConversation } from "../redux/contactSlice";

const ProfileViewModal = ({ user, open, closeModal, notify }) => {
  const dispatch = useDispatch();

  function handleDeleteConversation(id) {
    dispatch(deleteConversation(id));
    notify("success", "Clear Chat !!");
    closeModal();
  }
  return (
    <StyledProfileViewModal open={open}>
      <div className="heading">
        <h3>Contact Info</h3>
        <button onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="user-info">
        <div className="profile-img">
          <img src={user.image} alt="profile-pic" />
        </div>
        <p>
          {user.firstname} {user.lastname}
        </p>
        <p>{user.phone}</p>
      </div>
      <div className="extra-info">
        <div className="gender">
          <small>Gender</small>
          <p>{user.gender}</p>
        </div>
        <div className="about">
          <small>Role</small>
          <p>{user.about}</p>
        </div>
        <div className="city">
          <small>City</small>
          <p>{user.city}</p>
        </div>
      </div>
      <div className="clear-chat-btn">
        <button onClick={() => handleDeleteConversation(user.id)}>
          <i className="fa-solid fa-trash"></i>
          <span>Clear Chat</span>
        </button>
      </div>

      <div className="footer">
        <p>@Developed by Tridev Verma</p>
      </div>
    </StyledProfileViewModal>
  );
};

export default ProfileViewModal;
