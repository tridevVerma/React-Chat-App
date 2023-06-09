import React, { useState, useEffect } from "react";
import { StyledContainer } from "../styles";
import { Sidebar, Main, Blank, AllContactsModal } from "./index";
import { Routes, Route } from "react-router-dom";
import { fetchContacts } from "../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  // Dispatcher --> invokes action
  const dispatch = useDispatch();

  // Get contacts list from redux store
  const allContacts = useSelector((state) => state.contacts);

  // State to manage Modal
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    // Open Modal
    setOpenModal(true);
  }

  function hideModal() {
    // Hide Modal
    setOpenModal(false);
  }

  useEffect(() => {
    // Fetch users on page load
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <Sidebar
          recentContacts={allContacts.users.filter(
            (contact) => contact.conversation && contact.conversation.length > 0
          )}
          showModal={showModal}
        />

        <Routes>
          <Route path="/conversation/:id" element={<Main />} />
          <Route path="*" element={<Blank />} />
        </Routes>
        <AllContactsModal
          allContacts={allContacts.users}
          open={openModal}
          hideModal={hideModal}
        />
      </StyledContainer>
      <div
        className={`overlay ${openModal ? "" : "hide"}`}
        onClick={hideModal}
      ></div>
    </>
  );
};

export default Container;
