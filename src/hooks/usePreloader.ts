import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { State } from "../store/reducers";
import GSAP from "gsap";
import { Group } from "three";
import { useRect } from "./useRect";
import { useThree } from "@react-three/fiber";
import { useActions } from "./useActions";

export function usePreloader(
  roomChildrenRefs: React.RefObject<{ [key: string]: THREE.Mesh }>,
  roomRef: React.RefObject<Group>
) {
  const isRoomLoad = useSelector((state: State) => state.app.isRoomLoad);
  const firstTimelineRef = useRef<any>();
  const secondTimelineRef = useRef<any>();
  const camera = useThree((state) => state.camera);
  const rect = useRect(document.body);
  const isMobile = !rect || rect.width < 968;
  const initialYRef = useRef(0);
  const AC = useActions();
  const status = useSelector((state: State) => state.app.status);
  const moveFlagRef = useRef(false);
  const scaleFlagRef = useRef(true);

  useEffect(() => {
    if (isRoomLoad) {
      playFirstIntro();
    }
    return () => {
      window.removeEventListener("wheel", onSecondScroll);
    };
  }, [isRoomLoad]);

  useEffect(() => {
    move();
    scale();
  }, [rect]);

  const playFirstIntro = async () => {
    await firstIntro();
    AC.finishFirstIntro();
    window.addEventListener("wheel", onSecondScroll);
    window.addEventListener("touchstart", onTouch);
    window.addEventListener("touchmove", onTouchMove);
  };

  const removeEventListeners = () => {
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchstart", onTouch);
    window.removeEventListener("wheel", onSecondScroll);
  };

  const firstIntro = () => {
    return new Promise((resolve) => {
      //@ts-ignore
      firstTimelineRef.current = new GSAP.timeline();
      firstTimelineRef.current.to(".animated-letter", {
        y: 0,
        yPercent: 100,
      });

      firstTimelineRef.current.to(".loader", {
        opacity: 0,
        duration: 0.2,
      });

      if (isMobile) {
        if (roomChildrenRefs?.current?.hiddencube) {
          firstTimelineRef.current.to(
            roomChildrenRefs?.current?.hiddencube.scale,
            {
              x: 1.4,
              y: 1.4,
              z: 1.4,
              ease: "back.out(2.5)",
              duration: 0.7,
            }
          );
        }
        if (roomRef?.current) {
          firstTimelineRef.current.to(roomRef?.current.position, {
            z: -1,
            ease: "power1.out",
            duration: 0.7,
          });
        }
      } else {
        if (roomChildrenRefs?.current?.hiddencube) {
          firstTimelineRef.current.to(
            roomChildrenRefs?.current?.hiddencube.scale,
            {
              x: 1.4,
              y: 1.4,
              z: 1.4,
              ease: "back.out(2.5)",
              duration: 0.7,
            }
          );
        }
        if (roomRef?.current) {
          firstTimelineRef.current.to(roomRef?.current.position, {
            x: -1,
            ease: "power1.out",
            duration: 0.7,
          });
        }
      }
      firstTimelineRef.current
        .to(".welcome .animated-letter", {
          yPercent: 0,
          stagger: 0.05,
          ease: "back.out(1.7)",
        })
        .to(
          ".arrow-svg-wrapper",
          {
            opacity: 1,
          },
          "same"
        )
        .to(
          ".toggle-bar",
          {
            opacity: 1,
            onComplete: resolve,
          },
          "same"
        );
    });
  };

  const secondIntro = () => {
    return new Promise((resolve) => {
      //@ts-ignore
      secondTimelineRef.current = new GSAP.timeline();
      if (roomRef?.current) {
        secondTimelineRef.current
          .to(
            ".welcome .animated-letter",
            {
              yPercent: 100,
              stagger: 0.05,
              ease: "back.in(1.7)",
            },
            "fadeout"
          )
          .to(
            ".arrow-svg-wrapper",
            {
              opacity: 0,
            },
            "fadeout"
          )
          .to(
            roomRef?.current.position,
            {
              x: 0,
              y: 0,
              z: 0,
              ease: "power1.out",
            },
            "same"
          );
      }
      if (roomChildrenRefs?.current?.hiddencube) {
        secondTimelineRef.current
          .to(
            roomChildrenRefs?.current?.hiddencube.rotation,
            {
              y: 2 * Math.PI,
            },
            "same"
          )
          .to(roomChildrenRefs?.current?.hiddencube.scale, {
            x: 10,
            y: 10,
            z: 10,
          })
          .to(
            camera.position,
            {
              y: 6.5,
            },
            "same"
          )
          .to(
            roomChildrenRefs?.current?.hiddencube.position,
            {
              y: 11.1551,
              z: -0.822436,
              x: 0.608948,
            },
            "same"
          )
          .to(
            roomChildrenRefs?.current?.room.scale,
            {
              y: 10.611,
              z: 10.611,
              x: 10.611,
            },
            "room"
          )
          .to(
            roomChildrenRefs?.current?.hiddencube.scale,
            {
              y: 0,
              z: 0,
              x: 0,
            },
            "room"
          )

          .to(
            ".hero-main-title .animated-letter",
            {
              yPercent: 0,
              stagger: 0.05,
              ease: "back.out(1.7)",
            },
            "room"
          )
          .to(
            ".hero-main-description .animated-letter",
            {
              yPercent: 0,
              stagger: 0.05,
              ease: "back.out(1.7)",
            },
            "room"
          )
          .to(
            ".first-sub .animated-letter",
            {
              yPercent: 0,
              stagger: 0.05,
              ease: "back.out(1.7)",
            },
            "room"
          )
          .to(
            ".second-sub .animated-letter",
            {
              yPercent: 0,
              stagger: 0.05,
              ease: "back.out(1.7)",
            },
            "room"
          )

          .to(
            roomChildrenRefs?.current?.floor.scale,
            {
              x: 5.093,
              y: 4.557,
              z: 5.093,
              duration: 0.4,
            },
            ">-0.5"
          )
          .to(
            roomChildrenRefs?.current?.sideboard.scale,
            {
              x: 0.621,
              y: 0.621,
              z: 0.621,
              duration: 0.4,
            },
            "first",
            ">-2"
          )
          .to(
            roomChildrenRefs?.current?.table.scale,
            {
              y: 0.134084,
              z: 1.68643,
              x: 2.09269,
              duration: 0.4,
            },
            "first",
            ">-2"
          )
          .to(
            roomChildrenRefs?.current?.gomugomugomugomu.scale,
            {
              y: 0.006,
              z: 0.006,
              x: 0.006,
              duration: 0.4,
            },
            "devil-fruits"
          )
          .to(
            roomChildrenRefs?.current?.yamiyami.scale,
            {
              y: 0.005,
              z: 0.005,
              x: 0.005,
              duration: 0.4,
            },
            "devil-fruits"
          )
          .to(
            roomChildrenRefs?.current?.meramera.scale,
            {
              y: 0.288,
              z: 0.288,
              x: 0.288,
              duration: 0.4,
            },
            "devil-fruits"
          )
          .to(
            roomChildrenRefs?.current?.opeope.scale,
            {
              y: 0.011845,
              z: 0.011845,
              x: 0.011845,
              duration: 0.4,
            },
            "devil-fruits"
          )
          .to(
            roomChildrenRefs?.current?.itoito.scale,
            {
              y: 0.00465,
              z: 0.00465,
              x: 0.00465,
              duration: 0.4,
            },
            "devil-fruits"
          )
          .to(
            roomChildrenRefs?.current?.ps4.scale,
            {
              y: 0.788,
              z: 0.788,
              x: 0.788,
              duration: 0.4,
            },
            "second"
          )
          .to(
            roomChildrenRefs?.current?.thousendsunny.scale,
            {
              y: 0.266,
              z: 0.266,
              x: 0.266,
              duration: 0.4,
            },
            "second"
          )
          .to(
            roomChildrenRefs?.current?.mousepad.scale,
            {
              y: 1,
              z: 3.462,
              x: 1.225,
              duration: 0.4,
            },
            "second"
          )
          .to(
            roomChildrenRefs?.current?.smallspeaker.scale,
            {
              y: 0.303,
              z: 0.303,
              x: 0.303,
              duration: 0.4,
            },
            "third"
          )
          .to(
            roomChildrenRefs?.current?.rug.scale,
            {
              y: 0.05,
              z: 6.329,
              x: 6.329,
              duration: 0.4,
            },
            "third"
          )
          .to(
            roomChildrenRefs?.current?.earphonesholder.scale,
            {
              y: 0.055,
              z: 0.341,
              x: 0.341,
              duration: 0.4,
            },
            "third"
          )
          .to(
            roomChildrenRefs?.current?.mouse.scale,
            {
              y: -0.106,
              z: 0.234,
              x: 0.288,
              duration: 0.4,
            },
            "third"
          )
          .to(
            roomChildrenRefs?.current?.screen.scale,
            {
              y: 0.844,
              z: 3.009,
              x: 0.025,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.["screen-plan"].scale,
            {
              y: 0.844,
              z: 3.009,
              x: 0.025,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.television.scale,
            {
              y: 2.59,
              z: 5.323,
              x: 0.025,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.televisionscreen.scale,
            {
              y: 2.59,
              z: 5.323,
              x: 0.025,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.keyboard.scale,
            {
              y: 0.02,
              z: 0.077,
              x: 0.077,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.earphones.scale,
            {
              y: 1.044,
              z: 0.528,
              x: 0.528,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.minirug.scale,
            {
              y: 1,
              z: 1.43,
              x: 2.564,
              duration: 0.4,
            },
            "fourth"
          )
          .to(
            roomChildrenRefs?.current?.aircondation.scale,
            {
              y: 0.785,
              z: 4.055,
              x: 0.553,
              duration: 0.4,
            },
            "fifth"
          )
          .to(
            roomChildrenRefs?.current?.picture.scale,
            {
              y: 2.193,
              z: 0.2,
              x: 4.358,
              duration: 0.4,
            },
            "fifth"
          )
          .to(
            roomChildrenRefs?.current?.pictureimage.scale,
            {
              y: 2.193,
              z: 0.2,
              x: 4.358,
              duration: 0.4,
            },
            "fifth"
          )
          .to(
            roomChildrenRefs?.current?.chairlegs.scale,
            {
              y: 0.08,
              z: 0.08,
              x: 0.051,
              duration: 0.4,
            },
            "fifth"
          )
          .to(
            roomChildrenRefs?.current?.chair.scale,
            {
              y: 1.901,
              z: 1,
              x: 0.107,
              duration: 0.4,
            },
            "fifth"
          )
          .to(
            roomChildrenRefs?.current?.chair.rotation,
            {
              y: Math.PI * 5,
              ease: "power1.out",
              duration: 1.5,
            },
            "fifth"
          )
          .to(".arrow-svg-wrapper", {
            opacity: 1,
            onComplete: resolve,
          });
      }
    });
  };

  const onSecondScroll = async (e: WheelEvent) => {
    if (e.deltaY > 0) {
      removeEventListeners();
      moveFlagRef.current = true;
      scaleFlagRef.current = false;
      await secondIntro();
      scaleFlagRef.current = true;
      AC.toggleIsEnableScroll();
    }
  };

  const onTouch = (e: TouchEvent) => {
    initialYRef.current = e.touches[0].clientY;
  };

  const onTouchMove = async (e: TouchEvent) => {
    let currentY = e.touches[0].clientY;
    let diff = initialYRef.current - currentY;
    if (diff > 0) {
      removeEventListeners();
      moveFlagRef.current = true;
      scaleFlagRef.current = false;
      await secondIntro();
      scaleFlagRef.current = true;
      AC.toggleIsEnableScroll();
    }
  };

  const move = () => {
    if (moveFlagRef.current) return;
    if (!isMobile) {
      roomRef.current?.position.set(-1, 0, 0);
    } else {
      roomRef.current?.position.set(0, 0, -1);
    }
  };

  const scale = () => {
    if (scaleFlagRef.current) return;
    if (!isMobile) {
      roomRef.current?.scale.set(0.11, 0.11, 0.11);
    } else {
      roomRef.current?.scale.set(0.07, 0.07, 0.07);
    }
  };
}
