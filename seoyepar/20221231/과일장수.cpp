#include <string>
#include <vector>
#include <algorithm>

/*
사과 상자를 포장. 사과는 상태에 따라 1점부터 k점까지 점수로 분류,
k점이 짱짱
상자에 담긴 사과 중 가장 낮은 점수 p. 사과 한 상자의 가격 = p * m. m(한 상자의 사과 개수)
최대한 많은 사과를 팔고 얻을 수 있는 최대 이익. 남는 사과는 버림.
*/

using namespace std;

bool compare (int a, int b)
{
    return a > b;
}

int solution(int k, int m, vector<int> score) {
    int answer = 0;
    int num = m - 1;
    sort(score.begin(), score.end(), compare);
    while (num < score.size())
    {
        answer += score[num] * m;
        num += m;
    }
    return answer;
}
