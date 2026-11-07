const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    message.textContent = result.message;
    message.style.color = result.success ? "green" : "red";
    if (result.success) form.reset();
  } catch (error) {
    message.textContent = "Server error. Please try again.";
    message.style.color = "red";
  }
});
