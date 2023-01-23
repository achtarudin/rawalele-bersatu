import { reactive } from "vue";

const state = reactive({
  isAuth: true
});

const setAuth = () : void=> {
  state.isAuth = true;
};

const useAuth = () => {
  return {
    setAuth,
    state
  };
};

export default useAuth;
