import { Trans } from 'react-i18next';

export default function App() {
  return (
    <div>
      <Trans i18nKey="welcomeMessage">
        Welcome, <i>user</i>! <b>Test</b>!@!!!
      </Trans>
    </div>
  );
}
