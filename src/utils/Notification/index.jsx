import React from "react";
import { store } from "react-notifications-component";

function Notification(title, message, type) {
  return store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true,
    },
  });
}

export default Notification;
