import { useEffect } from "react";

export default function useTitle(title) {
  // html의 <title>태그를 변경시키는 hook
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}
