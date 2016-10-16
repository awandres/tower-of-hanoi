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
var counter = 0
var counterValue
var endGame

for (i=3; i > 0; i--) {
  discListA.prepend("<li>" + i + "</li>")
}

var thisTopDisc = $(this).find("li").first()
var discSelect = $(".tower .discs li")
var discSelectA = $("#tower1 .discs li")
var discSelectB = $("#tower2 .discs li")
var discSelectC = $("#tower3 .discs li")
var towerSizeA = Number(discSelectA.first().text())
logSizeA.text(towerSizeA)


function updateSize_Value() {
  towerSizeA = Number(towerA.find('li').first().text())
  for (i=0; i < towerA.find('li').length; i++) {
        var eValueA= counter + Number(towerA.find('li').eq(i).text())
        counter = eValueA
      }
      towerValueA = eValueA
      counter = 0
      towerSizeB = Number(towerB.find('li').first().text())
      for (i=0; i < towerB.find('li').length; i++) {
        var eValueB= counter + Number(towerB.find('li').eq(i).text())
        counter = eValueB
      }
      towerValueB = eValueB
      counter = 0
      towerSizeC = Number(towerC.find('li').first().text())
      for (i=0; i < towerC.find('li').length; i++) {
        var eValueC= counter + Number(towerC.find('li').eq(i).text())
        counter = eValueC
      }
      towerValueC = eValueC
      counter = 0
      logSizeA.text(towerSizeA)
      logValueA.text(towerValueA)
      logSizeB.text(towerSizeB)
      logValueB.text(towerValueB)
      logSizeC.text(towerSizeC)
      logValueC.text(towerValueC)
    }
//initial conditions set. now for event actions

// var nextTower = $(".selected")
// var thisTopDisc = $(this).find("li").first()
// var anySize = $(".towerSize")
// var sizeValue = Number(thisTopDisc)
// var sizeValueLog = anySize.text(sizeValue)
updateSize_Value()
var endGame = towerValueA

anyTower.on("click", function() {
  updateSize_Value()
  if (anyTower.hasClass( "unselected")) {
  $(this).css("border" , "10px solid black")
  thisTopDisc = $(this).find("li").first()
  thisTopDisc.css("color" , "black")
  anyTower.addClass("selected").removeClass("unselected")


}  else if (anyTower.hasClass ("selected")) {

    var newTower = $(this).find("ul")
    var newTowerSize = Number($(this).find('li').first().text())

    if (Number(thisTopDisc.text()) < newTowerSize || newTowerSize === 0) {
    newTower.prepend(thisTopDisc)
    discSelect.css("color" , "white")
    anyTower.css("border" , "none")
    anyTower.removeClass("selected").addClass("unselected")
    updateSize_Value()
    if (endGame === towerValueB || endGame ===towerValueC) {
      anyTower.off()
      console.log("You Win!")
    }
  } else {console.log("error - cannot place a disc on top of a smaller disc")
          discSelect.css("color" , "white")
          anyTower.css("border" , "none")
          anyTower.removeClass("selected").addClass("unselected")
}
    }
  })






























})
