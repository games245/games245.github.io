/**
 * Greyhouse Business Solutions
 */
/** **** MUSICS********** */

var jeneric;
var fonmusic;
var rightmusic;
var wrongmusic;
/** ************************* */
var circle;
var stage;
var queue;
var jokers;
var awards;
var gameType;
var gameState = 0;
var currentJokerCount;
var currentAward = 0;
var currentQuestion;

var currQuestionArea;
var questionArea;
var currentQuestionText;
var answersArea;
var sureArea;
var sureGosterge;
var COLUMN_COUNT = 13;
var MARKER_ROW_COUNT = 4.3;
var AWARD_MARGIN_LEFT = 30;
var MARGIN_LEFT_RIGHT;
var statusArea;
var statusIsim;
var statusJoker;
var statusOdul;
var choices;
var siluet;
var twitterButton;
var facebookButton;
var yeniOyunButton;
var yardimButton;
var xProp;
var yProp;
var scaleMatrix;
var countDownArea = null;
var duration = 90;
var fonts;
var bitmapFont;
var questionTicker;
var gameContainer;
var popupContainer;
var nextContainer;
var interval;
var nameArea;
var jokerArea;
var awardArea;
var currentAwardText;
var jokerLogo;
/** ************* GAME SETTINGS********************** */
var questionList;
var sessionKey = "24asadas";
var gameSettings;
var currentQuestionIndex;
var gameOverContainer;
// var animationSpriteSheet;
var rightMessage1;
var rightMessage2;
var wrongMessage1;
var wrongMessage2;
var jokerButton;
var jokerButtonHover;
/** ******* Splash Screen**************************** */
var loadingBarContainer;
// this function is called every time the progress of our loading changes
function handleProgress() {
	// changing the length of our loading bar accordingly
	loadingBar.scaleX = queue.progress * loadingBarWidth;
	// and the precentage in the loading label
	progresPrecentage = Math.round(queue.progress * 100);
	loadProgressLabel.text = progresPrecentage + "% Yüklendi";
	stage.update();

}

function handleClick() {
	// start();
	stage.removeChild(loadProgressLabel, loadingBarContainer);
	canvas.removeEventListener("click", handleClick);
}

/** ******************************** */
var assets = [ {
	id : "jokerlogo",
	src : "sprites/joker_logo.png"
}, {
	id : "siluet",
	src : "sprites/siluet.png"
}, {
	id : "joker",
	src : "sprites/joker.png"
}, {
	id : "joker_inactive",
	src : "sprites/joker.png"
}, {
	id : "bg",
	src : "sprites/bg.jpg"
}, {
	id : "soru_bg",
	src : "sprites/soru_board.png"
}, {
	id : "cevap_bg",
	src : "sprites/cevap_bg.png"
}, {
	id : "cevap_hover_bg",
	src : "sprites/cevap_hover_bg.png"
}, {
	id : "sure",
	src : "sprites/time_board.png"
}, {
	id : "sure_gosterge",
	src : "sprites/sure_gosterge_bg.png"
}, {
	id : "status_bg",
	src : "sprites/status_bg.png"
}, {
	id : "status_isim",
	src : "sprites/status_isim.png"
}, {
	id : "status_joker",
	src : "sprites/status_joker.png"
}, {
	id : "status_odul",
	src : "sprites/status_odul.png"
}, {
	id : "yeni_oyun",
	src : "sprites/btn_yeni_oyun.png"
}, {
	id : "yardim",
	src : "sprites/btn_yardim.png"
}, {
	id : "facebook",
	src : "sprites/facebook.png"
}, {
	id : "twitter",
	src : "sprites/twitter.png"
}, {
	id : "digital_png",
	src : "fonts/font.png"
}, {
	id : "digital",
	src : "fonts/font.xml"
}, {
	id : "actionholderclick",
	src : "sprites/action_holder__click.bg.png"
}, {
	id : "actionholderhover",
	src : "sprites/action_holder__hover.bg.png"
}, {
	id : "actionholder",
	src : "sprites/action_holder_bg.png"
}, {
	id : "yanlis",
	src : "sprites/yanlis_cevap_alone_bg.png"
}, {
	id : "gameover",
	src : "sprites/game_over.png"
}, {
	id : "next",
	src : "sprites/sonraki_soru.png"
}, {
	id : "soundon",
	src : "sprites/btn_sound_on.png"
}, {
	id : "soundoff",
	src : "sprites/btn_sound_off.png"
}, {
	id : "nextroll",
	src : "sprites/sonraki_soru_rollover.png"
}, {
	id : "jokerbutton",
	src : "sprites/jokerbutton_hover.png"
}, {
	id : "jokerbuttonhover",
	src : "sprites/jokerbutton.png"
}, {
	id : "tekrar",
	src : "sprites/tekrar_oyna_rollover.png"
}, {
	id : "tekrarrollover",
	src : "sprites/tekrar_oyna_btn.png"
}, {
	id : "jeneric",
	src : "assets/jeneric.mp3"
}, {
	id : "fonmusic",
	src : "assets/fonmusic.mp3"
}, {
	id : "rightmusic",
	src : "assets/rightanswer.mp3"
}, {
	id : "wrongmusic",
	src : "assets/wronganswer.mp3"
}, {
	id : "jokerfall",
	src : "assets/jokerfall.mp3"
}, {
	id : "jokerdelete",
	src : "assets/jokerdelete.mp3"
}, {
	id : "jokerbump",
	src : "assets/jokerbump.mp3"
}, {
	id : "awardrise",
	src : "assets/awardrise.mp3"
}, {
	id : "awardfall",
	src : "assets/awardfall.mp3"
}, {
	id : "iflas",
	src : "assets/iflas.mp3"
}, {
	id : "finalaward",
	src : "assets/finalaward.mp3"
} ];
var SCALE = 0.8;
function initializeStage() {

	createjs.ColorPlugin.install();
	fonts = new Object();
	questionTicker = false;
	stage = new createjs.Stage("gameCanvas");

	stage.canvas.width = window.screen.width * SCALE;
	stage.canvas.height = window.screen.height * SCALE;

	xProp = stage.canvas.width / 1426;
	yProp = stage.canvas.height / 970;

	stage.enableMouseOver(50);
	gameContainer = new createjs.Container();
	gameContainer.x = 0;
	gameContainer.y = 0;
	gameContainer.width = stage.canvas.width;
	gameContainer.height = stage.canvas.height;
	gameContainer.visible = false;

	gameOverContainer = new createjs.Container();
	gameOverContainer.x = 0;
	gameOverContainer.y = 0;
	gameOverContainer.width = stage.canvas.width;
	gameOverContainer.height = stage.canvas.height;
	gameOverContainer.visible = false;

	popupContainer = new createjs.Container();
	popupContainer.x = 0;
	popupContainer.y = 0;
	popupContainer.width = stage.canvas.width;
	popupContainer.height = stage.canvas.height;

	nextContainer = new createjs.Container();
	nextContainer.x = 0;
	nextContainer.y = 0;
	nextContainer.width = stage.canvas.width;
	nextContainer.height = stage.canvas.height;
	nextContainer.visible = false;
	scaleMatrix = new createjs.Matrix2D();
	scaleMatrix.scale(xProp, yProp);
	choices = new Array();
	choices.push("a", "b", "c", "d");
	answersArea = new Array();
	answersArea.getHover = function(obj) {
		for ( var i = 0; i < answersArea.length; i++) {
			if (answersArea[i].normal == obj)
				return answersArea[i].hover;
		}
		return null;
	}
	answersArea.getNormal = function(obj) {
		for ( var i = 0; i < answersArea.length; i++) {
			if (answersArea[i].hover == obj)
				return answersArea[i].normal;
		}
		return null;
	}
	answersArea.getRight = function(obj) {
		for ( var i = 0; i < answersArea.length; i++) {
			if (answersArea[i].hover == obj)
				return answersArea[i].right;
		}
		return null;
	}
	answersArea.getWrong = function(obj) {
		for ( var i = 0; i < answersArea.length; i++) {
			if (answersArea[i].hover == obj)
				return answersArea[i].wrong;
		}
		return null;
	}
	for ( var i = 0; i < choices.length; i++) {

		var chc = {
			id : choices[i] + "_normal_bg",
			src : "sprites/" + choices[i] + ".png"
		};
		var chc1 = {
			id : choices[i] + "_hover_bg",
			src : "sprites/" + choices[i] + "_rollover.png"
		};
		var chc2 = {
			id : choices[i] + "_dogru_bg",
			src : "sprites/" + choices[i] + "_dogru.png"
		};
		var chc3 = {
			id : choices[i] + "_yanlis_bg",
			src : "sprites/" + choices[i] + "_yanlis.png"
		};
		assets.push(chc, chc1, chc2, chc3);
	}
	getContent();
}

function getContent() {
	getAwards();
	queue = new createjs.LoadQueue(false);
	if (soundOn)
		createjs.Sound.alternateExtensions = [ "mp3" ];
	queue.installPlugin(createjs.Sound);
	loadProgressLabel = new createjs.Text("", "36px Verdana", "white");
	loadProgressLabel.lineWidth = 600;
	loadProgressLabel.textAlign = "center";
	loadProgressLabel.x = stage.canvas.width / 2;
	loadProgressLabel.y = stage.canvas.height / 2
			- loadProgressLabel.getMeasuredHeight() - 10;
	stage.addChild(loadProgressLabel);

	// container that holds all the elements of the loading bar
	loadingBarContainer = new createjs.Container();
	loadingBarHeight = 20;
	loadingBarWidth = 300;
	LoadingBarColor = createjs.Graphics.getRGB(255, 255, 255);

	// creating the loading bar
	loadingBar = new createjs.Shape();
	loadingBar.graphics.beginFill(LoadingBarColor).drawRect(0, 0, 1,
			loadingBarHeight).endFill();

	// creating the frame around the loading bar
	frame = new createjs.Shape();
	padding = 3;
	frame.graphics.setStrokeStyle(1).beginStroke(LoadingBarColor).drawRect(
			-padding / 2, -padding / 2, loadingBarWidth + padding,
			loadingBarHeight + padding).endStroke();

	// adding the loading bar and the frame to our container and placing it on
	// the desired position on the canvas
	loadingBarContainer.addChild(loadingBar, frame);
	loadingBarContainer.x = Math.round(stage.canvas.width / 2 - loadingBarWidth
			/ 2);
	loadingBarContainer.y = stage.canvas.height / 2;

	// adding the container with the elements to our stage
	stage.addChild(loadingBarContainer);

	queue.addEventListener("progress", handleProgress);

	queue.addEventListener("complete", queueDownloadCompleted);
	queue.loadManifest(assets);
}
function queueDownloadCompleted() {
	circle = new createjs.Shape();
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);
	circle.addEventListener("click", function(event) {
		createjs.Tween.get(circle).wait(200).to({
			r : 0,
			g : 121,
			b : 255
		}, 2000);

	});
	fonts.bitmap = queue.getResult("digital_png");
	fonts.xml = queue.getResult("digital");
	bitmapFont = new BitmapFont(fonts.bitmap, fonts.xml, 32);
	BitmapTextField.registerBitmapFont(bitmapFont, "digital");
	if (soundOn)
		createjs.Sound.play("jeneric", {
			loop : -1
		});
	createBackground();
	createPopupContainer();

}

function createGameOverContainer() {
	gameOverContainer.mouseEnabled = true;
	gameoverbg = new createjs.Bitmap(queue.getResult("gameover"));
	rest = new createjs.Bitmap(queue.getResult("tekrar"));
	restHover = new createjs.Bitmap(queue.getResult("tekrarrollover"));
	gameOverMessage1 = new createjs.Text("Oyun Bitti", "bold 32px Arial",
			"#000");
	gameOverMessage2 = new createjs.Text("Skorunuz", "14px Arial", "#000");
	gameOverMessage1.visible = true;
	gameOverMessage2.visible = true;
	gameOverMessage1.alpha = 0.6;
	gameOverMessage2.alpha = 0.6;

	gameoverbg.x = (stage.canvas.width - gameoverbg.image.width) / 2;
	gameoverbg.y = (stage.canvas.height - gameoverbg.image.height) / 2;
	gameOverMessage1.x = gameoverbg.x
			+ (gameoverbg.image.width - gameOverMessage1.getMeasuredWidth())
			/ 2;
	gameOverMessage1.y = 30 + gameoverbg.y;
	gameOverMessage2.x = gameoverbg.x
			+ (gameoverbg.image.width - gameOverMessage2.getMeasuredWidth())
			/ 2;
	gameOverMessage2.y = gameOverMessage1.y
			+ gameOverMessage1.getMeasuredHeight() + 10;

	rest.x = gameoverbg.x + (gameoverbg.image.width - rest.image.width) / 2;
	rest.y = 120 + gameOverMessage2.y;
	restHover.visible = false;
	restHover.x = rest.x;
	restHover.y = rest.y;
	rest.addEventListener("mouseover", function() {
		restHover.visible = true;
		rest.visible = false;
	});
	restHover.addEventListener("click", function() {
		submitResult(function() {

		});
		gameOverContainer.visible = false;
		restartGame();

	});
	restHover.addEventListener("mouseout", function() {
		rest.visible = true;
		restHover.visible = false;
	});
	gameOverContainer.addChild(gameoverbg);
	gameOverContainer.addChild(restHover);
	gameOverContainer.addChild(rest);
	gameOverContainer.addChild(gameOverMessage1);
	gameOverContainer.addChild(gameOverMessage2);
	stage.addChild(gameOverContainer);
}

function createNextContainer() {
	var yanlis = new createjs.Bitmap(queue.getResult("yanlis"));
	dogru = new createjs.Bitmap(queue.getResult("actionholder"));
	sonraki = new createjs.Bitmap(queue.getResult("next"));
	sonraki_hover = new createjs.Bitmap(queue.getResult("nextroll"));
	rightMessage1 = new createjs.Text("Tebrikler", "26px Arial", "#FFF");
	rightMessage2 = new createjs.Text("Doğru Cevap", "14px Arial", "#FFF");
	wrongMessage1 = new createjs.Text("Üzgünüz", "26px Arial", "#FFF");
	wrongMessage2 = new createjs.Text("Yanlış  Cevap", "14px Arial", "#FFF");
	rightMessage1.visible = false;
	rightMessage2.visible = false;
	wrongMessage1.visible = false;
	wrongMessage2.visible = false;
	dogru.x = (stage.canvas.width - yanlis.image.width) / 2;
	dogru.y = (stage.canvas.height - yanlis.image.height) / 2;
	yanlis.x = dogru.x;
	yanlis.y = dogru.y;

	rightMessage1.x = dogru.x
			+ (dogru.image.width - rightMessage1.getMeasuredWidth()) / 2;
	rightMessage1.y = 30 + yanlis.y;
	rightMessage2.x = yanlis.x
			+ (yanlis.image.width - rightMessage2.getMeasuredWidth()) / 2;
	rightMessage2.y = rightMessage1.y + rightMessage1.getMeasuredHeight() + 10;

	sonraki.x = yanlis.x + (yanlis.image.width - sonraki.image.width) / 2;
	sonraki.y = 50 + rightMessage2.y;

	wrongMessage1.x = rightMessage1.x;
	wrongMessage1.y = rightMessage1.y;
	wrongMessage2.x = rightMessage2.x;
	wrongMessage2.y = rightMessage2.y;
	sonraki_hover.x = sonraki.x;
	sonraki_hover.y = sonraki.y;
	sonraki.addEventListener("mouseover", function() {
		sonraki.visible = false;

	});
	sonraki_hover.addEventListener("click", function() {
		nextContainer.visible = false;
		gameContainer.visible = true;
		onNextQuestion(nextContainer.children[1].visible);
	});
	sonraki_hover.addEventListener("mouseout", function() {
		sonraki.visible = true;

	});
	nextContainer.visible = false;
	nextContainer.addChild(yanlis);
	nextContainer.addChild(dogru);
	nextContainer.addChild(sonraki_hover);
	nextContainer.addChild(sonraki);
	nextContainer.addChild(rightMessage1);
	nextContainer.addChild(rightMessage2);
	nextContainer.addChild(wrongMessage1);
	nextContainer.addChild(wrongMessage2);
	stage.addChild(nextContainer);
}
function showNextContainer(success) {
	nextContainer.children[0].visible = !success;
	nextContainer.children[1].visible = success;
	rightMessage1.visible = success;
	rightMessage2.visible = success;
	wrongMessage1.visible = !success;
	wrongMessage2.visible = !success;
	gameContainer.mouseEnabled = false;
	nextContainer.visible = true;

}
function showGameOver() {
submitResult(function (){
	gameOverContainer.mouseEnabled = true;
	gameOverContainer.visible = true;
	gameContainer.mouseEnabled = false;
	if (currentAwardText != null)
		gameOverContainer.removeChild(currentAwardText);
	currentAwardText = new createjs.Text(getAwardText(currentAward),
			"bold 32px Arial", "#000");
	currentAwardText.alpha = 0.8;
	currentAwardText.x = (gameOverContainer.width - currentAwardText
			.getMeasuredWidth()) / 2;
	currentAwardText.y = gameOverContainer.children[0].y
			+ (gameContainer.children[0].image.height - currentAwardText
					.getMeasuredHeight()) / 2 + 30;
	gameOverContainer.addChild(currentAwardText);
	});

}

function createPopupContainer() {
	var startGameClick = new createjs.Bitmap(queue
			.getResult("actionholderclick"));
	var startGameHover = new createjs.Bitmap(queue
			.getResult("actionholderhover"));
	var startGameNormal = new createjs.Bitmap(queue.getResult("actionholder"));

	startGameClick.x = (stage.canvas.width - startGameClick.image.width) / 2;
	startGameClick.y = (stage.canvas.height - startGameClick.image.height) / 2;
	startGameHover.x = startGameClick.x;
	startGameHover.y = startGameClick.y;
	startGameNormal.x = startGameHover.x;
	startGameNormal.y = startGameClick.y;
	startGameNormal.addEventListener("mouseover", function() {
		popupContainer.removeChild(startGameNormal);
		popupContainer.addChildAt(startGameHover, popupContainer
				.getChildIndex(startGameNormal) + 1);

	});
	startGameHover.addEventListener("click", function() {

		usName = document.getElementById("usName").value;
		pass = document.getElementById("passArea").value;
		if (usName != "" && pass != "") {
			getGameConfig(function() {
				if (gameSettings.key != null) {
					createjs.Tween.get(popupContainer).to({
						alpha : 0
					}).wait(500).call(function() {
						if (soundOn)
							createjs.Sound.stop();
						stage.removeChild(popupContainer);
						gameContainer.visible = true;
						startGameSequence(function() {
							createJokers();
							createAwards();
							createQA();
							createNextContainer();
							createGameOverContainer();
							startGame();
						});

					});
				} else
					alert("Kullanıcı Adınız veya Şifreniz Yalnış");
			});
		} else
			alert("Kullanıcı Adı yada Şifre Boş Olamaz");
	});
	startGameHover.addEventListener("mouseout", function() {
		popupContainer.removeChild(startGameHover);
		popupContainer.addChildAt(startGameNormal, popupContainer
				.getChildIndex(startGameHover) + 1);
	});
	popupContainer.addChild(startGameNormal);
	form = document.getElementById("loginform");
	form.hidden = false;
	formDOMElement = new createjs.DOMElement(form);
	formDOMElement.y = startGameClick.y + 30;
	formDOMElement.x = (stage.canvas.width - formDOMElement.htmlElement.offsetWidth)
			/ 2 + stage.canvas.offsetLeft;

	currentText = new createjs.Text("Oyuna Başla", "42px Arial", "#F1F1F1");
	currentText.alpha = 0.6;
	currentText.x = startGameClick.x
			+ (startGameClick.image.width - currentText.getMeasuredWidth()) / 2;
	currentText.y = startGameClick.y + 120;
	popupContainer.addChild(currentText);

	popupContainer.addChild(formDOMElement);
	stage.addChild(popupContainer);

}
var soundOn = true;
function createBackground() {
	var bg = new createjs.Bitmap(queue.getResult("bg"));
	jokerLogo = new createjs.Bitmap(queue.getResult("jokerlogo"));
	sureArea = new createjs.Bitmap(queue.getResult("sure"));
	siluet = new createjs.Bitmap(queue.getResult("siluet"));
	statusArea = new createjs.Bitmap(queue.getResult("status_bg"));
	statusIsim = new createjs.Bitmap(queue.getResult("status_isim"));
	statusJoker = new createjs.Bitmap(queue.getResult("status_joker"));
	statusOdul = new createjs.Bitmap(queue.getResult("status_odul"));

	yeniOyunButton = new createjs.Bitmap(queue.getResult("yeni_oyun"));
	yardimButton = new createjs.Bitmap(queue.getResult("soundon"));
	yardimButton2 = new createjs.Bitmap(queue.getResult("soundoff"));
	twitterButton = new createjs.Bitmap(queue.getResult("facebook"));
	facebookButton = new createjs.Bitmap(queue.getResult("twitter"));

	yeniOyunButton.x = stage.canvas.width / 2 - stage.canvas.width * 2
			/ COLUMN_COUNT;
	yeniOyunButton.y = stage.canvas.height / COLUMN_COUNT;
	yardimButton.addEventListener("click", function() {
		if (!soundOn) {
			soundOn = true;
			gameContainer.removeChild(yardimButton);
			gameContainer.addChild(yardimButton2);

			createjs.Sound.play("fonmusic");

		}

	});
	yardimButton2.addEventListener("click", function() {
		if (soundOn) {
			soundOn = false;
			console.log("arwen");
			gameContainer.removeChild(yardimButton2);
			gameContainer.addChild(yardimButton);
			createjs.Sound.stop();

		}
	});

	yardimButton.x = stage.canvas.width / 2 + stage.canvas.width * 2
			/ COLUMN_COUNT - yardimButton.image.width;
	yardimButton.y = stage.canvas.height / COLUMN_COUNT;
	yardimButton2.x = yardimButton.x;
	yardimButton2.y = yardimButton.y;
	facebookButton.x = stage.canvas.width * xProp / 2 + stage.canvas.width * 2
			* xProp / COLUMN_COUNT - yardimButton.image.width;
	facebookButton.y = yardimButton.y + 10;

	twitterButton.x = stage.canvas.width * xProp / 2 + stage.canvas.width * 3
			* xProp / COLUMN_COUNT;
	twitterButton.y = facebookButton.y - 30;

	bg.scaleX = xProp;
	bg.scaleY = yProp;

	jokerLogo.scaleX = xProp;
	jokerLogo.scaleY = yProp;

	back = new createjs.Shape();
	back.graphics.beginBitmapFill(bg.image, "no-repeat", scaleMatrix).drawRect(
			0, 0, stage.canvas.width, stage.canvas.height);

	siluet.x = (stage.canvas.width - siluet.image.width * xProp) / 2;
	siluet.y = (stage.canvas.height - siluet.image.height * yProp) / 2;
	jokerLogo.x = (stage.canvas.width - jokerLogo.image.width * xProp) / 2;
	jokerLogo.y = stage.canvas.height / COLUMN_COUNT;

	// siluet.scaleX = xProp;
	// siluet.scaleY = yProp;

	statusArea.x = (stage.canvas.width - statusArea.image.width * xProp * 1.8) / 2;
	statusArea.y = siluet.y - 80;
	statusArea.scaleX = xProp * 1.8;
	// statusArea.scaleY = yProp;

	sureArea.x = (stage.canvas.width - sureArea.image.width) / 2;
	sureArea.y = siluet.y + siluet.image.height * yProp;
	// sureArea.scaleX = xProp;
	// sureArea.scaleY = yProp;

	// statusIsim.scaleX = xProp;
	// statusIsim.scaley = yProp;

	statusIsim.x = statusArea.x - ((statusIsim.image.width) / 2);
	statusIsim.y = statusArea.y
			+ (statusArea.image.height - statusIsim.image.height) * yProp / 2;

	// statusJoker.scaleX = xProp;
	// statusJoker.scaley = yProp;

	statusJoker.x = (stage.canvas.width - statusJoker.image.width) / 2 - 20;
	statusJoker.y = statusIsim.y;

	// statusOdul.scaleX = xProp;
	// statusOdul.scaley = yProp;

	statusOdul.x = statusJoker.x + 100;
	statusOdul.y = statusIsim.y;

	jokerButton = new createjs.Bitmap(queue.getResult("jokerbuttonhover"));
	jokerButton_hover = new createjs.Bitmap(queue.getResult("jokerbutton"));
	jokerButton_hover.visible = false;
	jokerButton.addEventListener("mouseover", function() {
		jokerButton.visible = false;
		jokerButton_hover.visible = true;
	});
	jokerButton_hover.addEventListener("click", function() {
		jokerClicked(jokers[currentJokerCount - 1].bmp);
	});
	jokerButton_hover.addEventListener("mouseout", function(ev) {
		jokerButton.visible = true;
		jokerButton_hover.visible = false;
	});

	jokerButton.scaleX = 0.8;
	jokerButton.scaleY = 0.8;

	jokerButton_hover.scaleX = 0.8;
	jokerButton_hover.scaleY = 0.8;
	stage.addChild(back);
	stage.addChild(jokerLogo);
	stage.addChild(gameContainer);
	gameContainer.addChild(siluet);
	gameContainer.addChild(sureArea);
	gameContainer.addChild(statusArea);
	gameContainer.addChild(statusIsim);
	gameContainer.addChild(statusJoker);
	gameContainer.addChild(statusOdul);
	//gameContainer.addChild(yeniOyunButton);
	// gameContainer.addChild(yardimButton);
	gameContainer.addChild(yardimButton2);

	// gameContainer.addChild(facebookButton);
	// gameContainer.addChild(twitterButton);

}

function createJokers() {

	jokers = new Array();
	for ( var i = 0; i < gameSettings.jokerCount; i++) {
		var j1 = new Object();
		j1.id = i;
		j1.bmp = new createjs.Bitmap(queue.getResult("joker"));
		j1.bmp.scaleX = xProp;
		j1.bmp.scaleY = yProp;
		j1.x = stage.canvas.width / COLUMN_COUNT;
		j1.y = stage.canvas.height / MARKER_ROW_COUNT + (i)
				* (j1.bmp.image.height * yProp + 5);

		jokers.push(j1);
		gameContainer.addChild(j1.bmp);
		j1.bmp.x = j1.x;
		j1.bmp.y = j1.y;
	}
	/*
	 * for ( var i = 0; i < gameSettings.jokerCount; i++) { j1 = jokers[i];
	 * jokerBArea = new createjs.Shape(); jokerBArea.x = j1.x; jokerBArea.y =
	 * j1.y; jokerBArea.width = j1.bmp.image.width * xProp; jokerBArea.height =
	 * j1.bmp.image.height * yProp;
	 * jokerBArea.graphics.beginFill("rgba(212,212,212,0.3)").beginStroke(
	 * "rgba(252,252,252,0.9)").rect(0, 0, jokerBArea.width, jokerBArea.height);
	 * jokerBArea.graphics.endStroke(); jokerBArea.graphics.endFill();
	 * 
	 * gameContainer.addChildAt(jokerBArea, gameContainer
	 * .getChildIndex(jokers[0].bmp) - 1); }
	 */
}
function jokerClicked(target) {
	if (soundOn)
		createjs.Sound.play("jokerbump");
	if (usedJokersPerQuestion >= 3) {
		onRightAnswer();
		return;
	} else {
		gameContainer.mouseEnabled = false;
		beforeUsingJoker(target, jokerAnimationCompleted);
	}

}
function beforeUsingJoker(target, fireOnComplete) {

	currentJokerCount--;
	if (currentJokerCount < 0)
		currentJokerCount = 0;

	if (currentJokerCount == 0) {
		tween = createjs.Tween.get(target).to({
			scaleX : 0,
			scaleY : 0,
			x : target.x + (target.image.width * xProp) / 2,
			y : target.y + (target.image.height * yProp) / 2
		}, 1000, createjs.Ease.bounceOut);
		if (fireOnComplete != null)
			tween.call(fireOnComplete);
	} else {
		for ( var i = 0; i < currentJokerCount; i++) {
			tween = createjs.Tween.get(jokers[i].bmp).to({
				y : jokers[i].bmp.y + jokers[i].bmp.image.height * yProp + 5

			}, 1000, createjs.Ease.bounceOut);
			if (fireOnComplete != null)
				tween.call(fireOnComplete);
		}
	}

}
var usedJokersPerQuestion = 0;
var finishedAnimations = 0;
function jokerAnimationCompleted(event) {
	finishedAnimations++;
	if ((finishedAnimations == currentJokerCount) && currentJokerCount != 0) {
		finishedAnimations = 0;
		clearAnimtedJokers();
		spendJoker();

		gameContainer.mouseEnabled = true;
	} else if ((currentJokerCount == 0 && finishedAnimations == 1)) {
		finishedAnimations = 0;
		clearAnimtedJokers();
		spendJoker();
		gameContainer.mouseEnabled = true;
	}

}

function clearAnimtedJokers() {

	(jokers[currentJokerCount].bmp.visible = false);
}

function spendJoker() {

	question = questionList[currentQuestionIndex];
	selection = 0;
	wrongAnswer = true;
	while (wrongAnswer) {
		selection = Math.floor(Math.random() * 4);
		wrongAnswer = isAnswerRight(answersArea[selection].id);

		wrongAnswer = answersArea[selection].normal.visible ? wrongAnswer
				: true;
	}
	answersArea[selection].normal.visible = false;

	gameContainer.removeChild(answersArea[selection].normal.textArea);
	usedJokersPerQuestion++;
	if (usedJokersPerQuestion == 3)
		onRightAnswer();
}

function onRightAnswer() {
	gameStart = false;

	if (currentQuestionIndex >= questionList.length - 1) {
		if (currentAward < awards.length - 1)
			currentAward++;
		showGameOver();
		return;

	}

	if (soundOn)
		createjs.Sound.play("rightmusic");
	clearTimeout(interval);
	currentAward++;
	if (currentQuestionIndex >= questionList.length - 1) {
		showGameOver();
		return;
	}
	if (!(currentAward < awards.length)) {
		currentAward--;
	}
	animateCurrentAwards(function() {

	});
	showNextContainer(true);

}
var callCount = 0;
var callLimit = 4;
var jokerDropCount = 0;
var awardDropCount;
function wrongAnswerAnimationCompleted(event) {
	finishedAnimations++;
	if (soundOn)
		createjs.Sound.play("jokerfall");
	if ((finishedAnimations == currentJokerCount) && currentJokerCount != 0) {
		finishedAnimations = 0;
		clearAnimtedJokers();
		callCount++;

		if (jokerDropCount > callCount) {

			beforeUsingJoker(jokers[currentJokerCount].bmp,
					wrongAnswerAnimationCompleted);

		} else {
			showNextContainer(false);
		}
	} else if ((currentJokerCount == 0 && finishedAnimations == 1)) {
		finishedAnimations = 0;
		callCount++;
		beforeUsingJoker(jokers[0].bmp, finishDropJokers);

	}

}
awardCallCount = 0;
function finishDropJokers() {
	clearAnimtedJokers();
	finishedAnimations = 0;
	if (awardDropCount > 0)
		wrongAnswerDropAwards(showFalseContainer);
	else
		showNextContainer(false);
}
function showFalseContainer() {
	showNextContainer(false);
}
function wrongAnswerDropAwards() {
	awardCallCount = 0;
	if (currentAward - awardDropCount >= 0) {
		if (awardDropCount > 0) {
			dropAward(wrongAnswerDropAwards);
		} else
			showFalseContainer();
	} else {
		showGameOver();
		return;
	}
}

function dropAward(callBack) {

	for (i = currentAward; i > currentAward - awardDropCount; i--) {
		createjs.Tween.get(awards[i].pass).to({
			alpha : 1
		}, 1000).call(function() {
			awardCallCount++;
			if (awardCallCount == awardDropCount) {
				for (i = currentAward; i > currentAward - awardDropCount; i--) {
					if (soundOn)
						createjs.Sound.play("awardfall");
					awards[i].pass.visible = true;
					awards[i].act.visible = false;
				}
				currentAward -= awardDropCount;

				if (currentAward >= 0)
					showFalseContainer();
				else {
					showGameOver();
					return;
				}
			} else if (awardCallCount == 1 && awardDropCount == 1) {
				for (i = currentAward; i > currentAward - awardDropCount; i--) {
					awards[i].pass.visible = true;
					awards[i].act.visible = false;
				}
				currentAward -= awardDropCount;

				if (currentAward >= 0)
					showFalseContainer();
				else {
					showGameOver();
					return;
				}
			}

		});
	}

}
function onWrongAnswer() {
	clearTimeout(interval);
	if (currentQuestionIndex >= questionList.length - 1) {
		jokerDropCount = currentJokerCount >= callLimit ? callLimit
				: currentJokerCount;
		awardDropCount = callLimit - jokerDropCount;
		currentAward -= awardDropCount;
		showGameOver();
		return;
	}
	if (soundOn)
		createjs.Sound.play("wrongmusic");
	gameContainer.mouseEnabled = false;
	clearInterval(interval);
	index = 0;
	callCount = 0;
	jokerDropCount = currentJokerCount >= callLimit ? callLimit
			: currentJokerCount;
	awardDropCount = callLimit - jokerDropCount;
	if (currentAward != -1)
		gameStart = false;
	if ((currentAward < awardDropCount)) {
		if (!gameStart) {
			currentAward = -1;
			showGameOver();
			return;
		}
	}
	if (currentJokerCount == gameSettings.jokerCount) {
		beforeUsingJoker(jokers[gameSettings.jokerCount - 1].bmp,
				wrongAnswerAnimationCompleted);

	} else
		beforeUsingJoker(jokers[currentJokerCount].bmp,
				wrongAnswerAnimationCompleted);

}

function getAwards() {

	awards = new Array();
	for ( var i = 1; i <= 10; i++) {
		var award = createAward(i);
		award.active = {
			id : award.id + "_active",
			src : "sprites/" + award.id + "_active.png"
		};
		award.inactive = {
			id : award.id + "_inactive",
			src : "sprites/" + award.id + "_inactive.png"

		};

		awards.push(award);

		assets.push(award.active);
		assets.push(award.inactive);
	}
	;

}
function createAward(path) {
	return {
		id : path
	};
}
function createAwards() {
	for ( var i = awards.length; i > 0; i--) {
		awardImage = new createjs.Bitmap(queue.getResult(awards[i - 1].id
				+ "_inactive"));
		awardImage.scaleX = xProp;
		awardImage.scaleY = yProp;
		awardImage.x = (stage.canvas.width - awardImage.image.width * xProp)
				- (stage.canvas.width / COLUMN_COUNT) + awardImage.image.width
				* xProp - jokers[1].bmp.image.width * xProp;
		awardImage.y = stage.canvas.height / MARKER_ROW_COUNT
				+ (awardImage.image.height * yProp + (5))
				* (awards.length - (i));

		awardImage_active = new createjs.Bitmap(queue
				.getResult(awards[i - 1].id + "_active"));
		awardImage_active.scaleX = xProp;
		awardImage_active.scaleY = yProp;
		awardImage_active.x = (stage.canvas.width - awardImage.image.width
				* xProp)
				- (stage.canvas.width / COLUMN_COUNT)
				+ awardImage.image.width
				* xProp - jokers[1].bmp.image.width * xProp;
		awardImage_active.y = stage.canvas.height / MARKER_ROW_COUNT
				+ (awardImage.image.height * yProp + (5))
				* (awards.length - (i));
		awardImage_active.alpha = 0;
		awards[i - 1].act = awardImage_active;
		awards[i - 1].pass = awardImage;
		gameContainer.addChild(awardImage_active, awardImage);

	}
	jokerButton.x = awards[0].act.x
			- (awards[0].act.x - (siluet.x + siluet.image.width * siluet.scaleX))
			/ 2 - jokerButton.image.width * jokerButton.scaleX / 2;
	jokerButton.y = awards[6].act.y;
	jokerButton_hover.x = jokerButton.x;
	jokerButton_hover.y = jokerButton.y;
	gameContainer.addChild(jokerButton);
	gameContainer.addChild(jokerButton_hover);

};

function createQA() {
	sureGosterge = new createjs.Bitmap(queue.getResult("sure_gosterge"));
	sureGosterge.x = Math.floor((stage.canvas.width - sureGosterge.image.width
			* xProp) / 2);
	sureGosterge.y = (sureArea.y + sureArea.image.height) + 1;
	sureGosterge.scalaX = xProp;
	sureGosterge.scaleY = yProp;

	questionArea = new createjs.Bitmap(queue.getResult("soru_bg"));
	questionArea.x = (sureGosterge.x - questionArea.image.width * xProp);
	questionArea.y = sureGosterge.y;
	questionArea.scaleX = xProp;
	questionArea.scaleY = yProp;
	gameContainer.addChild(questionArea);
	gameContainer.addChild(sureGosterge);

	for ( var i = 0; i < choices.length; i++) {
		answerArea = new Object();
		answerArea.id = i;

		answerArea.normal = new createjs.Bitmap(queue.getResult(choices[i]
				+ "_normal_bg"));
		answerArea.hover = new createjs.Bitmap(queue.getResult(choices[i]
				+ "_hover_bg"));
		answerArea.right = new createjs.Bitmap(queue.getResult(choices[i]
				+ "_dogru_bg"));
		answerArea.wrong = new createjs.Bitmap(queue.getResult(choices[i]
				+ "_yanlis_bg"));

		answerArea.normal.x = sureGosterge.x + sureGosterge.image.width;
		answerArea.normal.y = questionArea.y
				+ (1 + answerArea.normal.image.height * yProp) * i;
		answerArea.hover.x = answerArea.normal.x;
		answerArea.hover.y = answerArea.normal.y;
		answerArea.hover.holder = answerArea;
		answerArea.normal.holder = answerArea;
		answerArea.right.x = answerArea.normal.x;
		answerArea.right.y = answerArea.normal.y;
		answerArea.wrong.x = answerArea.normal.x;

		answerArea.wrong.y = answerArea.normal.y;
		answerArea.normal.scaleX = xProp;
		answerArea.normal.scaleY = yProp;
		answerArea.hover.scaleX = xProp;
		answerArea.hover.scaleY = yProp;
		answerArea.right.scaleX = xProp;
		answerArea.right.scaleY = yProp;
		answerArea.wrong.scaleX = xProp;
		answerArea.wrong.scaleY = yProp;

		answerArea.hover.addEventListener("click", function(ev) {
			gameContainer.mouseEnabled = false;
			if (isAnswerRight(ev.target.holder.id)) {
				gameContainer.addChildAt(answersArea.getRight(ev.target),
						gameContainer.getChildIndex(ev.target) + 1);
				onRightAnswer();
			} else {
				gameContainer.addChildAt(answersArea.getWrong(ev.target),
						gameContainer.getChildIndex(ev.target) + 1);
				onWrongAnswer();
			}
			stage.removeChild(ev.target);

		});
		answerArea.normal.addEventListener("mouseover", function(ev) {

			for ( var i = 0; i < answersArea.length; i++) {
				gameContainer.removeChild(answersArea[i].hover);
			}
			var rep = answersArea.getHover(ev.target);
			gameContainer.addChildAt(rep, gameContainer
					.getChildIndex(ev.target) + 1);

		});
		answerArea.hover.addEventListener("mouseout", function(ev) {
			gameContainer.removeChild(ev.target);
		});
		gameContainer.addChild(answerArea.normal);

		answersArea.push(answerArea);
	}
}
function getQuestion(index, callback) {

	return questionList[currentQuestionIndex];
}
function isAnswerRight(answer) {

	quest = questionList[currentQuestionIndex];

	id = atob(quest.agbs) - Math.pow(quest.aid, 2) - Math.pow(quest.bid, 2)
			- Math.pow(quest.cid, 2) - Math.pow(quest.did, 2);
	return answer == 0 ? id == quest.aid : answer == 1 ? id == quest.bid
			: answer == 2 ? id == quest.cid : id == quest.did;
}
function startGameSequence(callBackFunc) {
	createjs.Sound.stop();
	if (gameSettings.status == 1) {
		getCompetitionList(function() {
			getGameQuestions(function() {
				if (soundOn)
					createjs.Sound.play("fonmusic", {
						loop : -1
					});
				if (callBackFunc)
					callBackFunc();
				else
					startGame();

			});

		});
	} else {
		alert(gameSettings.message);
	}

}
function clearScreen() {

}
var gameStart;
function startGame() {
	if (gameState == 0) {
		currentJokerCount = gameSettings.jokerCount;
		duration = gameSettings.duration;
		currentAward = -1;
		currentQuestion = 1;
		currentQuestionIndex = 0;
		gameStart = true;
	}
	updateTextFields();
	question = getQuestion(0, null);
	onNewQuestion(question);
	animateCurrentAwards();
}

function onNextQuestion(success) {

	currentQuestionIndex++;
	if (currentQuestionIndex == gameSettings.questionCount) {
		showGameOver();
	} else {
		for (i = 0; i < awards.length; i++) {
			awards[i].act.visible = false;
			awards[i].pass.visible = true;
			awards[i].pass.alpha = 1;
		}
		try {
			awards[currentAward].act.visible = true;
			awards[currentAward].pass.visible = false;
			awards[currentAward].act.alpha = 1;
		} catch (e) {
			// TODO: handle exception
		}
		callCount = 0;
		currenTicker = 0;
		usedJokersPerQuestion = 0;
		gameContainer.removeChild(countDownArea);
		clearTextFields();
		onNewQuestion(getQuestion(0, null));
		updateTextFields();
	}
}
function updateTextFields() {
	gameContainer.removeChild(nameArea);
	gameContainer.removeChild(jokerArea);
	gameContainer.removeChild(awardArea);
	gameContainer.removeChild(currQuestionArea);

	nameArea = new createjs.Text(gameSettings.username, "14px Arial", "#F1F1F1");

	jokerArea = new createjs.Text(currentJokerCount, "16px Arial", "#F1F1F1");
	awardArea = new createjs.Text(getAwardText(currentAward), "16px Arial",
			"#F1F1F1");
	currQuestionArea = new createjs.Text(currentQuestionIndex + 1,
			"18px Arial bold", "#FFF");
	currQuestionArea.x = questionArea.x + 24
	currQuestionArea.y = questionArea.y
			+ (questionArea.image.height * yProp - 8) / 2;
	nameArea.x = statusIsim.x + statusIsim.image.width + 12;
	nameArea.y = statusIsim.y + 12;
	jokerArea.x = statusJoker.x + statusJoker.image.width + 12;
	jokerArea.y = nameArea.y;
	awardArea.x = statusOdul.x + statusOdul.image.width + 12;
	awardArea.y = nameArea.y;
	gameContainer.addChild(nameArea, jokerArea, awardArea, currQuestionArea);
}

function getAwardText(awardIndex) {
	if (gameStart)
		return "0";

	switch (awardIndex) {
	case 0:
		return "100  ";
		break;

	case 1:
		return "500 ";
		break;
	case 2:
		return "1000 ";
		break;
	case 3:
		return "2000 ";
		break;
	case 4:
		return "5000 ";
		break;
	case 5:
		return "10000 ";
		break;
	case 6:
		return "20000 ";
		break;
	case 7:
		return "50000 ";
		break;
	case 8:
		return "100000 ";
		break;
	case 9:
		return "500000 ";
		break;
	case 10:
		return "500000 ";
		break;

	default:
		return "İflas"
		break;
	}
}
function clearTextFields() {
	gameContainer.removeChild(questionArea.textArea);
	for (i = 0; i < answersArea.length; i++) {
		gameContainer.removeChild(answersArea[i].normal.textArea);
		gameContainer.removeChild(answersArea[i].right);
		gameContainer.removeChild(answersArea[i].wrong);
		answersArea[i].normal.visible = true;
	}
}

function onNewQuestion(question) {
	animateQuestion(question);
	questionTicker = true;
	interval = setInterval(animateCountDown, 1000);

	/*
	 * dynSprite = { images : [ "sprites/dynamic.png" ], frames : [ [ 908, 304,
	 * 300, 300 ], [ 606, 606, 300, 300 ], [ 606, 304, 300, 300 ], [ 908, 2,
	 * 300, 300 ], [ 606, 2, 300, 300 ], [ 304, 606, 300, 300 ], [ 304, 304,
	 * 300, 300 ], [ 304, 2, 300, 300 ], [ 2, 606, 300, 300 ], [ 304, 2, 300,
	 * 300 ], [ 606, 2, 300, 300 ], [ 908, 2, 300, 300 ], [ 304, 304, 300, 300 ], [
	 * 304, 606, 300, 300 ], [ 2, 304, 300, 300 ], [ 2, 2, 300, 300 ] ],
	 * "animations" : {
	 * 
	 * "start" : [ 0, 14 ] } };
	 */

}

function animateQuestion(question) {

	var margins = {
		top : 8 * yProp,
		left : 42,
		bottom : 20,
		right : 10
	};
	var qmargins = {
		top : 15,
		left : 75,
		bottom : 20,
		right : 20
	};
	animation = new TextAnimation(stage, questionArea, qmargins, question.q,
			function() {

				ansAnim1 = new TextAnimation(stage, answersArea[0].normal,
						margins, question.a, null);
				answersArea[0].answerId = question.aid;
				ansAnim1.startAnimation();
				ansAnim2 = new TextAnimation(stage, answersArea[1].normal,
						margins, question.b, null);
				answersArea[1].answerId = question.bid;
				ansAnim2.startAnimation();
				ansAnim3 = new TextAnimation(stage, answersArea[2].normal,
						margins, question.c, null);
				answersArea[2].answerId = question.cid;
				ansAnim3.startAnimation();
				ansAnim4 = new TextAnimation(stage, answersArea[3].normal,
						margins, question.d, null);
				answersArea[3].answerId = question.did;
				ansAnim4.startAnimation();
				gameContainer.mouseEnabled = true;

			});

	animation.startAnimation();

}

function animateCurrentAwards(callBack) {
	try {
		createjs.Tween.get(awards[currentAward].act).to({
			alpha : 1

		}, 1000).call(function() {
			awards[currentAward].act.visible = true;
			awards[currentAward].pass.visible = false;
			awards[currentAward].pass.alpha = 0;
			if (callBack)
				callBack();
		});
	} catch (e) {
		// TODO: handle exception
	}

}

var currenTicker = 0;
var dynamite;
function animateCountDown() {
	if (countDownArea != null) {
		gameContainer.removeChild(countDownArea);
		gameContainer.removeChild(dynamite);
	}
	seconds = Math.floor((duration - currenTicker) % 60);
	minutes = Math.floor((duration - currenTicker) / 60);
	if (seconds == 0 && minutes == 0) {
		onWrongAnswer();
		return;
	}
	if (seconds < 10)
		seconds = "0" + seconds;
	var text = "0" + minutes + ":" + seconds;
	countDownArea = new BitmapTextField(sureArea.image.width,
			sureArea.image.height, text, "digital", Math.floor(32 * yProp), 0,
			0, "center", "top", true);
	countDownArea.x = sureArea.x;
	countDownArea.y = sureArea.y;

	currenTicker++;
	dynLength = (sureGosterge.image.height) * yProp * (duration - currenTicker)
			/ duration;
	dynamite = new createjs.Shape();
	dynamite.graphics.beginFill("rgba(255,0,0,0.8)").drawRoundRect(0, 0, 24,
			dynLength, 5);
	dynamite.x = sureGosterge.x + 2;
	dynamite.y = sureGosterge.y + sureGosterge.image.height * yProp - dynLength;
	gameContainer.addChild(dynamite);
	gameContainer.addChild(countDownArea);

}
function tick(tickerData) {

	stage.update();

}
function callAjax(adddress, postData, onSuccess, onError) {
	$.ajax({
		url : adddress,
		type : "POST",
		dataType : "json",
		data : postData,
		success : function(data) {
			onSuccess(data);
		},
		error : function(data) {
			if (onError)
				onError();
			else
				onSuccess(data);
		}
	});

}
function getGameConfig(callBack) {
	gameSettings = new Object();
	usName = document.getElementById("usName").value;
	pass = document.getElementById("passArea").value;

	callAjax("/services/login", {
		email : usName,
		password : pass
	}, function(data) {
		parseKeyResult(data);
		callBack();
	}, function() {
		callBack();
	});

}
function parseKeyResult(data) {
	gameSettings.key = data[0].key;
	gameSettings.username = data[0].username;
	gameSettings.status = data[0].status;
	gameSettings.message = data[0].message;
	gameSettings.highscore = data[0].highscore;
	gameSettings.livecount = data[0].livecount;

}
function getGameQuestions(callBack) {

	callAjax("/services/questions", {
		key : gameSettings.key,
		gameid : "1"
	}, function(data) {
		questionList = data;
		callBack();
	});
}
function submitResult(callBack) {
	callAjax("/services/result", {
		key : gameSettings.key,
		score : getAwardText(currentAward),
		usedjoker : currentJokerCount
	}, function(data) {
		callBack();
	});
}
function renewKey(callback) {
	callAjax("/services/renewkey", {
		key : gameSettings.key

	}, function(data) {
		parseKeyResult(data);
		if (callback)
			callback();
	});

}
function restartGame() {
	clearTimeout(interval);
	currenTicker =0;
	for (i = 0; i < jokers.length; i++) {

		jokers[i].x = stage.canvas.width / COLUMN_COUNT;
		jokers[i].y = stage.canvas.height / MARKER_ROW_COUNT + (i)
				* (jokers[i].bmp.image.height * yProp + 5);
		jokers[i].bmp.x = jokers[i].x;
		jokers[i].bmp.y = jokers[i].y;
		jokers[i].bmp.alpha = 1;
		jokers[i].bmp.scaleX = xProp;
		jokers[i].bmp.scaleY = yProp;
		jokers[i].bmp.visible = true;

	}
	for (i = 0; i < awards.length; i++) {
		try {
			awards[i].act.visible = false;
			awards[i].pass.visible = true;
			awards[i].pass.alpha = 1;
		} catch (e) {

		}
	}
	gameContainer.mouseEnabled = true;
	clearTextFields();
	gameState == 0;
	renewKey(function() {
		startGameSequence();
	});

}
function getCompetitionList(callback) {

	callAjax("/services/competitionlist", {
		key : gameSettings.key

	}, function(data) {
		gameSettings.jokerCount = data[0].jokercount;
		gameSettings.duration = data[0].duration;
		if (callback)
			callback();
	});
}
