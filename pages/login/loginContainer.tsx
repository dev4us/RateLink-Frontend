import React from "react";
import LoginPresenter from "./loginPresenter";
import checkLogin from "../../lib/checkLogin";
import redirect from "../../lib/redirect";

class LoginContainer extends React.Component {
  static async getInitialProps(context) {
    const { loggedInUser } = await checkLogin(context.apolloClient);

    if (!loggedInUser.ok) {
      // If not signed in, send them somewhere more useful
      console.log("not logged in");
    } else {
      redirect(context, "/");
    }

    return { loggedInUser };
  }
  render() {
    return <LoginPresenter />;
  }
}

export default LoginContainer;