
const questions = {
    easy: [
        {
            q: "Yer yuzasining taxminan necha foizini okeanlar egallaydi?",
            a: ["51%", "61%", "71%", "81%"],
            c: 2,
            e: "Okeanlar Yer yuzasining taxminan 71 foizini qoplaydi."
        },
        {
            q: "Dunyodagi eng katta okean qaysi?",
            a: ["Atlantika", "Tinch", "Hind", "Shimoliy Muz"],
            c: 1,
            e: "Tinch okeani maydoni jihatidan dunyodagi eng katta okeandir."
        },
        {
            q: "Okean suvi nima sababdan sho‘r?",
            a: ["Muzlar sababli", "Unda erigan tuzlar mavjudligi sababli", "Quyosh sababli", "Baliqlar sababli"],
            c: 1,
            e: "Daryolar tog‘ jinslaridan erigan minerallarni okeanga olib keladi."
        },
        {
            q: "Dunyodagi eng chuqur okean botiqligi qaysi?",
            a: ["Puerto-Riko", "Yava", "Mariana", "Tonga"],
            c: 2,
            e: "Mariana botig‘idagi Challenger Deep Yer okeanlarining eng chuqur ma'lum nuqtasidir."
        },
        {
            q: "Okeanlarni o‘rganuvchi fan qanday ataladi?",
            a: ["Geologiya", "Okeanologiya", "Meteorologiya", "Astronomiya"],
            c: 1,
            e: "Okeanologiya okeanlarning fizik, kimyoviy, biologik va geologik xususiyatlarini o‘rganadi."
        },
        {
            q: "Okean suvining muzlash harorati taxminan qancha?",
            a: ["0°C", "-1,9°C", "-10°C", "5°C"],
            c: 1,
            e: "O‘rtacha sho‘rlikdagi dengiz suvi taxminan -1,9°C da muzlaydi."
        },
        {
            q: "Dunyodagi eng kichik okean qaysi?",
            a: ["Hind", "Atlantika", "Janubiy", "Shimoliy Muz"],
            c: 3,
            e: "Shimoliy Muz okeani maydoni jihatidan eng kichik okeandir."
        },
        {
            q: "Okean suvining harakatlanishiga nima sabab bo‘ladi?",
            a: ["Faqat baliqlar", "Shamol, harorat va zichlik farqi", "Faqat yomg‘ir", "Faqat Oy nuri"],
            c: 1,
            e: "Shamollar, harorat va sho‘rlik farqlari okean suvlarining harakatiga ta'sir qiladi."
        },
        {
            q: "Okean yuzasidagi katta suv oqimlari nima deb ataladi?",
            a: ["Daryo", "Okean oqimlari", "Sharshara", "Buloq"],
            c: 1,
            e: "Okean oqimlari katta suv massalarining ma'lum yo‘nalishda harakatlanishidir."
        },
        {
            q: "Fitoplankton nima?",
            a: ["Mayda suv o‘simliklari va fotosintez qiluvchi organizmlar", "Yirik baliq", "Dengiz qushi", "Suv osti qoyasi"],
            c: 0,
            e: "Fitoplankton suvda yashovchi, fotosintez qiladigan mikroskopik organizmlardir."
        },
        {
            q: "Marjon riflari asosan qaysi organizmlar tomonidan hosil qilinadi?",
            a: ["Dengiz yulduzlari", "Marjon poliplari", "Akulalar", "Meduzalar"],
            c: 1,
            e: "Marjon poliplari kalsiy karbonat skeletlarini hosil qilib, riflarning shakllanishida qatnashadi."
        },
        {
            q: "Okean tubidagi relyef shakllaridan biri qaysi?",
            a: ["Tog‘ tizmasi", "Materik", "Okean botiqligi", "Cho‘l"],
            c: 2,
            e: "Okean botiqliklari okean tubining juda chuqur qismlaridir."
        }
    ],

    medium: [
        {
            q: "Okean suvining sho‘rligi odatda qaysi birlikda ifodalanadi?",
            a: ["Kilometr", "PSU yoki amaliy sho‘rlik shkalasi", "Gerts", "Vatt"],
            c: 1,
            e: "Dengiz suvining sho‘rligi amaliy sho‘rlik shkalasi (PSU) yoki zamonaviy o‘lchovlarda boshqa tegishli birliklar bilan ifodalanadi."
        },
        {
            q: "Dunyo okeanining o‘rtacha sho‘rligi taxminan qancha?",
            a: ["15 PSU", "25 PSU", "35 PSU", "50 PSU"],
            c: 2,
            e: "Okean suvining o‘rtacha sho‘rligi taxminan 35 PSU ga teng."
        },
        {
            q: "Golfstrim qanday oqim hisoblanadi?",
            a: ["Sovuq oqim", "Iliq oqim", "Chuqur muz oqimi", "Daryo oqimi"],
            c: 1,
            e: "Golfstrim Atlantika okeanidagi iliq suv oqimidir."
        },
        {
            q: "Okean suvining chuqurlik ortishi bilan bosimi qanday o‘zgaradi?",
            a: ["Kamayadi", "O‘zgarmaydi", "Ortadi", "Yo‘qoladi"],
            c: 2,
            e: "Suv ustunining og‘irligi ortgani uchun chuqurlik oshgan sari bosim ham ortadi."
        },
        {
            q: "Gelgit hodisasining asosiy sababi nima?",
            a: ["Yerning magnit maydoni", "Oy va Quyoshning tortish kuchi", "Faqat shamol", "Suvning sho‘rligi"],
            c: 1,
            e: "Gelgitlar asosan Oy, shuningdek Quyosh tortish kuchi ta'sirida yuzaga keladi."
        },
        {
            q: "Termoklin nima?",
            a: ["Sho‘rlik o‘zgarmaydigan qatlam", "Harorat tez o‘zgaradigan suv qatlami", "Okean tubidagi tog‘", "Suv yuzasidagi ko‘pik"],
            c: 1,
            e: "Termoklin — chuqurlik bo‘yicha suv harorati tez kamayadigan qatlam."
        },
        {
            q: "Okean tubidagi gidrotermal manbalar ko‘pincha qayerda uchraydi?",
            a: ["Materik plyajlarida", "O‘rta okean tizmalari yaqinida", "Daryo deltalarida", "Qutb muzliklarida"],
            c: 1,
            e: "Gidrotermal manbalar ko‘pincha tektonik faol o‘rta okean tizmalari hududida uchraydi."
        },
        {
            q: "Nekton organizmlariga qaysi guruh kiradi?",
            a: ["Mustaqil suza oladigan organizmlar", "Faqat suv tubida yashovchilar", "Faqat suv o‘simliklari", "Suv yuzasidagi toshlar"],
            c: 0,
            e: "Nekton — suv oqimiga qaram bo‘lmasdan faol suza oladigan organizmlar, masalan, baliqlar va kalmarlar."
        },
        {
            q: "Benthos deb nimaga aytiladi?",
            a: ["Suv yuzasidagi organizmlarga", "Suv tubida yashovchi organizmlarga", "Havoda uchuvchi hayvonlarga", "Daryo oqimiga"],
            c: 1,
            e: "Benthos — okean va dengizlar tubida yashaydigan organizmlar majmuasi."
        },
        {
            q: "Okean suvining zichligiga qaysi omillar ta'sir qiladi?",
            a: ["Harorat va sho‘rlik", "Faqat yorug‘lik", "Faqat shamol", "Faqat to‘lqin balandligi"],
            c: 0,
            e: "Suv zichligi, asosan, harorat, sho‘rlik va bosimga bog‘liq."
        },
        {
            q: "El-Ninyo hodisasi qaysi okean bilan bog‘liq?",
            a: ["Hind", "Atlantika", "Tinch", "Shimoliy Muz"],
            c: 2,
            e: "El-Ninyo tropik Tinch okeanining markaziy va sharqiy qismida yuz beradigan suv harorati o‘zgarishidir."
        },
        {
            q: "Okean tubidagi cho‘kindi jinslar qanday hosil bo‘ladi?",
            a: ["Faqat vulqonlardan", "Mineral va biologik zarrachalarning to‘planishidan", "Faqat muz erishidan", "Faqat shamoldan"],
            c: 1,
            e: "Cho‘kindilar mineral zarrachalar, organizm qoldiqlari va boshqa materiallarning to‘planishi natijasida hosil bo‘ladi."
        }
    ],

    hard: [
        {
            q: "Okean suvining global termohalin aylanishi asosan qaysi omillarga bog‘liq?",
            a: ["Faqat shamol tezligiga", "Harorat va sho‘rlik tufayli zichlik farqlariga", "Faqat Oy tortishiga", "Faqat to‘lqinlarga"],
            c: 1,
            e: "Termohalin aylanish suv harorati va sho‘rligi bilan bog‘liq zichlik farqlari ta'sirida yuz beradi."
        },
        {
            q: "Ekman transporti nimani ifodalaydi?",
            a: ["Suvning faqat pastga cho‘kishini", "Shamol ta'sirida yuzaki suvning umumiy siljishini", "Dengiz tubining ko‘tarilishini", "Muzliklarning erishini"],
            c: 1,
            e: "Ekman transporti shamol va Yer aylanishi ta'sirida yuzaki suvning o‘rtacha siljishidir."
        },
        {
            q: "Upwelling hodisasi nima?",
            a: ["Chuqur suvning yuzaga ko‘tarilishi", "Yuzaki suvning muzlashi", "Dengiz sathining pasayishi", "To‘lqinning qirg‘oqqa urilishi"],
            c: 0,
            e: "Upwelling jarayonida chuqur qatlamlardagi oziqa moddalarga boy suv yuzaga ko‘tariladi."
        },
        {
            q: "Okean suvining karbonat tizimida asosiy muvozanat jarayonlari qaysi moddalar bilan bog‘liq?",
            a: ["Azot va kislorod", "CO₂, bikarbonat va karbonat ionlari", "Faqat natriy", "Vodorod va geliy"],
            c: 1,
            e: "Dengiz suvining karbonat tizimi erigan CO₂, bikarbonat va karbonat ionlari o‘rtasidagi muvozanatga asoslanadi."
        },
        {
            q: "Okean kislotalanishining asosiy sababi nima?",
            a: ["Atmosferadagi CO₂ ning okeanda erishi", "Okean tubining sovishi", "Baliqlar sonining ortishi", "Oy fazalari"],
            c: 0,
            e: "Atmosferadan yutilgan CO₂ suv bilan reaksiyaga kirishib, pH qiymatining pasayishiga olib keladi."
        },
        {
            q: "O‘rta okean tizmalari qanday geologik jarayon bilan bog‘liq?",
            a: ["Plitalarning bir-biridan uzoqlashishi", "Faqat materiklarning to‘qnashuvi", "Daryolarning qurishi", "Muzliklarning siljishi"],
            c: 0,
            e: "O‘rta okean tizmalari ko‘pincha litosfera plitalari bir-biridan uzoqlashadigan chegaralarda hosil bo‘ladi."
        },
        {
            q: "Okeanografiyada CTD qurilmasi nimalarni o‘lchaydi?",
            a: ["Rang, tovush va yorug‘lik", "Elektr o‘tkazuvchanlik, harorat va chuqurlik", "Faqat bosim", "Faqat kislorod va azot"],
            c: 1,
            e: "CTD qurilmasi elektr o‘tkazuvchanlik, harorat va chuqurlikni o‘lchaydi."
        },
        {
            q: "Okean suvining neytral zichlik sirtlari qanday maqsadda qo‘llanadi?",
            a: ["Suv massalarini zichlik xususiyatlari bo‘yicha tahlil qilishda", "To‘lqin balandligini o‘lchashda", "Baliqlarni sanashda", "Suv rangini aniqlashda"],
            c: 0,
            e: "Neytral zichlik sirtlari turli suv massalarining okeandagi joylashuvi va harakatini tahlil qilishda qo‘llanadi."
        },
        {
            q: "Koriolis kuchi Shimoliy yarimsharda harakatlanuvchi suv oqimini qaysi tomonga og‘diradi?",
            a: ["Chapga", "O‘ngga", "Faqat yuqoriga", "Og‘dirmaydi"],
            c: 1,
            e: "Yer aylanishi ta'sirida Shimoliy yarimsharda harakatlanuvchi oqimlar o‘ng tomonga og‘adi."
        },
        {
            q: "Okeanlarda kislorod minimumi zonasi nima?",
            a: ["Kislorod miqdori juda yuqori qatlam", "Erigan kislorod miqdori nisbatan past bo‘lgan qatlam", "Faqat muz ostidagi qatlam", "Suvsiz hudud"],
            c: 1,
            e: "Kislorod minimumi zonasi suv ustuni ichida erigan kislorod konsentratsiyasi past bo‘lgan qatlamdir."
        },
        {
            q: "Okean oqimlarining geostrofik muvozanati qaysi ikki kuch o‘rtasida yuzaga keladi?",
            a: ["Gravitatsiya va ishqalanish", "Bosim gradienti kuchi va Koriolis kuchi", "Magnit va elektr kuchlari", "To‘lqin va tovush kuchlari"],
            c: 1,
            e: "Geostrofik oqimda bosim gradienti kuchi Koriolis kuchi bilan muvozanatlashadi."
        },
        {
            q: "Okeanlarda haloklin nima?",
            a: ["Sho‘rlik chuqurlik bo‘yicha tez o‘zgaradigan qatlam", "Harorat doimiy qatlam", "Okean tubidagi vulqon", "Suv yuzasidagi to‘lqin"],
            c: 0,
            e: "Haloklin — chuqurlik bo‘yicha sho‘rlik sezilarli o‘zgaradigan suv qatlamidir."
        }
    ],

    expert: [
        {
            q: "Dunyo okeanidagi chuqur suv massalarining shakllanishida qaysi hududlar muhim rol o‘ynaydi?",
            a: ["Faqat tropik orollar", "Shimoliy Atlantika va Antarktida atrofidagi hududlar", "Faqat ekvator", "Faqat yopiq dengizlar"],
            c: 1,
            e: "Shimoliy Atlantika va Antarktida atrofida sovuq, zich suv massalari shakllanib, chuqur okean aylanishiga hissa qo‘shadi."
        },
        {
            q: "Sverdrup munosabati nimani tavsiflaydi?",
            a: ["Subtropik okeanlarda shamol ta'siridagi ichki oqim transportini", "Dengiz suvining muzlashini", "To‘lqinlarning sinishini", "Marjonlarning o‘sishini"],
            c: 0,
            e: "Sverdrup munosabati shamol kuchlanishi girdobining okean ichki qismidagi meridional transport bilan bog‘liqligini ifodalaydi."
        },
        {
            q: "Rossbi to‘lqinlari okeanda qanday xususiyatga ega?",
            a: ["Faqat qirg‘oqda hosil bo‘ladi", "Yer aylanishining kenglik bo‘yicha o‘zgarishi bilan bog‘liq uzun to‘lqinlardir", "Faqat tovush to‘lqinlaridir", "Suvning muzlashidan kelib chiqadi"],
            c: 1,
            e: "Rossbi to‘lqinlari Koriolis parametrining kenglik bo‘yicha o‘zgarishi bilan bog‘liq geofizik to‘lqinlardir."
        },
        {
            q: "Antarktika tub suvi qanday xususiyatga ega?",
            a: ["Juda iliq va yengil", "Juda sovuq va zich", "Chuchuk va iliq", "Faqat yuzada uchraydi"],
            c: 1,
            e: "Antarktika tub suvi juda sovuq va zich bo‘lib, okean tubi bo‘ylab tarqaladi."
        },
        {
            q: "Okean aralash qatlamining chuqurligiga qaysi omillar ta'sir qiladi?",
            a: ["Shamol, sovish va mavsumiy stratifikatsiya", "Faqat suv rangi", "Faqat dengiz hayvonlari", "Faqat Oy fazasi"],
            c: 0,
            e: "Shamol aralashuvi, sirtning sovishi va suv zichligi qatlamlanishi aralash qatlam chuqurligini belgilaydi."
        },
        {
            q: "Dengiz suvidagi Reley soni nimani tavsiflashda ishlatiladi?",
            a: ["Konvektiv beqarorlik va suyuqlikdagi issiqlik uzatishni", "Suvning sho‘rligini", "Okean tubining yoshini", "Baliqlar migratsiyasini"],
            c: 0,
            e: "Reley soni suyuqlikdagi suzib ko‘tarilish kuchlari va yopishqoqlik hamda issiqlik diffuziyasi ta'sirlarini solishtiradi."
        },
        {
            q: "Okean suvining potensial harorati nima?",
            a: ["Suvning bosim ta'sirisiz, belgilangan etalon bosimga keltirilgan harorati", "Suv yuzasidagi haqiqiy harorat", "Muzlash harorati", "Faqat laboratoriya harorati"],
            c: 0,
            e: "Potensial harorat suv zarrachasi adiabatik ravishda etalon bosimga olib kelingandagi haroratidir."
        },
        {
            q: "Okean tubidagi karbonat kompensatsiya chuqurligi (CCD) nimani bildiradi?",
            a: ["Karbonatli cho‘kindilar erishi va to‘planishi muvozanatlashadigan chuqurlik chegarasini", "Eng iliq suv qatlamini", "To‘lqinlar yetib bormaydigan joyni", "Marjonlar eng tez o‘sadigan qatlamni"],
            c: 0,
            e: "CCD atrofida kalsiy karbonatning dengiz tubiga yetib borishi va erishi muvozanatlashadi; undan chuqurda karbonat to‘planishi cheklanadi."
        },
        {
            q: "Ekman spirali qanday hodisani ifodalaydi?",
            a: ["Chuqurlik bo‘yicha oqim tezligi va yo‘nalishining o‘zgarishini", "Suvning sho‘rlanishini", "Dengiz tubining yorilishini", "Muzliklarning erishini"],
            c: 0,
            e: "Ekman spiralida shamol ta'siridagi oqim chuqurlik ortishi bilan tezligi va yo‘nalishini o‘zgartiradi."
        },
        {
            q: "Okeanografiyada baroklinik holat nimani anglatadi?",
            a: ["Zichlik sirtlari bosim sirtlariga parallel bo‘lmagan holatni", "Suv zichligi hamma joyda bir xil bo‘lishini", "Okean tubining tekisligini", "Suvning butunlay muzlashini"],
            c: 0,
            e: "Baroklinik holatda zichlik bosimga bog‘liq bo‘lib, zichlik va bosim sirtlari bir-biriga parallel bo‘lmaydi."
        },
        {
            q: "Okean suvlaridagi Lagrang yondashuvi nimani kuzatadi?",
            a: ["Muayyan suv zarrachasining vaqt davomida harakatini", "Faqat xaritadagi chuqurlikni", "Okean rangini", "Faqat shamol tezligini"],
            c: 0,
            e: "Lagrang yondashuvida alohida suv zarrachasi yoki belgilangan suv massasining harakati kuzatiladi."
        },
        {
            q: "Meridional ag‘darilish aylanishi (MOC) nimani ifodalaydi?",
            a: ["Okean suvlarining shimol-janub yo‘nalishidagi chuqur va yuzaki aylanish tizimini", "Faqat ekvatorial to‘lqinlarni", "Faqat qirg‘oq oqimlarini", "Dengiz sathining kunlik o‘zgarishini"],
            c: 0,
            e: "MOC okean suvlarining meridional yo‘nalishdagi yuzaki va chuqur qatlamlar bo‘ylab aylanishini tavsiflaydi."
        }
    ]
};

const screens = document.querySelectorAll(".screen");
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedLevel = "easy";
let answered = false;

const levelNames = {
    easy: "Oson daraja",
    medium: "O‘rta daraja",
    hard: "Qiyin daraja",
    expert: "Ekspert darajasi"
};

function showScreen(screen) {
    screens.forEach(item => item.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function updateBestScore() {
    const best = Number(localStorage.getItem("oceanBestScore")) || 0;
    document.getElementById("best-score").textContent = best;
}

document.querySelectorAll(".level").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.level);
    });
});

function startQuiz(level) {
    selectedLevel = level;
    currentQuestions = shuffle(questions[level]).slice(0, 10);
    currentIndex = 0;
    score = 0;

    document.getElementById("level-name").textContent = levelNames[level];
    document.getElementById("correct-count").textContent = "0";

    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    answered = false;

    const question = currentQuestions[currentIndex];

    document.getElementById("question-counter").textContent =
        `${currentIndex + 1} / 10`;

    document.getElementById("question-number").textContent =
        `SAVOL ${String(currentIndex + 1).padStart(2, "0")}`;

    document.getElementById("question-text").textContent = question.q;

    document.getElementById("progress-bar").style.width =
        `${(currentIndex + 1) * 10}%`;

    document.getElementById("explanation").classList.remove("show");
    document.getElementById("explanation").textContent = "";

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    question.a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        answersBox.appendChild(button);
    });

    const nextButton = document.getElementById("next-btn");
    nextButton.disabled = true;
    nextButton.textContent =
        currentIndex === 9 ? "Natijani ko‘rish →" : "Keyingi savol →";
}

function checkAnswer(selected) {
    if (answered) return;

    answered = true;

    const question = currentQuestions[currentIndex];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.c) {
            button.classList.add("correct");
        }

        if (index === selected && selected !== question.c) {
            button.classList.add("wrong");
        }
    });

    if (selected === question.c) {
        score++;
        document.getElementById("correct-count").textContent = score;
    }

    const explanation = document.getElementById("explanation");
    const status = selected === question.c
        ? "✓ To‘g‘ri javob!"
        : "✗ Noto‘g‘ri javob!";

    explanation.textContent = `${status} ${question.e}`;
    explanation.classList.add("show");

    document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (!answered) return;

    currentIndex++;

    if (currentIndex < 10) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    showScreen(resultScreen);

    const wrong = 10 - score;
    const percent = score * 10;

    document.getElementById("final-score").textContent = score;
    document.getElementById("correct-result").textContent = score;
    document.getElementById("wrong-result").textContent = wrong;
    document.getElementById("percentage").textContent = `${percent}%`;

    let title = "";
    let message = "";

    if (score === 10) {
        title = "MUKAMMAL NATIJA!";
        message = "Siz okeanologiya bo‘yicha ajoyib bilimga egasiz!";
    } else if (score >= 8) {
        title = "AJOYIB NATIJA!";
        message = "Juda yaxshi! Sizning bilimlaringiz ancha yuqori.";
    } else if (score >= 6) {
        title = "YAXSHI NATIJA!";
        message = "Yaxshi harakat! Bilimlaringizni yanada mustahkamlang.";
    } else if (score >= 4) {
        title = "YANA MASHQ QILING!";
        message = "Okeanlar haqida ko‘proq o‘rganib, yana urinib ko‘ring.";
    } else {
        title = "BOSHLASH VAQTI!";
        message = "Har bir yangi urinish sizni bilimdonroq qiladi.";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-message").textContent = message;

    const best = Number(localStorage.getItem("oceanBestScore")) || 0;

    if (score > best) {
        localStorage.setItem("oceanBestScore", score);
    }

    updateBestScore();
}

document.getElementById("retry-btn").addEventListener("click", () => {
    startQuiz(selectedLevel);
});

document.getElementById("home-btn").addEventListener("click", () => {
    updateBestScore();
    showScreen(homeScreen);
});

updateBestScore();
