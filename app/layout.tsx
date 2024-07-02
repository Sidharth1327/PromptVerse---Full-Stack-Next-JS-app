import '../app/globals.css';
import Nav from '../components/Nav';
import Provider from '../components/Provider';
import { getSession }  from 'next-auth/react';

export const metadata = {
  title: "PromptVerse",
  description: "Unleash Creativity with AI Prompts",
};

const RootLayout = async ({ children }) => {
  const session = await getSession();
  return(
    <html lang='en'>
    <body>
      <Provider session = {session}>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
      </Provider>
    </body>
  </html>
 ); 
}
  

export default RootLayout;