// add solution here
function theBeatlesPlay(musicians, instruments){
  var newSentence = [];
  for(let i = 0; i < musicians.length; i++){
    newSentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newSentence
}

function johnLennonFacts(facts){
  var i = 0
  var newString = []
  while ( i < facts.length){
    newString.push(`${facts[i]}!!!`)
    i++
  }

  return newString
}
