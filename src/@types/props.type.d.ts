declare module 'props-type' {
  export type ChildrenProps = {
    children: React.ReactNode;
  };

  export type BtnProps = {
    label: string;
    styleClass: string;
    onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  };

  export type InputProps = {
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    styleClass?: string;
    isWrong?: boolean;
    alertText?: string;
    defaultValue?: string;
    value?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    isAlertRequired?: boolean;
  };

  export type LabelProps = {
    label: string;
    isRequired?: boolean;
  };

  export type ContentProps = {
    svg: string;
    title: string;
    content: string;
    styleClass: string;
    subtitle?: string;
    onClick?: () => void;
  };

  export type TitleProps = {
    label: string;
  };

  export type PictureProps = {
    src?: string;
  };

  // UserTag, SignInForm, TypeContent props
  export type UserProps = {
    user: string;
  };

  export type ModalProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type ResumeCardProps = {
    isDefault?: boolean;
    isVerified?: boolean;
    resumeId: number;
    title?: string; // 이력서 제목
    jobGroup: string;
    jobName: string;
    date?: string; // 이력서 최종 수정일
    careerYear: number;
    commuteType: string;
  };

  export type ResumeLongCardProps = ResumeCardProps & {
    seniorName: string;
    profileImage: string;
    skills?: string[];
    recommendComments?: { commentType: number; comments: string[] }[];
    needSubinfo?: boolean;
    durationStart?: number;
    durationEnd?: number;
    payStart?: number;
    payEnd?: number;
  };

  export type ResumeEditProps = {
    isSubmitted?: boolean;
  };

  export type RecordProps = {
    isMini?: boolean;
    needDetail?: boolean;
    firstPlaceholder: string;
    secondPlaceholder: string;
  };

  export type PaySliderProps = {
    isPay?: boolean;
    isCareer?: boolean;
    isDuration?: boolean;
  };

  export type BannerProps = {
    image: string;
    title?: string;
    content?: string;
    subContent?: string;
    styleClass?: string;
  };

  export type TermsProps = {
    agree: boolean;
    setAgree: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type EditModalProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };

  export type HamburgerProps = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLogin: boolean;
  };

  export type HamburgerAccordionProps = {
    title: string;
    icon: string;
    subMenus: {
      subMenu: string;
      onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    }[];
    onTitleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  };

  export type NoticeListProps = {
    isOld: boolean;
  };

  export type NoticeItemProps = {
    name: string;
    src: string;
    type: string;
  };
}
