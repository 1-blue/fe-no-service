"use client";

import { postLoginApi } from "#/apis";
import Button from "#/components/atoms/Button";
import Icon from "#/components/atoms/Icon";
import RHFToolkit from "#/components/atoms/RHFToolkit";
import useToastStore from "#/store/toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface LoginFormType {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { openToast } = useToastStore();
  const { control, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: process.env.NODE_ENV === "development" ? "tls123@ruu.kr" : "",
      password: process.env.NODE_ENV === "development" ? "1111" : "",
    },
  });
  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const result = await postLoginApi({
        body: {
          email: email.trim(),
          password: password.trim(),
        },
      });

      openToast({ message: "로그인에 성공했습니다." });

      // FIXME: 403인데 여기로 들어옴
      console.log("🚀 result >> ", result);

      router.replace("/");
    } catch (error) {
      console.log("🚀 error >> ", error);
      openToast({ message: "로그인에 실패했습니다." });
    }
  });

  const kakaoLogin = () => {
    window.location.href = `http://localhost:3050/api/v1/auth/login/kakao`;
  };

  const googleLogin = () => {
    window.location.href = `http://localhost:3050/api/v1/auth/login/google`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-4 px-10 py-6"
    >
      <RHFToolkit.Input
        type="text"
        control={control}
        name="email"
        displayName="이메일"
      />
      <RHFToolkit.Input
        type="password"
        control={control}
        name="password"
        displayName="비밀번호"
      />

      <Button
        type="submit"
        primary
        fill
        className="w-full flex justify-center font-semibold"
      >
        로그인
      </Button>

      <div className="relative w-full my-6 h-0.5 bg-line-default" />

      <Button
        type="submit"
        secondary
        fill
        className="w-full flex justify-center font-semibold"
      >
        임시 로그인
      </Button>
      <div className="w-full flex gap-4">
        <Button
          type="button"
          fill
          className="flex-1 flex justify-center bg-yellow-400 border-yellow-400 text-white hover:text-white active:text-white gap-2 font-semibold"
          onClick={kakaoLogin}
        >
          <Icon name="Kakao" size={18} fill="white" />
          <span>카카오 로그인</span>
        </Button>
        <Button
          type="button"
          fill
          className="flex-1 flex justify-center bg-red-300 border-red-300 text-white hover:text-white active:text-white gap-2 font-semibold"
          onClick={googleLogin}
        >
          <Icon name="Google" size={18} fill="white" />
          <span>구글 로그인</span>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
