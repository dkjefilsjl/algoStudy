int lengthOfLongestSubstring(char * s){
    if (!s[0])
        return 0;
    int result =1;
    for (int i = 0; s[i] != NULL; i++)
    {
        
        int count = 1;
        for (int j = i + 1; s[j] != NULL; j++)
        {
            int flag = 0;
            for (int k = i; k < j; k++)
            {
                if (s[k] == s[j])
                {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
            {
                break;
            }
            count++;
        }
        if (result < count)
        {
            result = count;
        }
    }
    return result;
}