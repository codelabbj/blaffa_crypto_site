import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // General translations
      "Secure 256-bit SSL encryption": "Secure 256-bit SSL encryption",

      //Left side Content
      "Secure Global Payments": "Secure Global Payments",
      "Fast, secure transactions with real-time tracking": "Fast, secure transactions with real-time tracking",
      "Bank-level Security": "Bank-level Security",
      "Simple Payments": "Simple Payments",
      "Mobile Money": "Mobile Money",
      "Simple Payment": "Simple Payment",
      "Mobile Integration": "Mobile IIntegration",
      "Processing Time": "Processing Time",
      "24/7 Support": "24/7 Support",
      "Your trusted partner for secure transactions": "Your trusted partner for secure transactions",
      "Available": "Available",
      "Transaction Smoothness": "Transaction Smoothness",
      "© 2025 Yapson. All rights reserved.": "© 2025 Yapson. All rights reserved.",


      
      // Dashboard Header translations
      "DEPOSIT": "DEPOSIT",
      "WITHDRAW": "WITHDRAW",
      "Transaction History": "Transaction History",
      "Hello": "Hello",

      // AuthForm translations
      "Welcome to Yapson": "Welcome to Yapson",
      "Login": "Login",
      "Register": "Register",
      "Full Name": "Full Name",
      "Enter your full name": "Enter your full name",
      "Email": "Email",
      "Enter your email address": "Enter your email address",
      "Phone": "Phone",
      "Enter your phone number": "Enter your phone number",
      "Email or Phone": "Email or Phone",
      "Enter your email or phone": "Enter your email or phone",
      "Password": "Password",
      "Enter your password": "Enter your password",
      "Confirm Password": "Confirm Password",
      "Confirm your password": "Confirm your password",
      "Forgot Password?": "Forgot Password?",
      "Sign In": "Sign In",
      "Invalid email or phone number": "Invalid email or phone number",
      "Invalid email address": "Invalid email address",
      "Invalid phone number": "Invalid phone number",
      "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.": "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
      "Passwords do not match": "Passwords do not match",
      "Login successful! Redirecting to your dashboard...": "Login successful! Redirecting to your dashboard...",
      "Registration successful! Please login.": "Registration successful! Please login.",
      "An unexpected error occurred.": "An unexpected error occurred.",
      "if you cant see it check your Junk folder as well": "if you cant see it check your Junk folder as well",
      "Log in": "Log in",
      
      


      // Profile Page translations
      "Profile": "Profile",
      "Edit your personal information here": "Edit your personal information here",
      "Loading profile...": "Loading profile...",
      "Personal Information": "Personal Information",
      "Danger Zone": "Danger Zone",
      "Back": "Back",
      "First Name": "First Name",
      "Last Name": "Last Name",
      "E-mail": "E-mail",
      "Mobile Number": "Mobile Number",
      "Update Details": "Update Details",
      "Reset Password": "Reset Password",
      "Note": "Note",
      "To update your password, enter the old password and the new one you want to use": "To update your password, enter the old password and the new one you want to use",
      "Old Password": "Old Password",
      "New Password": "New Password",
      "Details updated successfully!": "Details updated successfully!",
      "Failed to update details": "Failed to update details",
      "You must be logged in to update your details.": "You must be logged in to update your details.",
      "You must be logged in to change your password.": "You must be logged in to change your password.",
      "New password and confirm password do not match.": "New password and confirm password do not match.",
      "Password changed successfully!": "Password changed successfully!",
      "Failed to change password": "Failed to change password",
      "Delete My Account": "Delete My Account",
      "Delete Account": "Delete Account",
      "Delete Account Permanently": "Delete Account Permanently",
      "Are you sure you want to delete your account? This action cannot be undone.": "Are you sure you want to delete your account? This action cannot be undone.",
      "Account deleted successfully!": "Account deleted successfully!",
      "Warning": "Warning",
      "This action cannot be undone.": "This action cannot be undone.",
      "All your personal data will be permanently deleted.": "All your personal data will be permanently deleted.",
      "You will lose access to all your transactions and account history.": "You will lose access to all your transactions and account history.",
      "Type your email to confirm deletion": "Type your email to confirm deletion",
      "This action will permanently delete your account and all associated data. This cannot be undone.": "This action will permanently delete your account and all associated data. This cannot be undone.",
      "All account data will be immediately erased from our systems." : "All account data will be immediately erased from our systems.",
      "Use strong, unique passwords": "Use strong, unique passwords",
      "Update your password regularly" : "Update your password regularly",

      // Transaction History translations
      "No transactions found": "No transactions found",
      "Loading transactions...": "Loading transactions...", 
      "Failed to fetch transactions": "Failed to fetch transactions",
      "You must be logged in to view transactions.": "You must be logged in to view transactions.",
      "Failed to load transactions. Please try again.": "Failed to load transactions. Please try again.",
      
      "All": "All",
      "Deposits": "Deposits",
      "Withdrawals": "Withdrawals",
      "See more": "See more",
      "Transaction details": "Transaction details",
      "Payment Method": "Payment Method",
      "For deposits": "For deposits",
      "Status": "Status",
      "Number": "Number",
      "Transaction Date": "Transaction Date",
      "Transaction ID": "Transaction ID",
      "Close": "Close",

      // Notification translations
      "Notifications": "Notifications",
      "No notifications found": "No notifications found",
      "Loading notifications...": "Loading notifications...",
      "Failed to fetch notifications": "Failed to fetch notifications",
      "You must be logged in to view notifications.": "You must be logged in to view notifications.",
      "Failed to load notifications. Please try again.": "Failed to load notifications. Please try again.",
      "Mark all as read": "Mark all as read",
      "Load more": "Load more",
      "Loading...": "Loading...",
      "Mark as read": "Mark as read",
      "Mark as unread": "Mark as unread",


      // Withdraw Page translations
      
      "Withdraw from your account": "Withdraw from your account",
      "Please fill in all fields": "Please fill in all fields",
      "Phone numbers do not match": "Phone numbers do not match",
      "Withdrawal request submitted successfully!": "Withdrawal request submitted successfully!",
      "Something went wrong. Please try again.": "Something went wrong. Please try again.",
      "Network error. Please check your connection and try again.": "Network error. Please check your connection and try again.",
     
      "Take Note": "Take Note",
      "The currency of your account must be in XOF": "The currency of your account must be in XOF",
      "CITY": "CITY",
      "STREET": "STREET",
      "ID": "ID",
      "Enter ID": "Enter ID",
      "Withdrawal Code": "Withdrawal Code",
      "Enter your withdrawal code": "Enter your withdrawal code",
      
      "Enter number": "Enter number",
      "Confirm Number": "Confirm Number",
      "Enter Confirm number": "Enter Confirm number",
      "Network": "Network",
      "Processing...": "Processing...",
      "Submit my request": "Submit my request",

      //Deposit Page translations
      
      "Make deposits to your account": "Make deposits to your account",
      "Make your deposits to your account here": "Make your deposits to your account here",
      
      "IMPORTANT": "IMPORTANT",
      "Your account currency must be in XOF.": "Your account currency must be in XOF.",
      
      "Enter your ID": "Enter your ID",
      "This is your 1xbet user ID": "This is your 1xbet user ID",
      "Amount": "Amount",
      "Enter deposit amount": "Enter deposit amount",
      
      "Enter your mobile money number": "Enter your mobile money number",
      "Your mobile money number": "Your mobile money number",
      
      "Please select a network": "Please select a network",
      
      "Proceed": "Proceed",
      "Deposit successful! Transaction ID:": "Deposit successful! Transaction ID:",
      "Failed to load necessary data. Please try again later.": "Failed to load necessary data. Please try again later.",
      "Error fetching data:": "Error fetching data:",
      "Error processing deposit:": "Error processing deposit:",
      "Failed to process deposit. Please try again.": "Failed to process deposit. Please try again.",
      "You must be logged in to access this feature.": "You must be logged in to access this feature.",
          },
  },
  fr: {
    translation: {
      // General translations
      "Secure 256-bit SSL encryption": "Chiffrement SSL 256 bits sécurisé",

      //Left side Content
      "Secure Global Payments": "Paiements mondiaux sécurisés",
      "Fast, secure transactions with real-time tracking": "Transactions rapides et sécurisées avec suivi en temps réel",
      "Bank-level Security": "Sécurité de niveau bancaire",
      "Mobile Money": "Argent mobile",
      "Simple Payment": "Paiement simple",
      "Mobile Integration": "Intégration mobile",
      "Payments made easy": "Paiements faciles",
      "24/7 Support": "Support 24/7",
      "Available": "Disponible",
      "Transaction Smoothness": "Fluidité de la transaction",
      "Processing Time": "Temps de traitement",
      "© 2025 Yapson. All rights reserved.": "© 2025 Yapson. Tous droits réservés.",


      // Dashboard Header translations
      "DEPOSIT": "DÉPOSER",
      "WITHDRAW": "RETIRER",
      "Transaction History": "Historique des transactions",
      "Logout": "Déconnexion",
      "Hello": "Bonjour",

      // AuthForm translations
      "Welcome to Yapson": "Bienvenue sur Yapson",
      "Login": "Connexion",
      "Register": "Inscription",
      "Full Name": "Nom complet",
      "Enter your full name": "Entrez votre nom complet",
      "Email": "Email",
      "Enter your email address": "Entrez votre adresse email",
      "Phone": "Téléphone",
      "Enter your phone number": "Entrez votre numéro de téléphone",
      "Email or Phone": "Email ou Téléphone",
      "Enter your email or phone": "Entrez votre email ou téléphone",
      "Password": "Mot de passe",
      "Enter your password": "Entrez votre mot de passe",
      "Confirm Password": "Confirmez le mot de passe",
      "Confirm your password": "Confirmez votre mot de passe",
      "Forgot Password?": "Mot de passe oublié ?",
      "Sign In": "Se connecter",
      "Invalid email or phone number": "Email ou numéro de téléphone invalide",
      "Invalid email address": "Adresse email invalide",
      "Invalid phone number": "Numéro de téléphone invalide",
      "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.": "Le mot de passe doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et comporter au moins 6 caractères.",
      "Passwords do not match": "Les mots de passe ne correspondent pas",
      "Login successful! Redirecting to your dashboard...": "Connexion réussie ! Redirection vers votre tableau de bord...",
      "Registration successful! Please login.": "Inscription réussie ! Veuillez vous connecter.",
      "An unexpected error occurred.": "Une erreur inattendue s'est produite.",
      "if you cant see it check your Junk folder as well": "si vous ne le voyez pas, vérifiez également votre dossier indésirable",
      "Log in": "Se connecter",

      // Profile Page translations
      "Profile": "Profil",
      "Edit your personal information here": "Modifiez vos informations personnelles ici",
      "Loading profile...": "Chargement du profil...",
      "Personal Information": "Informations personnelles",
      "Danger Zone": "Zone de danger",
      "Back": "Retour",
      "First Name": "Prénom",
      "Last Name": "Nom",
      "E-mail": "E-mail",
      "Mobile Number": "Numéro de téléphone",
      "Update Details": "Mettre à jour les informations",
      "Reset Password": "Réinitialiser le mot de passe",
      "Note": "Remarque",
      "To update your password, enter the old password and the new one you want to use": "Pour mettre à jour votre mot de passe, entrez l'ancien mot de passe et le nouveau que vous souhaitez utiliser",
      "Old Password": "Ancien mot de passe",
      "New Password": "Nouveau mot de passe",
      "Details updated successfully!": "Informations mises à jour avec succès !",
      "Failed to update details": "Échec de la mise à jour des informations",
      "You must be logged in to update your details.": "Vous devez être connecté pour mettre à jour vos informations.",
      "You must be logged in to change your password.": "Vous devez être connecté pour changer votre mot de passe.",
      "New password and confirm password do not match.": "Le nouveau mot de passe et la confirmation ne correspondent pas.",
      "Password changed successfully!": "Mot de passe changé avec succès !",
      "Failed to change password": "Échec du changement de mot de passe",
      "Delete My Account": "Supprimer mon compte",
      "Delete Account": "Supprimer compte",
      "Are you sure you want to delete your account? This action cannot be undone.": "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action ne peut pas être annulée.",
      "Account deleted successfully!": "Compte supprimé avec succès !",
      "Warning": "Avertissement",
      "This action cannot be undone.": "Cette action ne peut pas être annulée.",
      "Failed to delete account": "Échec de la suppression du compte",
      "You must be logged in to delete your account.": "Vous devez être connecté pour supprimer votre compte.",
      "You must be logged in to view your account details.": "Vous devez être connecté pour voir les détails de votre compte.",
      "All your personal data will be permanently deleted.": "Toutes vos données personnelles seront définitivement supprimées.",
      "You will lose access to all your transactions and account history.": "Vous perdrez l'accès à toutes vos transactions et à l'historique de votre compte.",
      "Type your email to confirm deletion": "Tapez votre email pour confirmer la suppression",
      "This action will permanently delete your account and all associated data. This cannot be undone.": "Cette action supprimera définitivement votre compte et toutes les données associées. Cela ne peut pas être annulé.",
      "All account data will be immediately erased from our systems." : "Toutes les données du compte seront immédiatement effacées de nos systèmes.",
      "Are you sure you want to delete your account?": "Êtes-vous sûr de vouloir supprimer votre compte ?",
      "Use strong, unique passwords": "Utilisez des mots de passe forts et uniques",
      "Update your password regularly" : "Mettez à jour votre mot de passe régulièrement",
      "Your password has been reset successfully!": "Votre mot de passe a été réinitialisé avec succès !",
      "Your password has been updated successfully!": "Votre mot de passe a été mis à jour avec succès !",
      "Your password has been updated successfully.": "Votre mot de passe a été mis à jour avec succès.",
      


      // Transaction History translations
      "No transactions found": "Aucune transaction trouvée",
      "Loading transactions...": "Chargement des transactions...",
      "Failed to fetch transactions": "Échec de la récupération des transactions",
      "You must be logged in to view transactions.": "Vous devez être connecté pour voir les transactions.",
      "Failed to load transactions. Please try again.": "Échec du chargement des transactions. Veuillez réessayer.",
      
      "All": "Tous",
      "Deposits": "Dépôts",
      "Withdrawals": "Retraits",
      "See more": "Voir plus",
      "Transaction details": "Détails de la transaction",
      "Payment Method": "Méthode de paiement",
      "For deposits": "Pour les dépôts",
      "Status": "Statut",
      "Number": "Numéro",
      "Transaction Date": "Date de la transaction",
      "Transaction ID": "ID de la transaction",
      "Close": "Fermer",

      // Notification translations
      "Notifications": "Notifications",
      "No notifications found": "Aucune notification trouvée",
      "Loading notifications...": "Chargement des notifications...",
      "Failed to fetch notifications": "Échec de la récupération des notifications",
      "You must be logged in to view notifications.": "Vous devez être connecté pour voir les notifications.",
      "Failed to load notifications. Please try again.": "Échec du chargement des notifications. Veuillez réessayer.",
      "Mark all as read": "Tout marquer comme lu",
      "Load more": "Charger plus",
      "Loading...": "Chargement...",
      "Mark as read": "Marquer comme lu",
      "Mark as unread": "Marquer comme non lu",


      // Withdraw Page translations
      "Withdraw from your account": "Retirer de votre compte",
      "Please fill in all fields": "Veuillez remplir tous les champs",
      "Phone numbers do not match": "Les numéros de téléphone ne correspondent pas",
      "Withdrawal request submitted successfully!": "Demande de retrait soumise avec succès !",
      "Something went wrong. Please try again.": "Une erreur s'est produite. Veuillez réessayer.",
      "Network error. Please check your connection and try again.": "Erreur réseau. Veuillez vérifier votre connexion et réessayer.",
      "Take Note": "Prenez note",
      "The currency of your account must be in XOF": "La devise de votre compte doit être en XOF",
      "CITY": "VILLE",
      "STREET": "RUE",
      "ID": "ID",
      "Enter ID": "Entrez l'ID",
      "Withdrawal Code": "Code de retrait",
      "Enter your withdrawal code": "Entrez votre code de retrait",
      "Enter number": "Entrez le numéro",
      "Confirm Number": "Confirmez le numéro",
      "Enter Confirm number": "Entrez le numéro de confirmation",
      "Network": "Réseau",
      "Processing...": "Traitement...",
      "Submit my request": "Soumettre ma demande",
      
      // Deposit Page translations
      
      "Make deposits to your account": "Effectuez des dépôts sur votre compte",
      "Make your deposits to your account here": "Effectuez vos dépôts sur votre compte ici",
      
      "IMPORTANT": "IMPORTANT",
      "Your account currency must be in XOF.": "La devise de votre compte doit être en XOF.",
      
      "Enter your ID": "Entrez votre ID",
      "This is your 1xbet user ID": "Ceci est votre ID utilisateur 1xbet",
      "Amount": "Montant",
      "Enter deposit amount": "Entrez le montant du dépôt",
      
      "Enter your mobile money number": "Entrez votre numéro de mobile money",
      "Your mobile money number": "Votre numéro de mobile money",
      
      "Please select a network": "Veuillez sélectionner un réseau",
      
      "Proceed": "Procéder",
      "Deposit successful! Transaction ID:": "Dépôt réussi ! ID de transaction :",
      "Failed to load necessary data. Please try again later.": "Échec du chargement des données nécessaires. Veuillez réessayer plus tard.",
      "Error fetching data:": "Erreur lors de la récupération des données :",
      "Error processing deposit:": "Erreur lors du traitement du dépôt :",
      "Failed to process deposit. Please try again.": "Échec du traitement du dépôt. Veuillez réessayer.",
      "You must be logged in to access this feature.": "Vous devez être connecté pour accéder à cette fonctionnalité.",
    },
  },
};

// Skip detection during SSR
const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'customDetector',
  lookup: () => {
    if (typeof window === 'undefined') {
      return 'en'; // Default language for SSR
    }
    // Your client-side detection logic here
    return undefined;
  }
});
i18n
.use(languageDetector)
.use(initReactI18next).init({
  resources,
  lng: 'fr', // Default language
  fallbackLng: 'fr',
  detection: {
    order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie'],
  },
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;