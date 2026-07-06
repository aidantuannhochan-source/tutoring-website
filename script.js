document.getElementById('year').textContent = new Date().getFullYear();

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
    'hero.title': '[Your Name]',
    'hero.sub': '[One plain sentence: what you tutor, for whom, and where. e.g. "Math and science tutoring for high school and CEGEP students in Montreal — in person or online."]',
    'hero.cta': 'Get in touch',
    'hero.photo': 'Your photo',
    'about.title': 'About',
    'about.bio': '[Placeholder bio — 2 to 4 sentences, written the way you’d actually say it.]',
    'about.cred1': '[Credential or program]',
    'about.cred2': '[Years of experience]',
    'about.cred3': '[Languages: English & French]',
    'subjects.title': 'Subjects',
    'subj1.name': '[Subject 1, e.g. Math]',
    'subj1.desc': '[Levels — e.g. Secondary 1–5, CEGEP calculus]',
    'subj2.name': '[Subject 2, e.g. Science]',
    'subj2.desc': '[Levels — e.g. physics and chemistry, Sec 4–5]',
    'subj3.name': '[Subject 3, e.g. French / English]',
    'subj3.desc': '[Levels — e.g. essay help, exam prep]',
    'subjects.note': '[Optional: "Rates and availability on request — send me a message."]',
    'testi.title': 'Testimonials',
    't1.quote': '"[Real quote from a student or parent — with their permission.]"',
    't1.cite': '— [First name, context: e.g. parent of a Sec 4 student]',
    't2.quote': '"[Second testimonial.]"',
    't2.cite': '— [First name]',
    'contact.title': 'Contact',
    'contact.sub': '[How you prefer to be reached and how fast you usually reply.]',
    'contact.email': 'Email me',
    'contact.call': 'Call or text',
    'footer.tail': ' — Tutoring'
  },
  fr: {
    'nav.about': 'À propos',
    'nav.subjects': 'Matières',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'hero.title': '[Votre nom]',
    'hero.sub': '[Une phrase simple : ce que vous enseignez, à qui, et où. p. ex. « Tutorat en maths et en sciences pour élèves du secondaire et du cégep à Montréal — en personne ou en ligne. »]',
    'hero.cta': 'Me joindre',
    'hero.photo': 'Votre photo',
    'about.title': 'À propos',
    'about.bio': '[Courte bio — 2 à 4 phrases, écrites comme vous le diriez vraiment.]',
    'about.cred1': '[Diplôme ou programme]',
    'about.cred2': '[Années d’expérience]',
    'about.cred3': '[Langues : français et anglais]',
    'subjects.title': 'Matières',
    'subj1.name': '[Matière 1, p. ex. Mathématiques]',
    'subj1.desc': '[Niveaux — p. ex. secondaire 1 à 5, calcul au cégep]',
    'subj2.name': '[Matière 2, p. ex. Sciences]',
    'subj2.desc': '[Niveaux — p. ex. physique et chimie, sec. 4–5]',
    'subj3.name': '[Matière 3, p. ex. Français / Anglais]',
    'subj3.desc': '[Niveaux — p. ex. aide à la rédaction, préparation aux examens]',
    'subjects.note': '[Facultatif : « Tarifs et disponibilités sur demande — écrivez-moi. »]',
    'testi.title': 'Témoignages',
    't1.quote': '« [Citation réelle d’un élève ou d’un parent — avec sa permission.] »',
    't1.cite': '— [Prénom, contexte : p. ex. parent d’un élève de sec. 4]',
    't2.quote': '« [Deuxième témoignage.] »',
    't2.cite': '— [Prénom]',
    'contact.title': 'Contact',
    'contact.sub': '[Comment vous joindre et votre délai de réponse habituel.]',
    'contact.email': 'M’écrire',
    'contact.call': 'Appeler ou texter',
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
