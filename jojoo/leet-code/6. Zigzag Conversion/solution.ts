function convert(s: string, numRows: number): string {
    if (numRows === 1)
        return s;
    let chunk :number = 2 * (numRows - 1);
    let result : string ="";
    for (let i = 0; i < chunk/2 + 1; i++)
    {
        for (let j = 0; j < s.length / chunk; j++)
        {
            result += s.charAt(j*chunk + i);
            if (i === chunk - i)
                continue;
            if (i === 0)
                continue;
            result += s.charAt((j+1) *chunk - i);
        }
    }
    return result;
};
