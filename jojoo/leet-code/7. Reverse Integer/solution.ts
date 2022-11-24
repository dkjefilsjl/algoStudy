function reverse(x: number): number {
    if (Math.pow(2, 31) -1 < x || Math.pow(-2, 31) > x)
        return (0);
    let s :string = String(x);
    let revers :string ='';
    if(s.charAt(0) === '-')
    {
        revers += s.charAt(0);
        s = s.slice(1);
    }
    
    let len :number = s.length;
    
    while(s.charAt(len - 1) === '0')
    {
        len--;
    }
    
    for (let i = len - 1; i >= 0; i--)
    {
        revers += s.charAt(i);
    }
    let result : number = +revers;
    if (Math.pow(2, 31) -1 < result || Math.pow(-2, 31) > result)
        return (0);
    return result;
};