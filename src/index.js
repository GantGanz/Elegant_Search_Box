//Import Bootstrap
import $ from "jquery";
import '@popperjs/core';
import "bootstrap/dist/css/bootstrap.min.css";
//Import CSS
import "./style/style.css";
//Import Moment
import moment from "moment";
//Import Regenerator runtime
import "regenerator-runtime";
// require("font-awesome-webpack");
// Import Component
import "./component/custom-waktu.js";
import "./component/custom-search.js";
// import API
import main from "./script/main.js";
main();

const displayTime = () => {
    moment.locale("id");
    $(".Jam").text(moment().format("hh:mm"));
    $(".Tanggal").text(moment().format("Do MMMM YYYY"));
    $(".Pagi").text(moment().format("a"));
};

const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};

updateTime();