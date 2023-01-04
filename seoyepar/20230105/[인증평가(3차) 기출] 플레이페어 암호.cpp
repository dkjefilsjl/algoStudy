#include<iostream>
#include <string>
#include <vector>

using namespace std;

int main(int argc, char** argv)
{
	ios_base :: sync_with_stdio(false); 
	cin.tie(NULL);
	cout.tie(NULL);

	string s;
	string s2;
	cin >> s >> s2;
	int cnt = 0;
	char alpa[26][2] = {0,};
	char key[5][5];
	vector<pair<char, char>> v;
	int keyi = 0; int keyj = 0;
	alpa['J'-'A'][0] = -1;
	for (auto c:s2)
	{
		if (alpa[c - 'A'][0] == 0)
		{
			alpa[c - 'A'][0] = keyi + 1;
			alpa[c-'A'][1] = keyj + 1; 
			key[keyi][keyj] = c;
			if (keyj == 4)
			{
				keyi++; keyj = 0;
			}
			else keyj++;
		}
	}
	
	for (int i = 0; i < 26; i++)
	{
		if (keyi == 5 && keyj == 0)
			break;
		if (alpa[i][0] == 0)
		{
			alpa[i][0] = keyi + 1;
			alpa[i][1] = keyj + 1;
			key[keyi][keyj] = 'A' + i;
			if (keyj == 4)
			{
				keyi++; keyj = 0;
			}
			else keyj++;
		}
	}

	for (int i=0; i < s.length(); i++)
	{
		cnt++;
		if (cnt % 2 == 1)
		{
			if (i == (s.length() - 1))
				v.push_back(pair<char, char>(s[i], 'X'));
			else if (s[i] == s[i+1])
			{
				cnt++;
				if (s[i] != 'X')
					v.push_back(pair<char, char>(s[i], 'X'));
				else
					v.push_back(pair<char, char>(s[i], 'Q'));
			}
			else
				v.push_back(pair<char, char>(s[i], s[i+1]));
		}
	}
	int fkey[2] = {0,};
	int skey[2] = {0,};

	for (auto a:v)
	{
		if (alpa[a.first-'A'][0] != 0)
		{
			fkey[0] = alpa[a.first-'A'][0] - 1;
			fkey[1] = alpa[a.first-'A'][1] - 1;
			skey[0] = alpa[a.second-'A'][0] - 1;
			skey[1] = alpa[a.second-'A'][1] - 1;
			if (fkey[0] == skey[0])
			{
				if(fkey[1] == 4) fkey[1] = 0; else fkey[1]++;
				if(skey[1] == 4) skey[1] = 0; else skey[1]++;
			}
			else if (fkey[1] == skey[1])
			{
				if(fkey[0] == 4) fkey[0] = 0; else fkey[0]++;
				if(skey[0] == 4) skey[0] = 0; else skey[0]++;
			}
			else
			{
				int tmp = fkey[1];
				fkey[1] = skey[1];
				skey[1] = tmp;
			}
		}
		cout << key[fkey[0]][fkey[1]] << key[skey[0]][skey[1]];
	}
	return 0;
}
