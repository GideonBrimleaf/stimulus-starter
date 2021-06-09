import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["source"]

    copy() {
        preventDefault()
        console.log(`${this.sourceTarget.value}`)
    }

    connect() {
        if(document.queryCommandSupported("copy")) {
            this.element.classList.add("clipboard--supported")
        }
    }
}