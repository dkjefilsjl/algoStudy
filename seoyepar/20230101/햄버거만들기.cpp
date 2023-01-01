#include <string>
#include <vector>

/*
햄버거 포장하는 일
조리된 순서대로 상수 앞에 아래서부터 위로 쌓임.
빵,야채,고기,빵 햄버거만 포장

*/

using namespace std;

int solution(vector<int> ingredient) {
    int answer = 0;
    int check[4] = {1, 3, 2, 1};
    int cNum = 0;
    vector<int> stack;
    vector<int> tmp;
    
    for (int i = 0; i < ingredient.size(); i++)
    {
        stack.push_back(ingredient[i]);
        if (stack.size() >= 4)
        {
            while (check[cNum] == stack.back())
            {
                tmp.push_back(stack.back());
                stack.pop_back();
                if (++cNum == 4)
                    break;
            }
            if (cNum == 4)
            {
                answer++;
                cNum = 0;
            }
            else
            {
                while (cNum > 0)
                {
                    stack.push_back(tmp.back());
                    tmp.pop_back();
                    cNum--;
                }
            }
        }
    }
    
    
    return answer;
}
