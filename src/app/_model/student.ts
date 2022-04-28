import { CatalogDto } from "./catalog"

export class StudentDto {

    studentId !: Number
    name !: String
    lastName !: String
    birthday !: Date
    idNumber !: Number
    email !: String
    genderDto !: CatalogDto
    phoneOne !: Number
    phoneTwo !: Number
    phoneReference !: Number
    maritalStatusDto !: CatalogDto
    address !: String
    countryDto !: CatalogDto
    cityDto !: CatalogDto
    postalCode !: String
    other !: String


}