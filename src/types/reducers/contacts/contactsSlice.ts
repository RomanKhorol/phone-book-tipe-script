import { IContact } from "../../../models/IContact";
interface ContactsState {
  contacts: IContact[];
  isLoading: boolean;
  error: string;
}

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: "",
};
