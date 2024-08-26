class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, email) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }

}

const contacts = [];

document.getElementById('mon-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const titre = document.querySelector('input[name="titre"]:checked').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const dateNaissance = document.getElementById('date').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;

    if (!titre || !nom || !prenom || !dateNaissance || !telephone || !email) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return
    }

    const newContact = new Contact(titre, nom, prenom, dateNaissance, telephone, email);

    contacts.push(newContact);

    ContactInList();

    document.getElementById('mon-form').reset();
});

function ContactInList() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = ''; 

    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.titre}</td>
            <td>${contact.nom}</td>
            <td>${contact.prenom}</td>
            <td>${contact.dateNaissance}</td>
            <td>${contact.telephone}</td>
            <td>${contact.email}</td>
        `;
        contactList.appendChild(row);
    });
}
