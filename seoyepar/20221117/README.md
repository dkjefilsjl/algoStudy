
**문제설명**

숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있다.
각 기사는 자신의 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 한다.
하지만 협약에 의해 공격력의 제한수치가 정해졌고, 해당 제한수치를 초과하는 기사는 정해진 수치의 무기를 구매해야 한다.

무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요하다. 필요한 철의 무게는?

**input**

number : 기사 단원의 수
limit : 제한수치
power : 제한 수치 초과 기사에게 주어지는 무기의 공격력

**solution**

수의 약수를 구하는 문제이다. 수의 제곱근보다 작은 숫자로 나누어 떨어지면 그 숫자와 곱해지는 숫자가 있으니 count +2를 해주고, 수의 제곱근인 경우에는 count +1을 해주며 보다 효율적인 계산을 하면 된다.