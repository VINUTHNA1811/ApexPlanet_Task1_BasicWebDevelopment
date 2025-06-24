function addInternship() {
  const company = document.getElementById("company").value.trim();
  const role = document.getElementById("role").value.trim();
  const status = document.getElementById("status").value;
  const learnings = document.getElementById("learnings").value.trim();

  if (!company || !role) {
    alert("Please fill in both company and role.");
    return;
  }

  const log = document.getElementById("log");
  const entry = document.createElement("div");
  entry.className = "entry";

  entry.innerHTML = `
    <strong>${company}</strong> – ${role}<br/>
    <em>Status:</em> ${status}<br/>
    <em>Learned:</em> ${learnings || 'N/A'}
  `;
  log.prepend(entry);

  alert("Internship saved!");

  // Clear inputs
  document.getElementById("company").value = "";
  document.getElementById("role").value = "";
  document.getElementById("status").value = "Applied";
  document.getElementById("learnings").value = "";
}
