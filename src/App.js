import { ChatEngine } from 'react-chat-engine';

import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';

const projectID = '9df9b246-57e5-4b5b-b584-5c8ed74b158c';

const App = () => {
  if (!localStorage.getItem('username')) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChat={(chatAppProps) => <Chat {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;