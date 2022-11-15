s = input()
res = set()
sLen = len(s)
for i in range(sLen):
	for j in range(i, sLen):
		res.add(s[i: j + 1])
print(len(res))
