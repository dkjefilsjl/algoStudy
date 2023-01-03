#include <string>
#include <vector>

using namespace std;

void dfs(int n, int size, vector<vector<int>> computers, int *visited)
{
    visited[n] = 1;
    for (int i = 0; i < size; i++)
    {
        if (computers[n][i] && !visited[i])
            dfs(i, size, computers, visited);
    }
}

int solution(int n, vector<vector<int>> computers) {
    int answer = 0;
    int *visited = new int[computers.size()]{};
    
    for (int i = 0; i < computers.size(); i++)
    {
         if (visited[i] == 0)
         {
             dfs(i, computers[i].size(), computers, visited);
             answer++;
         }
    }
    return answer;
}
