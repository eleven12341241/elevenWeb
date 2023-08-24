import { useRouter } from "vue-router";

export default function useCommon() {
  const route = useRouter();
  const jumpTo = (path: string) => {
    route.push(path);
  };

  return {
    jumpTo,
  };
}
