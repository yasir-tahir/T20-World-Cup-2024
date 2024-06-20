const cardsArray = [
    {
        staging: {
            groupStage: "Group Stage . T20 29 of 55",
            time: "Yesterday",
        },
        country1: {
            countryFlag: './images/papuaCont.png',
            countryName: 'Papua New Guinea',
            score: '95 (19.5)',
        },
        country2: {
            countryFlag: './images/afghan.png',
            countryName: 'Afghanistan',
            score: '101/3 (15.1)',
        },
        result: {
            resultTitle: "AFG won by 7 wickets (29 balls left)",
            matchImage: './images/afghanandpapa.jpeg'
        }
    },
    {
        staging: {
            groupStage: "Group Stage . T20 26 of 55",
            time: "Thu, 13 Jun",
        },
        country1: {
            countryFlag: './images/westInd.png',
            countryName: 'West Indies',
            score: '149/9 (20)',
        },
        country2: {
            countryFlag: './images/newzeland.png',
            countryName: 'Newzeland',
            score: '136/9 (20)',
        },
        result: {
            resultTitle: "WI Won by 13 runs",
            matchImage: './images/westIndNews.jpg'
        }
    },
    {
        staging: {
            groupStage: "Group Stage . T20 27 of 55",
            time: "Thu, 13 Jun",
        },
        country1: {
            countryFlag: './images/bangla.png',
            countryName: 'Bangladesh',
            score: '159/5 (20)',
        },
        country2: {
            countryFlag: './images/netherland.png',
            countryName: 'Netherlands',
            score: '134/8 (20)',
        },
        result: {
            resultTitle: "BAN won by 25 runs",
            matchImage: './images/banglaNether.jpg'
        }
    },
    {
        staging: {
            groupStage: "Group Stage . T20 28 of 55",
            time: "Yesterday",
        },
        country1: {
            countryFlag: './images/oman.png',
            countryName: 'Oman',
            score: '47 (13.2)',
        },
        country2: {
            countryFlag: './images/england.png',
            countryName: 'England',
            score: '50/2 (3.1)',
        },
        result: {
            resultTitle: "ENG won by 8 wickets",
            matchImage: './images/englandOman.jpg'
        }
    },
];

const cardsContainer = document.getElementById("cardsContainer");

cardsArray.map((card) => {

    const cardElement = document.createElement("div");
    cardElement.className = "col-sm-6 border py-4";

    cardElement.innerHTML = `
        <div class="d-flex justify-content-between textGrauCustom">
            <div>${card.staging.groupStage}</div>
            <div>${card.staging.time}</div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3 cardTextFont">
            <div><img src="${card.country1.countryFlag}" width="35" class="imgMr" alt="${card.country1.countryName}">${card.country1.countryName}</div>
            <div>${card.country1.score}</div>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-3 cardTextFont">
            <div><img src="${card.country2.countryFlag}" width="35" class="imgMr" alt="${card.country2.countryName}">${card.country2.countryName}</div>
            <div>${card.country2.score}</div>
        </div>
        <div class="d-flex justify-content-between mt-3 cardTextFont">
            <div>${card.result.resultTitle}</div>
            <div><img src="${card.result.matchImage}" class="rounded-2" alt="MatchPics" width="90"></div>
        </div>
    `;

    cardsContainer.appendChild(cardElement);

});