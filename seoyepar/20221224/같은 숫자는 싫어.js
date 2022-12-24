function solution(arr) {
  //return arr.reduce((re, a, i)=>{if ((i === 0) || (arr[i- 1] !== a)) re.push(a); return (re)}, []);
  return arr.filter((a, i) => {
    return i === 0 || arr[i - 1] !== a;
  });
}
