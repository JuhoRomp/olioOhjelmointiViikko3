const facts = [
  "AWS lanseerattiin vuonna 2006, ja se aloitti julkisen pilven aikakauden.",
  "Yksi Amazon S3 -objektisäiliö voi teoriassa varastoida rajattoman määrän dataa.",
  "Suurin osa maailman internet-liikenteestä kulkee jonkin CDN:n kautta.",
  "Kubernetes syntyi alun perin Googlen sisäisestä Borg-järjestelmästä.",
  "Serverless ei tarkoita ilman servereitä — vain sitä, ettet hallinnoi niitä itse.",
  "Cloudflaren verkko kattaa satoja kaupunkeja ympäri maailmaa.",
  "Docker-kontit jakavat isäntäkoneen käyttöjärjestelmän ytimen, toisin kuin virtuaalikoneet.",
  "Ensimmäinen pilvipalvelu, Salesforce, tarjosi SaaS-mallia jo vuonna 1999.",
  "Monet IoT-laitteet käyttävät julkisia DNS-palveluita kuten 8.8.8.8, koska ne ovat aina saatavilla.",
  "Yhden AWS-alueen sisällä on tyypillisesti useita erillisiä datakeskusklustereita (Availability Zones)."
];

const factBox = document.getElementById("factBox");
const factButton = document.getElementById("factButton");

let lastIndex = -1;

factButton.addEventListener("click", () => {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastIndex && facts.length > 1);
  lastIndex = index;
  factBox.textContent = facts[index];
});
