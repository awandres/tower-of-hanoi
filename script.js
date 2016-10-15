$(document).ready(function() {

var towerA = $("#tower1")
var towerB = $("#tower2")
var towerC = $("#tower3")
var discListA = $("#tower1 .discs")
var discListB = $("#tower2 .discs")
var discListC = $("#tower3 .discs")
var anyTower = $(".tower")
var jthis = $(this)

var logSizeA = $("#tower1size")
var logValueA = $("#tower1value")
var logSizeB = $("#tower2size")
var logValueB = $("#tower2value")
var logSizeC = $("#tower3size")
var logValueC = $("#tower3value")
var towerSizeA = 0
var towerSizeB = 0
var towerSizeC = 0
var towerValueA = 0
var towerValueB = 0
var towerValueC = 0




for (i=3; i > 0; i--) {
  discListA.prepend("<li>" + i + "</li>")
  towerValueA = towerValueA + i;
  logValueA.text(towerValueA)
}

var thisTopDisc = $(this).find("li").first()
var discSelect = $(".tower .discs li")
var discSelectA = $("#tower1 .discs li")
var discSelectB = $("#tower2 .discs li")
var discSelectC = $("#tower3 .discs li")

var towerSizeA = Number(discSelectA.first().text()) + towerSizeA

logSizeA.text(towerSizeA)
logSizeB.text(towerSizeB)
logSizeC.text(towerSizeC)

//initial conditions set. now for event actions



anyTower.on("click", function() {
  $(this).css("border" , "10px solid black")
  var thisTopDisc = $(this).find("li").first()
  thisTopDisc.css("color" , "black")
  anyTower.on("click", function() {
    var newTower = $(this).find("ul")
    newTower.prepend(thisTopDisc)
    discSelect.css("color" , "white")
    anyTower.css("border" , "none")
    anyTower.off('click');
    })
    anyTower.on()
})























})
