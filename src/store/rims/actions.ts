import { SET_SELECTED_RIM, SET_UNSELECTED_RIM } from "./mutations";
import { Commit, Dispatch } from "vuex";
import { StoreRimsState, Option } from "@/types";

export default {
  setSelectedRim: ({ commit, dispatch, state }: { commit: Commit; dispatch: Dispatch; state: StoreRimsState }, rim: Option) => {
    dispatch(
      "setUnselectedRim",
      state.rims.find((rim) => rim.isSelected === true)
    );
    commit(SET_SELECTED_RIM, rim);
  },
  setUnselectedRim: ({ commit }: { commit: Commit }, rim: Option) => {
    commit(SET_UNSELECTED_RIM, rim);
  },
};
