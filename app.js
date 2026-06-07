const vaccines = [
  {
    name: "אבעבועות שחורות",
    page: "smallpox.html",
    category: ["נגיפי", "היסטורי"],
    year: "1796",
    type: "חיסון חי היסטורי על בסיס Vaccinia",
    key: "אדוארד ג׳נר",
    etymology: "Vaccine מן הלטינית vacca — פרה; Variolae Vaccinae — אבעבועות של פרות.",
    summary: "נקודת הפתיחה הסמלית של החיסון המודרני. ג׳נר השתמש בחומר מאבעבועות הבקר כדי להגן מפני אבעבועות שחורות.",
    details: "המחלה הייתה מן הקטלניות בתולדות האנושות. החיסון הוביל בהדרגה למבצעי חיסון המוניים, מעקב אפידמיולוגי, ובסופו של דבר להכחדה עולמית שהוכרזה בשנת 1980."
  },
  {
    name: "כלבת",
    page: "rabies.html",
    category: ["נגיפי", "היסטורי"],
    year: "1885",
    type: "חיסון מוחלש/היסטורי",
    key: "לואי פסטר",
    etymology: "Rabies קשור לשורש לטיני שמשמעותו זעם או טירוף, בשל הופעת המחלה.",
    summary: "אחד החיסונים המפורסמים של פסטר, שסימן מעבר מחיסון אמפירי לפיתוח מעבדתי.",
    details: "החיסון לכלבת היה מהפכני משום שניתן לאחר חשיפה, לפני הופעת המחלה הקטלנית. הוא חיזק את מעמד המיקרוביולוגיה כבסיס לרפואה מונעת."
  },
  {
    name: "דיפתריה",
    page: "diphtheria.html",
    category: ["חיידקי", "היסטורי"],
    year: "1920s",
    type: "טוקסואיד",
    key: "אמיל פון בהרינג ואחרים",
    etymology: "Diphtheria מן היוונית diphthera — עור או קרום, בגלל הקרום בגרון.",
    summary: "חיסון המבוסס על רעלן מנוטרל של החיידק Corynebacterium diphtheriae.",
    details: "רעיון הטוקסואיד חשוב: לא חייבים להציג לגוף את החיידק כולו, אלא אפשר ללמד אותו לזהות רעלן מרכזי של המחלה."
  },
  {
    name: "טטנוס",
    page: "tetanus.html",
    category: ["חיידקי"],
    year: "1920s",
    type: "טוקסואיד",
    key: "גסטון רמון ואחרים",
    etymology: "Tetanus מן היוונית tetanos — מתיחה או קשיון.",
    summary: "חיסון נגד רעלן של Clostridium tetani, החיידק הגורם לנעילת לסת ועוויתות קשות.",
    details: "המחלה אינה עוברת מאדם לאדם; לכן חיסון אישי חשוב במיוחד. ההגנה מבוססת על נוגדנים נגד הרעלן."
  },
  {
    name: "פוליו",
    page: "polio.html",
    category: ["נגיפי", "היסטורי"],
    year: "1950s",
    type: "מומת / חי מוחלש",
    key: "יונאס סאלק ואלברט סייבין",
    etymology: "Polio קיצור של Poliomyelitis: מן היוונית polios — אפור, myelos — חוט השדרה.",
    summary: "אחד מסיפורי ההצלחה הגדולים של החיסון במאה העשרים.",
    details: "חיסוני הפוליו הפחיתו דרמטית שיתוק ילדים בעולם. קיימים חיסון מומת בזריקה וחיסון חי מוחלש דרך הפה, לכל אחד יתרונות ואתגרים."
  },
  {
    name: "חצבת",
    page: "measles.html",
    category: ["נגיפי"],
    year: "1963",
    type: "חי מוחלש",
    key: "ג׳ון אנדרס ואחרים",
    etymology: "Measles קשור כנראה למילים גרמאניות המתארות כתמים או נגעים.",
    summary: "חיסון מרכזי בילדות, לרוב כחלק מ־MMR.",
    details: "חצבת מידבקת מאוד ועלולה לגרום לסיבוכים. החיסון החי המוחלש יוצר חסינות חזקה ומתמשכת אצל רוב המתחסנים."
  },
  {
    name: "הפטיטיס B",
    page: "hepatitis-b.html",
    category: ["נגיפי", "מודרני"],
    year: "1980s",
    type: "רקומביננטי",
    key: "ברוך בלומברג ואחרים",
    etymology: "Hepatitis: hepar — כבד; itis — דלקת.",
    summary: "מן החיסונים הראשונים שיוצרו בטכנולוגיה רקומביננטית.",
    details: "החיסון מציג חלבון מעטפת של הנגיף, ללא הנגיף השלם. הוא מסייע במניעת דלקת כבד כרונית וסרטן כבד הקשור ל־HBV."
  },
  {
    name: "HPV",
    page: "hpv.html",
    category: ["נגיפי", "מודרני"],
    year: "2006",
    type: "חלקיקים דמויי נגיף",
    key: "הרלד צור האוזן וחוקרים נוספים",
    etymology: "Human Papillomavirus: papilloma — נגע דמוי פטמה.",
    summary: "חיסון שמונע זיהומים בזנים של HPV הקשורים לסרטן צוואר הרחם וסרטנים נוספים.",
    details: "החיסון אינו מכיל חומר גנטי נגיפי פעיל, אלא חלקיקים דמויי נגיף המעוררים תגובה חיסונית יעילה."
  },
  {
    name: "COVID-19 mRNA",
    page: "mrna.html",
    category: ["נגיפי", "מודרני"],
    year: "2020",
    type: "mRNA",
    key: "קאריקו, וייסמן וחוקרים רבים",
    etymology: "mRNA: messenger RNA — RNA שליח, מולקולה הנושאת הוראות לייצור חלבון.",
    summary: "שימוש רחב ראשון בטכנולוגיית mRNA בקנה מידה עולמי.",
    details: "החיסון נותן לתאים הוראות זמניות לייצר חלבון נגיפי, כדי שמערכת החיסון תלמד לזהות אותו. ה־mRNA אינו נשאר קבוע בגוף ואינו משנה DNA."
  }
];

const timeline = [
  { year: "לפני 1796", title: "וריאולציה", text: "חשיפה מבוקרת לחומר מאבעבועות שחורות, שקדמה לחיסון המודרני אך הייתה מסוכנת יותר." },
  { year: "1796", title: "ניסוי ג׳נר", text: "אדוארד ג׳נר משתמש בחומר מאבעבועות הבקר להגנה מפני אבעבועות שחורות." },
  { year: "1885", title: "פסטר וכלבת", text: "חיסון הכלבת מדגים עידן חדש של חיסונים המבוססים על מעבדה ומיקרוביולוגיה." },
  { year: "1920s", title: "טוקסואידים", text: "פיתוח חיסונים נגד רעלנים, כגון דיפתריה וטטנוס." },
  { year: "1950s", title: "פוליו", text: "סאלק וסייבין מפתחים חיסוני פוליו שהופכים לסמל של רפואה מונעת." },
  { year: "1980", title: "הכחדת אבעבועות שחורות", text: "ארגון הבריאות העולמי מכריז על הכחדת המחלה." },
  { year: "1980s", title: "חיסונים רקומביננטיים", text: "הפטיטיס B מסמן מעבר חשוב להנדסה גנטית בחיסונים." },
  { year: "2020", title: "mRNA", text: "חיסוני mRNA נגד COVID-19 נכנסים לשימוש רחב." }
];

const cardsEl = document.getElementById("vaccineCards");
const timelineEl = document.getElementById("timelineList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function renderTimeline() {
  timelineEl.innerHTML = timeline.map(item => `
    <article class="timeline-item">
      <div class="year">${item.year}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
}

function renderCards(filter = "all") {
  const filtered = filter === "all" ? vaccines : vaccines.filter(v => v.category.includes(filter));

  cardsEl.innerHTML = filtered.map(v => `
    <article class="card" data-index="${vaccines.indexOf(v)}">
      <span class="badge">${v.type}</span>
      <div>
        <h3>${v.name}</h3>
        <p>${v.summary}</p>
      </div>
      <div class="meta"><span>${v.year}</span><span>${v.key}</span></div>
    </article>
  `).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => openVaccine(Number(card.dataset.index)));
  });
}

function openVaccine(index) {
  const v = vaccines[index];
  modalContent.innerHTML = `
    <p class="eyebrow">${v.year}</p>
    <h2>${v.name}</h2>
    <p>${v.summary}</p>
    <div class="detail-grid">
      <div><strong>סוג חיסון</strong>${v.type}</div>
      <div><strong>דמות מפתח</strong>${v.key}</div>
      <div><strong>אטימולוגיה</strong>${v.etymology}</div>
      <div><strong>קטגוריות</strong>${v.category.join(" · ")}</div>
    </div>
    <h3>רקע מורחב</h3>
    <p>${v.details}</p>
    <a class="button primary read-more" href="${v.page}">פתח דף מחקר מלא</a>
  `;
  modal.classList.add("show");
}

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderCards(chip.dataset.filter);
  });
});

closeModal.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });

renderTimeline();
renderCards();
