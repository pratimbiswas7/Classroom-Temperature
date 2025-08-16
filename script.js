document.getElementById("tempForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const room = document.getElementById("room").value;
  const temp = parseFloat(document.getElementById("temperature").value);

  let status = "";
  let cssClass = "";

  if (temp > 26) {
    status = "❄️ Cooling Required";
    cssClass = "result-cooling";
  } else if (temp < 22) {
    status = "🔥 Heating Required";
    cssClass = "result-heating";
  } else {
    status = "✅ Comfortable";
    cssClass = "result-comfy";
  }

  const resultsDiv = document.getElementById("results");
  const card = document.createElement("div");
  card.classList.add("result-card", cssClass);
  card.innerHTML = `<strong>Classroom ${room}</strong><br>
    🌡 Temp: ${temp}°C<br>
    <b>${status}</b>`;
  resultsDiv.appendChild(card);

  // reset inputs
  document.getElementById("room").value = "";
  document.getElementById("temperature").value = "";
});
