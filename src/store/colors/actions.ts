import { SET_SELECTED_COLOR, SET_UNSELECTED_COLOR } from "./mutations";
import { Commit, Dispatch } from "vuex";
import { StoreColorsState, Option } from "@/types";

export default {
  setSelectedColor: ({ commit, dispatch, state }: { commit: Commit; dispatch: Dispatch; state: StoreColorsState }, color: Option) => {
    dispatch(
      "setUnselectedColor",
      state.colors.find((color) => color.isSelected === true)
    );
    commit(SET_SELECTED_COLOR, color);
  },
  setUnselectedColor: ({ commit }: { commit: Commit }, color: Option) => {
    commit(SET_UNSELECTED_COLOR, color);
  },
};
