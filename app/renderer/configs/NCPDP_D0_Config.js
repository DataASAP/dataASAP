const NCPDP_D0_Config = {
    "1_cardholderFirstName":  {"displayName": "Cardholder First Name","location": {"segment": "AM04", "dataElementId": "CC"}, "deidentify" : false, "defaultValue": "DA_CARDHOLDER FIRSTNAME"},
    "2_cardholderLastName":   {"displayName": "Cardholder Last Name","location": {"segment": "AM04", "dataElementId": "CD"}, "deidentify" : true, "defaultValue": "DA_CARDHOLDER LASTNAME"},
    "3_patientFirstName":     {"displayName": "Patient First Name","location": {"segment": "AM01", "dataElementId": "CA"}, "deidentify" : true, "defaultValue": "DA_PATIENT FIRSTNAME"},
    "4_patientLastName":      {"displayName": "Patient Last Name","location": {"segment": "AM01", "dataElementId": "CB"}, "deidentify" : true, "defaultValue": "DA_PATIENT LASTNAME"},
    "5_prescriberLastName":   {"displayName": "Prescriber Last Name","location": {"segment": "AM03", "dataElementId": "DR"}, "deidentify" : true, "defaultValue": "DA_PRESCRIBER LAST NAME"},
    "6_prescriberFirstName":  {"displayName": "Prescriber First Name","location": {"segment": "AM03", "dataElementId": "2J"}, "deidentify" : true, "defaultValue": "DA_PRESCRIBER FIRST NAME"},
    "7_primaryCareProviderLastName":  {"displayName": "Primary Care Provider Last Name","location": {"segment": "AM03", "dataElementId": "4E"}, "deidentify" : true, "defaultValue": "DA_PCP LAST NAME"},
    "8_employerName":         {"displayName": "Employer Name","location": {"segment": "AM06", "dataElementId": "CF"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER NAME"},
    "9_employerContactName":  {"displayName": "Employer Contact Name","location": {"segment": "AM06", "dataElementId": "CL"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER NAME"},
    "10_payToName":            {"displayName": "Pay To Name","location": {"segment": "AM06", "dataElementId": "TU"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER NAME"},
    "11_facilityName":         {"displayName": "Facility Name","location": {"segment": "AM15", "dataElementId": "5J"}, "deidentify" : true, "defaultValue": "DA_FACILITY NAME"},
    "12_prescriptionNumber":{"displayName": "Prescription Number","location": {"segment": "AM07", "dataElementId": "D2"}, "deidentify" : true, "defaultValue": "0000000"},
    "13_medicaidIdNumber": {"displayName": "Medicaid ID Number","location": {"segment": "AM04", "dataElementId": "N5"}, "deidentify" : true, "defaultValue": "DA_MEDICAID ID NUMBER"},
    "14_groupId":          {"displayName": "Group ID","location": {"segment": "AM04", "dataElementId": "C1"}, "deidentify" : true, "defaultValue": "DA_GROUP ID"},
    "15_cardholderId":     {"displayName": "Cardholder ID", "location": {"segment": "AM04", "dataElementId": "C2"}, "deidentify" : true, "defaultValue": "DA_CARDHOLDER ID"},
    "16_medigapId":        {"displayName": "Medigap ID","location": {"segment": "AM04", "dataElementId": "2A"}, "deidentify" : true, "defaultValue": "DA_MEDIGAP ID"},
    "17_planId":           {"displayName": "Plan ID","location": {"segment": "AM04", "dataElementId": "FO"}, "deidentify" : true, "defaultValue": "DA_PLAN ID"},
    "18_patienId":         {"displayName": "Patient ID","location": {"segment": "AM01", "dataElementId": "CY"}, "deidentify" : true, "defaultValue": "DA_PATIENT ID"},
    "19_employerId":       {"displayName": "Employer ID","location": {"segment": "AM01", "dataElementId": "CZ"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER ID"},
    "20_providerId":       {"displayName": "Provider ID","location": {"segment": "AM02", "dataElementId": "E9"}, "deidentify" : true, "defaultValue": "9999999999"},
    "21_prescriberId":     {"displayName": "Prescriber ID","location": {"segment": "AM03", "dataElementId": "E9"}, "deidentify" : true, "defaultValue": "7777777777"},
    "22_primaryCareProviderId": {"displayName": "Primary Care Provider ID","location": {"segment": "AM03", "dataElementId": "DL"}, "deidentify" : true, "defaultValue": "6666666666"},
    "23_otherPayerId":     {"displayName": "Other Payer ID","location": {"segment": "AM05", "dataElementId": "7C"}, "deidentify" : true, "defaultValue": "DA_OTHER PAYER ID"},
    "24_carrierId":        {"displayName": "Carrier ID","location": {"segment": "AM06", "dataElementId": "CR"}, "deidentify" : true, "defaultValue": "DA_CARRIER ID"},
    "25_claimId":          {"displayName": "Claim ID","location": {"segment": "AM06", "dataElementId": "DZ"}, "deidentify" : true, "defaultValue": "DA_CLAIM ID"},
    "26_payToId":          {"displayName": "Pay To ID","location": {"segment": "AM06", "dataElementId": "TT"}, "deidentify" : true, "defaultValue": "DA_PAY TO ID"},
    "27_facilityId":       {"displayName": "Facility ID","location": {"segment": "AM15", "dataElementId": "8C"}, "deidentify" : true, "defaultValue": "DA_FACILITY ID"},
    "28_patientStreetAddress":{"displayName": "Patient Street Address","location": {"segment": "AM01", "dataElementId": "CM"}, "deidentify" : true, "defaultValue": "DA_PATIENT STREET"},
    "29_patientCity":      {"displayName": "Patient City","location": {"segment": "AM01", "dataElementId": "CN"}, "deidentify" : true, "defaultValue": "DA_PATIENT CITY"},
    "30_patientZip":       {"displayName": "Patient Zip","location": {"segment": "AM01", "dataElementId": "CP"}, "deidentify" : true, "defaultValue": "PATIENT ZIP"},
    "31_patientPhone":     {"displayName": "Patient Phone","location": {"segment": "AM01", "dataElementId": "CQ"}, "deidentify" : true, "defaultValue": "5555555555"},
    "32_patientEmail":     {"displayName": "Patient Email","location": {"segment": "AM01", "dataElementId": "HN"}, "deidentify" : true, "defaultValue": "DA_patient@example.com"},
    "33_prescriberPhone":  {"displayName": "Prescriber Phone","location": {"segment": "AM03", "dataElementId": "PM"}, "deidentify" : true, "defaultValue": "5555555555"},
    "34_prescriberStreetAddress":{"displayName": "Prescriber Street Address","location": {"segment": "AM03", "dataElementId": "2K"}, "deidentify" : true, "defaultValue": "DA_PRESCRIBER STREET"},
    "35_prescriberCity":   {"displayName": "Prescriber City","location": {"segment": "AM03", "dataElementId": "2M"}, "deidentify" : true, "defaultValue": "DA_PRESCRIBER CITY"},
    "36_prescriberZip":    {"displayName": "Prescriber Zip","location": {"segment": "AM03", "dataElementId": "2P"}, "deidentify" : true, "defaultValue": "DA_PRESCRIBER ZIP"},
    "37_employerStreetAddress":{"displayName": "Employer Street Address","location": {"segment": "AM06", "dataElementId": "CG"}, "deidentify" : true, "defaultValue": "DA_PATIENT STREET"},
    "38_employerCity":     {"displayName": "Employer City","location": {"segment": "AM06", "dataElementId": "CH"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER CITY"},
    "39_employerZip":      {"displayName": "Employer Zip","location": {"segment": "AM06", "dataElementId": "CJ"}, "deidentify" : true, "defaultValue": "DA_EMPLOYER ZIP"},
    "40_employerPhone":    {"displayName": "Employer Phone","location": {"segment": "AM06", "dataElementId": "CK"}, "deidentify" : true, "defaultValue": "6666666666"},
    "41_payToStreetAddress":{"displayName": "Pay To Street Address","location": {"segment": "AM06", "dataElementId": "TV"}, "deidentify" : true, "defaultValue": "DA_PAY TO STREET"},
    "42_payToCity":        {"displayName": "Pay To City","location": {"segment": "AM06", "dataElementId": "TW"}, "deidentify" : true, "defaultValue": "DA_PAY TO CITY"},
    "43_payToZip":         {"displayName": "Pay To Zip","location": {"segment": "AM06", "dataElementId": "TY"}, "deidentify" : true, "defaultValue": "PAY TO ZIP"},   
    "44_facilityStreetAddress":{"displayName": "Facility Street Address","location": {"segment": "AM15", "dataElementId": "3U"}, "deidentify" : true, "defaultValue": "DA_FACILITY STREET"},
    "45_facilityCity":     {"displayName": "Facility City","location": {"segment": "AM15", "dataElementId": "5J"}, "deidentify" : true, "defaultValue": "DA_PAY TO CITY"},
    "46_facilityZip":      {"displayName": "Facility Zip","location": {"segment": "AM15", "dataElementId": "6D"}, "deidentify" : true, "defaultValue": "PAY TO ZIP"},
    "47_BIN":              {"displayName": "BIN Number","location": {"segment": "HEADER", "dataElementId": "A1"}, "deidentify" : true, "defaultValue": "7777"},
    "48_PCN":              {"displayName": "Processor Control Number","location": {"segment": "HEADER", "dataElementId": "A4"}, "deidentify" : true, "defaultValue": "PCN"},
    "49_serviceProviderId":{"displayName": "Service Provider ID","location": {"segment": "HEADER", "dataElementId": "B1"}, "deidentify" : true, "defaultValue": "9090909090"},
    "49_softwareVendor":   {"displayName": "Software Vendor","location": {"segment": "HEADER", "dataElementId": "AK"}, "deidentify" : true, "defaultValue": "CHELI SOFT"},
    "50_groupId":          {"displayName": "Group ID","location": {"segment": "AM25", "dataElementId": "C1"}, "deidentify" : true, "defaultValue": "GROUP ID"},
    "51_planId":          {"displayName": "Plan ID","location": {"segment": "AM25", "dataElementId": "FO"}, "deidentify" : true, "defaultValue": "DA_PLAN ID"},
    "52_payerId":         {"displayName": "Payer ID","location": {"segment": "AM25", "dataElementId": "J8"}, "deidentify" : true, "defaultValue": "DA_PAYER ID"},
    "53_cardholderId":    {"displayName": "CardholderID","location": {"segment": "AM25", "dataElementId": "C2"}, "deidentify" : true, "defaultValue": "DA_CARDHOLDER ID"},
    "54_patientFirstName":{"displayName": "Patient First Name","location": {"segment": "AM29", "dataElementId": "CA"}, "deidentify" : true, "defaultValue": "DA_PATIENT FIRSTNAME"},
    "55_patientLastName": {"displayName": "Patient Last Name","location": {"segment": "AM29", "dataElementId": "CB"}, "deidentify" : true, "defaultValue": "DA_PATIENT LASTNAME"},
    "56_dateOfBirth":     {"displayName": "Date Of Birth","location": {"segment": "AM01", "dataElementId": "C4"}, "deidentify" : true, "defaultValue": "19000101"},
    "57_dateOfBirth":     {"displayName": "Date Of Birth","location": {"segment": "AM29", "dataElementId": "C4"}, "deidentify" : true, "defaultValue": "19000101"},
    "58_helpDeskPhone":   {"displayName": "Help Desk Phone","location": {"segment": "AM21", "dataElementId": "8F"}, "deidentify" : true, "defaultValue": "5555555555"},
    "59_prescriptionNumber":{"displayName": "Prescription Number","location": {"segment": "AM22", "dataElementId": "D2"}, "deidentify" : true, "defaultValue": "0000000"},
    "60_otherPayerId":    {"displayName": "Other Payer ID","location": {"segment": "AM24", "dataElementId": "7C"}, "deidentify" : true, "defaultValue": "DA_OTHER PAYER ID"},    
    "61_otherPayerCardholderId":    {"displayName": "Other Payer Cardholder ID","location": {"segment": "AM24", "dataElementId": "NU"}, "deidentify" : true, "defaultValue": "DA_OTHER PAYER ID"},    
    "62_otherPayerGroupId": {"displayName": "Other Payer Group ID","location": {"segment": "AM24", "dataElementId": "MJ"}, "deidentify" : true, "defaultValue": "DA_OTHER PAYER GROUP ID"},    
    "63_otherPayerHelpDeskPhone":   {"displayName": "Other Payer Help Desk Phone","location": {"segment": "AM24", "dataElementId": "UB"}, "deidentify" : true, "defaultValue": "7777777777"},
    


}
export default NCPDP_D0_Config;

/*

Address (all geographic subdivisions smaller than state, including street address, city, county, or ZIP code)
Patient Street Address 322-CM, City 323-CN, Zip Code 325-CP
All elements (except years) of dates related to an individual (including birth date, admission date, discharge date, date of death, and exact age if over 89)
Telephone numbers
FAX number
Email address
Social Security number
Medical record number
Health plan beneficiary number
Account number
Certificate/license number
Vehicle identifiers and serial numbers, including license plate numbers
Device identifiers or serial numbers
Web URLs
IP address
Biometric identifiers, including finger or voice prints
Full-face photographic images and any comparable images
Any other unique identifying number, characteristic, or code
*/