"use client";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const router = useRouter();

  console.log(toggleDropDown);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  useEffect(() => {
    if (session?.user?.id) {
      router.push("/create");
    } else {
      router.push("/");
    }
  }, [session, router]);

  return (
    <nav className="w-full py-5 px-12 bg-black/80  flex justify-between">
      <Link href="/" className="flex gap-2 justify-cente items-center">
        {/* <Image src="/path/to/logo.png" width={30} height={30} alt="logo" /> */}

        <p className="text-xl">AIm_Generator</p>
      </Link>

      <div className="sm:flex gap-8 items-center hidden relative">
        <Link href={"/"}>LinkedIn</Link>
        <Link href={"/"}>LinkedIn</Link>
        <Link href={"/"}>LinkedIn</Link>

        {session?.user ? (
          <>
            <div>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="user"
                onClick={() => {
                  setToggleDropDown((prev) => !prev);
                }}
              />
              {toggleDropDown && (
                <div className="dropdown">
                  <Link
                    href="/history"
                    className="dropdown_link"
                    onClick={() => setToggleDropDown(false)}
                  >
                    History
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropDown(false);
                      signOut();
                    }}
                    className="border-t-2 w-full hover:bg-gray-100 "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="button-gradien bg-gradient-to-tr text-neutral-950 font-semibold px-2 py-1 rounded-2xl text-sm from-cyan-300 via-sky-200 to-pink-300"
                >
                  Sign up
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
