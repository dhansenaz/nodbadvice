
let advice= [
    {
    id:5,
    category: "Career",
    title: "Have you seen Titanic?",
    advice: "The ship is sinking. Find a life preserver and jump!"
  },
  {
    id:6,
    category: "Career",
    title: "Should I stay or should I go?",
    advice: "Should I Stay or Should I Go, is a song by the English punk rock band the Clash. It was written in 1981 and featured Mick Jones on lead vocals. Go listen Now!"
  },
  {
    id:7,
    category: "Relationship",
    title: "New Friends",
    advice: "Look for Jack and Jim, they're sure to lend a hand"
  },
  {
    id:8,
    category: "Relationship",
    title: "In love",
    advice: "She loves you like a fat kid loves cake."
  },
  {
    id:9,
    category: "Roullete",
    title: "Not really",
    advice: "Finding someone who cares will serve you well"
  },
  {
    id:10,
    category: "Roullete",
    title: "In love",
    advice: "Dance like no one is watching. Because they're not. They're checking their phones"
  },
  {
    id:11,
    category: "Roullete",
    title: "Selfie",
    advice: "You may be the ugly one if you get handed the camera everytime there is a group photo"
  },
  {
    id:12,
    category: "Roullete",
    title: "Waffles",
    advice: "Yes, waffles are pancakes with abs. So yeah, eat up!"
  },
]

module.exports = {

    create: (req,res) => {
        const {category, title, advice} = req.body;
        advice.push({category, title, advice})
        res.status(200).send(advice)
    },
    read: (req,res) => {
        res.status(200).send(advice)
    },
    update: (req,res) => {

    },
    delete: (req,res) => {
        for(let i = 0; i<advice.length;i++){
            if(advice[i]===req.params.id){
                advice.splice(i,1)
            }

        }
    res.status(200).send(advice)
        
    }



}