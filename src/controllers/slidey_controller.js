import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["slide"]
    static values = { index: Number }

    connect() {
        console.log("monkeys coming for you!")
    }

    previous() {
        this.indexValue --
    }

    next() {
        this.indexValue ++
    }

    indexValueChanged() {
        this.showCurrentSlide()
    }

    showCurrentSlide() {
        this.slideTargets.forEach((element, index) => {
            element.hidden = index != this.indexValue
        }) 
    }
}