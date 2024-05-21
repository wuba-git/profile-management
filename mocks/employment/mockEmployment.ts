import { EmploymentAPIResponse } from "@/app/types/employment";

export const mockEmploymentDetails: EmploymentAPIResponse = {
  header: {
    person_id: 1,
    first_name: "First2",
    middle_name: "Middle2",
    last_name: "Last2",
    preferred_name: "Test2",
    personal_pronoun: "he/him",
    employee_number: "100",
    lms_number: 90210,
    status_classification: "Full Time",
    employment_status: "Active",
    company_name: "GardaWorld",
    division_name: "Aviation services",
    work_location_name: "Toronto",
    department: "Information Technology",
    primary_language_of_communication: "English",
  },
  employment_header: {
    person_id: 1,
    is_bilingual_flag: false,
    original_hire_date: "1991-01-01",
    probation_date: "1991-02-02",
    termination_date: null,
    work_email_address: "shsha@work.com",
    work_contact_device_type: "Mobile",
    work_device_phone_number: "4032121",
    is_active_h_and_s: true,
    is_active_union_steward: false,
    languages: "English, French",
  },
  employment_detail: [
    {
      person_id: 1,
      employment_detail_id: 1,
      primary_work_location_code: "YYZ",
      organizational_role: "Screening Officer",
      organizational_role_subtype: "Regional",
      status_classification: "Full Time",
      employment_status: "Active",
      company_name: "GardaWorld",
      division_name: "Aviation services",
      job_title: "Screening Person",
      unionized_position: false,
      job_hire_date: "1999-09-09",
      first_day_of_work_on_role: "1999-09-10",
      last_day_of_work_on_role: null,
      catsa_job_level: "2",
      other_work_locations: "Toronto, Montreal",
    },
  ],
  employee_associated_ids: [
    {
      person_id: 1,
      other_employee_associated_id_type: "Driver Liccence",
      other_employee_associated_id_values: "12354",
      other_employee_associated_id_expiry_dates: "2028-01-01",
    },
    {
      person_id: 1,
      other_employee_associated_id_type: "Passport",
      other_employee_associated_id_values: "12354",
      other_employee_associated_id_expiry_dates: "2028-01-01",
    },
  ],
};
