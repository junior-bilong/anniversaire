let messages = ["Happy birthday to Ndoa Cassandra Petrushka Tiphain"];
  
let i = messages.length;
let s = Math.floor(Math.random() * i);
  
document.getElementById("msg").innerHTML = '" ' + messages[s] + ' "';