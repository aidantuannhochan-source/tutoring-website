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
    "nav.about": "About",
    "nav.subjects": "Subjects",
    "nav.contact": "Contact",
    "hero.kicker": "Tutoring — Montréal",
    "hero.sub": "Math, science, and French tutoring in Montreal — from foundations to top-percentile results, in French and English.",
    "hero.cta": "Get in touch",
    "about.title": "About",
    "about.bio": "I'm an incoming Med-P student at McGill and a graduate of Collège Jean-de-Brébeuf, tutoring math, science, and French for Secondary 1–5 students. I know the Quebec curriculum from the inside — I went through it myself, at a demanding level, and I know where students typically lose marks and why. Whether you're catching up on fundamentals or refining your work toward a perfect exam score, I build sessions around what will actually move your grade, not generic review.",
    "about.discipline": "Outside tutoring, I compete in fencing, play piano and violin at a classical level, and I'm active in academic and community initiatives — the same discipline I bring to how I teach.",
    "about.cred1": "McGill University — Med-P",
    "about.cred2": "Collège Jean-de-Brébeuf alumnus",
    "about.cred3": "Languages: French & English",
    "subjects.title": "Subjects",
    "subj1.name": "Math",
    "subj1.desc": "Algebra through pre-calc, exam strategy, problem-solving under time pressure",
    "subj2.name": "Science",
    "subj2.desc": "From confusion to confidence in physics, chemistry, and biology",
    "subj3.name": "French",
    "subj3.desc": "Grammar, writing (texte descriptif, argumentatif), EUF prep",
    "subjects.note": "Rates and availability on request — send me an email.",
    "contact.title": "Contact",
    "contact.sub": "Send me an email — I usually answer the same day.",
    "contact.email": "Email me",
    "footer.tail": " — Tutoring"
  },
  fr: {
    "nav.about": "À propos",
    "nav.subjects": "Matières",
    "nav.contact": "Contact",
    "hero.kicker": "Tutorat — Montréal",
    "hero.sub": "Tutorat en mathématiques, sciences et français à Montréal — des bases solides jusqu'aux résultats d'excellence, en français et en anglais.",
    "hero.cta": "Me joindre",
    "about.title": "À propos",
    "about.bio": "Futur étudiant Med-P à McGill et diplômé du Collège Jean-de-Brébeuf, j'offre du tutorat en mathématiques, sciences et français pour les élèves du secondaire 1 à 5. Je connais le curriculum québécois de l'intérieur — je l'ai suivi moi-même, à un niveau exigeant, et je sais où les élèves perdent habituellement des points, et pourquoi. Que vous ayez besoin de consolider les bases ou de peaufiner votre travail vers la note parfaite, je construis chaque séance autour de ce qui fera vraiment progresser votre résultat.",
    "about.discipline": "En dehors du tutorat, je pratique l'escrime de compétition, joue du piano et du violon à un niveau classique, et je suis actif dans des initiatives académiques et communautaires — la même rigueur que j'apporte à l'enseignement.",
    "about.cred1": "Université McGill — Med-P",
    "about.cred2": "Diplômé du Collège Jean-de-Brébeuf",
    "about.cred3": "Langues : français et anglais",
    "subjects.title": "Matières",
    "subj1.name": "Mathématiques",
    "subj1.desc": "Algèbre au pré-calcul, stratégie d'examen, résolution de problèmes sous pression de temps",
    "subj2.name": "Sciences",
    "subj2.desc": "De la confusion à la confiance en physique, chimie et biologie",
    "subj3.name": "Français",
    "subj3.desc": "Grammaire, rédaction (texte descriptif, argumentatif), préparation EUF",
    "subjects.note": "Tarifs et disponibilités sur demande — écrivez-moi.",
    "contact.title": "Contact",
    "contact.sub": "Écrivez-moi un courriel — je réponds habituellement le jour même.",
    "contact.email": "M'écrire",
    "footer.tail": " — Tutorat"
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
