import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScrollForm = () => {
  const controlsForm = useAnimation();
  const [elementForm, viewForm] = useInView({ threshold: 0.4 });
  if (viewForm) {
    controlsForm.start("show");
  } else {
    controlsForm.start("hidden");
  }
  return [elementForm, controlsForm];
};

export const useScrollAbout = () => {
  const controlsAbout = useAnimation();
  const [elementAbout, viewAbout] = useInView({ threshold: 0.4 });
  if (viewAbout) {
    controlsAbout.start("show");
  } else {
    controlsAbout.start("hidden");
  }
  return [elementAbout, controlsAbout];
};
