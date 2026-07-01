import { Composition } from "remotion";
import { MordiscoIntro } from "./src/MordiscoIntro";

export const RemotionRoot = () => {
  return (
    <Composition
      id="MordiscoIntro"
      component={MordiscoIntro}
      durationInFrames={180} // 6 segundos a 30fps
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
