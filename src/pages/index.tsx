import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="bg-gray-900 text-white">
        <Head>
          <title>Calendar Share</title>
          <meta name="description" content="Share calendar meetings easily" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mx-auto w-3/4">
          <div className="flex min-h-screen w-full flex-col justify-center ">
            <h1 className="mb-4 text-5xl font-bold">Welcome Back!</h1>

            {session ? (
              <div>
                <p className="mb-6">Hi {session.user?.name}</p>

                <div className="mb-5 w-56 max-w-full bg-indigo-600 py-2 px-10 text-center font-semibold text-slate-200 shadow-lg">
                  My Calendars
                </div>

                <button onClick={() => signOut()}>Logout</button>
              </div>
            ) : (
              <div className="">
                <p className="mb-6">Log in to access your calendars below:</p>
                <button
                  className="mb-5 max-w-full bg-indigo-600 py-2 px-10 font-semibold text-slate-200 shadow-lg"
                  onClick={() => signIn("discord")}
                >
                  Login with Discord
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
