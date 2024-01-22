export type userSliceTypeState = {
  token: string | null;
  data: {
    email: string | null;
    id: number | null;
  };
  state: {
    isLoaded: boolean;
    isError: boolean;
    isPending: boolean;
  };
  currentChat: string | null;
};
