-- 코드를 입력하세요
SELECT AP.APNT_NO, PT.PT_NAME, PT.PT_NO, DR.MCDP_CD, DR.DR_NAME, AP.APNT_YMD 
from APPOINTMENT AP 
    inner join PATIENT PT
        on PT.PT_NO = AP.PT_NO
    inner join DOCTOR DR
        on AP.MDDR_ID = DR.DR_ID
where DATE(AP.APNT_YMD)=DATE('2022-04-13') 
    AND AP.APNT_CNCL_YN='N' 
    AND DR.MCDP_CD='CS'




