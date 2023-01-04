#include<iostream>
#include <vector>
#include <algorithm>
using namespace std;

int cmp(pair<int, int> a, pair<int, int> b)
{
	return a.second > b.second;
}
int main(int argc, char** argv)
{
	
	ios_base :: sync_with_stdio(false); 
	cin.tie(NULL); 
	cout.tie(NULL);

	int w, n, m, p, re = 0;
	cin >> w >> n;
	vector<pair<int, int>> v;
	for (int i = 1; i <= n; i++)
	{
		cin >> m >> p;
		v.push_back(pair<int, int>(m, p));
	}
	sort(v.begin(), v.end(), cmp);
	for (auto i:v)
	{
		if (i.first <= w)
		{
			re += i.second * i.first;
			w -= i.first;
		}
		else
		{
			re += w * i.second;
			break;
		}
	}
	cout << re;
	return 0;
}
