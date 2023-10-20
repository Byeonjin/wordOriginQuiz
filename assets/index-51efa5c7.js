(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();const i=o=>document.querySelector(o),f=[{element:"anim",gloss:"soul",example:["animate","animosity","animadversion","unanimous"]},{element:"corp",gloss:"body",example:["corps","corpse","corpus","corpuscle","corpulent","incorporate"]},{element:"culp",gloss:"fault",example:["culpable","culprit","exculpate","mea culpa"]},{element:"duc",gloss:"to lead",example:["educate","induce","introduce","duct","conduct","product","ductile","dukes"]},{element:"fug",gloss:"flee",example:["fugitive","fugue","centrifuge","refuge","fugacious"]},{element:"grat",gloss:"goodwill",example:["grateful","gratis","gratuity","congratulate","ingrate","ingratiate","grace","gracious"]},{element:"greg",gloss:"social group",example:["gregarious","congregation","egregious","segregate"]},{element:"hom",gloss:"human",example:["homicide","hominid","Homo sapiens"]},{element:"anthrop",gloss:"Human",example:["anthropology","anthropomorphic","philanthropy"]},{element:"bi",gloss:"life",example:["biography","biology","bioluminescent","macrobiotic","microbial"]},{element:"cac",gloss:"bad",example:["cacophony","caconym","cacodemonic"]},{element:"chrom",gloss:"color",example:["chrome","monochrome","chromosome","chromatic"]},{element:"chron",gloss:"time",example:["chronic","diachronic","chronometer","anachronistic"]},{element:"cosm",gloss:"universe, adorn, order",example:["cosmic","cosmetic","macrocosm","cosmopolitan","cosmogony","cosmonaut","cosmecology"]},{element:"gam",gloss:"marry, unite",example:["monogamy","bigamy","exogamous","gamete","epigamic","gamogenesis"]},{element:"iatr",gloss:"heal",example:["pediatrician","iatrogenic","psychiatry","geriatric"]},{element:"idi",gloss:"personal",example:["idiosyncrasy","idiom","idiot","idiolect","idiomorphic","idiopathy","idiochromatic"]},{element:"log",gloss:"speak, study",example:["logic","logo","anthropology","analogy","eulogy","prologue","logorrhea"]},{element:"macr",gloss:"large",example:["macro","macron","macroeconomics","macrocephalic","macrocyte","macradenous"]},{element:"micr",gloss:"small",example:["microbe","microcosm","micron","microphotography","microscope","micranatomy"]},{element:"mis",gloss:"hate",example:["misanthrope","misogamy","misogyny","misology"]},{element:"morph",gloss:"form",example:["morpheme","morphology","amorphous","polymorphous","ectomorph","endomorph","astronomy","autonomy","metronome","nomad","nomology"]},{element:"nom",gloss:"law, system",example:["pathetic","pathology","pathos","empathy","sympathy"]},{element:"path",gloss:"feel, illness",example:["anthropology","anthropomorphic","philanthropy"]},{element:"petr",gloss:"rock",example:["petrify","petroglyph","petroleum","petrous"]},{element:"phil",gloss:"liking",example:["philosophy","philanthropy","Anglophile","hemophilia","philately"]},{element:"phon",gloss:"sound",example:["phonics","phonetic","telephone","cacophony","euphony","symphonic","aphonia"]},{element:"pol",gloss:"community",example:["politics","police","cosmopolitan","metropolis"]},{element:"pseud",gloss:"false",example:["pseudonym","pseudopod","pseudoscience","pseudo-argument","pseudandry"]},{element:"psych",gloss:"mind",example:["psyche","psychic","psychiatry","psychopath","psychotic"]},{element:"pyr",gloss:"fire",example:["pyromaniac","pyrometer","pyrotechnics","pyrite","antipyretic"]},{element:"the",gloss:"god",example:["theology","theocracy","theogony","polytheism","atheist"]},{element:"top",gloss:"place",example:["topic","topical","topology","toponym","isotope"]},{element:"xen",gloss:"foreign",example:["xenophobia","xenon","xenogamy","xenoplastic","axenic","pyroxene"]},{element:"leg",gloss:"law, deputize",example:["legal","legacy","allege","relegate","privilege","legislature"]},{element:"libr",gloss:"balance, weigh",example:["equilibrium","Libra","libration"]},{element:"liter",gloss:"letter",example:["literal","literary","Titerati","alliteration","obliterate","transliterate"]},{element:"nov",gloss:"new",example:["novelty","nova","novice","novitiate","innovate","renovate"]},{element:"omn",gloss:"all",example:["omnipotent","omniscient","omnivorous","omneity"]},{element:"par",gloss:"give birth to, produce",example:["parent","prepare","separate","parturition","apparatus","oviparous","postpartum"]},{element:"pet",gloss:"seek, go to",example:["petition","appetite","centripetal","impetus","perpetual","compete","repeat","petulant"]},{element:"pot",gloss:"able, powerful",example:["potent","potential","impotent","omnipotent","possible"]},{element:"prob",gloss:"good, test",example:["probe","probable","probity","approbation","reprobate"]},{element:"sci",gloss:"know",example:["science","conscious","omniscience","prescient","plebiscite","adscititious","sciolism"]},{element:"sec",gloss:"cut",example:["sect","sector","secant","bisect","insect","transect"]},{element:"somn",gloss:"sleep",example:["insomnia","somnambulism","somnolent","soporific"]},{element:"ven",gloss:"come",example:["venuz-rovenance","intervene","contravene","eventual"]},{element:"ver",gloss:"true",example:["verify","aver","verdict","veritable","veracity","verisimilitude"]}],x=["soul","body","fault","to lead","flee","goodwill","social group","human","Human","life","bad","color","time","universe, adorn, order","marry, unite","heal","personal","speak, study","large","small","hate","form","law, system","feel, illness","rock","liking","sound","community","false","mind","fire","god","place","foreign","law, deputize","balance, weigh","letter","new","all","give birth to, produce","seek, go to","able, powerful","good, test","know","cut","sleep","come","true"];const g=o=>[...o.sort(()=>Math.random()-.5)],b=({element:o,gloss:t,example:r})=>{const s=`<h2>Element: ${o}</h2>
  <h3>Example: ${r}</h3>
    `,e=g(x).filter(p=>p!==t).slice(0,4),l=`<li id-correct="true">${t}</li>`,a=e.reduce((p,y)=>[`<li id-correct="false">${y}</li>
`,...p],[]);return`${s} <ol>${g([...a,l]).join("")}</ol>`},d=(o,t)=>{const r=`
    <div class = "root-container">
      <h1>Gloss-Quiz${t+1}</h1>
      <section class="text-contents" >

      ${b(o[n])}
      </section>
    </div>
  `;i("#root").insertAdjacentHTML("afterbegin",r)},u=(o,t)=>{o.classList.remove("hide"),setTimeout(()=>{o.classList.add("hide")},t)},c=g(f);let n=0;const m=new Set;d(c,n);i("#root").addEventListener("click",o=>{if(o.target.tagName==="LI"){if(o.target.getAttribute("id-correct")==="true"){if(n+=1,n===10)if(i(".root-container").remove(),m.size===0){i("#root").insertAdjacentHTML("afterbegin",'<h1 class="cong">Congratulations!!!!!</h1>');return}else{i("#root").insertAdjacentHTML("afterbegin",h(m));return}i(".root-container").remove(),d(c,n),u(i(".O"),1500)}else u(i(".X"),500),m.add(n);console.log(h(m))}});const h=o=>{let t="<h1>Incorrect Words List!</h1>";return o.forEach(s=>{t+=`<li><p>element: ${c[s].element}</p> <p>gloss: ${c[s].gloss}</p> <p>examples: ${c[s].example}</p></li>`}),`<ol>
    ${t}
  </ol>`};
