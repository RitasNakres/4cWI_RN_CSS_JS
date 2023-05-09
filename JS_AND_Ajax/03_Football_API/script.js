const loadData = () => {

    fetch("https://api.openligadb.de/getmatchdata/BL1/2022").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let html = "";


    data.forEach(element => {

        if (element.matchResults.length > 0) {
            html += `<div class="wrapper"><div class="teamOneInfo"> <div class = "teamOneIcon"><img width="66px" src="${element.team1.teamIconUrl}" alt="iconTeamOne"></div>${element.team1.shortName} ${element.matchResults[0]?.pointsTeam1}</div>
            : <div class="teamTwoInfo"> ${element.matchResults[0]?.pointsTeam2} ${element.team2.shortName}<div class = "teamTwoIcon"><img width="50px" src="${element.team2.teamIconUrl}" alt="iconTeamTwo"></div></div></div>`
        } else { }

    });

    document.getElementById("output").innerHTML = html;
}
loadData();