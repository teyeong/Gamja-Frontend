declare module 'data-type' {
  export type InfoFormData = {
    name: string;
    username: string;
    phone_number: string;
    email: string;
    id?: number;
    is_senior?: boolean;
    is_enterprise?: boolean;

    default_resume?: number;
    business_number?: string;
    is_certified?: boolean;
  };

  export type SignupData = InfoFormData & {
    password: string;
  };

  export type SigninData = {
    id: number;
    name: string;
    is_senior: boolean;
    is_enterprise: boolean;
    profile_image: string;
    access: string;
    refresh: string;
  };

  export type ManagementItemData = {
    isVerified: boolean;
    resumeId: number;
    seniorName: string;
    careerYear: number;
    jobGroup: string;
    jobName: string;
    date: string;
    commuteType: string;
    profileImage: string;
    isFinished: boolean;
    reviewId: number;
  };

  export type SigninStateAtomType = {
    isSignin: boolean;
    isSenior: boolean;
  };

  export type ResumeData = {
    [key: string]: any;
    successfully_get: boolean;
    user_id: number;
    resume_id: number;
    is_submitted: boolean;
    // 전문가 소개
    keyword: string;
    introduction: string;
    // 이력서
    job_group: string;
    job_role: string;
    career_year: number;
    skills: string; // 배열 json stringify
    careers: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      company_name: string;
      job_name: string;
      performances: {
        id: number;
        start_year_month: string;
        end_year_month: string;
        performance_name: string;
        performance_detail: string;
      }[];
    }[];
    educations: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      education_info: string;
      education_name: string;
    }[];
    projects: {
      id: number;
      start_year_month: string;
      end_year_month: string;
      project_name: string;
      project_detail: string;
    }[];
    portfolios: {
      id: number;
      name: string;
      portfolio_file: File;
    }[];
    duration_start: number;
    duration_end: number;
    min_month_pay: number;
    max_month_pay: number;
    commute_type: string;
  };

  export type ResumeCardData = {
    id: number;
    is_default: boolean;
    is_verified: boolean;
    career_year: number;
    commute_type: string;
    title: string;
    job_group: string;
    job_role: string;
    updated_at: string; // 이력서 최종 수정일
  };

  export type ResumeLongCardData = {
    resume_id: number;
    is_verified: boolean;
    keyword: string;
    job_group: string;
    job_role: string;
    career_year: number;
    skills: string;
    commute_type: string;
    profile_image: string;
    name: string;
    comments?: { commentType: number; comments: string[] }[];
  };

  export type ResumeSearchData = {
    query: string;
    job_group: string;
    job_role: string;
    skills: string;
    min_career_year: number;
    max_career_year: number;
    duration_start: number;
    duration_end: number;
    min_month_pay: number;
    max_month_pay: number;
    commute_type: string;
  };

  export type ResumeDetailData = ResumeData & {
    // 인적사항 및 기본 정보
    profile_image: string;
    name: string;
    is_verified: boolean;
  };

  export type ReviewData = {
    id: number;
    name: string;
    star: number;
    date: string;
    profile_image: string;
    duration_start: string;
    duration_end: string;
    tags: string[];
    content: string;
  };
}
