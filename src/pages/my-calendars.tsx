import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="bg-gray-900 text-white">
        <Head>
          <title>My Calendars</title>
          <meta name="description" content="Share calendar meetings easily" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="mx-auto w-3/4">
          <div className="flex min-h-screen w-full flex-col justify-center ">
            <h1 className="mb-6 text-5xl font-bold">My Calendars</h1>

            {session ? (
              <div>
                <button onClick={() => signOut()}>Logout</button>
              </div>
            ) : (
              <div>
                <p className="mb-6">
                  Please Login to view calendars{" "}
                  <Link href="/">
                    <a className="text-blue-400">here</a>
                  </Link>
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
