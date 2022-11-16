#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#define fastio                        \
	ios_base::sync_with_stdio(false); \
	cin.tie(NULL);                    \
	cout.tie(NULL)
using namespace std;

int main(void)
{
	vector< vector<int> > map;
	vector< vector<long> > result;
	int size;

	fastio;
	cin >> size;
	map.resize(size, vector<int>(size, 0));
	for (int i = 0; i < size; i++)
	{
		for (int j = 0; j < size; j++)
			cin >> map[i][j];
	}
	result.resize(size, vector<long>(size, 0));
	if (size > map[0][0])
	{
		result[map[0][0]][0] = 1;
		result[0][map[0][0]] = 1;
	}
	else
	{
		cout << 0 << '\n';
		return 0;
	}
	for (int i = 0; i < size; i++)
	{
		for (int j = 0; j < size; j++)
		{
			if (i == size - 1 && j == size - 1)
				continue;
			if (result[i][j])
			{
				if (size > i + map[i][j])
					result[i + map[i][j]][j] += result[i][j];
				if (size > j + map[i][j])
					result[i][j + map[i][j]] += result[i][j];
			}
		}
	}
	cout << result[size - 1][size -1] << '\n';
	return (0);
}