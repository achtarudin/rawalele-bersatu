import { reactive } from "vue";

const state = reactive({
  dark: false,
  light: false
});

const setTheme = (valueTheme?: boolean | undefined | null): void => {
  const defaultTheme = localStorage.getItem("theme-is-dark") ?? null;

  let value;

  if (!!defaultTheme === valueTheme) {
    value = !!defaultTheme;
  } else {
    value = valueTheme;
  }

  if (value == true) {
    state.dark = true;
    state.light = false;
    document.body.classList.add("dark");
  } else {
    state.dark = false;
    state.light = true;
    document.body.classList.remove("dark");
  }

  localStorage.setItem("theme-is-dark", state.dark ? "1" : "0");
};

const useTheme = () => {
  return {
    setTheme,
    theme: state
  };
};

export default useTheme;
