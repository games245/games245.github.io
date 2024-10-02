function TextAnimation(stage, boundRectangle, marginRectangle, text, onFinished) {
	var currAnim = this;
	currAnim.askingQuestion = false;
	currAnim.questionIndex = 0;
	currAnim.bounds = boundRectangle;
	currAnim.margins = marginRectangle;
	currAnim.currentQuestionText = text;
	currAnim.currentText = null;

	this.startAnimation = function() {

		currAnim.askingQuestion = true;
		createjs.Ticker.addEventListener("tick", this.handleTextTicks);
	};
	this.animateText = function() {
		var textToDraw = "";

		currAnim.questionIndex++;
		if (currAnim.questionIndex < currAnim.currentQuestionText.length) {
			gameContainer.removeChild(currAnim.currentText);
			textToDraw = currAnim.currentQuestionText.substring(0,
					this.questionIndex)
					+ "_";
			currAnim.currentText = new createjs.Text(textToDraw, "13px Arial",
					"#FFF");
			currAnim.currentText.y = currAnim.bounds.y + currAnim.margins.top;
			currAnim.currentText.x = currAnim.bounds.x + currAnim.margins.left;
			currAnim.currentText.lineWidth = currAnim.bounds.getBounds().width*xProp
					- currAnim.margins.right - currAnim.margins.left;
			currAnim.currentText.lineHeight = 21;
			gameContainer.addChild(this.currentText);
		} else {
			gameContainer.removeChild(currAnim.currentText);
			currAnim.currentText = new createjs.Text(
					currAnim.currentQuestionText, "13px Arial", "#FFF");
			currAnim.currentText.y = currAnim.bounds.y + currAnim.margins.top;
			currAnim.currentText.x = currAnim.bounds.x + currAnim.margins.left;
			currAnim.currentText.lineWidth = currAnim.bounds.getBounds().width*xProp
					- currAnim.margins.right - currAnim.margins.left;
			currAnim.currentText.setBounds(currAnim.bounds);
			currAnim.currentText.lineHeight = 21;
			gameContainer.addChild(this.currentText);
			currAnim.onAnimationFinished();
		}
	}

	this.onAnimationFinished = function() {
		currAnim.askingQuestion = false;
		currAnim.bounds.textArea = currAnim.currentText;
		if (onFinished != null) {
			onFinished(currentText);
		}

	}
	this.handleTextTicks = function handleTextTicks(tickData) {
		if (currAnim.askingQuestion)
			currAnim.animateText();
		else {
			createjs.Ticker.removeEventListener("tick",
					currAnim.handleTextTicks);

		}

	}

	return this;

}
