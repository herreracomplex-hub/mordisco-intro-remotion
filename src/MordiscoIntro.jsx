import { Sequence, Img, useVideoConfig, interpolate } from "remotion";

export const MordiscoIntro = () => {
  const { fps } = useVideoConfig();
  const logoOpacity = interpolate(fps * 1.5, [0, fps * 1.5], [0, 1]);
  const cookieScale = interpolate(fps * 3, [0, fps * 3], [1, 1.1]);

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#F5E2C8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      {/* Logotipo de MORDISCO */}
      <Sequence from={0} durationInFrames={fps * 2}>
        <Img
          src="logo-mordisco.png"
          style={{ width: "40%", opacity: logoOpacity }}
        />
      </Sequence>

      {/* Galleta artesanal */}
      <Sequence from={fps * 2} durationInFrames={fps * 3}>
        <Img
          src="cookie.png"
          style={{
            width: "60%",
            transform: `scale(${cookieScale})`,
          }}
        />
      </Sequence>
    </div>
  );
};
