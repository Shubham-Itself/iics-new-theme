const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const subjectButtonsDiv = document.getElementById("subject-buttons");

const subjects = [
  "Admission Process",
  "Courses",
  "Mentors",
  "Careers",
  "Live Projects",
  "Industry Associations",
  "Apprenticeship"
];

const responses = [
    {
        key: "Ceo",
        keywords: ["Ceo", "ceo"],
        response: `
          <p>The CEO of Indian Institute Of Creative Skills is Dr. Mohit Soni</p>
         `
      },
      {
        key: "Hi",
        keywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon"],
        response: `
          <p>Hi, How can i help you?</p>
         `
      },
  {
    key: "Admission Process",
    keywords: ["admission", "apply", "entrance", "fees", "support", "process"],
    response: `
      <p>Here is info about the admission process:</p>
      <ul>
        <li><a href="admission-process.html">How to Apply</a></li>
        <li><a href="admission-process.html#eligibilityCriteria">Eligibility Criteria</a></li>
        <li><a href="admission-process.html">Entrance Process</a></li>
        // <li><a href="/fees&studentSupport">Fees & Support</a></li>
      </ul>`
  },
  {
    key: "Design in Animation & Gaming",
    keywords: ["animation", "gaming", "game design", "3d modeling"],
    response: `
      <p><strong>Design in Animation & Gaming</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in 3D modeling, animation, game design</li>
        <li>✔ No technical experience required</li>
      </ul>
    `
  },
  {
    key: "Digital Content Creation & Media Management",
    keywords: ["digital media", "content creation", "social media", "branding"],
    response: `
      <p><strong>Digital Content Creation & Media Management</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in content, social media, storytelling</li>
        <li>✔ Creative mindset, no prior experience needed</li>
      </ul>
    `
  },
  {
    key: "Sound Design & Music Video Production",
    keywords: ["sound design", "music production", "music video", "audio"],
    response: `
      <p><strong>Sound Design & Music Video Production</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in music, audio, sound design</li>
        <li>✔ No prior training required</li>
      </ul>
    `
  },
  {
    key: "Event Planning & Management",
    keywords: ["event planning", "event management", "live events", "hospitality"],
    response: `
      <p><strong>Event Planning & Management</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in events, hospitality, entertainment</li>
        <li>✔ No experience needed, just creativity & drive</li>
      </ul>
    `
  },
  {
    key: "Hair, Makeup & Prosthetics",
    keywords: ["makeup", "hair", "prosthetics", "beauty", "special effects"],
    response: `
      <p><strong>Hair, Makeup & Prosthetics</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in beauty, special effects, transformation</li>
        <li>✔ Creativity and steady hands, no training needed</li>
      </ul>
    `
  },
  {
    key: "Costume Designing",
    keywords: ["costume", "fashion", "design", "character", "textiles"],
    response: `
      <p><strong>Costume Designing</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in fashion, character-driven design</li>
        <li>✔ Passion for storytelling through fabric</li>
      </ul>
    `
  },
  {
    key: "PR & Journalism",
    keywords: [ "public relations", "journalism", "media", "communication"],
    response: `
      <p><strong>PR & Journalism</strong></p>
      <ul>
        <li>✔ 12th grade pass from a recognized board</li>
        <li>✔ Interest in media, communication, storytelling</li>
        <li>✔ No experience needed, just curiosity & passion</li>
      </ul>
    `
  },

  {
    key: "Courses",
    keywords: ["course", "program", "degree", "study", "field"],
    response: `
      <p>Here's a list of all courses at IICS:</p>
      <ul>
       <li><a href="bachelor-of-design-in-animation-&-gaming.html">Bachelor of Design in Animation & Gaming</a></li>
<li><a href="bsc-in-digital-content-creation-&-media-production.html">B.Sc. in Digital Content Creation & Media Production</a></li>
<li><a href="bsc-in-sound-design-&-music-video-production.html">B.Sc. in Sound Design & Music Video Production</a></li>
<li><a href="bba-in-event-planning-&-management.html">BBA in Event Planning & Management</a></li>
<li><a href="hair-makeup-and-prosthetics.html">Hair, Makeup & Prosthetics</a></li>
<li><a href="costume-design.html">Costume Designing</a></li>
<li><a href="pr-journalism.html">Journalism, PR, Image Strategization and Brand Custodianship</a></li>
      </ul>`
  },
  {
    key: "Mentors",
    keywords: ["mentor", "faculty", "teacher", "guide"],
    response: `
      <p>Meet our top mentors:</p>
      <ul>
        <li><a href="amit-behl.html">Dr. (Hon) Amit Behl</a></li>
        <li><a href="yasmin-rodgers.html">Ms. Yasmin Rodgers</a></li>
        <li><a href="resul-pookutty.html">Padma Shri Dr. Resul Pookutty</a></li>
        <li><a href="manvendra-shukul.html">Mr. Manvendra Shukul</a></li>
        <li><a href="anand-jha.html">Mr. Anand Jha</a></li>
        <li><a href="anusha-srinivasan-iyer.html">Dr. (Hon) Anusha Srinivasan Iyer</a></li>
        <li><a href="s-ramachandran.html">Dr. (Hon) S Ramachandran</a></li>
        <li><a href="sushma-gaikwad.html">Ms. Sushma Gaikwad</a></li>
        <li><a href="ketki-pandit.html">Ms. Ketki Pandit</a></li>

      </ul>`
  },
  {
    key: "Careers",
    keywords: ["career", "job", "future", "employment", "outcome"],
    response: `
      <p>We offer 7 career pathways:</p>
      <ul>
        <li><a href="/#programs">Explore Career Outcomes</a></li>
      </ul>`
  },
  {
    key: "Live Projects",
    keywords: ["project", "live", "real world"],
    response: `
      <p>Learn through Live Projects:</p>
      <a href="live-project.html">Watch Projects</a>`
  },
  {
    key: "Industry Associations",
    keywords: ["industry", "partner", "association", "network"],
    response: `
      <p>We have strong industry associations.</p>
      <a href="industry-assosiates.html">See Partners</a>`
  },
  {
    key: "Apprenticeship",
    keywords: ["apprentice", "intern", "training"],
    response: `
      <p>Join our Apprenticeship Programs:</p>
      <a href="apprenticeship.html">Learn More</a>`
  },
];

const addMessage = (text, sender = "bot") => {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

const handleSubject = (subjectName) => {
  const matched = responses.find(r => r.key === subjectName);
  addMessage(subjectName, "user");
  setTimeout(() => {
    if (matched) {
      addMessage(matched.response);
    } else {
      addMessage(`Sorry, I couldn't find anything related to that.`);
    }
  }, 300);
};

const handleUserInput = () => {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInput.value = "";

  const lower = message.toLowerCase();

  const matched = responses.find(r =>
    r.keywords.some(keyword => lower.includes(keyword))
  );

  setTimeout(() => {
    if (matched) {
      addMessage(matched.response);
    } else {
      addMessage(`Sorry, I couldn't find anything related to that. Try asking about admission, courses, mentors, etc.`);
    }
  }, 500);
};

// Subject buttons creation
const renderSubjectButtons = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "button-container";
  subjects.forEach(subject => {
    const btn = document.createElement("button");
    btn.className = "subject-btn";
    btn.innerText = subject;
    btn.onclick = () => handleSubject(subject);
    wrapper.appendChild(btn);
  });
  subjectButtonsDiv.appendChild(wrapper);
};

renderSubjectButtons();

sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleUserInput();
});