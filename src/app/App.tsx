import { AppProviders } from "./providers/AppProviders";
import { LoginPage } from "../pages/login/LoginPage";

export function App() {
  return (
    <AppProviders>
      <LoginPage />
    </AppProviders>
  );
}
