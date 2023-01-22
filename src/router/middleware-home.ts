import useAuth from "../stores/auth";

const { state } = useAuth();

const middlewareHome = (to: any, form: any, next: any) => {
  if (state.isAuth == true) {
    return next("admin");
  }
  if (state.isAuth == false) {
    return next("tabs");
  }
  return next("not-found");
};

export default middlewareHome;
