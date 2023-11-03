import Swal from "sweetalert2";

export function popUp({
    message,
    title = "Message",
    icons = "info",
    html,

  }) {
    return Swal.fire({
      icon: icons,
      title: title,
      text: message,
      html: html,
     
      // cancelButtonAriaLabel: 'Thumbs down'
      // footer: '<a href="">Why do I have this issue?</a>'
    });
  }