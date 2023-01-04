#include<iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;
int n;
int **visited;

int dfs(vector<string> v, int i, int j, int cnt){
	visited[i][j] = 1;
	int x[4] = {-1, 1, 0, 0};
	int y[4] = {0, 0, 1, -1};
	for (int k = 0; k < 4; k++)
	{
		int dx = i + x[k];
		int dy = j + y[k];
		if ((dx >= 0) && (dx < n) && (dy >= 0) && (dy < n))
			if ((visited[dx][dy] == 0) && (v[dx][dy] == '1'))
			{
				cnt = dfs(v, dx, dy, cnt + 1);
			}
	}
	return cnt;
}

int main(int argc, char** argv)
{
	ios_base :: sync_with_stdio(false); 
	cin.tie(NULL); 
	cout.tie(NULL);

	cin >> n;
	string t;
	int count = 0;
	vector<string> v;
	vector<int> wall;
	visited = new int*[n];
	for (int i = 0; i < n; i++)
	{
		cin >> t;
		v.push_back(t);
		visited[i] = new int[n]{};
	}
	for (int i = 0; i < n; i++)
	{
		for (int j = 0; j < n; j++)
		{
			if ((visited[i][j] == 0) && (v[i][j] == '1'))
			{
				count++;
				wall.push_back(dfs(v, i, j, 1));
			}
		}
	}
	cout << count << "\n";
	sort(wall.begin(), wall.end());
	for (auto w:wall)
		cout << w << "\n";
	return 0;
}
