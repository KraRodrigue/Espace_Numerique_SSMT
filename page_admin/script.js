
/* injection du header administration  */

document.addEventListener("DOMContentLoaded", () => {
  fetch("headerAdmin.html") // <-- adapte le chemin selon ton dossier
    .then(response => {
      if (!response.ok) throw new Error("Fichier introuvable !");
      return response.text();
    })
    .then(html => {
      document.getElementById("Sidebar1").innerHTML = html;
    })
    .catch(err => console.error("Erreur lors du chargement de la sidebar :", err));
});


window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1); // récupère 'AjouterunÉtudiant'
    if (!hash) return;

    const targetBtn = document.getElementById(hash);
    if (!targetBtn) return;

    // On simule le clic **après le chargement complet**
    setTimeout(() => {
        targetBtn.click();
    }, 50); // 50ms suffisent
});







 /* page d'accueil administration */

        // Toggle Submenu
        function toggleSubmenu(element) {
            const submenu = element.nextElementSibling;
            const arrow = element.querySelector('.menu-arrow');
            
            // Close all other submenus
            document.querySelectorAll('.submenu').forEach(sm => {
                if (sm !== submenu) {
                    sm.classList.remove('open');
                    const otherArrow = sm.previousElementSibling.querySelector('.menu-arrow');
                    if (otherArrow) otherArrow.classList.remove('open');
                }
            });
            
            // Toggle current submenu
            submenu.classList.toggle('open');
            if (arrow) arrow.classList.toggle('open');
        }

        // Navigate to page
        function navigateTo(pageName) {
            console.log('Navigation vers:', pageName);
            
            // Remove active class from all menu links
            document.querySelectorAll('.menu-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Show notification
            showNotification(`Navigation vers: ${pageName}`, 'info');
            
            // In a real application, you would load the actual page here
            // For now, we'll just show a message
        }    

        // Quick Action Handler
        function quickAction(actionName) {
            console.log('Action rapide:', actionName);
            showNotification(`Action: ${actionName}`, 'success');
            
            // Here you would navigate to the corresponding page
            // For example: window.location.href = 'saisir-notes.html';
        }

        // View All Activities
        function viewAllActivities() {
            showNotification('Chargement de toutes les activités...', 'info');
            // Navigate to activities page
        }

        // Logout Function
        function logout() {
            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
                showNotification('Déconnexion en cours...', 'warning');
                setTimeout(() => {
                    // Redirect to login page
                    alert('Vous avez été déconnecté avec succès');
                }, 1000);
            }
        }

        // Show Notification
        function showNotification(message, type = 'info') {
            const colors = {
                success: 'var(--success)',
                danger: 'var(--danger)',
                warning: 'var(--warning)',
                info: 'var(--info)'
            };

            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${colors[type] || colors.info};
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                z-index: 9999;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Animate Circular Progress Bars
        function animateProgress() {
            const circles = document.querySelectorAll('.circular-progress');
            
            circles.forEach(circle => {
                const progress = circle.getAttribute('data-progress');
                const progressCircle = circle.querySelector('.circle-progress');
                const radius = 42;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (progress / 100) * circumference;
                
                // Animate the progress
                setTimeout(() => {
                    progressCircle.style.strokeDashoffset = offset;
                }, 100);
            });
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', () => {
            animateProgress();
            
            // Add CSS animations
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Show welcome message
            setTimeout(() => {
                showNotification('Bienvenue sur le tableau de bord administratif !', 'success');
            }, 500);
        });

        // Update real-time data (simulation)
        function updateRealTimeData() {
            // This would normally fetch data from your backend
            // For now, we'll just update the time stamps
            const activityTimes = document.querySelectorAll('.activity-time');
            activityTimes.forEach(time => {
                // You could update timestamps here
            });
        }

        // Update every minute
        setInterval(updateRealTimeData, 60000);

        // Handle responsive sidebar toggle
        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        }

        // Add mobile menu button if on mobile
        if (window.innerWidth <= 768) {
            const menuBtn = document.createElement('button');
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1001;
                background: var(--primary);
                color: white;
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 8px;
                font-size: 20px;
                cursor: pointer;
                box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
            `;
            menuBtn.onclick = toggleSidebar;
            document.body.appendChild(menuBtn);
        }







 /* page  d'administration pour ajouter les Etudiants */
 
        // Sample data
        let students = [
            { numCarte: 'ETU2024001', nom: 'KOUASSI', prenoms: 'Jean Marc', dateNaissance: '2002-05-15', lieuNaissance: 'Abidjan, CI', niveau: 'L3', specialite: 'Informatique', email: 'jean.kouassi@ufr.ci', telephone: '+225 0123456789', ip: '192.168.1.10' },
            { numCarte: 'ETU2024002', nom: 'KONÉ', prenoms: 'Aminata', dateNaissance: '2003-08-22', lieuNaissance: 'Bouaké, CI', niveau: 'L2', specialite: 'Mathématiques', email: 'aminata.kone@ufr.ci', telephone: '+225 0123456790', ip: '192.168.1.11' },
            { numCarte: 'ETU2024003', nom: 'YAO', prenoms: 'Serge Emmanuel', dateNaissance: '2001-12-10', lieuNaissance: 'Yamoussoukro, CI', niveau: 'M1', specialite: 'Physique', email: 'serge.yao@ufr.ci', telephone: '+225 0123456791', ip: '192.168.1.12' },
            { numCarte: 'ETU2024004', nom: 'DIALLO', prenoms: 'Fatoumata', dateNaissance: '2002-03-18', lieuNaissance: 'San-Pédro, CI', niveau: 'L3', specialite: 'Chimie', email: 'fatoumata.diallo@ufr.ci', telephone: '+225 0123456792', ip: '192.168.1.13' },
            { numCarte: 'ETU2024005', nom: 'BAMBA', prenoms: 'Ahmed', dateNaissance: '2003-06-25', lieuNaissance: 'Korhogo, CI', niveau: 'L1', specialite: 'Biologie', email: 'ahmed.bamba@ufr.ci', telephone: '+225 0123456793', ip: '192.168.1.14' },
            { numCarte: 'ETU2024006', nom: 'TRAORÉ', prenoms: 'Mariam', dateNaissance: '2002-09-30', lieuNaissance: 'Daloa, CI', niveau: 'L2', specialite: 'Informatique', email: 'mariam.traore@ufr.ci', telephone: '+225 0123456794', ip: '192.168.1.15' },
            { numCarte: 'ETU2024007', nom: 'KOUADIO', prenoms: 'Charles', dateNaissance: '2001-11-05', lieuNaissance: 'Abidjan, CI', niveau: 'M2', specialite: 'Mathématiques', email: 'charles.kouadio@ufr.ci', telephone: '+225 0123456795', ip: '192.168.1.16' },
            { numCarte: 'ETU2024008', nom: 'OUATTARA', prenoms: 'Awa', dateNaissance: '2003-01-20', lieuNaissance: 'Man, CI', niveau: 'L1', specialite: 'Physique', email: 'awa.ouattara@ufr.ci', telephone: '+225 0123456796', ip: '192.168.1.17' }
        ];

        let currentPage = 1;
        const itemsPerPage = 5;
        let filteredStudents = [...students];

        // Page switching
        function showPage(page) {
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            
            if (page === 'liste') {
                document.getElementById('page-liste').classList.add('active');
                document.querySelector('.toggle-btn:first-child').classList.add('active');
                renderTable();
            } else {
                document.getElementById('page-ajouter').classList.add('active');
                document.querySelector('.toggle-btn:last-child').classList.add('active');
            }
        }

        // Filter table
        function filterTable() {
            const searchValue = document.getElementById('searchInput').value.toLowerCase();
            const niveauValue = document.getElementById('niveauFilter').value;
            const specialiteValue = document.getElementById('specialiteFilter').value;

            filteredStudents = students.filter(student => {
                const matchSearch = !searchValue || 
                    student.nom.toLowerCase().includes(searchValue) ||
                    student.prenoms.toLowerCase().includes(searchValue) ||
                    student.numCarte.toLowerCase().includes(searchValue);
                
                const matchNiveau = !niveauValue || student.niveau === niveauValue;
                const matchSpecialite = !specialiteValue || student.specialite === specialiteValue;

                return matchSearch && matchNiveau && matchSpecialite;
            });

            currentPage = 1;
            renderTable();
        }

        function resetFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('niveauFilter').value = '';
            document.getElementById('specialiteFilter').value = '';
            filterTable();
        }

        // Render table
        function renderTable() {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';

            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const pageStudents = filteredStudents.slice(start, end);

            pageStudents.forEach(student => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${student.numCarte}</strong></td>
                    <td>${student.nom} ${student.prenoms}</td>
                    <td>${formatDate(student.dateNaissance)}</td>
                    <td><span class="badge badge-${student.niveau.toLowerCase()}">${student.niveau}</span></td>
                    <td>${student.specialite}</td>
                    <td>
                        <div class="action-btns">
                            <button class="btn btn-primary btn-sm" onclick="viewStudent('${student.numCarte}')">Voir</button>
                            <button class="btn btn-warning btn-sm" onclick="editStudent('${student.numCarte}')"> Modifier</button>
                            <button class="btn btn-danger btn-sm" onclick="deleteStudent('${student.numCarte}')">🗑️</button>
                        </div>
                    </td>
                `;
                tbody.appendChild(tr);
            });

            renderPagination();
        }

        // Pagination
        function renderPagination() {
            const pagination = document.getElementById('pagination');
            const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
            pagination.innerHTML = '';

            const prevBtn = document.createElement('button');
            prevBtn.textContent = '← Précédent';
            prevBtn.disabled = currentPage === 1;
            prevBtn.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderTable();
                }
            };
            pagination.appendChild(prevBtn);

            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.textContent = i;
                btn.classList.toggle('active', i === currentPage);
                btn.onclick = () => {
                    currentPage = i;
                    renderTable();
                };
                pagination.appendChild(btn);
            }

            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Suivant →';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderTable();
                }
            };
            pagination.appendChild(nextBtn);
        }

        // Form handling
        document.getElementById('studentForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                numCarte: document.getElementById('numCarte').value,
                nom: document.getElementById('nom').value.toUpperCase(),
                prenoms: document.getElementById('prenoms').value,
                dateNaissance: document.getElementById('dateNaissance').value,
                lieuNaissance: document.getElementById('lieuNaissance').value,
                niveau: document.getElementById('niveau').value,
                specialite: document.getElementById('specialite').value,
                email: document.getElementById('email').value,
                telephone: document.getElementById('telephone').value,
                ip: document.getElementById('ip').value
            };

            const mode = this.dataset.mode;
            const originalId = this.dataset.originalId;

            if (mode === 'edit' && originalId) {
                // Mode modification
                const index = students.findIndex(s => s.numCarte === originalId);
                if (index > -1) {
                    students[index] = formData;
                    showNotification('Étudiant modifié avec succès !', 'success');
                }
            } else {
                // Mode ajout
                // Vérifier si le numéro de carte existe déjà
                if (students.some(s => s.numCarte === formData.numCarte)) {
                    showNotification('Ce numéro de carte existe déjà !', 'error');
                    return;
                }
                students.push(formData);
                showNotification('Étudiant ajouté avec succès !', 'success');
            }

            filteredStudents = [...students];
            resetForm();
            
            setTimeout(() => {
                showPage('liste');
            }, 1500);
        });

        function resetForm() {
            document.getElementById('studentForm').reset();
            // Réinitialiser le mode
            document.getElementById('studentForm').dataset.mode = '';
            document.getElementById('studentForm').dataset.originalId = '';
            // Réinitialiser le titre et le bouton
            document.querySelector('.form-container h2').textContent = ' Ajouter un Nouvel Étudiant';
            document.querySelector('.form-actions .btn-success').innerHTML = ' Enregistrer l\'Étudiant';
        }

        // Actions
        function viewStudent(numCarte) {
            const student = students.find(s => s.numCarte === numCarte);
            const details = `
╔══════════════════════════════════════╗
║     DÉTAILS DE L'ÉTUDIANT           ║
╚══════════════════════════════════════╝

 N° Carte: ${student.numCarte}
 Nom: ${student.nom}
 Prénoms: ${student.prenoms}
 Date de naissance: ${formatDate(student.dateNaissance)}
 Lieu de naissance: ${student.lieuNaissance}
 Niveau: ${student.niveau}
 Spécialité: ${student.specialite}
 Email: ${student.email}
 Téléphone: ${student.telephone}
 IP: ${student.ip || 'Non définie'}
            `;
            alert(details);
        }

        function editStudent(numCarte) {
            const student = students.find(s => s.numCarte === numCarte);
            
            // Remplir le formulaire avec les données de l'étudiant
            document.getElementById('numCarte').value = student.numCarte;
            document.getElementById('ip').value = student.ip || '';
            document.getElementById('nom').value = student.nom;
            document.getElementById('prenoms').value = student.prenoms;
            document.getElementById('dateNaissance').value = student.dateNaissance;
            document.getElementById('lieuNaissance').value = student.lieuNaissance;
            document.getElementById('niveau').value = student.niveau;
            document.getElementById('specialite').value = student.specialite;
            document.getElementById('email').value = student.email;
            document.getElementById('telephone').value = student.telephone;
            document.getElementById('adresse').value = student.adresse || '';
            
            // Passer à la page d'ajout (qui devient modification)
            showPage('ajouter');
            
            // Modifier le titre et le bouton
            document.querySelector('.form-container h2').textContent = ' Modifier l\'Étudiant';
            document.querySelector('.form-actions .btn-success').innerHTML = ' Mettre à Jour';
            
            // Stocker qu'on est en mode édition
            document.getElementById('studentForm').dataset.mode = 'edit';
            document.getElementById('studentForm').dataset.originalId = numCarte;
            
            showNotification('Mode modification activé', 'info');
        }

        function deleteStudent(numCarte) {
            const student = students.find(s => s.numCarte === numCarte);
            if (confirm(` Êtes-vous sûr de vouloir supprimer cet étudiant ?\n\n${student.nom} ${student.prenoms} (${student.numCarte})\n\nCette action est irréversible !`)) {
                const index = students.findIndex(s => s.numCarte === numCarte);
                if (index > -1) {
                    students.splice(index, 1);
                    filteredStudents = [...students];
                    renderTable();
                    showNotification('Étudiant supprimé avec succès', 'success');
                }
            }
        }

        // Notification system
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Format date
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('fr-FR', options);
        }

        // Export functions
        function exportToExcel() {
            showNotification(' Export Excel en cours...', 'info');
            // Logique d'export Excel à implémenter avec une bibliothèque comme SheetJS
            setTimeout(() => {
                showNotification(' Fichier Excel téléchargé avec succès !', 'success');
            }, 1000);
        }

        function exportToPDF() {
            showNotification(' Export PDF en cours...', 'info');
            // Logique d'export PDF à implémenter avec une bibliothèque comme jsPDF
            setTimeout(() => {
                showNotification(' Fichier PDF téléchargé avec succès !', 'success');
            }, 1000);
        }

        // Add export buttons functionality
        function addExportButtons() {
            const filters = document.querySelector('.filters');
            const exportDiv = document.createElement('div');
            exportDiv.className = 'filter-group';
            exportDiv.innerHTML = `
                <label> Exporter</label>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-success btn-sm" onclick="exportToExcel()"> Excel</button>
                    <button class="btn btn-danger btn-sm" onclick="exportToPDF()"> PDF</button>
                </div>
            `;
            filters.appendChild(exportDiv);
        }

        // Initialize everything on page load
        document.addEventListener('DOMContentLoaded', function() {
            renderTable();
            addExportButtons();
            
            // Reset form when switching to add page
            const addButton = document.querySelector('.toggle-btn:last-child');
            if (addButton) {
                addButton.addEventListener('click', function() {
                    resetForm();
                });
            }
        });

        // Initialize table on load
        renderTable();       
        














        // --- Fonctions spécifiques à Gestion_Notes.html ---

// Fonction pour basculer entre les différentes pages de notes (Saisir, Consulter, Publier, Délibérations)
window.showNotesPage = function(pageId) {
    // Désactiver tous les boutons de notes
    document.querySelectorAll('.page-toggle .toggle-btn').forEach(btn => btn.classList.remove('active'));
    // Cacher tous les contenus de page de notes
    document.querySelectorAll('.page-content').forEach(page => page.style.display = 'none');
    
    // Activer le bouton et afficher la page cible
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.style.display = 'block';
        // Trouver et activer le bouton correspondant (basé sur le onclick)
        document.querySelector(`.toggle-btn[onclick*="'${pageId}'"]`).classList.add('active');
    }
};

// Fonction de simulation pour charger la liste des étudiants pour la saisie
window.chargerListeEtudiants = function() {
    const ue = document.getElementById('saisieUE').value;
    if (!ue) {
        showNotification('Veuillez sélectionner une UE d\'abord.', 'error');
        return;
    }
    
    const container = document.getElementById('saisieNotesTableContainer');
    const tableBody = document.querySelector('#saisieNotesTable tbody');
    tableBody.innerHTML = ''; // Nettoyer la table
    
    // Simuler le chargement des étudiants
    const etudiantsUE = [
        { numCarte: 'ETU24010', nom: 'KONE B.', prenoms: 'Bakary' },
        { numCarte: 'ETU24011', nom: 'ASSAMOI E.', prenoms: 'Eliane' },
        { numCarte: 'ETU24012', nom: 'ZOUZOU F.', prenoms: 'Fabrice' },
        { numCarte: 'ETU24013', nom: 'ESSIS V.', prenoms: 'Vanessa' },
    ];
    
    etudiantsUE.forEach(student => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${student.numCarte}</td>
            <td>${student.nom} ${student.prenoms}</td>
            <td><input type="number" min="0" max="40" data-type="cc"></td>
            <td><input type="number" min="0" max="60" data-type="ex"></td>
            <td data-moyenne>0/100</td>
        `;
        
        // Ajouter un écouteur pour recalculer la moyenne en direct
        const ccInput = row.querySelector('[data-type="cc"]');
        const exInput = row.querySelector('[data-type="ex"]');
        const moyenneCell = row.querySelector('[data-moyenne]');
        
        const updateMoyenne = () => {
            const cc = parseFloat(ccInput.value) || 0;
            const ex = parseFloat(exInput.value) || 0;
            const total = cc + ex;
            moyenneCell.textContent = `${total.toFixed(0)}/100`;
            moyenneCell.style.color = total >= 50 ? 'var(--success)' : 'var(--danger)';
        };
        
        ccInput.addEventListener('input', updateMoyenne);
        exInput.addEventListener('input', updateMoyenne);
    });

    document.querySelector('#saisieNotesTableContainer h3').textContent = `Saisie des Notes pour ${ue}`;
    container.style.display = 'block';
    showNotification(`Liste de ${etudiantsUE.length} étudiants chargée pour ${ue}`, 'info');
};

// Fonction de simulation d'enregistrement des notes
window.enregistrerNotes = function() {
    // Logique de validation des notes ici (toutes les notes remplies, dans les limites)
    // ...
    
    // Simulation
    showNotification('Notes enregistrées avec succès dans la base de données.', 'success');
    // Cacher la table après enregistrement (ou la réinitialiser)
    document.getElementById('saisieNotesTableContainer').style.display = 'none';
};

// Fonction de simulation pour afficher la consultation des notes
window.afficherNotesConsultees = function() {
    document.getElementById('notesConsulteesContainer').style.display = 'block';
    showNotification('Notes affichées pour la consultation.', 'info');
};

// Fonction de simulation pour la publication des résultats
window.publierResultats = function() {
    if (confirm('ATTENTION: Voulez-vous vraiment publier ces résultats ? Cette action est irréversible.')) {
        showNotification('Résultats publiés avec succès ! Notification envoyée aux étudiants.', 'success');
    }
};

// Fonction de simulation pour lancer la délibération
window.lancerDeliberation = function() {
    const niveau = document.querySelector('#page-deliberations select').value;
    if (!niveau) {
        showNotification('Veuillez sélectionner un Niveau/Semestre.', 'error');
        return;
    }
    
    showNotification(`Calcul de délibération pour ${niveau} en cours...`, 'warning');
    
    // Simulation d'un délai de calcul
    setTimeout(() => {
        document.getElementById('deliberationResultats').style.display = 'block';
        showNotification(`Délibération ${niveau} terminée avec succès !`, 'success');
    }, 2000);
};

// Fonction de simulation d'export du PV
window.exporterDeliberation = function() {
    showNotification('Exportation du Procès Verbal (PV) de délibération...', 'info');
    // Logique d'export PDF/Excel
};