if (localStorage.getItem("user") === null) {
  window.location.href = "/login.html";
}

getBoxes();

async function getBoxes() {
  const res = await fetch(api_url + "/box/all", {
    headers: {
      user: localStorage.getItem("user"),
    },
  });

  const data = await res.json();

  let boxes = new String();

  data.forEach(({ created_at, desc, email, tel }) => {
    boxes += `
      <div class="box">
        <div class="box-header"><p>${created_at}</p></div>
        <div class="box-content">
          <p>${desc}</p>
        </div>
      </div>
    `;
  });

  document.getElementById('boxes').innerHTML = boxes;
}

document.getElementById("btn-logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/login.html";
});
