const repeatWord = require('./repeat');
describe ('', ()=>{
it ('first test', ()=> {
  expect(repeatWord('test',2)).toBe('test1 test2 ');
}),
it ('second test', ()=> {
  expect(repeatWord('test',0)).toBe('')
}),
it ('third test', ()=> {
  expect (repeatWord(1,4)).toBe('2 3 4 5 ')
})
})
