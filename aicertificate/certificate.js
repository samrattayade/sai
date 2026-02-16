const name = localStorage.getItem("username");
document.getElementById("name").innerText = name;
document.getElementById("date").innerText = new Date().toDateString();

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("AI Awareness Certificate", 60, 30);
  doc.text("Awarded to:", 20, 50);
  doc.text(name, 20, 60);
  doc.text("For successfully passing the AI Awareness Quiz", 20, 80);

  doc.save("AI_Certificate.pdf");
}


function printCertificate() {
  window.print();
}