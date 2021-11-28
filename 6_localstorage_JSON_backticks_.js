//__________________________________________Local Storage_______________________________________________

localStorage.setItem("name","Ayush")

localStorage
// Storage {name: 'Ayush', length: 1}
localStorage.getItem("name")
// 'Ayush'
localStorage.removeItem('name')
localStorage.clear()


//_________________________________JSON - Javascript Object Notation____________________________________

obj = {name : "ayush", length:1, a:{this:'that'}}
jso = JSON.stringify(obj);
console.log(jso)
parsed = JSON.parse('{"name":"ayush","length":1,"a":{"this":"that"}}')
console.log(parsed);

//__________________________________Template literals - backticks_______________________________________

a = 34;
console.log('this is my ${a}')