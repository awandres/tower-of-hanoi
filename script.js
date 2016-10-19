$(document).ready(function() {


  $(document).on("keydown" , function(event) {
    if(event.which == 13) {

var bodyPage = $("body")
var titlePage = $("#title")
var startGame = $("#startGame")
var inputText = $("#inputText")
var inputValue = $("#inputValue")
var formSubmit = $("#formSubmit")



titlePage.css({"font-family":"Courier", "font-size": "40px"})
startGame.text('')
titlePage.html("<div id='title' style='font-family:Courier;font-size:40px'> RULES OF THE GAME : <br> 1.) Your only move is to move the Top Disc of a Tower <br> 2.)You can only move one Disc at a time <br> You cannot put a large disc on top of a smaller disc <br> YOU WIN IF you move all the discs to another Tower. GOOD LUCK </div>")
inputText.html("<p id='inputText'> <br><form id='formSubmit'>HOW MANY DISCS? <input id='inputValue' type='text' name='How many discs?'> </form></p> ")


$(document).on("keydown" , function(event) {
  // discInput= Number($("#inputValue"))
  if(event.which == 13)
  {
    // var discInput
    // discInput = Number($("#inputValue").val())
    // var discNumber
    // discNumber = discInput
  // var discNumber
  // discNumber = Number($("#inputValue").val())
  titlePage.css("display", "none")
  startGame.css("display", "none")
  inputText.css("display", "none")
  $(".wrapper").css("display", "flex")
  $("#wrapper").css("display", "flex")

  var towerA = $("#tower1")
  var towerB = $("#tower2")
  var towerC = $("#tower3")
  var discListA = $("#tower1 .discList")
  var anyTower = $(".tower")
  var thisTopDisc = $(this).find(".disc").first()
  var discSelect = $(".tower .discList .disc")
  var discNumber
  var newDisc
  var thisDisc
  var error = $("#errormessage")
  var moveLog = $("#movenumber")
  var timer = $("#timer")
  var time
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
  var endGame
  var discWidth
  var discNumber = 20
  var baseDiscWidth = 240
  var moveCounter = 0
  var timeX = 0
  var color = ["red" , "orange", "yellow", "green", "blue", "indigo", "violet"]



  function widthFormula() {

    discWidth = ((i / discNumber) * baseDiscWidth) + 40

  }



for (i=discNumber; i > 0; i--) {
  var newDisc = "<div class = 'disc' id = 'disc" + i + "'>" + i + "</div>"
  discListA.prepend(newDisc)
  var thisDisc = towerA.find($("#disc"+i))
  widthFormula()
  thisDisc.css ("background-color" , color[(i%7)])
  thisDisc.css ("color" , color[(i%7)])
  thisDisc.css("width" , discWidth + 'px')
  console.log(discWidth)
}

var thisTopDisc = $(this).find(".disc").first()
var discSelect = $(".tower .discList .disc")



function updateSize_Value() {
  towerSizeA = Number(towerA.find('.disc').first().text())
  for (i=0; i < towerA.find('.disc').length; i++) {
        var eValueA= counter + Number(towerA.find('.disc').eq(i).text())
        counter = eValueA
      }
      towerValueA = eValueA
      counter = 0
      towerSizeB = Number(towerB.find('.disc').first().text())
      for (i=0; i < towerB.find('.disc').length; i++) {
        var eValueB= counter + Number(towerB.find('.disc').eq(i).text())
        counter = eValueB
      }
      towerValueB = eValueB
      counter = 0
      towerSizeC = Number(towerC.find('.disc').first().text())
      for (i=0; i < towerC.find('.disc').length; i++) {
        var eValueC= counter + Number(towerC.find('.disc').eq(i).text())
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


updateSize_Value()
// TIMER
var time = setInterval(function() { timeFormula() },1000)

function timeFormula() {
  seconds = timeX%60
  if (seconds<10) {
    seconds = '0' + seconds
  } else {seconds = seconds}
  minutes = parseInt(timeX/60)
  if (minutes<10) {
    minutes = '0' + minutes
  } else {minutes = minutes}
  timer.text('TIMER:' + minutes + ':' + seconds)
  timeX++
}

var endGame = towerValueA


// the game
anyTower.on("click", function() {
  updateSize_Value()
  error.text("")
  // select tower
  if (anyTower.hasClass( "unselected")) {

  thisTopDisc = $(this).find(".disc").first()
  thisTopDisc.css("border" , "4px solid white")
  anyTower.addClass("selected").removeClass("unselected")

  //move disc
}  else if (anyTower.hasClass ("selected")) {

    var newTower = $(this).find(".discList")
    var newTowerSize = Number($(this).find('.disc').first().text())

    //game rules
    if (Number(thisTopDisc.text()) < newTowerSize || newTowerSize === 0) {
    newTower.prepend(thisTopDisc)
    discSelect.css("border" , "4px solid black")
    anyTower.removeClass("selected").addClass("unselected")
    updateSize_Value()
    moveCounter++
    moveLog.text('MOVE: ' + moveCounter)
    // timerOn = 1


    if (endGame === towerValueB || endGame ===towerValueC) {
      anyTower.off()
      clearInterval(time);
      error.text("You Win!")

    }
  } else if (newTowerSize === Number(thisTopDisc.text())) {
    discSelect.css("border" , "4px solid black")
    anyTower.removeClass("selected").addClass("unselected")

  } else {error.text("cannot place a disc on top of a smaller disc")
          discSelect.css("border" , "4px solid black")
          anyTower.removeClass("selected").addClass("unselected")
}
}
  })


}

})
}
})
})
