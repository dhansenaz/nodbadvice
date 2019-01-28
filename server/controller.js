
let advice = [
    {
        id: 5,
        category: "Career",
        title: "Have you seen Titanic?",
        advice: "The ship is sinking. Find a life preserver and jump!"
    },
    {
        id: 6,
        category: "Career",
        title: "Should I stay or should I go?",
        advice: "Should I Stay or Should I Go, is a song by punk rock band the Clash. It was written in 1981."

    },
    {
        id: 7,
        category: "Relationship",
        title: "New Friends",
        advice: "Look for Jack and Jim, they're sure to lend a hand"
    },
    {
        id: 8,
        category: "Relationship",
        title: "In love",
        advice: "She loves you like a fat kid loves cake."
    },

    {
        id: 9,
        category: "Roullete",
        title: "In love",
        advice: "Dance like no one is watching. Because they're not. They're checking their phones"
    },
    {
        id: 10,
        category: "Roullete",
        title: "Selfie",
        advice: "You may be the ugly one if you get handed the camera everytime there is a group photo"
    },
    {
        id: 11,
        category: "Roullete", 
        title: "Waffles",
        advice: "Waffles are pancakes with abs. So yeah, eat up!"
    },
]
let id = 12

module.exports = {
    // read
    getAdvice: (req, res) => {
        const letter = req.params.inputLetter
        let id = 0
        console.log(req.params.inputLetter)
        if (letter >= 'a' && letter <= 'c') {
            id = 5
        } else if (letter >= 'd' && letter <= 'f') {
            id = 6
        } else if (letter >= 'g' && letter <= 'i') {
            console.log('nope')
            id = 7
        } else if (letter >= 'j' && letter <= 'l') {
            id = 8
        } else if (letter >= 'm' && letter <= 'o') {
            console.log('hit')
            id = 9
        } else if (letter >= 'p' && letter <= 'r') {
            id = 10
        } else if (letter >= 's' && letter <= 'z') {
            id = 11
        }
        advice.forEach((e) => {
            if (e.id === id) {
                res.status(200).send(e)
            }
        })

    },
    read: (req, res) => {
        res.status(200).send(advice)

    },
    createAdvice: (req, res) => {
        const newAdvice = {
            id: id,
            advice: req.body.advice
        }
        console.log(req.body)
        advice.push(newAdvice)
        id++
        console.log(advice)

        res.status(200).json(advice[advice.length - 1])

    },
    deleteAdvice: (req, res) => {
        for (let i = 0; i < advice.length; i++) {
            if (advice[i].id == req.params.id) {
                    advice.splice(i,1)
                
            }  
        }
        res.status(200).send(advice)
        console.log(advice) 
    },
    update: (req, res)=>{
        let id = req.params.id;

        let updateAdvice = advice.find((updateAdvice) => updateAdvice.id==id);
        updateAdvice.category = 'I dont think so'
        updateAdvice.title = 'Nope'
        updateAdvice.advice = "Worst advice ever!!!!";
       

        res.status(200).send(advice);
        console.log('update-----------------------', updateAdvice)
    
    
}
}