import React, { useState, useEffect } from "react";
import { StyledContainer } from "../styles";
import { Sidebar, Main, Blank, AllContactsModal, ThemeModal } from "./index";
import { Routes, Route } from "react-router-dom";
import { fetchContacts } from "../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = ({ notify }) => {
  // Dispatcher --> invokes action
  const dispatch = useDispatch();

  // Get contacts list from redux store
  const allContacts = useSelector((state) => state.contacts);

  // State to manage all contacts modal
  const [openModal, setOpenModal] = useState(false);

  // State to manage Theme Modal
  const [openThemeModal, setOpenThemeModal] = useState(false);

  function showModal() {
    // Open Modal
    setOpenModal(true);
  }

  function hideModal() {
    // Hide Modal
    setOpenModal(false);
  }

  function showThemeModal() {
    // Open Theme Modal
    setOpenThemeModal(true);
  }

  function hideThemeModal() {
    // Hide Theme Modal
    setOpenThemeModal(false);
  }

  // close both modals if clicked outside
  function hideModals() {
    hideModal();
    hideThemeModal();
  }

  useEffect(() => {
    // Check if users exist in localstorage if yes --> get those users
    if (localStorage.getItem("allContacts")) {
      dispatch(fetchContacts(JSON.parse(localStorage.getItem("allContacts"))));
    } else {
      // Fetch users on page load
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  if (allContacts.error) {
    // If error in network request --> show error
    notify("error", allContacts.error);
  }

  return (
    <>
      <StyledContainer>
        <Sidebar
          recentContacts={allContacts.users.filter(
            (contact) => contact.conversation && contact.conversation.length > 0
          )}
          showModal={showModal}
          showThemeModal={showThemeModal}
        />

        <Routes>
          <Route path="/conversation/:id" element={<Main notify={notify} />} />
          <Route path="*" element={<Blank />} />
        </Routes>
        <AllContactsModal
          allContacts={allContacts.users}
          open={openModal}
          hideModal={hideModal}
        />
        <ThemeModal
          open={openThemeModal}
          hideThemeModal={hideThemeModal}
          notify={notify}
        />
      </StyledContainer>
      <div
        className={`overlay ${openModal || openThemeModal ? "" : "hide"}`}
        onClick={hideModals}
      ></div>
    </>
  );
};

export default Container;
