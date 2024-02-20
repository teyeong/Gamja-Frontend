declare module 'props-type' {
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
    content?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
  };

  export type ContentProps = {
    svg: string;
    title: string;
    content: string;
    styleClass: string;
    subtitle?: string;
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
}
