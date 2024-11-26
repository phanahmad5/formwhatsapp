document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const phoneNumber = "62895327111499"; // Ganti dengan nomor WhatsApp tujuan
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Halo,%20nama%20saya%20${encodeURIComponent(name)}.%20Email:%20${encodeURIComponent(email)}.%20Pesan:%20${encodeURIComponent(message)}`;
  
    window.open(whatsappURL, "_blank");
  });
  