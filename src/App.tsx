import { useState } from "react";
import { Attribution, ModifierForm, PasswordField } from "./components";

export default function App() {
  const [password, setPassword] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <>
      <main>
        <h1 className="main-heading">Password Generator</h1>
        <PasswordField
          copied={copied}
          setCopied={setCopied}
          password={password}
        />
        <ModifierForm
          setCopied={setCopied}
          password={password}
          setPassword={setPassword}
        />
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
