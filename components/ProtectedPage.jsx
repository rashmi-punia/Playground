import { useSession, signIn } from "next-auth/react";

const ProtectedPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    signIn();
    return <div>Redirecting...</div>;
  }

  return <div>Welcome, {session.user.name}!</div>;
};

export default ProtectedPage;
