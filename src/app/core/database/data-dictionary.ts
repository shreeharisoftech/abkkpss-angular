import { SimpleDatabase } from '@satvasoftech/simplify-angular';

/* Enums Start */
export enum Tables {
	cities = "cities",
	commiteeMembers = "commitee_members",
	commitees = "commitees",
	firms = "firms",
	log = "log",
	medias = "medias",
	memberDetails = "member_details",
	users = "users",
	zones = "zones"
};

export enum Views {
	viewCountBloodGroupMembers = "	view_count_blood_group_members",
	viewCountMaritialMembers = "	view_count_maritial_members",
	viewCountZoneMembers = "	view_count_zone_members",
	viewDistinctNames = "	view_distinct_names",
	viewNamesUnion = "	view_names_union",
	viewCommiteeMembers = "view_commitee_members",
	viewCountGenderMembers = "view_count_gender_members",
	viewCountLnameMembers = "view_count_lname_members",
	viewCountMainMemberFamily = "view_count_main_member_family",
	viewCountNativeMembers = "view_count_native_members",
	viewCurrentMembers = "view_current_members",
	viewLastNames = "view_last_names",
	viewMemberDetails = "view_member_details",
	viewMembers = "view_members",
	viewUsers = "view_users"
};

export enum TblCities {
	cityId ="city_id",
	cityName ="city_name",
	countryName ="country_name",
	stateName ="state_name"
};
export enum TblCommiteeMembers {
	commiteeId ="commitee_id",
	commiteeMemberId ="commitee_member_id",
	commiteeMemberIndex ="commitee_member_index",
	commiteeMemberStatus ="commitee_member_status",
	commiteeMemberType ="commitee_member_type",
	commiteeMemberZone ="commitee_member_zone",
	memberId ="member_id"
};
export enum TblCommitees {
	commiteeEndDate ="commitee_end_date",
	commiteeId ="commitee_id",
	commiteeIndex ="commitee_index",
	commiteeName ="commitee_name",
	commiteeStartDate ="commitee_start_date",
	commiteeStatus ="commitee_status",
	commiteeType ="commitee_type"
};
export enum TblFirms {
	activeStatus ="active_status",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	cityName ="city_name",
	countryName ="country_name",
	firmAddress ="firm_address",
	firmDescription ="firm_description",
	firmEmail ="firm_email",
	firmId ="firm_id",
	firmMembers ="firm_members",
	firmName ="firm_name",
	firmPhone ="firm_phone",
	firmProfilePic ="firm_profile_pic",
	firmWebsite ="firm_website",
	postalCode ="postal_code",
	stateName ="state_name",
	zoneId ="zone_id"
};
export enum TblLog {
	contraId ="contra_id",
	logAction ="log_action",
	logDetails ="log_details",
	logId ="log_id",
	logTable ="log_table",
	memberId ="member_id"
};
export enum TblMedias {
	mediaDescription ="media_description",
	mediaId ="media_id",
	mediaName ="media_name",
	mediaSize ="media_size",
	mediaType ="media_type",
	mediaUrl ="media_url"
};
export enum TblMemberDetails {
	activeStatus ="active_status",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	aliveStatus ="alive_status",
	bloodGroup ="blood_group",
	cityName ="city_name",
	countryName ="country_name",
	deathDate ="death_date",
	engagementDate ="engagement_date",
	familyIndex ="family_index",
	isLifetime ="is_lifetime",
	mainId ="main_id",
	maritialStatus ="maritial_status",
	marraigeDate ="marraige_date",
	memberAddress ="member_address",
	memberDob ="member_dob",
	memberEmail ="member_email",
	memberFname ="member_fname",
	memberGender ="member_gender",
	memberGotra ="member_gotra",
	memberId ="member_id",
	memberLname ="member_lname",
	memberMname ="member_mname",
	memberNative ="member_native",
	memberPhone ="member_phone",
	memberProfilePic ="member_profile_pic",
	memberQualification ="member_qualification",
	memberType ="member_type",
	parentId ="parent_id",
	postalCode ="postal_code",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	receiptNo ="receipt_no",
	relationWithMain ="relation_with_main",
	spouseId ="spouse_id",
	stateName ="state_name",
	zoneFamilyIndex ="zone_family_index",
	zoneId ="zone_id"
};
export enum TblUsers {
	memberId ="member_id",
	userId ="user_id",
	userMobile ="user_mobile",
	userPassword ="user_password",
	userType ="user_type"
};
export enum TblZones {
	zoneEnglish ="zone_english",
	zoneId ="zone_id",
	zoneIndex ="zone_index",
	zoneName ="zone_name"
};
export enum 	viewCountBloodGroupMembers {

};
export enum 	viewCountMaritialMembers {

};
export enum 	viewCountZoneMembers {

};
export enum 	viewDistinctNames {

};
export enum 	viewNamesUnion {

};
export enum ViewCommiteeMembers {
	commiteeMemberId ="commitee_member_id",
	commiteeId ="commitee_id",
	commiteeMemberType ="commitee_member_type",
	commiteeMemberIndex ="commitee_member_index",
	commiteeMemberStatus ="commitee_member_status",
	commiteeMemberZone ="commitee_member_zone",
	mainName ="main_name",
	parentName ="parent_name",
	spouseName ="spouse_name",
	zoneName ="zone_name",
	zoneIndex ="zone_index",
	memberId ="member_id",
	memberFname ="member_fname",
	memberMname ="member_mname",
	memberLname ="member_lname",
	memberGotra ="member_gotra",
	parentId ="parent_id",
	memberNative ="member_native",
	zoneId ="zone_id",
	memberPhone ="member_phone",
	memberEmail ="member_email",
	memberDob ="member_dob",
	memberGender ="member_gender",
	bloodGroup ="blood_group",
	maritialStatus ="maritial_status",
	spouseId ="spouse_id",
	engagementDate ="engagement_date",
	marraigeDate ="marraige_date",
	memberQualification ="member_qualification",
	relationWithMain ="relation_with_main",
	activeStatus ="active_status",
	aliveStatus ="alive_status",
	deathDate ="death_date",
	memberProfilePic ="member_profile_pic",
	receiptNo ="receipt_no",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	memberName ="member_name",
	memberAge ="member_age",
	birthDay ="birth_day",
	birthMonth ="birth_month",
	birthYear ="birth_year",
	memberAddress ="member_address",
	cityName ="city_name",
	stateName ="state_name",
	countryName ="country_name",
	postalCode ="postal_code",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	familyIndex ="family_index",
	zoneFamilyIndex ="zone_family_index",
	isLifetime ="is_lifetime",
	memberType ="member_type",
	mainId ="main_id",
	commiteeZoneName ="commitee_zone_name"
};
export enum ViewCountGenderMembers {
	memberGender ="member_gender",
	membersCount ="members_count"
};
export enum ViewCountLnameMembers {
	memberLname ="member_lname",
	membersCount ="members_count"
};
export enum ViewCountMainMemberFamily {
	mainId ="main_id",
	membersCount ="members_count"
};
export enum ViewCountNativeMembers {
	memberNative ="member_native",
	membersCount ="members_count"
};
export enum ViewCurrentMembers {
	mainName ="main_name",
	parentName ="parent_name",
	spouseName ="spouse_name",
	zoneName ="zone_name",
	zoneIndex ="zone_index",
	memberId ="member_id",
	memberFname ="member_fname",
	memberMname ="member_mname",
	memberLname ="member_lname",
	memberGotra ="member_gotra",
	parentId ="parent_id",
	memberNative ="member_native",
	zoneId ="zone_id",
	memberPhone ="member_phone",
	memberEmail ="member_email",
	memberDob ="member_dob",
	memberGender ="member_gender",
	bloodGroup ="blood_group",
	maritialStatus ="maritial_status",
	spouseId ="spouse_id",
	engagementDate ="engagement_date",
	marraigeDate ="marraige_date",
	memberQualification ="member_qualification",
	relationWithMain ="relation_with_main",
	activeStatus ="active_status",
	aliveStatus ="alive_status",
	deathDate ="death_date",
	memberProfilePic ="member_profile_pic",
	receiptNo ="receipt_no",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	memberName ="member_name",
	memberAge ="member_age",
	birthDay ="birth_day",
	birthMonth ="birth_month",
	birthYear ="birth_year",
	memberAddress ="member_address",
	cityName ="city_name",
	stateName ="state_name",
	countryName ="country_name",
	postalCode ="postal_code",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	familyIndex ="family_index",
	zoneFamilyIndex ="zone_family_index",
	memberType ="member_type",
	mainId ="main_id",
	isLifetime ="is_lifetime"
};
export enum ViewLastNames {
	memberLname ="member_lname"
};
export enum ViewMemberDetails {
	mainName ="main_name",
	parentName ="parent_name",
	spouseName ="spouse_name",
	zoneName ="zone_name",
	zoneIndex ="zone_index",
	memberId ="member_id",
	memberFname ="member_fname",
	memberMname ="member_mname",
	memberLname ="member_lname",
	memberGotra ="member_gotra",
	parentId ="parent_id",
	memberNative ="member_native",
	zoneId ="zone_id",
	memberPhone ="member_phone",
	memberEmail ="member_email",
	memberDob ="member_dob",
	memberGender ="member_gender",
	bloodGroup ="blood_group",
	maritialStatus ="maritial_status",
	spouseId ="spouse_id",
	engagementDate ="engagement_date",
	marraigeDate ="marraige_date",
	memberQualification ="member_qualification",
	relationWithMain ="relation_with_main",
	activeStatus ="active_status",
	aliveStatus ="alive_status",
	deathDate ="death_date",
	memberProfilePic ="member_profile_pic",
	receiptNo ="receipt_no",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	memberName ="member_name",
	memberAge ="member_age",
	birthDay ="birth_day",
	birthMonth ="birth_month",
	birthYear ="birth_year",
	memberAddress ="member_address",
	cityName ="city_name",
	stateName ="state_name",
	countryName ="country_name",
	postalCode ="postal_code",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	familyIndex ="family_index",
	zoneFamilyIndex ="zone_family_index",
	isLifetime ="is_lifetime",
	memberType ="member_type",
	mainId ="main_id"
};
export enum ViewMembers {
	memberId ="member_id",
	memberFname ="member_fname",
	memberMname ="member_mname",
	memberLname ="member_lname",
	memberGotra ="member_gotra",
	parentId ="parent_id",
	memberNative ="member_native",
	zoneId ="zone_id",
	memberPhone ="member_phone",
	memberEmail ="member_email",
	memberDob ="member_dob",
	memberGender ="member_gender",
	bloodGroup ="blood_group",
	maritialStatus ="maritial_status",
	spouseId ="spouse_id",
	engagementDate ="engagement_date",
	marraigeDate ="marraige_date",
	memberQualification ="member_qualification",
	relationWithMain ="relation_with_main",
	activeStatus ="active_status",
	aliveStatus ="alive_status",
	deathDate ="death_date",
	memberProfilePic ="member_profile_pic",
	receiptNo ="receipt_no",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	memberName ="member_name",
	memberAge ="member_age",
	birthDay ="birth_day",
	birthMonth ="birth_month",
	birthYear ="birth_year",
	memberAddress ="member_address",
	cityName ="city_name",
	stateName ="state_name",
	countryName ="country_name",
	postalCode ="postal_code",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	familyIndex ="family_index",
	zoneFamilyIndex ="zone_family_index",
	isLifetime ="is_lifetime",
	memberType ="member_type",
	mainId ="main_id"
};
export enum ViewUsers {
	userId ="user_id",
	userMobile ="user_mobile",
	userType ="user_type",
	mainName ="main_name",
	parentName ="parent_name",
	spouseName ="spouse_name",
	zoneName ="zone_name",
	zoneIndex ="zone_index",
	memberId ="member_id",
	memberFname ="member_fname",
	memberMname ="member_mname",
	memberLname ="member_lname",
	memberGotra ="member_gotra",
	parentId ="parent_id",
	memberNative ="member_native",
	zoneId ="zone_id",
	memberPhone ="member_phone",
	memberEmail ="member_email",
	memberDob ="member_dob",
	memberGender ="member_gender",
	bloodGroup ="blood_group",
	maritialStatus ="maritial_status",
	spouseId ="spouse_id",
	engagementDate ="engagement_date",
	marraigeDate ="marraige_date",
	memberQualification ="member_qualification",
	relationWithMain ="relation_with_main",
	activeStatus ="active_status",
	aliveStatus ="alive_status",
	deathDate ="death_date",
	memberProfilePic ="member_profile_pic",
	receiptNo ="receipt_no",
	receiptAmount ="receipt_amount",
	receiptDate ="receipt_date",
	memberName ="member_name",
	memberAge ="member_age",
	birthDay ="birth_day",
	birthMonth ="birth_month",
	birthYear ="birth_year",
	memberAddress ="member_address",
	cityName ="city_name",
	stateName ="state_name",
	countryName ="country_name",
	postalCode ="postal_code",
	addressLatitude ="address_latitude",
	addressLongitude ="address_longitude",
	familyIndex ="family_index",
	zoneFamilyIndex ="zone_family_index",
	isLifetime ="is_lifetime",
	memberType ="member_type",
	mainId ="main_id"
};

/* Enums End */

export const DataDictionary:any = {
	"tables" : {
		[Tables.cities] : {
			 [SimpleDatabase.tableName] : Tables.cities,
			 [SimpleDatabase.tableFields] : {
				[TblCities.cityId] : {
					[SimpleDatabase.fieldName] : TblCities.cityId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblCities.cityName] : {
					[SimpleDatabase.fieldName] : TblCities.cityName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "City"
					}
				},
				[TblCities.countryName] : {
					[SimpleDatabase.fieldName] : TblCities.countryName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Country"
					}
				},
				[TblCities.stateName] : {
					[SimpleDatabase.fieldName] : TblCities.stateName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "State"
					}
				}
			}
		},
		[Tables.commiteeMembers] : {
			 [SimpleDatabase.tableName] : Tables.commiteeMembers,
			 [SimpleDatabase.tableFields] : {
				[TblCommiteeMembers.commiteeId] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Committee"
					}
				},
				[TblCommiteeMembers.commiteeMemberId] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeMemberId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Commite Member Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblCommiteeMembers.commiteeMemberIndex] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeMemberIndex,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Index"
					}
				},
				[TblCommiteeMembers.commiteeMemberStatus] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeMemberStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Status"
					}
				},
				[TblCommiteeMembers.commiteeMemberType] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeMemberType,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Member Type"
					}
				},
				[TblCommiteeMembers.commiteeMemberZone] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.commiteeMemberZone,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Zone"
					}
				},
				[TblCommiteeMembers.memberId] : {
					[SimpleDatabase.fieldName] : TblCommiteeMembers.memberId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Member"
					}
				}
			},
			[SimpleDatabase.tableViewName] : "view_commitee_members"
		},
		[Tables.commitees] : {
			 [SimpleDatabase.tableName] : Tables.commitees,
			 [SimpleDatabase.tableFields] : {
				[TblCommitees.commiteeEndDate] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeEndDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "End Date"
					}
				},
				[TblCommitees.commiteeId] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Committee ID",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblCommitees.commiteeIndex] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeIndex,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Index"
					}
				},
				[TblCommitees.commiteeName] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Name"
					}
				},
				[TblCommitees.commiteeStartDate] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeStartDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Start Date"
					}
				},
				[TblCommitees.commiteeStatus] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Status"
					}
				},
				[TblCommitees.commiteeType] : {
					[SimpleDatabase.fieldName] : TblCommitees.commiteeType,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Type"
					}
				}
			}
		},
		[Tables.firms] : {
			 [SimpleDatabase.tableName] : Tables.firms,
			 [SimpleDatabase.tableFields] : {
				[TblFirms.activeStatus] : {
					[SimpleDatabase.fieldName] : TblFirms.activeStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Is Active?"
					}
				},
				[TblFirms.addressLatitude] : {
					[SimpleDatabase.fieldName] : TblFirms.addressLatitude,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Latitude"
					}
				},
				[TblFirms.addressLongitude] : {
					[SimpleDatabase.fieldName] : TblFirms.addressLongitude,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Longitude"
					}
				},
				[TblFirms.cityName] : {
					[SimpleDatabase.fieldName] : TblFirms.cityName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "City"
					}
				},
				[TblFirms.countryName] : {
					[SimpleDatabase.fieldName] : TblFirms.countryName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Country"
					}
				},
				[TblFirms.firmAddress] : {
					[SimpleDatabase.fieldName] : TblFirms.firmAddress,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Address"
					}
				},
				[TblFirms.firmDescription] : {
					[SimpleDatabase.fieldName] : TblFirms.firmDescription,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Description"
					}
				},
				[TblFirms.firmEmail] : {
					[SimpleDatabase.fieldName] : TblFirms.firmEmail,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Email Adress"
					}
				},
				[TblFirms.firmId] : {
					[SimpleDatabase.fieldName] : TblFirms.firmId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Firm Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblFirms.firmMembers] : {
					[SimpleDatabase.fieldName] : TblFirms.firmMembers,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Members"
					}
				},
				[TblFirms.firmName] : {
					[SimpleDatabase.fieldName] : TblFirms.firmName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Name"
					}
				},
				[TblFirms.firmPhone] : {
					[SimpleDatabase.fieldName] : TblFirms.firmPhone,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Phone"
					}
				},
				[TblFirms.firmProfilePic] : {
					[SimpleDatabase.fieldName] : TblFirms.firmProfilePic,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Firm Photo"
					}
				},
				[TblFirms.firmWebsite] : {
					[SimpleDatabase.fieldName] : TblFirms.firmWebsite,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Website"
					}
				},
				[TblFirms.postalCode] : {
					[SimpleDatabase.fieldName] : TblFirms.postalCode,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Postal Code"
					}
				},
				[TblFirms.stateName] : {
					[SimpleDatabase.fieldName] : TblFirms.stateName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "State"
					}
				},
				[TblFirms.zoneId] : {
					[SimpleDatabase.fieldName] : TblFirms.zoneId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Zone"
					}
				}
			}
		},
		[Tables.log] : {
			 [SimpleDatabase.tableName] : Tables.log,
			 [SimpleDatabase.tableFields] : {
				[TblLog.contraId] : {
					[SimpleDatabase.fieldName] : TblLog.contraId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblLog.logAction] : {
					[SimpleDatabase.fieldName] : TblLog.logAction,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblLog.logDetails] : {
					[SimpleDatabase.fieldName] : TblLog.logDetails,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblLog.logId] : {
					[SimpleDatabase.fieldName] : TblLog.logId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblLog.logTable] : {
					[SimpleDatabase.fieldName] : TblLog.logTable,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblLog.memberId] : {
					[SimpleDatabase.fieldName] : TblLog.memberId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				}
			}
		},
		[Tables.medias] : {
			 [SimpleDatabase.tableName] : Tables.medias,
			 [SimpleDatabase.tableFields] : {
				[TblMedias.mediaDescription] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaDescription,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblMedias.mediaId] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblMedias.mediaName] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblMedias.mediaSize] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaSize,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDouble,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblMedias.mediaType] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaType,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				},
				[TblMedias.mediaUrl] : {
					[SimpleDatabase.fieldName] : TblMedias.mediaUrl,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {}
				}
			}
		},
		[Tables.memberDetails] : {
			 [SimpleDatabase.tableName] : Tables.memberDetails,
			 [SimpleDatabase.tableFields] : {
				[TblMemberDetails.activeStatus] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.activeStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Is Active?"
					}
				},
				[TblMemberDetails.addressLatitude] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.addressLatitude,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Latitude"
					}
				},
				[TblMemberDetails.addressLongitude] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.addressLongitude,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Longitude"
					}
				},
				[TblMemberDetails.aliveStatus] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.aliveStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Is Alive?"
					}
				},
				[TblMemberDetails.bloodGroup] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.bloodGroup,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Blood Group"
					}
				},
				[TblMemberDetails.cityName] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.cityName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "City"
					}
				},
				[TblMemberDetails.countryName] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.countryName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Country"
					}
				},
				[TblMemberDetails.deathDate] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.deathDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Demise Date"
					}
				},
				[TblMemberDetails.engagementDate] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.engagementDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Engagement Date"
					}
				},
				[TblMemberDetails.familyIndex] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.familyIndex,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Family Index"
					}
				},
				[TblMemberDetails.isLifetime] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.isLifetime,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Is Lifetime?"
					}
				},
				[TblMemberDetails.mainId] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.mainId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Main Member"
					}
				},
				[TblMemberDetails.maritialStatus] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.maritialStatus,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Maritial Status"
					}
				},
				[TblMemberDetails.marraigeDate] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.marraigeDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Marriage Date"
					}
				},
				[TblMemberDetails.memberAddress] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberAddress,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Address"
					}
				},
				[TblMemberDetails.memberDob] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberDob,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Birth Date"
					}
				},
				[TblMemberDetails.memberEmail] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberEmail,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Email Address"
					}
				},
				[TblMemberDetails.memberFname] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberFname,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "First Name"
					}
				},
				[TblMemberDetails.memberGender] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberGender,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Gender"
					}
				},
				[TblMemberDetails.memberGotra] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberGotra,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Gotra"
					}
				},
				[TblMemberDetails.memberId] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Member Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblMemberDetails.memberLname] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberLname,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Last Name"
					}
				},
				[TblMemberDetails.memberMname] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberMname,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Middle Name"
					}
				},
				[TblMemberDetails.memberNative] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberNative,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Native"
					}
				},
				[TblMemberDetails.memberPhone] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberPhone,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Phone"
					}
				},
				[TblMemberDetails.memberProfilePic] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberProfilePic,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Profile Picture"
					}
				},
				[TblMemberDetails.memberQualification] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberQualification,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeText,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Qualification"
					}
				},
				[TblMemberDetails.memberType] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.memberType,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Type"
					}
				},
				[TblMemberDetails.parentId] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.parentId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Father"
					}
				},
				[TblMemberDetails.postalCode] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.postalCode,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Postal Code"
					}
				},
				[TblMemberDetails.receiptAmount] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.receiptAmount,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDouble,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Receipt Amount"
					}
				},
				[TblMemberDetails.receiptDate] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.receiptDate,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeDate,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Receipt Date"
					}
				},
				[TblMemberDetails.receiptNo] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.receiptNo,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Receipt No."
					}
				},
				[TblMemberDetails.relationWithMain] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.relationWithMain,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Relation With Main"
					}
				},
				[TblMemberDetails.spouseId] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.spouseId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Spouse"
					}
				},
				[TblMemberDetails.stateName] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.stateName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "State"
					}
				},
				[TblMemberDetails.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.zoneFamilyIndex,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Family Index"
					}
				},
				[TblMemberDetails.zoneId] : {
					[SimpleDatabase.fieldName] : TblMemberDetails.zoneId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Zone"
					}
				}
			},
			[SimpleDatabase.tableViewName] : "view_member_details"
		},
		[Tables.users] : {
			 [SimpleDatabase.tableName] : Tables.users,
			 [SimpleDatabase.tableFields] : {
				[TblUsers.memberId] : {
					[SimpleDatabase.fieldName] : TblUsers.memberId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Member"
					}
				},
				[TblUsers.userId] : {
					[SimpleDatabase.fieldName] : TblUsers.userId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "User Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblUsers.userMobile] : {
					[SimpleDatabase.fieldName] : TblUsers.userMobile,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Mobile Number"
					}
				},
				[TblUsers.userPassword] : {
					[SimpleDatabase.fieldName] : TblUsers.userPassword,
					[SimpleDatabase.fieldType] : SimpleDatabase.typePassword,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Password"
					}
				},
				[TblUsers.userType] : {
					[SimpleDatabase.fieldName] : TblUsers.userType,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Type"
					}
				}
			},
			[SimpleDatabase.tableViewName] : "view_users"
		},
		[Tables.zones] : {
			 [SimpleDatabase.tableName] : Tables.zones,
			 [SimpleDatabase.tableFields] : {
				[TblZones.zoneEnglish] : {
					[SimpleDatabase.fieldName] : TblZones.zoneEnglish,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Zone"
					}
				},
				[TblZones.zoneId] : {
					[SimpleDatabase.fieldName] : TblZones.zoneId,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [SimpleDatabase.attributePrimaryKey,SimpleDatabase.attributeAutoIncrement],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Zone Id",
						[SimpleDatabase.propertyPrimaryKey] : true
					}
				},
				[TblZones.zoneIndex] : {
					[SimpleDatabase.fieldName] : TblZones.zoneIndex,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeInt,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Index"
					}
				},
				[TblZones.zoneName] : {
					[SimpleDatabase.fieldName] : TblZones.zoneName,
					[SimpleDatabase.fieldType] : SimpleDatabase.typeString,
					[SimpleDatabase.fieldAttributes] : [],
					[SimpleDatabase.fieldProperties] : {
						[SimpleDatabase.propertyFieldTitle] : "Name"
					}
				}
			}
		}
	},
	"views" : {
		[Views.viewCountBloodGroupMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountBloodGroupMembers,
			[SimpleDatabase.viewFields] : {

			}
		},
		[Views.viewCountMaritialMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountMaritialMembers,
			[SimpleDatabase.viewFields] : {

			}
		},
		[Views.viewCountZoneMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountZoneMembers,
			[SimpleDatabase.viewFields] : {

			}
		},
		[Views.viewDistinctNames] : {
			[SimpleDatabase.viewName] : Views.viewDistinctNames,
			[SimpleDatabase.viewFields] : {

			}
		},
		[Views.viewNamesUnion] : {
			[SimpleDatabase.viewName] : Views.viewNamesUnion,
			[SimpleDatabase.viewFields] : {

			}
		},
		[Views.viewCommiteeMembers] : {
			[SimpleDatabase.viewName] : Views.viewCommiteeMembers,
			[SimpleDatabase.viewFields] : {
				[ViewCommiteeMembers.commiteeMemberId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeMemberId,
				},
				[ViewCommiteeMembers.commiteeId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeId,
				},
				[ViewCommiteeMembers.commiteeMemberType] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeMemberType,
				},
				[ViewCommiteeMembers.commiteeMemberIndex] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeMemberIndex,
				},
				[ViewCommiteeMembers.commiteeMemberStatus] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeMemberStatus,
				},
				[ViewCommiteeMembers.commiteeMemberZone] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeMemberZone,
				},
				[ViewCommiteeMembers.mainName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.mainName,
				},
				[ViewCommiteeMembers.parentName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.parentName,
				},
				[ViewCommiteeMembers.spouseName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.spouseName,
				},
				[ViewCommiteeMembers.zoneName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.zoneName,
				},
				[ViewCommiteeMembers.zoneIndex] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.zoneIndex,
				},
				[ViewCommiteeMembers.memberId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberId,
				},
				[ViewCommiteeMembers.memberFname] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberFname,
				},
				[ViewCommiteeMembers.memberMname] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberMname,
				},
				[ViewCommiteeMembers.memberLname] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberLname,
				},
				[ViewCommiteeMembers.memberGotra] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberGotra,
				},
				[ViewCommiteeMembers.parentId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.parentId,
				},
				[ViewCommiteeMembers.memberNative] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberNative,
				},
				[ViewCommiteeMembers.zoneId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.zoneId,
				},
				[ViewCommiteeMembers.memberPhone] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberPhone,
				},
				[ViewCommiteeMembers.memberEmail] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberEmail,
				},
				[ViewCommiteeMembers.memberDob] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberDob,
				},
				[ViewCommiteeMembers.memberGender] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberGender,
				},
				[ViewCommiteeMembers.bloodGroup] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.bloodGroup,
				},
				[ViewCommiteeMembers.maritialStatus] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.maritialStatus,
				},
				[ViewCommiteeMembers.spouseId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.spouseId,
				},
				[ViewCommiteeMembers.engagementDate] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.engagementDate,
				},
				[ViewCommiteeMembers.marraigeDate] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.marraigeDate,
				},
				[ViewCommiteeMembers.memberQualification] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberQualification,
				},
				[ViewCommiteeMembers.relationWithMain] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.relationWithMain,
				},
				[ViewCommiteeMembers.activeStatus] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.activeStatus,
				},
				[ViewCommiteeMembers.aliveStatus] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.aliveStatus,
				},
				[ViewCommiteeMembers.deathDate] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.deathDate,
				},
				[ViewCommiteeMembers.memberProfilePic] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberProfilePic,
				},
				[ViewCommiteeMembers.receiptNo] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.receiptNo,
				},
				[ViewCommiteeMembers.receiptAmount] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.receiptAmount,
				},
				[ViewCommiteeMembers.receiptDate] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.receiptDate,
				},
				[ViewCommiteeMembers.memberName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberName,
				},
				[ViewCommiteeMembers.memberAge] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberAge,
				},
				[ViewCommiteeMembers.birthDay] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.birthDay,
				},
				[ViewCommiteeMembers.birthMonth] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.birthMonth,
				},
				[ViewCommiteeMembers.birthYear] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.birthYear,
				},
				[ViewCommiteeMembers.memberAddress] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberAddress,
				},
				[ViewCommiteeMembers.cityName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.cityName,
				},
				[ViewCommiteeMembers.stateName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.stateName,
				},
				[ViewCommiteeMembers.countryName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.countryName,
				},
				[ViewCommiteeMembers.postalCode] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.postalCode,
				},
				[ViewCommiteeMembers.addressLatitude] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.addressLatitude,
				},
				[ViewCommiteeMembers.addressLongitude] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.addressLongitude,
				},
				[ViewCommiteeMembers.familyIndex] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.familyIndex,
				},
				[ViewCommiteeMembers.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.zoneFamilyIndex,
				},
				[ViewCommiteeMembers.isLifetime] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.isLifetime,
				},
				[ViewCommiteeMembers.memberType] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.memberType,
				},
				[ViewCommiteeMembers.mainId] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.mainId,
				},
				[ViewCommiteeMembers.commiteeZoneName] : {
					[SimpleDatabase.fieldName] : ViewCommiteeMembers.commiteeZoneName,
				}
			}
		},
		[Views.viewCountGenderMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountGenderMembers,
			[SimpleDatabase.viewFields] : {
				[ViewCountGenderMembers.memberGender] : {
					[SimpleDatabase.fieldName] : ViewCountGenderMembers.memberGender,
				},
				[ViewCountGenderMembers.membersCount] : {
					[SimpleDatabase.fieldName] : ViewCountGenderMembers.membersCount,
				}
			}
		},
		[Views.viewCountLnameMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountLnameMembers,
			[SimpleDatabase.viewFields] : {
				[ViewCountLnameMembers.memberLname] : {
					[SimpleDatabase.fieldName] : ViewCountLnameMembers.memberLname,
				},
				[ViewCountLnameMembers.membersCount] : {
					[SimpleDatabase.fieldName] : ViewCountLnameMembers.membersCount,
				}
			}
		},
		[Views.viewCountMainMemberFamily] : {
			[SimpleDatabase.viewName] : Views.viewCountMainMemberFamily,
			[SimpleDatabase.viewFields] : {
				[ViewCountMainMemberFamily.mainId] : {
					[SimpleDatabase.fieldName] : ViewCountMainMemberFamily.mainId,
				},
				[ViewCountMainMemberFamily.membersCount] : {
					[SimpleDatabase.fieldName] : ViewCountMainMemberFamily.membersCount,
				}
			}
		},
		[Views.viewCountNativeMembers] : {
			[SimpleDatabase.viewName] : Views.viewCountNativeMembers,
			[SimpleDatabase.viewFields] : {
				[ViewCountNativeMembers.memberNative] : {
					[SimpleDatabase.fieldName] : ViewCountNativeMembers.memberNative,
				},
				[ViewCountNativeMembers.membersCount] : {
					[SimpleDatabase.fieldName] : ViewCountNativeMembers.membersCount,
				}
			}
		},
		[Views.viewCurrentMembers] : {
			[SimpleDatabase.viewName] : Views.viewCurrentMembers,
			[SimpleDatabase.viewFields] : {
				[ViewCurrentMembers.mainName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.mainName,
				},
				[ViewCurrentMembers.parentName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.parentName,
				},
				[ViewCurrentMembers.spouseName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.spouseName,
				},
				[ViewCurrentMembers.zoneName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.zoneName,
				},
				[ViewCurrentMembers.zoneIndex] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.zoneIndex,
				},
				[ViewCurrentMembers.memberId] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberId,
				},
				[ViewCurrentMembers.memberFname] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberFname,
				},
				[ViewCurrentMembers.memberMname] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberMname,
				},
				[ViewCurrentMembers.memberLname] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberLname,
				},
				[ViewCurrentMembers.memberGotra] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberGotra,
				},
				[ViewCurrentMembers.parentId] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.parentId,
				},
				[ViewCurrentMembers.memberNative] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberNative,
				},
				[ViewCurrentMembers.zoneId] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.zoneId,
				},
				[ViewCurrentMembers.memberPhone] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberPhone,
				},
				[ViewCurrentMembers.memberEmail] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberEmail,
				},
				[ViewCurrentMembers.memberDob] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberDob,
				},
				[ViewCurrentMembers.memberGender] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberGender,
				},
				[ViewCurrentMembers.bloodGroup] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.bloodGroup,
				},
				[ViewCurrentMembers.maritialStatus] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.maritialStatus,
				},
				[ViewCurrentMembers.spouseId] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.spouseId,
				},
				[ViewCurrentMembers.engagementDate] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.engagementDate,
				},
				[ViewCurrentMembers.marraigeDate] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.marraigeDate,
				},
				[ViewCurrentMembers.memberQualification] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberQualification,
				},
				[ViewCurrentMembers.relationWithMain] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.relationWithMain,
				},
				[ViewCurrentMembers.activeStatus] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.activeStatus,
				},
				[ViewCurrentMembers.aliveStatus] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.aliveStatus,
				},
				[ViewCurrentMembers.deathDate] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.deathDate,
				},
				[ViewCurrentMembers.memberProfilePic] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberProfilePic,
				},
				[ViewCurrentMembers.receiptNo] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.receiptNo,
				},
				[ViewCurrentMembers.receiptAmount] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.receiptAmount,
				},
				[ViewCurrentMembers.receiptDate] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.receiptDate,
				},
				[ViewCurrentMembers.memberName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberName,
				},
				[ViewCurrentMembers.memberAge] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberAge,
				},
				[ViewCurrentMembers.birthDay] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.birthDay,
				},
				[ViewCurrentMembers.birthMonth] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.birthMonth,
				},
				[ViewCurrentMembers.birthYear] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.birthYear,
				},
				[ViewCurrentMembers.memberAddress] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberAddress,
				},
				[ViewCurrentMembers.cityName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.cityName,
				},
				[ViewCurrentMembers.stateName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.stateName,
				},
				[ViewCurrentMembers.countryName] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.countryName,
				},
				[ViewCurrentMembers.postalCode] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.postalCode,
				},
				[ViewCurrentMembers.addressLatitude] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.addressLatitude,
				},
				[ViewCurrentMembers.addressLongitude] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.addressLongitude,
				},
				[ViewCurrentMembers.familyIndex] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.familyIndex,
				},
				[ViewCurrentMembers.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.zoneFamilyIndex,
				},
				[ViewCurrentMembers.memberType] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.memberType,
				},
				[ViewCurrentMembers.mainId] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.mainId,
				},
				[ViewCurrentMembers.isLifetime] : {
					[SimpleDatabase.fieldName] : ViewCurrentMembers.isLifetime,
				}
			}
		},
		[Views.viewLastNames] : {
			[SimpleDatabase.viewName] : Views.viewLastNames,
			[SimpleDatabase.viewFields] : {
				[ViewLastNames.memberLname] : {
					[SimpleDatabase.fieldName] : ViewLastNames.memberLname,
				}
			}
		},
		[Views.viewMemberDetails] : {
			[SimpleDatabase.viewName] : Views.viewMemberDetails,
			[SimpleDatabase.viewFields] : {
				[ViewMemberDetails.mainName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.mainName,
				},
				[ViewMemberDetails.parentName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.parentName,
				},
				[ViewMemberDetails.spouseName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.spouseName,
				},
				[ViewMemberDetails.zoneName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.zoneName,
				},
				[ViewMemberDetails.zoneIndex] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.zoneIndex,
				},
				[ViewMemberDetails.memberId] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberId,
				},
				[ViewMemberDetails.memberFname] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberFname,
				},
				[ViewMemberDetails.memberMname] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberMname,
				},
				[ViewMemberDetails.memberLname] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberLname,
				},
				[ViewMemberDetails.memberGotra] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberGotra,
				},
				[ViewMemberDetails.parentId] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.parentId,
				},
				[ViewMemberDetails.memberNative] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberNative,
				},
				[ViewMemberDetails.zoneId] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.zoneId,
				},
				[ViewMemberDetails.memberPhone] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberPhone,
				},
				[ViewMemberDetails.memberEmail] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberEmail,
				},
				[ViewMemberDetails.memberDob] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberDob,
				},
				[ViewMemberDetails.memberGender] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberGender,
				},
				[ViewMemberDetails.bloodGroup] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.bloodGroup,
				},
				[ViewMemberDetails.maritialStatus] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.maritialStatus,
				},
				[ViewMemberDetails.spouseId] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.spouseId,
				},
				[ViewMemberDetails.engagementDate] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.engagementDate,
				},
				[ViewMemberDetails.marraigeDate] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.marraigeDate,
				},
				[ViewMemberDetails.memberQualification] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberQualification,
				},
				[ViewMemberDetails.relationWithMain] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.relationWithMain,
				},
				[ViewMemberDetails.activeStatus] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.activeStatus,
				},
				[ViewMemberDetails.aliveStatus] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.aliveStatus,
				},
				[ViewMemberDetails.deathDate] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.deathDate,
				},
				[ViewMemberDetails.memberProfilePic] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberProfilePic,
				},
				[ViewMemberDetails.receiptNo] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.receiptNo,
				},
				[ViewMemberDetails.receiptAmount] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.receiptAmount,
				},
				[ViewMemberDetails.receiptDate] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.receiptDate,
				},
				[ViewMemberDetails.memberName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberName,
				},
				[ViewMemberDetails.memberAge] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberAge,
				},
				[ViewMemberDetails.birthDay] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.birthDay,
				},
				[ViewMemberDetails.birthMonth] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.birthMonth,
				},
				[ViewMemberDetails.birthYear] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.birthYear,
				},
				[ViewMemberDetails.memberAddress] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberAddress,
				},
				[ViewMemberDetails.cityName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.cityName,
				},
				[ViewMemberDetails.stateName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.stateName,
				},
				[ViewMemberDetails.countryName] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.countryName,
				},
				[ViewMemberDetails.postalCode] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.postalCode,
				},
				[ViewMemberDetails.addressLatitude] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.addressLatitude,
				},
				[ViewMemberDetails.addressLongitude] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.addressLongitude,
				},
				[ViewMemberDetails.familyIndex] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.familyIndex,
				},
				[ViewMemberDetails.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.zoneFamilyIndex,
				},
				[ViewMemberDetails.isLifetime] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.isLifetime,
				},
				[ViewMemberDetails.memberType] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.memberType,
				},
				[ViewMemberDetails.mainId] : {
					[SimpleDatabase.fieldName] : ViewMemberDetails.mainId,
				}
			}
		},
		[Views.viewMembers] : {
			[SimpleDatabase.viewName] : Views.viewMembers,
			[SimpleDatabase.viewFields] : {
				[ViewMembers.memberId] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberId,
				},
				[ViewMembers.memberFname] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberFname,
				},
				[ViewMembers.memberMname] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberMname,
				},
				[ViewMembers.memberLname] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberLname,
				},
				[ViewMembers.memberGotra] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberGotra,
				},
				[ViewMembers.parentId] : {
					[SimpleDatabase.fieldName] : ViewMembers.parentId,
				},
				[ViewMembers.memberNative] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberNative,
				},
				[ViewMembers.zoneId] : {
					[SimpleDatabase.fieldName] : ViewMembers.zoneId,
				},
				[ViewMembers.memberPhone] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberPhone,
				},
				[ViewMembers.memberEmail] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberEmail,
				},
				[ViewMembers.memberDob] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberDob,
				},
				[ViewMembers.memberGender] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberGender,
				},
				[ViewMembers.bloodGroup] : {
					[SimpleDatabase.fieldName] : ViewMembers.bloodGroup,
				},
				[ViewMembers.maritialStatus] : {
					[SimpleDatabase.fieldName] : ViewMembers.maritialStatus,
				},
				[ViewMembers.spouseId] : {
					[SimpleDatabase.fieldName] : ViewMembers.spouseId,
				},
				[ViewMembers.engagementDate] : {
					[SimpleDatabase.fieldName] : ViewMembers.engagementDate,
				},
				[ViewMembers.marraigeDate] : {
					[SimpleDatabase.fieldName] : ViewMembers.marraigeDate,
				},
				[ViewMembers.memberQualification] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberQualification,
				},
				[ViewMembers.relationWithMain] : {
					[SimpleDatabase.fieldName] : ViewMembers.relationWithMain,
				},
				[ViewMembers.activeStatus] : {
					[SimpleDatabase.fieldName] : ViewMembers.activeStatus,
				},
				[ViewMembers.aliveStatus] : {
					[SimpleDatabase.fieldName] : ViewMembers.aliveStatus,
				},
				[ViewMembers.deathDate] : {
					[SimpleDatabase.fieldName] : ViewMembers.deathDate,
				},
				[ViewMembers.memberProfilePic] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberProfilePic,
				},
				[ViewMembers.receiptNo] : {
					[SimpleDatabase.fieldName] : ViewMembers.receiptNo,
				},
				[ViewMembers.receiptAmount] : {
					[SimpleDatabase.fieldName] : ViewMembers.receiptAmount,
				},
				[ViewMembers.receiptDate] : {
					[SimpleDatabase.fieldName] : ViewMembers.receiptDate,
				},
				[ViewMembers.memberName] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberName,
				},
				[ViewMembers.memberAge] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberAge,
				},
				[ViewMembers.birthDay] : {
					[SimpleDatabase.fieldName] : ViewMembers.birthDay,
				},
				[ViewMembers.birthMonth] : {
					[SimpleDatabase.fieldName] : ViewMembers.birthMonth,
				},
				[ViewMembers.birthYear] : {
					[SimpleDatabase.fieldName] : ViewMembers.birthYear,
				},
				[ViewMembers.memberAddress] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberAddress,
				},
				[ViewMembers.cityName] : {
					[SimpleDatabase.fieldName] : ViewMembers.cityName,
				},
				[ViewMembers.stateName] : {
					[SimpleDatabase.fieldName] : ViewMembers.stateName,
				},
				[ViewMembers.countryName] : {
					[SimpleDatabase.fieldName] : ViewMembers.countryName,
				},
				[ViewMembers.postalCode] : {
					[SimpleDatabase.fieldName] : ViewMembers.postalCode,
				},
				[ViewMembers.addressLatitude] : {
					[SimpleDatabase.fieldName] : ViewMembers.addressLatitude,
				},
				[ViewMembers.addressLongitude] : {
					[SimpleDatabase.fieldName] : ViewMembers.addressLongitude,
				},
				[ViewMembers.familyIndex] : {
					[SimpleDatabase.fieldName] : ViewMembers.familyIndex,
				},
				[ViewMembers.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : ViewMembers.zoneFamilyIndex,
				},
				[ViewMembers.isLifetime] : {
					[SimpleDatabase.fieldName] : ViewMembers.isLifetime,
				},
				[ViewMembers.memberType] : {
					[SimpleDatabase.fieldName] : ViewMembers.memberType,
				},
				[ViewMembers.mainId] : {
					[SimpleDatabase.fieldName] : ViewMembers.mainId,
				}
			}
		},
		[Views.viewUsers] : {
			[SimpleDatabase.viewName] : Views.viewUsers,
			[SimpleDatabase.viewFields] : {
				[ViewUsers.userId] : {
					[SimpleDatabase.fieldName] : ViewUsers.userId,
				},
				[ViewUsers.userMobile] : {
					[SimpleDatabase.fieldName] : ViewUsers.userMobile,
				},
				[ViewUsers.userType] : {
					[SimpleDatabase.fieldName] : ViewUsers.userType,
				},
				[ViewUsers.mainName] : {
					[SimpleDatabase.fieldName] : ViewUsers.mainName,
				},
				[ViewUsers.parentName] : {
					[SimpleDatabase.fieldName] : ViewUsers.parentName,
				},
				[ViewUsers.spouseName] : {
					[SimpleDatabase.fieldName] : ViewUsers.spouseName,
				},
				[ViewUsers.zoneName] : {
					[SimpleDatabase.fieldName] : ViewUsers.zoneName,
				},
				[ViewUsers.zoneIndex] : {
					[SimpleDatabase.fieldName] : ViewUsers.zoneIndex,
				},
				[ViewUsers.memberId] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberId,
				},
				[ViewUsers.memberFname] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberFname,
				},
				[ViewUsers.memberMname] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberMname,
				},
				[ViewUsers.memberLname] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberLname,
				},
				[ViewUsers.memberGotra] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberGotra,
				},
				[ViewUsers.parentId] : {
					[SimpleDatabase.fieldName] : ViewUsers.parentId,
				},
				[ViewUsers.memberNative] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberNative,
				},
				[ViewUsers.zoneId] : {
					[SimpleDatabase.fieldName] : ViewUsers.zoneId,
				},
				[ViewUsers.memberPhone] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberPhone,
				},
				[ViewUsers.memberEmail] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberEmail,
				},
				[ViewUsers.memberDob] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberDob,
				},
				[ViewUsers.memberGender] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberGender,
				},
				[ViewUsers.bloodGroup] : {
					[SimpleDatabase.fieldName] : ViewUsers.bloodGroup,
				},
				[ViewUsers.maritialStatus] : {
					[SimpleDatabase.fieldName] : ViewUsers.maritialStatus,
				},
				[ViewUsers.spouseId] : {
					[SimpleDatabase.fieldName] : ViewUsers.spouseId,
				},
				[ViewUsers.engagementDate] : {
					[SimpleDatabase.fieldName] : ViewUsers.engagementDate,
				},
				[ViewUsers.marraigeDate] : {
					[SimpleDatabase.fieldName] : ViewUsers.marraigeDate,
				},
				[ViewUsers.memberQualification] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberQualification,
				},
				[ViewUsers.relationWithMain] : {
					[SimpleDatabase.fieldName] : ViewUsers.relationWithMain,
				},
				[ViewUsers.activeStatus] : {
					[SimpleDatabase.fieldName] : ViewUsers.activeStatus,
				},
				[ViewUsers.aliveStatus] : {
					[SimpleDatabase.fieldName] : ViewUsers.aliveStatus,
				},
				[ViewUsers.deathDate] : {
					[SimpleDatabase.fieldName] : ViewUsers.deathDate,
				},
				[ViewUsers.memberProfilePic] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberProfilePic,
				},
				[ViewUsers.receiptNo] : {
					[SimpleDatabase.fieldName] : ViewUsers.receiptNo,
				},
				[ViewUsers.receiptAmount] : {
					[SimpleDatabase.fieldName] : ViewUsers.receiptAmount,
				},
				[ViewUsers.receiptDate] : {
					[SimpleDatabase.fieldName] : ViewUsers.receiptDate,
				},
				[ViewUsers.memberName] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberName,
				},
				[ViewUsers.memberAge] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberAge,
				},
				[ViewUsers.birthDay] : {
					[SimpleDatabase.fieldName] : ViewUsers.birthDay,
				},
				[ViewUsers.birthMonth] : {
					[SimpleDatabase.fieldName] : ViewUsers.birthMonth,
				},
				[ViewUsers.birthYear] : {
					[SimpleDatabase.fieldName] : ViewUsers.birthYear,
				},
				[ViewUsers.memberAddress] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberAddress,
				},
				[ViewUsers.cityName] : {
					[SimpleDatabase.fieldName] : ViewUsers.cityName,
				},
				[ViewUsers.stateName] : {
					[SimpleDatabase.fieldName] : ViewUsers.stateName,
				},
				[ViewUsers.countryName] : {
					[SimpleDatabase.fieldName] : ViewUsers.countryName,
				},
				[ViewUsers.postalCode] : {
					[SimpleDatabase.fieldName] : ViewUsers.postalCode,
				},
				[ViewUsers.addressLatitude] : {
					[SimpleDatabase.fieldName] : ViewUsers.addressLatitude,
				},
				[ViewUsers.addressLongitude] : {
					[SimpleDatabase.fieldName] : ViewUsers.addressLongitude,
				},
				[ViewUsers.familyIndex] : {
					[SimpleDatabase.fieldName] : ViewUsers.familyIndex,
				},
				[ViewUsers.zoneFamilyIndex] : {
					[SimpleDatabase.fieldName] : ViewUsers.zoneFamilyIndex,
				},
				[ViewUsers.isLifetime] : {
					[SimpleDatabase.fieldName] : ViewUsers.isLifetime,
				},
				[ViewUsers.memberType] : {
					[SimpleDatabase.fieldName] : ViewUsers.memberType,
				},
				[ViewUsers.mainId] : {
					[SimpleDatabase.fieldName] : ViewUsers.mainId,
				}
			}
		}
	},
	relationships : {
		[Tables.commiteeMembers] : {
			[TblCommiteeMembers.memberId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblCommiteeMembers.memberId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.commiteeMembers,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			},
			[TblCommiteeMembers.commiteeId] : {
				[Tables.commitees] : {
					[TblCommitees.commiteeId] : {
						[SimpleDatabase.relationshipDestinationField] : TblCommiteeMembers.commiteeId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.commiteeMembers,
						[SimpleDatabase.relationshipSourceField] : TblCommitees.commiteeId,
						[SimpleDatabase.relationshipSourceTable] : Tables.commitees
					}
				}
			}
		},
		[Tables.firms] : {
			[TblFirms.zoneId] : {
				[Tables.zones] : {
					[TblZones.zoneId] : {
						[SimpleDatabase.relationshipDestinationField] : TblFirms.zoneId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.firms,
						[SimpleDatabase.relationshipSourceField] : TblZones.zoneId,
						[SimpleDatabase.relationshipSourceTable] : Tables.zones
					}
				}
			}
		},
		[Tables.log] : {
			[TblLog.memberId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblLog.memberId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.log,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			}
		},
		[Tables.memberDetails] : {
			[TblMemberDetails.zoneId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblMemberDetails.zoneId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.memberDetails,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			},
			[TblMemberDetails.spouseId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblMemberDetails.spouseId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.memberDetails,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			},
			[TblMemberDetails.parentId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblMemberDetails.parentId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.memberDetails,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			},
			[TblMemberDetails.mainId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblMemberDetails.mainId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.memberDetails,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			}
		},
		[Tables.users] : {
			[TblUsers.memberId] : {
				[Tables.memberDetails] : {
					[TblMemberDetails.memberId] : {
						[SimpleDatabase.relationshipDestinationField] : TblUsers.memberId,
						[SimpleDatabase.relationshipDestinationTable] : Tables.users,
						[SimpleDatabase.relationshipSourceField] : TblMemberDetails.memberId,
						[SimpleDatabase.relationshipSourceTable] : Tables.memberDetails
					}
				}
			}
		}
	}
};
