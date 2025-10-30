// ---------------- INSCRIPTION ----------------
const formInscription = document.getElementById("formInscription");
if (formInscription) {
  formInscription.addEventListener("submit", e => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const niveau = document.getElementById("niveau").value.trim();
    const identifiant = document.getElementById("identifiant").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    const user = { nom, prenom, niveau, identifiant, email, password };

    // Stocker dans localStorage
    localStorage.setItem("user", JSON.stringify(user));

    alert("Inscription réussie !");
    window.location.href = "Connexion.html";
  });
}

// ---------------- CONNEXION ----------------
const formConnexion = document.getElementById("formConnexion");
if (formConnexion) {
  formConnexion.addEventListener("submit", e => {
    e.preventDefault();

    const identifiant = document.getElementById("identifiant").value.trim();
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Aucun compte trouvé. Veuillez vous inscrire d'abord.");
      return;
    }

    if (storedUser.identifiant === identifiant && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Connexion réussie !");
      window.location.href = "Notes.html";
    } else {
      alert("Identifiant ou mot de passe incorrect !");
    }
  });
}

// ---------------- PAGE NOTES ----------------
if (window.location.pathname.includes("Notes.html")) {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!loggedIn || !user) {
    alert("Veuillez vous connecter d'abord !");
    window.location.href = "Connexion.html";
  } else {
    // Injecter les infos de l'étudiant
    document.getElementById("studentName").textContent = `${user.nom} ${user.prenom}`;
    document.getElementById("studentCard").textContent = user.identifiant;
    document.getElementById("studentLevel").textContent = user.niveau;
    document.getElementById("studentSpeciality").textContent = "Physique-Chimie";
    document.getElementById("academicYear").textContent = "2024-2025";
  }
}
