
let str1 = 'abcadeecfb';
let s = new Set();

for(let i = 0; i < str1.length; i++){

    s.add(str1[i]);    

} 
let result = '';

  for(let x of s) {
    result = result + x;
  }
  console.log(result);

//<----------------------------------------------------------->

let str = 'abcadeecfb'
let m = new Map();

for(let i =0; i<str.length;i++){
  if(m.has(str[i])){
   let  val = m.get(str[i])
   m.set(str[i],val+1)
  }
  else{
    m.set(str[i],1)
  }
}

for(let [k,v] of m){
  console.log(k+'='+v)
}






































