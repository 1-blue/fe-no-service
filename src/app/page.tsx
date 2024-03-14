"use client";

import { getMeApi } from "#/apis";
import Button from "#/components/atoms/Button";
import { useQuery } from "@tanstack/react-query";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page: NextPage = () => {
  const { data: me } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => getMeApi({}),
  });

  return (
    <>
      <h1>Home</h1>

      <section className="flex flex-col gap-4">
        {me && (
          <Image
            src={me.image.url}
            alt={me.nickname + "님의 프로필 이미지"}
            width={80}
            height={80}
          />
        )}

        <Button type="button" primary fill className="mx-auto">
          <Link href="/login">Login</Link>
        </Button>

        <Button
          type="button"
          secondary
          fill
          onClick={async () => {
            fetch(
              process.env.NEXT_PUBLIC_SERVER_END_POINT + "/api/v1/auth/logout",
              {
                method: "POST",
                credentials: "include",
              }
            )
              .then((res) => console.log("🚀 res >> ", res))
              .catch((error) => console.error(error));
          }}
        >
          로그아웃
        </Button>
      </section>
    </>
  );
};

export default Page;
