import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // 현재 URL의 경로(pathname)를 가져옵니다. (예: /blogs/software-dev-methodologies-comparison)
  const { pathname } = useLocation();

  useEffect(() => {
    // 경로가 바뀔 때마다 스크롤을 최상단으로 이동시킵니다.
    window.scrollTo(0, 0);
  }, [pathname]); // pathname이 의존성 배열에 있으므로 페이지 이동 시마다 실행됨

  // 화면에 렌더링할 UI 요소가 없으므로 null을 반환합니다.
  return null;
}
