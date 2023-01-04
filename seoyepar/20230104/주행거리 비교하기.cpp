#include<iostream>
#include<string>
#include<cstdlib>


using namespace std;

int main(int argc, char** argv)
{
	int num1 = atoi(argv[1]);
	int num2 = atoi(argv[2]);
	if (num1 > num2)
		printf("A");
	else if (num1 < num2)
		printf("B");
	else
		printf("same");
	return 0;
}
