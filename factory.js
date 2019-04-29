class Dog {
    constructor () {
        this.sound = 'woof'
    }
    talk () {
        console.log(this.sound)       
    }
}
const sniffles = new Dog()
sniffles.talk() //output: 'woof'

$('button.myButton').click( _ => sniffles.talk() ) // NIET GOED!!!
$('button.myButton').click(sniffles.talk) // DOESN't WORK!!!

// NOW WITH FACTORY FUNCITONS

const DogFactory = () => {
    const sound = 'woof' // this is private to the DOM
    return {
        talk: () => console.log(sound)
    }
}
const snifflesFactory = DogFactory()
sniffles.talk() // Outputs: 'woof'
$('button.myButton').click(sniffles.talk) // NOW THIS WORKS