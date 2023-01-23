import { reactive } from "vue";

const state = reactive({
  isLoadingPage: false,
  isLoadingSubmit: false
});

const setLoadingPage = (loading: boolean | null): void => {
  state.isLoadingPage = loading === null ? !state.isLoadingPage : loading;
};

const setLoadingSubmit = (loading: boolean | null): void => {
  state.isLoadingSubmit = loading === null ? !state.isLoadingSubmit : loading;
};

const useLoading = () => {
  return {
    setLoadingPage,
    setLoadingSubmit,
    state
  };
};

export default useLoading;
