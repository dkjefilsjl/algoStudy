function longestPalindrome(s: string): string {
  const n: number = s.length;
  let result: string = s.slice(0, 1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        let flag: boolean = true;
        for (let k = 0; k < (j - i) / 2; k++) {
          if (s.charAt(i + k) !== s.charAt(j - k)) {
            flag = false;
            break;
          }
        }
        if (flag && result.length < j - i + 1) {
          result = s.slice(i, j + 1);
        }
      }
    }
  }
  return result;
}
