/**
 * @fileoverview Script pour gérer les champs de formulaire et les interactions utilisateur
 * @version 1.0.0
 * @author Yassir BOULOUIHA GNAOUI
 */


// -------------------- Prénom --------------------
const prenomField = document.getElementById("prenom");
const lettersContainer = document.getElementById("letters-container");
const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞ".split('');  // Toutes les lettres de l'alphabet + caractères accentués

// Dynamically create buttons for all letters
allLetters.forEach(letter => {
    const button = document.createElement('button');
    button.classList.add('letter-btn');
    button.textContent = letter;
    button.addEventListener('click', function () {
        prenomField.value += letter;
        shuffleButtons();
    });
    lettersContainer.appendChild(button);
});

document.getElementById("clearPrenom").addEventListener('click', function() {
    nomField.value = '';
});

function shuffleButtons() {
    const buttons = Array.from(lettersContainer.children);
    for (let i = buttons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]]; // Swap positions
    }
    buttons.forEach(button => {
        lettersContainer.appendChild(button); // Re-attach buttons in new order
    });
}

// -------------------- Nom --------------------
const nomField = document.getElementById("nom");
const alphabetSelect = document.getElementById("alphabet");

// Populate the select with letters
allLetters.forEach(letter => {
    const option = document.createElement('option');
    option.value = letter;
    option.textContent = letter;
    alphabetSelect.appendChild(option);
});

document.getElementById("addLetter").addEventListener('click', function() {
    const selectedLetter = alphabetSelect.value;
    nomField.value += selectedLetter;
    shuffleSelectOptions();
});

document.getElementById("clearNom").addEventListener('click', function() {
    prenomField.value = '';
});

function shuffleSelectOptions() {
    let options = Array.from(alphabetSelect.options);
    for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    options.forEach(option => {
        alphabetSelect.appendChild(option);
    });
}

// -------------------- Email --------------------
const emailField = document.getElementById("email");
const emailError = document.getElementById("emailError");

// Fonction de validation des règles
function validateEmail() {
    const emailValue = emailField.value;

    // Si @, . et domaine sont présents, désactiver le listener
    if (emailValue.includes('@') && emailValue.includes('.') && emailValue.split('@')[1].includes('.')
        && emailValue.includes('-')) {
        emailField.removeEventListener('input', validateEmail);
        emailError.style.visibility = 'hidden'; // Cacher les erreurs si toutes les conditions sont respectées
        return;
    }

    // Le domaine doit être '.com' avant le '@'
    if (emailValue.includes('@') && !emailValue.includes('.com')) {
        emailError.textContent = "Le domaine doit être '.com' avant d'entrer le symbole '@'.";
        emailError.style.visibility = 'visible';
        alert("Le domaine doit être '.com' avant d'entrer le symbole '@'.")
        emailField.value = '';  // Réinitialisation du champ
        return;
    }

    // Le caractère '.' doit être saisi après 3 caractères dans le nom d'utilisateur
    if (emailValue.includes('.') && emailValue.split('@')[0].indexOf('.') < 3) {
        emailError.textContent = "Le '.' doit être saisi après 3 caractères dans le nom d'utilisateur.";
        alert("Le '.' doit être saisi après 3 caractères dans le nom d'utilisateur.")
        emailError.style.visibility = 'visible';
        emailField.value = '';  // Réinitialisation du champ
        return;
    }

    // Le domaine ne peut pas avoir plus de 3 lettres avant le '.'
    if (emailValue.includes('@') && emailValue.split('@')[1].split('.')[0].length > 3) {
        emailError.textContent = "Le domaine ne peut pas avoir plus de 3 lettres avant le '.'.";
        alert("Le domaine ne peut pas avoir plus de 3 lettres avant le '.'.")
        emailError.style.visibility = 'visible';
        emailField.value = '';  // Réinitialisation du champ
        return;
    }

    // Le domaine doit contenir un '-' avant le '.'
    if (emailValue.includes('@') && !emailValue.split('@')[1].includes('-')) {
        emailError.textContent = "Le domaine doit contenir un '-' avant le '.'.";
        alert("Le domaine doit contenir un '-' avant le '.'.")
        emailError.style.visibility = 'visible';
        emailField.value = '';  // Réinitialisation du champ
        return;
    }

    // Si aucune erreur, cacher le message d'erreur
    emailError.style.visibility = 'hidden';
}

// Vérifier l'état du champ pour réactiver le listener si le champ devient vide
function checkIfEmpty() {
    if (emailField.value === '') {
        emailField.addEventListener('input', validateEmail); // Réactiver le listener si le champ est vide
        emailError.style.visibility = 'hidden'; // Cacher l'erreur si le champ est vide
    }
}

// Ajouter un listener pour surveiller le champ et réactiver le listener `validateEmail` lorsque le champ est vide
emailField.addEventListener('input', checkIfEmpty);

// Initialiser le listener `validateEmail`
emailField.addEventListener('input', validateEmail);

// -------------------- Message --------------------
// Suppression aléatoire de caractères
// -------------------- Message --------------------
const messageField = document.getElementById('message');

// Ajout de l'écouteur pour le champ message
messageField.addEventListener('input', function () {
    // 20% de chance d'effacer un caractère
    if (Math.random() < 0.35) {
        // Supprimer le dernier caractère du message
        messageField.value = messageField.value.substring(0, messageField.value.length - 1);
    }
});

// -------------------- Phone Number --------------------
// Assurez-vous que le modèle Handtrack.js est chargé
let model;

handTrack.load().then(loadedModel => {
    model = loadedModel;
});

const video = document.getElementById('video');
const countdownElement = document.getElementById('countdown');
const phoneNumberField = document.getElementById('phoneNumber');
const startGameButton = document.getElementById('startGame');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const numberInput = document.getElementById('numberInput');

// Initialisation de la caméra
function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.style.display = 'block';
        })
        .catch(err => {
            console.error('Erreur d\'accès à la caméra', err);
        });
}

// Démarrage du jeu avec un compte à rebours
function startCountdown() {
    let countdown = 3;
    countdownElement.textContent = countdown;
    countdownElement.style.display = 'block';
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.style.display = 'none';
            startGame();
        }
    }, 1000);
}

// Fonction qui démarre le jeu
function startGame() {
    // Tirage aléatoire pour choisir "pierre", "feuille" ou "ciseaux"
    const choices = ['pierre', 'feuille', 'ciseaux'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`Le tirage est : ${randomChoice}`);

    // Détection du geste
    detectHandGesture(randomChoice);
}

// Détecter les gestes de la main
function detectHandGesture(randomChoice) {
    model.detect(video).then(predictions => {
        // S'il n'y a aucune main détectée, recommencer
        if (predictions.length === 0) {
            detectHandGesture(randomChoice);
            return;
        }

        // Sélectionner la première prédiction de la main
        const hand = predictions[0];
        const userChoice = interpretGesture(hand);

        // Comparer le geste avec le tirage
            const result = compareGestures(randomChoice, userChoice);
        alert(result + " Vous avez fait " + userChoice + " Le programme a fait " + randomChoice );
        if (result === 'Gagné') {
            addDigitToPhone();
        }else if (result === 'Perdu'){
            alert("Vous avez perdu le numéro de télephone est réinitialisé");
            phoneNumberField.value = '';
        }
        stopCamera();

    });
}

// Interpréter le geste détecté
function interpretGesture(hand) {
    if (hand.label === 'open') {
        return 'feuille'; // Main ouverte = feuille
    } else if (hand.label === 'closed') {
        return 'pierre'; // Poing fermé = pierre
    } else if (hand.label === 'point') {
        return 'ciseaux'; // Index pointé = ciseaux
    }
    return '';
}

// Comparer le geste avec le tirage aléatoire
function compareGestures(randChoice, userChoice) {
    const resultMap = {
        pierre: { pierre: 'Égalité', feuille: 'Gagné', ciseaux: 'Perdu' },
        feuille: { pierre: 'Perdu', feuille: 'Égalité', ciseaux: 'Gagné' },
        ciseaux: { pierre: 'Gagné', feuille: 'Perdu', ciseaux: 'Égalité' }
    };
    return resultMap[randChoice][userChoice];
}

// Ajouter un chiffre au numéro de téléphone
function addDigitToPhone() {
    const currentDigit = numberInput.value;
    phoneNumberField.value += currentDigit;
    alert(`Le chiffre ${currentDigit} a été ajouté au numéro.`);
}

function stopCamera() {
    if (video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop()); // Arrêter tous les tracks vidéo
        video.srcObject = null; // Déconnecter la vidéo du flux
        video.style.display = 'none'; // Cacher la vidéo
    }
}

// Gestion des boutons pour incrémenter et décrémenter le chiffre
incrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value);
    if (currentValue < 9) {
        numberInput.value = currentValue + 1;
    }
});

decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(numberInput.value);
    if (currentValue > 0) {
        numberInput.value = currentValue - 1;
    }
});

// Lancer le jeu lorsque l'utilisateur clique sur "Ajouter un Chiffre"
startGameButton.addEventListener('click', () => {
    startCamera();
    startCountdown();
});


// -------------------- Vérification des champs --------------------

// Sélectionner les champs à vérifier

const phoneField = document.getElementById("phoneNumber");
const checkboxField = document.getElementById("cocherTousLesChamps");

// Fonction pour vérifier si tous les champs sont remplis
function verifyFields() {
    // Vérifier les champs obligatoires
    if (nomField.value.trim() === "" || prenomField.value.trim() === "" ||
        emailField.value.trim() === "" || phoneField.value.trim() === "" ||
        messageField.value.trim() === "" || !checkboxField.checked) {

        // Si un champ est vide ou la checkbox n'est pas cochée
        alert("Tous les champs doivent être remplis");
        return false;  // Empêche l'envoi du formulaire
    }
    return true;  // Si tous les champs sont remplis, retourner true
}

// -------------BOUTON ENVOYER--------------
// Sélectionner le bouton
const envoyerButton = document.getElementById('envoyer');
// Vitesse de déplacement initiale
let speedX = 2;
let speedY = 2;

// Position initiale du bouton
let posX = 0;
let posY = 0;

// Fonction pour déplacer le bouton
function moveButton() {
    // Calculer la largeur et la hauteur de la fenêtre visible (viewport)
    const maxWidth = 450; // Largeur de la fenêtre moins la largeur du bouton
    const maxHeight = window.innerHeight - envoyerButton.offsetHeight; // Hauteur de la fenêtre moins la hauteur du bouton

    // Mettre à jour la position du bouton
    posX += speedX;
    posY += speedY;

    // Si le bouton atteint les bords de la fenêtre, changer de direction
    // Vérifier si le bouton dépasse à droite (posX + offsetWidth) ou à gauche (posX)
    if (posX <= 0 || posX >= maxWidth) {
        speedX = -speedX; // Inverser la direction horizontale
    }

    // Vérifier si le bouton dépasse en haut ou en bas de la fenêtre
    if (posY <= 0 || posY >= maxHeight) {
        speedY = -speedY; // Inverser la direction verticale
    }

    // Appliquer la position calculée au bouton en utilisant transform
    envoyerButton.style.transform = `translate(${posX}px, ${posY}px)`;

    // Continuer à déplacer le bouton
    requestAnimationFrame(moveButton);
}

// Ajouter l'effet d'accélération au survol
envoyerButton.addEventListener('mouseenter', () => {
    speedX *= 2;  // Double la vitesse quand la souris entre
    speedY *= 2;
});

envoyerButton.addEventListener('mouseleave', () => {
    speedX /= 2;  // Rétablit la vitesse normale quand la souris quitte
    speedY /= 2;
});

// Lancer le déplacement du bouton
moveButton();

// -------------------- Bouton envoyer --------------------

// Ajouter l'événement de validation à l'envoi
envoyerButton.addEventListener('click', (event) => {
    // Lancer la vérification des champs
    if (!verifyFields()) {
        event.preventDefault();  // Empêcher l'envoi si les champs ne sont pas valides
    } else {
        // Si tous les champs sont valides, continuer avec l'envoi du mail
        const subject = encodeURIComponent("J'ai réussi a soumettre votre formulaire");
        const body = encodeURIComponent("J'ai réussi a vous envoyer un message !");
        window.location.href = `mailto:yassir.boulouiha.iut@gmail.com?subject=${subject}&body=${body}`;
    }
});
