export type ValidationErrorType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type FormExampleProps = {
  name?: string;
  comment: string;
  selectedAddress: string;
  setName: (param: string) => void;
  setComment: (param: string) => void;
  setSelectedAddress: (param: string) => void;
};
