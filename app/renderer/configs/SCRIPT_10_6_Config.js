const SCRIPT_10_6_Config = {
    "1_patientLastName":  {"displayOrder": 1, "maxFieldLength": 35, "displayName": "Patient Last Name","location": {"node": "Patient","dataElementId": "Patient.Name.LastName"}, "deidentify" : true, "defaultValue": "PATIENT-LAST"},
    "2_patientFirstName":  {"displayOrder": 2, "maxFieldLength": 35, "displayName": "Patient First Name","location": {"node": "Patient", "dataElementId": "Patient.Name.FirstName"}, "deidentify" : true, "defaultValue": "PATIENT-FIRST"},
    "3_patientMiddleName":  {"displayOrder": 3, "maxFieldLength": 35,"displayName": "Patient Middle Name","location": {"node": "Patient","dataElementId": "Patient.Name.MiddleName"}, "deidentify" : true, "defaultValue": "M"},
    "4_patientDateOfBirth":  {"displayOrder": 4, "maxFieldLength": 35,"displayName": "Patient Date of Birth","location": {"node": "Patient","dataElementId": "Patient.DateOfBirth.Date"}, "deidentify" : true, "defaultValue": "1900-01-01"},
    "5_patientAddressLine1":  {"displayOrder": 5, "maxFieldLength": 35,"displayName": "Patient Address 1","location": {"node": "Patient","dataElementId": "Patient.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "4444 PATIENT ST"},
    "6_patientAddressLine2":  {"displayOrder": 6, "maxFieldLength": 35,"displayName": "Patient Address 2","location": {"node": "Patient","dataElementId": "Patient.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "APT. 21"},
    "7_patientCity":  {"displayOrder": 7, "maxFieldLength": 35,"displayName": "Patient City","location": {"node": "Patient","dataElementId": "Patient.Address.City"}, "deidentify" : true, "defaultValue": "PATIENTVILLE"},
    "8_patientZipCode":  {"displayOrder": 8, "maxFieldLength": 35,"displayName": "Patient ZipCode","location": {"node": "Patient","dataElementId": "Patient.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00300"},
    "9_patientIdentification":  {"displayOrder": 9, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Patient","dataElementId": "Patient.Identification.ID"}, "deidentify" : true, "defaultValue": {"94": "FILE ID", "1C":"9990090", "1D": "6676766", "EA": "AR-98912.54", "EJ": "PAT776-098", "SY":"777777777", "ZZ":"MUTUALLY DEFINED"}},
    "10_patientCommunications":  {"displayOrder": 10, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Patient","dataElementId": "Patient.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555555","EM": "patient@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},
    "11_patientLocFacilityUnit":  {"displayOrder": 11, "maxFieldLength": 35,"displayName": "Patient Location Facility Unit","location": {"node": "Patient","dataElementId": "Patient.PatientLocation.FacilityUnit"}, "deidentify" : true, "defaultValue": "FAC-70.1234"},
    "12_patientLocBed":  {"displayOrder": 12, "maxFieldLength": 35,"displayName": "Patient Bed","location": {"node": "Patient","dataElementId": "Patient.PatientLocation.Room"}, "deidentify" : true, "defaultValue": "4"},
    "13_patientLocRoom":  {"displayOrder": 13, "maxFieldLength": 35,"displayName": "Patient Room","location": {"node": "Patient","dataElementId": "Patient.PatientLocation.Bed"}, "deidentify" : true, "defaultValue": "410"},   
    "30_storeName":  {"displayOrder": 30, "maxFieldLength": 35,"displayName": "Store Name","location": {"node": "Pharmacy","dataElementId": "Pharmacy.StoreName"}, "deidentify" : true, "defaultValue": "DEID TEST PHARMACY"},
    "31_pharmacyAddressLine1":  {"displayOrder": 31, "maxFieldLength": 35,"displayName": "Pharmacy Address 1","location": {"node": "Pharmacy","dataElementId": "Pharmacy.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "0001 MAIN DR."},
    "32_pharmacyAddressLine2":  {"displayOrder": 32, "maxFieldLength": 35,"displayName": "Pharmacy Address 2","location": {"node": "Pharmacy","dataElementId": "Pharmacy.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "SUITE 011"},
    "33_pharmacyCity":  {"displayOrder": 33, "maxFieldLength": 35,"displayName": "Pharmacy City","location": {"node": "Pharmacy","dataElementId": "Pharmacy.Address.City"}, "deidentify" : true, "defaultValue": "DEIDVILLE"},
    "34_pharmacyZipCode":  {"displayOrder": 134, "maxFieldLength": 35,"displayName": "Pharmacy ZipCode","location": {"node": "Pharmacy","dataElementId": "Pharmacy.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00500"},
    "35_pharmacyIdentification":  {"displayOrder": 35, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Pharmacy","dataElementId": "Pharmacy.Identification.ID"}, "deidentify" : true, "defaultValue": {"D3": "1111111", "0B": "RPH00000", "1C":"212121", "1D": "313131", "1G": "MY UPIN", "DH": "DEA654321", "HI":"HIN-ABCD", "HPI": "1234567890", "ZZ":"MUTUALLY DEFINED"}},
    "36_pharmacyCommunications":  {"displayOrder": 236, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Pharmacy","dataElementId": "Pharmacy.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555559","EM": "pharmacist@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},    
    "50_pharmacistLastName":  {"displayOrder": 50, "maxFieldLength": 35,"displayName": "Pharmacist Last Name","location": {"node": "Pharmacy","dataElementId": "Pharmacist.Name.LastName"}, "deidentify" : true, "defaultValue": "DOE"}, 
    "51_pharmacistFirstName":  {"displayOrder": 51, "maxFieldLength": 35,"displayName": "Pharmacist First Name","location": {"node": "Pharmacy", "dataElementId": "Pharmacist.Name.FirstName"}, "deidentify" : true, "defaultValue": "JANE"},
    "52_pharmacistMiddleName":  {"displayOrder": 52, "maxFieldLength": 35,"displayName": "Pharmacist Middle Name","location": {"node": "Pharmacy", "dataElementId": "Pharmacist.Name.MiddleName"}, "deidentify" : true, "defaultValue": "R."},
    "60_prescriberLastName":  {"displayOrder": 60, "maxFieldLength": 35,"displayName": "Prescriber Last Name","location": {"node": "Prescriber","dataElementId": "Prescriber.Name.LastName"}, "deidentify" : true, "defaultValue": "WELBY"},
    "61_prescriberFirstName":  {"displayOrder": 61, "maxFieldLength": 35,"displayName": "Prescriber First Name","location": {"node": "Prescriber","dataElementId": "Prescriber.Name.FirstName"}, "deidentify" : true, "defaultValue": "MARCUS"},
    "62_prescriberMiddleName":  {"displayOrder": 62, "maxFieldLength": 35,"displayName": "Prescriber Middle Name","location": {"node": "Prescriber","dataElementId": "Prescriber.Name.MiddleName"}, "deidentify" : true, "defaultValue": "MICHAEL"},
    "63_prescriberClinicName":  {"displayOrder": 63, "maxFieldLength": 35,"displayName": "Prescriber Clinic Name","location": {"node": "Prescriber","dataElementId": "Prescriber.Clinic.Name"}, "deidentify" : true, "defaultValue": "DEID MEDICAL OFFICE"},
    "64_prescriberAddressLine1":  {"displayOrder": 64, "maxFieldLength": 35,"displayName": "Prescriber Address 1","location": {"node": "Prescriber","dataElementId": "Prescriber.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "555 PRESCRIBER WAY"},
    "65_prescriberAddressLine2":  {"displayOrder": 65, "maxFieldLength": 35,"displayName": "Prescriber Address 2","location": {"node": "Prescriber","dataElementId": "Prescriber.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "OFFICE 321"},
    "66_prescriberCity":  {"displayOrder": 66, "maxFieldLength": 35,"displayName": "Prescriber City","location": {"node": "Prescriber","dataElementId": "Prescriber.Address.City"}, "deidentify" : true, "defaultValue": "PHYSICIANVILLE"},
    "67_prescriberZipCode":  {"displayOrder": 67, "maxFieldLength": 35,"displayName": "Prescriber ZipCode","location": {"node": "Prescriber","dataElementId": "Prescriber.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00449"},
    "68_prescriberIdentification":  {"displayOrder": 68, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Prescriber","dataElementId": "Prescriber.Identification.ID"}, "deidentify" : true, "defaultValue": {"GI":"CTPRX.12345", "SY":"111111111", "WI":"DATA 2000","0B": "Q12345", "1C":"61616161", "1D": "71717171", "1G": "DR UPIN", "DH": "AE0000001", "HI":"DR HIN NUMBER", "HPI": "1919191919", "ZZ":"MUTUALLY DEFINED"}},
    "69_prescriberCommunications":  {"displayOrder": 69, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Prescriber","dataElementId": "Prescriber.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555557","EM": "prescriber@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},
    "70_prescriberAgentLastName":  {"displayOrder": 70, "maxFieldLength": 35,"displayName": "Prescriber Agent Last Name","location": {"node": "Prescriber","dataElementId": "PrescriberAgent.Name.LastName"}, "deidentify" : true, "defaultValue": "AGENT"},
    "71_prescriberAgentFirstName":  {"displayOrder": 71, "maxFieldLength": 35,"displayName": "Prescriber Agent First Name","location": {"node": "Prescriber","dataElementId": "PrescriberAgent.Name.FirstName"}, "deidentify" : true, "defaultValue": "PRES"},
    "72_prescriberAgentMiddleName":  {"displayOrder": 72, "maxFieldLength": 35,"displayName": "Prescriber Agent Middle Name","location": {"node": "Prescriber","dataElementId": "PrescriberAgent.Name.MiddleName"}, "deidentify" : true, "defaultValue": "CR"},    
    "90_supervisorLastName":  {"displayOrder": 90, "maxFieldLength": 35,"displayName": "Supervisor Last Name","location": {"node": "Supervisor","dataElementId": "Supervisor.Name.LastName"}, "deidentify" : true, "defaultValue": "TEST"},
    "91_supervisorFirstName":  {"displayOrder": 91, "maxFieldLength": 35,"displayName": "Supervisor First Name","location": {"node": "Supervisor","dataElementId": "Supervisor.Name.FirstName"}, "deidentify" : true, "defaultValue": "FRANK"},
    "92_supervisorMiddleName":  {"displayOrder": 92, "maxFieldLength": 35,"displayName": "Supervisor Middle Name","location": {"node": "Supervisor","dataElementId": "Supervisor.Name.MiddleName"}, "deidentify" : true, "defaultValue": "O."},
    "93_supervisorClinicName":  {"displayOrder": 93, "maxFieldLength": 35,"displayName": "Supervisor Clinic Name","location": {"node": "Supervisor","dataElementId": "Supervisor.ClinicName"}, "deidentify" : true, "defaultValue": "TEST HEALTH CLINIC"},
    "94_supervisorAddressLine1":  {"displayOrder": 94, "maxFieldLength": 35,"displayName": "Supervisor Address 1","location": {"node": "Supervisor","dataElementId": "Supervisor.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "234 SUERVISOR LANE"},
    "95_supervisorAddressLine2":  {"displayOrder": 95, "maxFieldLength": 35,"displayName": "Supervisor Address 2","location": {"node": "Supervisor","dataElementId": "Supervisor.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "#123"},
    "96_supervisorCity":  {"displayOrder": 96, "maxFieldLength": 35,"displayName": "Supervisor City","location": {"node": "Supervisor","dataElementId": "Supervisor.Address.City"}, "deidentify" : true, "defaultValue": "SUPER CITY"},
    "97_supervisorZipCode":  {"displayOrder": 97, "maxFieldLength": 35,"displayName": "Supervisor ZipCode","location": {"node": "Supervisor","dataElementId": "Supervisor.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00498"},
    "98_supervisorIdentification":  {"displayOrder": 98, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Supervisor","dataElementId": "Supervisor.Identification.ID"}, "deidentify" : true, "defaultValue": {"GI":"CTPRX.321321", "SY":"222222222", "WI":"DATA 2000-1","0B": "ST 777777", "1C":"111111", "1D": "222222", "1G": "SUPER UPIN", "DH": "A654321", "HI":"SUPER HIN NUMBER", "HPI": "3131313133", "ZZ":"MUTUALLY DEFINED"}},
    "99_supervisorCommunications":  {"displayOrder": 99, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Supervisor","dataElementId": "Supervisor.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555558","EM": "supervisor@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},
    "110_facilityFacilityName":  {"displayOrder": 110, "maxFieldLength": 35,"displayName": "Facility Name","location": {"node": "Facility","dataElementId": "Facility.FacilityName"}, "deidentify" : true, "defaultValue": "DEID FACILITY NAME"},
    "111_facilityAddressLine1":  {"displayOrder": 111, "maxFieldLength": 35,"displayName": "Facility Address 1","location": {"node": "Facility","dataElementId": "Facility.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "1010 FACILITY DRIVE"},
    "112_facilityAddressLine2":  {"displayOrder": 112, "maxFieldLength": 35,"displayName": "Facility Address 2","location": {"node": "Facility","dataElementId": "Facility.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "STE 4321"},
    "113_facilityCity":  {"displayOrder": 113, "maxFieldLength": 35,"displayName": "Facility City","location": {"node": "Facility","dataElementId": "Facility.Address.City"}, "deidentify" : true, "defaultValue": "FACILITYVILLE"},
    "114_facilityZipCode":  {"displayOrder": 114, "maxFieldLength": 35,"displayName": "Facility ZipCode","location": {"node": "Facility","dataElementId": "Facility.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00447"},
    "115_facilityIdentification":  {"displayOrder": 115, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Facility","dataElementId": "Facility.Identification.ID"}, "deidentify" : true, "defaultValue": {"D3": "2222222", "GI":"CTPRX.777", "SY":"222222222", "WI":"DATA 2000-2","0B": "6161616", "1C":"6161616", "1D": "7171717", "1G": "FAC UPIN", "DH": "RT65142", "HI":"DA_HIM_NO", "HPI": "3131313133", "ZZ":"MUTUALLY DEFINED"}},
    "116_facilityCommunications":  {"displayOrder": 116, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Facility","dataElementId": "Facility.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555558","EM": "facility@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},
    "120_benefitsCOBPayerName":  {"displayOrder": 120, "maxFieldLength": 35,"displayName": "Benefits COB PayerName","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.PayerName"}, "deidentify" : true, "defaultValue": "PAYER NAME"},
    "121_benefitsCOBIdentification":  {"displayOrder": 121, "maxFieldLength": 35,"displayName": "Benefit COB Identification","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.PayerIdentification"}, "deidentify" : true, "defaultValue": {"2U": "432154","GI":"CTPRX.555", "SY":"444444444", "WI":"DATA 2000-4","0B": "DA_STATE_LIC", "1C":"4444", "1D": "5555", "1G": " MEDUPIN", "DH": "W12345", "HI":"MED HIN NUMBER", "HPI": "1111100000", "ZZ":"MUTUALLY DEFINED"}},
    "122_benefitsCOBCardholderId":  {"displayOrder": 122, "maxFieldLength": 35,"displayName": "Benefits COB Cardholder ID","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.CardholderID"}, "deidentify" : true, "defaultValue": "XYX-01234"},
    "123_benefitsCOBResPartyLastName":  {"displayOrder": 123, "maxFieldLength": 35,"displayName": "Benefits COB Resp Party Last Name","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.ResponsibleParty.LastName"}, "deidentify" : true, "defaultValue": "DOE"},
    "124_benefitsCOBResPartyFirstName":  {"displayOrder": 124, "maxFieldLength": 35,"displayName": "Benefits COB Resp Party First Name","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.ResponsibleParty.FirstName"}, "deidentify" : true, "defaultValue": "RAYME"},
    "125_benefitsCOBResPartyMiddleName":  {"displayOrder": 125, "maxFieldLength": 35,"displayName": "Benefits COB Resp Party Middle Name","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.ResponsibleParty.MiddleName"}, "deidentify" : true, "defaultValue": "D"},
    "126_benefitsCOBGroupId":  {"displayOrder": 126, "maxFieldLength": 35,"displayName": "Benefits COB Resp Party Group ID","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.GroupID"}, "deidentify" : true, "defaultValue": "GRP-8989898"},
    "127_benefitsCOBPBMMemberId":  {"displayOrder": 127, "maxFieldLength": 35,"displayName": "Benefits COB Resp Party PBM Member ID","location": {"node": "Benefits Coordination","dataElementId": "BenefitsCoordination.PBMMemberID"}, "deidentify" : true, "defaultValue": "MEMBER ID"},    
    "197_messageId":  {"displayOrder": 197, "maxFieldLength": 35, "displayName": "Message ID","location": {"node": "Header","dataElementId": "MessageID"}, "deidentify" : true, "defaultValue": "1234Z"},
    "198_to":  {"displayOrder": 198, "maxFieldLength": 35, "displayName": "To","location": {"node": "Header","dataElementId": "To"}, "deidentify" : true, "defaultValue": "123456"},
    "199_from":  {"displayOrder": 199, "maxFieldLength": 35, "displayName": "From","location": {"node": "Header","dataElementId": "From"}, "deidentify" : true, "defaultValue": "654321"},
    "200_userName":  {"displayOrder": 200, "maxFieldLength": 35,"displayName": "Username","location": {"node": "Header","dataElementId": "Security.Username"}, "deidentify" : true, "defaultValue": "USERNAME"},
    "201_password":  {"displayOrder": 201, "maxFieldLength": 35,"displayName": "Password","location": {"node": "Header","dataElementId": "Security.Password"}, "deidentify" : true, "defaultValue": "PASSWORD"},
    "202_senderSecondaryId":  {"displayOrder": 202, "maxFieldLength": 35,"displayName": "Sender Secondary ID","location": {"node": "Header","dataElementId": "Security.Sender.SecondaryIdentification"}, "deidentify" : true, "defaultValue": "SENDER SECONDARY ID"},
    "203_senderTertiaryId":  {"displayOrder": 203, "maxFieldLength": 35,"displayName": "Sender Tertiary ID","location": {"node": "Header","dataElementId": "Security.Sender.TertiaryIdentification"}, "deidentify" : true, "defaultValue": "SENDER TERTIARY ID"},
    "204_receiverSecondaryId":  {"displayOrder": 204, "maxFieldLength": 35,"displayName": "Receiver Secondary ID","location": {"node": "Header","dataElementId": "Security.Receiver.SecondaryIdentification"}, "deidentify" : true, "defaultValue": "RECEIVER SECONDARY ID"},
    "205_receiverTertiaryId":  {"displayOrder": 205, "maxFieldLength": 35,"displayName": "Receiver Tertiary ID","location": {"node": "Header",  "dataElementId": "Security.Receiver.TertiaryIdentification"}, "deidentify" : true, "defaultValue": "RECEIVER TERTIARY ID"},
    "206_mailboxId":  {"displayOrder": 206, "maxFieldLength": 35,"displayName": "Mailbox ID","location": {"node": "Header","dataElementId": "Mailbox.MailboxID"}, "deidentify" : true, "defaultValue": "MAILBOX ID"},
    "207_deliveredId":  {"displayOrder": 207, "maxFieldLength": 35,"displayName": "Delivered ID","location": {"node": "Header","dataElementId": "Mailbox.DeliveredID"}, "deidentify" : true, "defaultValue": "DELIVERED ID"},
    "208_additionalTraceNumber":  {"displayOrder": 208, "maxFieldLength": 35,"displayName": "Additional Trace Number","location": {"node": "Header","dataElementId": "Mailbox.AdditionalTraceNumber"}, "deidentify" : true, "defaultValue": "3"},
    "209_rxReferenceNumber":  {"displayOrder": 209, "maxFieldLength": 35,"displayName": "Rx Reference Number","location": {"node": "Header","dataElementId": "Mailbox.RxReferenceNumber"}, "deidentify" : true, "defaultValue": "RX REFERENCE NUMBER"},
    "210_tertiaryId":  {"displayOrder": 210, "maxFieldLength": 3,"displayName": "Tertiary ID","location": {"node": "Header","dataElementId": "Mailbox.TertiaryIdentifier"}, "deidentify" : true, "defaultValue": "2"},
    "211_PrescriberOrderNumber":  {"displayOrder": 211, "maxFieldLength": 35,"displayName": "Prescriber Order Number","location": {"node": "Header","dataElementId": "Mailbox.PrescriberOrderNumber"}, "deidentify" : true, "defaultValue": "PRESCRIBER ORDER NUM"},





    "460_medDispensedPrescriberLastName":  {"displayOrder": 460, "maxFieldLength": 35,"displayName": "Prescriber Last Name","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Name.LastName"}, "deidentify" : true, "defaultValue": "WELBY"},
    "461_medDispensedPrescriberFirstName":  {"displayOrder": 461, "maxFieldLength": 35,"displayName": "Prescriber First Name","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Name.FirstName"}, "deidentify" : true, "defaultValue": "MARCUS"},
    "462_medDispensedPrescriberMiddleName":  {"displayOrder": 462, "maxFieldLength": 35,"displayName": "Prescriber Middle Name","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Name.MiddleName"}, "deidentify" : true, "defaultValue": "MICHAEL"},
    "464_medDispensedPrescriberAddressLine1":  {"displayOrder": 464, "maxFieldLength": 35,"displayName": "Prescriber Address 1","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "555 PRESCRIBER WAY"},
    "465_medDispensedPrescriberAddressLine2":  {"displayOrder": 465, "maxFieldLength": 35,"displayName": "Prescriber Address 2","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "OFFICE 321"},
    "466_medDispensedPrescriberCity":  {"displayOrder": 466, "maxFieldLength": 35,"displayName": "Prescriber City","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Address.City"}, "deidentify" : true, "defaultValue": "PHYSICIANVILLE"},
    "467_medDispensedPrescriberZipCode":  {"displayOrder": 467, "maxFieldLength": 35,"displayName": "Prescriber ZipCode","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00449"},
    "469_medDispensedPrescriberCommunications":  {"displayOrder": 469, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555557","EM": "prescriber@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},
    "468_medDispensedPrescriberIdentification":  {"displayOrder": 468, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Prescriber.Identification.ID"}, "deidentify" : true, "defaultValue": {"GI":"CTPRX.12345", "SY":"111111111", "WI":"DATA 2000","0B": "Q12345", "1C":"61616161", "1D": "71717171", "1G": "DR UPIN", "DH": "AE0000001", "HI":"DR HIN NUMBER", "HPI": "1919191919", "ZZ":"MUTUALLY DEFINED"}},


    "430_storeName":  {"displayOrder": 430, "maxFieldLength": 35,"displayName": "Store Name","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.StoreName"}, "deidentify" : true, "defaultValue": "DEID TEST PHARMACY"},
    "431_medDispensedPharmacyAddressLine1":  {"displayOrder": 431, "maxFieldLength": 35,"displayName": "Pharmacy Address 1","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.Address.AddressLine1"}, "deidentify" : true, "defaultValue": "0001 MAIN DR."},
    "432_medDispensedPharmacyAddressLine2":  {"displayOrder": 432, "maxFieldLength": 35,"displayName": "Pharmacy Address 2","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.Address.AddressLine2"}, "deidentify" : true, "defaultValue": "SUITE 011"},
    "433_medDispensedPharmacyCity":  {"displayOrder": 433, "maxFieldLength": 35,"displayName": "Pharmacy City","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.Address.City"}, "deidentify" : true, "defaultValue": "DEIDVILLE"},
    "434_medDispensedPharmacyZipCode":  {"displayOrder": 434, "maxFieldLength": 35,"displayName": "Pharmacy ZipCode","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.Address.ZipCode"}, "deidentify" : true, "defaultValue": "00500"},
    "435_medDispensedPharmacyIdentification":  {"displayOrder": 435, "maxFieldLength": 35,"displayName": "Identification","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.Identification.ID"}, "deidentify" : true, "defaultValue": {"D3": "1111111", "0B": "RPH00000", "1C":"212121", "1D": "313131", "1G": "MY UPIN", "DH": "DEA654321", "HI":"HIN-ABCD", "HPI": "1234567890", "ZZ":"MUTUALLY DEFINED"}},
    "436_medDispensedPharmacyCommunications":  {"displayOrder": 436, "maxFieldLength": 35,"displayName": "Communication Numbers","location": {"node": "Medication Dipsensed","dataElementId": "MedicationDispensed.Pharmacy.CommunicationNumbers.Communication"}, "deidentify" : true, "defaultValue": {"TE": "5555555559","EM": "pharmacist@deid.da", "BN":"8888888888","CP": "2222222222", "FX": "4444444444","HP" : "3333333333", "NP":"666666666", "WP": "9999999999"}},    


}
export default SCRIPT_10_6_Config;
