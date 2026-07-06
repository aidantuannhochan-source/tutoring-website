document.getElementById('year').textContent = new Date().getFullYear();

/* Email address assembled at click time so harvesting bots that scan the
   raw HTML/JS for mailto: or user@domain patterns never see it. */
const EMAIL_USER = 'aidan.tutoplus';   // part before the @
const EMAIL_DOMAIN = 'gmail.com';
document.getElementById('emailLink').addEventListener('click', function (e) {
  e.preventDefault();
  location.href = 'mailto:' + EMAIL_USER + '@' + EMAIL_DOMAIN + '?subject=Tutoring';
});

/* Visible email text, injected at load so it never appears in the raw HTML */
const emailText = document.getElementById('emailText');
emailText.textContent = EMAIL_USER + '@' + EMAIL_DOMAIN;
emailText.addEventListener('click', function (e) {
  e.preventDefault();
  location.href = 'mailto:' + EMAIL_USER + '@' + EMAIL_DOMAIN + '?subject=Tutoring';
});

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

/* ---- Language toggle (EN / FR) ---- */

const I18N = {
  en: {
    'nav.about': 'About',
    'nav.subjects': 'Subjects',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'hero.kicker': 'Tutoring — Montréal',
    'hero.sub': 'Math, science, and French tutoring for Secondary 1–5 students in Montreal.',
    'hero.cta': 'Get in touch',
    'hero.photo': 'Your photo',
    'about.title': 'About',
    'about.bio': 'I’m a Med-P student at McGill University and a graduate of Collège Jean-de-Brébeuf. I tutor math, science, and French for Secondary 1–5 students, drawing on my own experience with the Quebec curriculum to help you build real understanding, not just memorize answers.',
    'about.cred1': 'McGill University — Med-P',
    'about.cred2': 'Collège Jean-de-Brébeuf alumnus',
    'about.cred3': 'Languages: French & English',
    'subjects.title': 'Subjects',
    'subj1.name': 'Math',
    'subj1.desc': 'Secondary 1–5',
    'subj2.name': 'Science',
    'subj2.desc': 'Secondary 1–5',
    'subj3.name': 'French',
    'subj3.desc': 'Secondary 1–5',
    'subjects.note': 'Rates and availability on request — send me an email.',
    'testi.title': 'Testimonials',
    'testi.soon': 'Testimonials coming soon — check back after my first few sessions!',
    'contact.title': 'Contact',
    'contact.sub': 'Send me an email — I usually answer the same day.',
    'contact.email': 'Email me',
    'footer.tail': ' — Tutoring'
  },
  fr: {
    'nav.about': 'À propos',
    'nav.subjects': 'Matières',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'hero.kicker': 'Tutorat — Montréal',
    'hero.sub': 'Tutorat en mathématiques, sciences et français pour les élèves du secondaire 1 à 5 à Montréal.',
    'hero.cta': 'Me joindre',
    'hero.photo': 'Votre photo',
    'about.title': 'À propos',
    'about.bio': 'Je suis étudiant en Med-P à l’Université McGill et diplômé du Collège Jean-de-Brébeuf. Je donne du tutorat en mathématiques, sciences et français pour les élèves du secondaire 1 à 5, en misant sur mon expérience du curriculum québécois pour vous aider à vraiment comprendre la matière, pas seulement mémoriser.',
    'about.cred1': 'Université McGill — Med-P',
    'about.cred2': 'Diplômé du Collège Jean-de-Brébeuf',
    'about.cred3': 'Langues : français et anglais',
    'subjects.title': 'Matières',
    'subj1.name': 'Mathématiques',
    'subj1.desc': 'Secondaire 1 à 5',
    'subj2.name': 'Sciences',
    'subj2.desc': 'Secondaire 1 à 5',
    'subj3.name': 'Français',
    'subj3.desc': 'Secondaire 1 à 5',
    'subjects.note': 'Tarifs et disponibilités sur demande — écrivez-moi.',
    'testi.title': 'Témoignages',
    'testi.soon': 'Témoignages à venir — revenez après mes premières séances!',
    'contact.title': 'Contact',
    'contact.sub': 'Écrivez-moi un courriel — je réponds habituellement le jour même.',
    'contact.email': 'M’écrire',
    'footer.tail': ' — Tutorat'
  }
};

const langToggle = document.getElementById('langToggle');

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = I18N[lang][el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

langToggle.addEventListener('click', () => {
  setLang(document.documentElement.lang === 'en' ? 'fr' : 'en');
});

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
if (saved === 'fr') setLang('fr');
