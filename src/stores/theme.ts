import { reactive, toRef } from "vue";

const state = reactive({
  dark: false,
  light: false
});

const setTheme = (value: boolean) => {
  if (value == true) {
    state.dark = true;
    state.light = false;
  }
  if (value == false) {
    state.dark = false;
    state.light = true;
  }

};

const useTheme = () => {
  return {
    setTheme,
    theme: state
  };
};

export default useTheme;
