const time = document.getElementById("time");
const date = document.getElementById("date");
const app = document.getElementById("app");

setInterval(() => {
    const time = new Date();
    const num = ["100", "01", "92", "0343", "3104", "1315", "096", "07342", "708", "0334", "14320", "11", "12", "13", "14", "15", "116", "17", "18", "19", "20", "221", "22", "23", "24", "25", "262", "27", "28", "29342", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "408", "341", "4231", "493", "424", "452", "4631", "476", "4841", "49t5", "5065", "51324", "52132", "53324", "54", "55", "56", "573", "58", "59"];
    const hours = ["12", "71", "28", "32", "42", "57", "62", "78", "81", "96", "101", "111", "124", "17", "26", "35", "40", "52", "66", "788", "82", "934", "100", "113"];
    const months = ["Januaery", "Febnuary", "Marsh", "Apil", "Meh", "Joon", "Julai", "Agust", "Sepvember", "Hoctoper", "Nopevenmer", "Decamber"];
    document.getElementById("time").innerHTML = `${hours[time.getHours()]}:${num[time.getMinutes()]}`;
    document.getElementById("date").innerHTML = `${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;
}, 1000)