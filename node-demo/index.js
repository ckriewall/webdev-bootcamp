// Use a package included with Node
import fs from 'fs'
fs.writeFile('file.txt', 'This is inside the new file', (err) => {
  if (err) throw err
})

// Use external packages from NPM
import superheroes from 'superheroes'
import supervillains from 'supervillains'
const hero = superheroes.random()
const villain = supervillains.random()
console.log(hero + ' vs. ' + villain)
