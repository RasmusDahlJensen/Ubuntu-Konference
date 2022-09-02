//Object
let speakers = [{
    id: 'olavEriksen',
    name: 'Olaf Eriksen',
    description: 'bla hblah blah',

    eventHeadline: 'Bæst talk',
    eventDescription: 'Test',
    category: 'IOT',

    talks: ['Onsdag - 26. Oktober klokken 10', 'Torsdag - 27. Oktober klokken 10']
},
{
    id: 'mamouhdHassan',
    name: 'Mamouhd Hassan',
    description: 'OpenStack ensures TCO reduction',

    eventHeadline: 'Bæst talk',
    eventDescription: 'Test',
    category: 'Desktop',

    talks: ['nsdag - 26. Oktober klokken 12']
}];

//speaker links
//IOT
// const olav = document.getElementById("olavEriksen")
const olav = document.getElementById("olavEriksen")
const mamouhd = document.getElementById("mamouhdHassan")
const louise = document.getElementById("mamouhdHassan")
const joe = document.getElementById("joePeterson")
const alice = document.getElementById("aliceJennings")

//Desktop
const sara = document.getElementById("saraSouidan")
const lis = document.getElementById("lisNielsen")
const line = document.getElementById("lineDalsgaard")
const dan = document.getElementById("danJantzen")
const chris = document.getElementById("chrisSmith")


//event container
// const container = document.getElementById("eventContainer")


function createCard() {
    const container = document.getElementById("eventContainer")
    const paragraph = document.createElement("p")
    console.log(container);
    // container.appendChild(paragraph)
    paragraph.textContent = "Success"


}

console.log(window.location);
const params = new URLSearchParams(window.location.search); //
const id = params.get('id');

console.log(id);

const speaker = speakers.find((s) => s.id === id);
console.log(speaker);
