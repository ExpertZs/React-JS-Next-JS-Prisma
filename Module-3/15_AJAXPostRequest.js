function sendPOSTRequest() {
  const xhr = new XMLHttpRequest();
  const url = "https://api.example.com/submit";
  const payload = {
    name: "John Doe",
    email: "johndoe@example.com"
  };
  const jsonPayload = JSON.stringify(payload);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
      } else {
        console.error("Error: " + xhr.status);
      }
    }
  };

  xhr.send(jsonPayload);
}
