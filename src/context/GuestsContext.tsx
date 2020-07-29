import React, { useEffect, useReducer } from "react";
import { fakeApi } from "./../fakeApi";

export const GuestsContext = React.createContext({});

interface Init {
  loading: boolean;
  guests: Array<Object>;
}

const initialState: Init = {
  loading: true,
  guests: [],
};

const getGuests = (state: any, action: any) => {
  const { guests } = action;
  return {
    ...state,
    loading: false,
    guests,
  };
};
const updateGuestInvitationStatus = (state: any, action: any) => {
  const { index } = action;
  const updatedGuests = [...state.guests];

  updatedGuests[index].invitationStatus = !updatedGuests[index]
    .invitationStatus;

  return {
    ...state,
    updatedGuests,
    loading: false,
  };
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_GUESTS":
      return getGuests(state, action);
    case "UPDATE_GUEST_INVITATION_STATUS":
      return updateGuestInvitationStatus(state, action);
    default:
      throw new Error("Something is wrong, you was not supposed to be here");
  }
};

interface Props {
  children: React.ReactNode;
}

const GuestsContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getGuestsFromFakeApi();
  }, []);

  const getGuestsFromFakeApi = async () => {
    try {
      const response = await fakeApi();
      dispatch({
        type: "GET_GUESTS",
        guests: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GuestsContext.Provider value={{ state, dispatch }}>
      {children}
    </GuestsContext.Provider>
  );
};

export default GuestsContextProvider;
