const a = [1,2,10,6,7,3]
a.reduce((prev, cur, index, arr)=>{
  console.log(prev, cur, index, arr)
  return (prev+cur).toString()
})