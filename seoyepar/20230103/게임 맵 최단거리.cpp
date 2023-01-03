#include <vector>
#include <queue>
#include <iostream>
using namespace std;

int solution(vector<vector<int> > maps)
{
    int answer = 0;
    int n = maps.size();
    int m = maps[0].size();
    int go[2] = {-1, 1};
    int **visited = new int*[n];
    queue<pair<int, int>> q;
    
    for (int i = 0; i < n; i++)
        visited[i] = new int[m]();
    if ((maps[n - 1][m - 2] == 0) && (maps[n - 2][m - 1] == 0)) // 출구 없는 경우
        return -1;

    q.push(make_pair(0,0));
    visited[0][0] = 1;
    pair<int, int> tmp;
    
    while (q.size())
    {
        tmp = q.front();
        q.pop();
        if ((tmp.first == n - 1) && (tmp.second == m - 1))
            break;
        for (int i = 0; i < 2; i++)
        {
            if ((tmp.first + go[i] >= 0) && (tmp.first + go[i] < n) && (maps[tmp.first+go[i]][tmp.second]) && visited[tmp.first + go[i]][tmp.second] == 0)
            {
                q.push(make_pair(tmp.first+go[i], tmp.second));
                visited[tmp.first + go[i]][tmp.second] = visited[tmp.first][tmp.second] + 1;
            }
            if ((tmp.second + go[i] >= 0) && (tmp.second + go[i] < m) && (maps[tmp.first][tmp.second+go[i]]) && visited[tmp.first][tmp.second+go[i]] == 0)
            {
                q.push(make_pair(tmp.first, tmp.second + go[i]));
                visited[tmp.first][tmp.second+go[i]] = visited[tmp.first][tmp.second] + 1;
            }
        }
    }
    if (visited[n-1][m-1] == 0) 
        return -1;
    else
        return visited[n-1][m-1];
}
