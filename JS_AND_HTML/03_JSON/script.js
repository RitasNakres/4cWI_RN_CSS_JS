let person = [
    {firstName: "Hans", lastName: "Huber", points: 30 },
    {firstName: "Josef", lastName: "Fritzl", points: 31 },
    {firstName: "Paul", lastName: "Meinegger", points: 32},
];

function loadPeople() {
    let personData = "";
    person.forEach(element => {
        personData += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });
    document.getElementById("content").innerHTML = personData;
}
