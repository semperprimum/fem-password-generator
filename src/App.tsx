import { useState } from "react";
import { ModifierForm, PasswordField } from "./components";

export default function App() {
  const [password, setPassword] = useState<string>("P4$5W0rD!");
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
    </>
  );
}