import "#/css/tailwind.css";
import "#/css/global.css";

import Nav from "#/layout/Nav";
import Header from "#/layout/Header";
import Main from "#/layout/Main";
import Footer from "#/layout/Footer";
import ReactQueryProvider from "#/providers/ReactQueryProvider";
import ToastProvider from "#/providers/ToastProvider";
import SnackbarProvider from "#/providers/SnackbarProvider";

import type { Metadata } from "next";

export const metadata: Metadata = {};

interface Props {
  /** 로그인 모달 */
  loginModal?: React.ReactNode;
}

const RootLayout: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  loginModal,
}) => {
  return (
    <html lang="ko">
      <head>
        <title>없는 서비스</title>
      </head>
      <body className="min-h-screen flex flex-col text-white">
        <ReactQueryProvider>
          <ToastProvider>
            <SnackbarProvider>
              <div className="flex-1 flex">
                <Nav />
                <div className="flex-1 flex flex-col">
                  <Header />
                  <Main>
                    {children}

                    {/* 로그인 모달 */}
                    {loginModal && (
                      <aside className="absolute top-0 left-1/2 -translate-x-1/2 mt-6 bg-white rounded-md">
                        {loginModal}
                      </aside>
                    )}
                  </Main>
                </div>
              </div>
              <Footer />
            </SnackbarProvider>
          </ToastProvider>
        </ReactQueryProvider>

        {/* 토스트 포탈 */}
        <aside
          id="toast-root"
          className="fixed left-1/2 my-4 top-0 flex flex-col gap-4 -translate-x-1/2 z-[999]"
        />
        {/* 스낵바 포탈 */}
        <aside
          id="snackbar-root"
          className="fixed left-1/2 my-6 bottom-0 flex flex-col gap-4 -translate-x-1/2 z-[999]"
        />
      </body>
    </html>
  );
};

export default RootLayout;
