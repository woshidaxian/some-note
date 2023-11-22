for(let i = 0; i < 5; i++){
  console.log(i);
  setTimeout(() => {
    console.log(i + 'aa');
  }, 1000);
  new Promise((resolve, reject) => {
    console.log(i + 'bb');
    resolve()
  }).then(() => {
    console.log(i + 'cc');
  })
}
console.log(i)