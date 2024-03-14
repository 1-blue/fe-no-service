"use client";

import { NextPage } from "next";
import { useState } from "react";

interface Cat {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  name: string;
  age: number;
  gender: boolean;
}

const Page: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files.length === 0) return;

    const targetFile = e.target.files[0];

    try {
      const result: any = await fetch(
        process.env.NEXT_PUBLIC_SERVER_END_POINT + "/api/v1/images",
        {
          method: "POST",
          body: JSON.stringify({ filename: targetFile.name }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      const formData = new FormData();
      Object.entries(result.fields).forEach(([field, value]) => {
        formData.append(field, value as any);
      });
      formData.append("Content-Type", targetFile.type);
      formData.append("file", targetFile);

      const rr2 = await fetch(result.url, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      console.log("🚀 rr2 >> ", rr2);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section>
        <h1>이미지 업로드</h1>
        <input type="file" onChange={onChangeFile} />
      </section>
    </>
  );
};

export default Page;
