import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ["name"]

    greet() {
        console.log(`Hello ${this.name} from the hello controller!`)
    }

    get name() {
        return this.nameTarget.value
    }
}
