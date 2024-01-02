import { useState } from "react";
import * as Components from "./Components";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import "./App.css";

function App() {
  const [signIn, toggle] = useState(true);
  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" />
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.ConfirmPasswordInput
            type="password"
            placeholder="Confirm Password"
          />
          <Components.Button>Sign Up</Components.Button>
          <Components.SocialButtonsContainer>
            <Components.SocialButton>
              <FaFacebook />
            </Components.SocialButton>
            <Components.SocialButton>
              <FaGoogle />
            </Components.SocialButton>
            <Components.SocialButton>
              <FaGithub />
            </Components.SocialButton>
          </Components.SocialButtonsContainer>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
          <Components.SocialButtonsContainer>
            <Components.SocialButton>
              <FaFacebook />
            </Components.SocialButton>
            <Components.SocialButton>
              <FaGoogle />
            </Components.SocialButton>
            <Components.SocialButton>
              <FaGithub />
            </Components.SocialButton>
          </Components.SocialButtonsContainer>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login to your account
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>No Account</Components.Title>
            <Components.Paragraph>
              Sign up and discover a great amount of new opportunities!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sigin Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default App;
