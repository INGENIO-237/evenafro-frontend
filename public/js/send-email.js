//   Send the form data to the server

$("#contactForm").submit((e) => {
  e.preventDefault();

  const button = document.getElementById("sendBtn");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  console.log(button);

  button.value = "Envoi en cours...";
  button.disabled = true;

  setTimeout(() => {}, 6000);

  //   const API_URL = "localhost:5000/api/1.0";

  const datas = $("#contactForm").serializeArray();

  const infos = {};

  datas.forEach((data) => {
    infos[data.name] = data.value;
  });

  $.ajax({
    url: "http://15.223.117.232:5000/api/1.0/send-email",
    type: "POST",
    data: infos,
    success: (response) => {
      firstName.value = "";
      lastName.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
      button.value = "Envoyer";
      button.disabled = false;
      alert("E-mail envoyé avec succès!");
    },
    error: (error) => {
      console.error("Error:", error);
      button.value = "Envoyer";
      button.disabled = false;
      alert(
        "Erreur lors de l'envoi de l'e-mail. Veuillez réessayer plus tard."
      );
    },
  });
});
