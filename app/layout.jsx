import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "AI-Images Generator",
  description: "Edit & download AI images",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <Provider>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
