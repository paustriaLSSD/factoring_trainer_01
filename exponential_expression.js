class ExponentialExpression extends createjs.Container {
  constructor(numeratorString, denominatorString, exponentValue, fontSize) {
    super()

    this.numeratorString = numeratorString || "1"
    this.denominatorString = denominatorString || "1"
    this.exponentValue = exponentValue || 1

    var isFraction = (this.denominatorString != "1")
    if (isFraction) {
      fontSize *= 0.8
    }

    this.numerator = new createjs.Text(numeratorString, fontSize + "px Courier", "#000000")
    this.numerator.textAlign = "center"
    this.numerator.textBaseline = "middle"
    this.denominator = new createjs.Text(denominatorString, fontSize + "px Courier", "#000000")
    this.denominator.textAlign = "center"
    this.denominator.textBaseline = "middle"

    this.width = Math.max(this.numerator.getMeasuredWidth(), this.denominator.getMeasuredWidth())

    this.exponent = new createjs.Text(exponentValue, fontSize * .7 + "px Courier", "#000000")


    this.shape = new createjs.Shape();
    this.addChild(this.shape)


    if (isFraction) {
      this.height = this.numerator.getMeasuredHeight() + this.denominator.getMeasuredHeight() + 30

      this.drawFractionBar()

      this.numerator.x = this.width * 0.5
      this.numerator.y = this.height * 0.25
      this.addChild(this.numerator)

      this.denominator.x = this.width * 0.5
      this.denominator.y = this.height * 0.75
      this.addChild(this.denominator)
    }
    else {
      this.height = this.numerator.getMeasuredHeight()

      this.numerator.x = this.width * 0.5
      this.numerator.y = this.height * 0.5
      this.addChild(this.numerator)
    }

    if (this.exponentValue != 1 && this.exponentValue != 0) {
      this.exponent.x = this.width + 20
      this.exponent.y = 0
      this.addChild(this.exponent)

      this.shape.graphics.beginStroke("#000000");
      this.shape.graphics.moveTo(-10, this.height * 0.2)
      this.shape.graphics.arcTo(-20, this.height * 0.5, -10, this.height * 0.8, 20)
      this.shape.graphics.endStroke();

      this.shape.graphics.beginStroke("#000000");
      this.shape.graphics.moveTo(this.width + 10, this.height * 0.2)
      this.shape.graphics.arcTo(this.width + 20, this.height * 0.5, this.width + 10, this.height * 0.8, 20)
      this.shape.graphics.endStroke();
    }

    this.setBounds(0, 0, this.width, this.height)
  }

  drawFractionBar() {
    this.shape.graphics.beginStroke("#000000");
    this.shape.graphics.moveTo(0, this.height / 2);
    this.shape.graphics.lineTo(this.width, this.height / 2);
    this.shape.graphics.endStroke();
  }
}
