'use strict';

window.addEventListener('load', init);

function init() {
	const stage = new createjs.Stage('canvas');

	const circle = new createjs.Shape();

	circle.graphics.beginFill(createjs.Graphics.getHSL(0, 100, 50))
		.drawCircle(0, 0, 10)
		.endFill();

	stage.addChild(circle);

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener('tick', handleTick);

	function handleTick() {

		console.log(circle.x)
		console.log(stage.mouseX)

		if (!circle.x
			|| !circle.y
			|| circle.x >= canvas.width - 1
			|| circle.y >= canvas.height - 1
		) {
			circle.visible = false;
		} else {
			circle.visible = true;
		}

		const mx = stage.mouseX;
		const my = stage.mouseY;

		circle.x = mx;
		circle.y = my;

		stage.update();
	}

}
