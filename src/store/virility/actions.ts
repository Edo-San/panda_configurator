import { SET_SELECTED_VIRILITY, SET_UNSELECTED_VIRILITY } from "./mutations";
import { Dispatch, Commit } from "vuex";
import { StoreVirilityState, Option } from "@/types";

export default {
  setSelectedVirility: (
    { commit, dispatch, state }: { commit: Commit; dispatch: Dispatch; state: StoreVirilityState },
    virility: Option
  ) => {
    dispatch(
      "setUnselectedVirility",
      state.virilities.find((virility) => virility.isSelected === true)
    );
    commit(SET_SELECTED_VIRILITY, virility);
  },
  setUnselectedVirility: ({ commit }: { commit: Commit }, virility: Option) => {
    commit(SET_UNSELECTED_VIRILITY, virility);
  },
};
