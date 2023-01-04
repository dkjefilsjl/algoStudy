#include<iostream>


using namespace std;

int main(int argc, char** argv)
{
	int v[8];
	int count = 0;
	for (int i = 0; i < 8; i++)
	{
		scanf("%d", &v[i]);
		if ((v[0] == 1) && (i != 0) && (v[i] == (v[i - 1] + 1)))
			count++;
	}
	if (count == 7)
		printf("ascending");
	else if (v[0] == 8)
	{
		count = 0;
		for (int i = 8; i > 0; i--)
			if (v[8 - i] == i) count++;
		if (count == 8)
			printf("descending");
		else
			printf("mixed");
	}
	else printf("mixed");
	
	return 0;
}
