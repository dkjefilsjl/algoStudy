문제 설명
다음은 아이스크림 가게의 상반기 주문 정보를 담은 FIRST_HALF 테이블과 7월의 아이스크림 주문 정보를 담은 JULY 테이블입니다. FIRST_HALF 테이블 구조는 다음과 같으며, SHIPMENT_ID, FLAVOR, TOTAL_ORDER는 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량을 나타냅니다. FIRST_HALF 테이블의 기본 키는 FLAVOR입니다. FIRST_HALF테이블의 SHIPMENT_ID는 JULY테이블의 SHIPMENT_ID의 외래 키입니다.

NAME TYPE NULLABLE
SHIPMENT_ID INT(N) FALSE
FLAVOR VARCHAR(N) FALSE
TOTAL_ORDER INT(N) FALSE
JULY 테이블 구조는 다음과 같으며, SHIPMENT_ID, FLAVOR, TOTAL_ORDER 은 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 7월 아이스크림 총주문량을 나타냅니다. JULY 테이블의 기본 키는 SHIPMENT_ID입니다. JULY테이블의 FLAVOR는 FIRST_HALF 테이블의 FLAVOR의 외래 키입니다. 7월에는 아이스크림 주문량이 많아 같은 아이스크림에 대하여 서로 다른 두 공장에서 아이스크림 가게로 출하를 진행하는 경우가 있습니다. 이 경우 같은 맛의 아이스크림이라도 다른 출하 번호를 갖게 됩니다.

NAME TYPE NULLABLE
SHIPMENT_ID INT(N) FALSE
FLAVOR VARCHAR(N) FALSE
TOTAL_ORDER INT(N) FALSE
문제
7월 아이스크림 총 주문량과 상반기의 아이스크림 총 주문량을 더한 값이 큰 순서대로 상위 3개의 맛을 조회하는 SQL 문을 작성해주세요.

예시
예를 들어 FIRST_HALF 테이블이 다음과 같고

SHIPMENT_ID FLAVOR TOTAL_ORDER
101 chocolate 3200
102 vanilla 2800
103 mint_chocolate 1700
104 caramel 2600
105 white_chocolate 3100
106 peach 2450
107 watermelon 2150
108 mango 2900
109 strawberry 3100
110 melon 3150
111 orange 2900
112 pineapple 2900
JULY테이블이 다음과 같다면

SHIPMENT_ID FLAVOR TOTAL_ORDER
101 chocolate 520
102 vanilla 560
103 mint_chocolate 400
104 caramel 460
105 white_chocolate 350
106 peach 500
107 watermelon 780
108 mango 790
109 strawberry 520
110 melon 400
111 orange 250
112 pineapple 200
208 mango 110
209 strawberry 220
7월 아이스크림 총주문량과 상반기의 아이스크림 총 주문량을 더한 값이 큰 순서대로 상위 3개의 맛을 조회하면 strawberry(520 + 220 + 3,100 = 3,840), mango(790 + 110 + 2,900 = 3,800), chocolate(520 + 3,200 = 3,720) 순입니다. 따라서 SQL 문을 실행하면 다음과 같이 나와야 합니다.

FLAVOR
strawberry
mango
chocolate
