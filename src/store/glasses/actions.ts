import { SET_SELECTED_GLASS, SET_UNSELECTED_GLASS } from "./mutations";
import { Commit, Dispatch } from "vuex";
import { StoreGlassesState, Option } from "@/types";

export default {
  setSelectedGlass: ({ commit, dispatch, state }: { commit: Commit; dispatch: Dispatch; state: StoreGlassesState }, glass: Option) => {
    dispatch(
      "setUnselectedGlass",
      state.glasses.find((glass) => glass.isSelected === true)
    );
    commit(SET_SELECTED_GLASS, glass);
  },
  setUnselectedGlass: ({ commit }: { commit: Commit }, glass: Option) => {
    commit(SET_UNSELECTED_GLASS, glass);
  },
};
