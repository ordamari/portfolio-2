import { ScrollTrigger } from "gsap/ScrollTrigger";
import GSAP from "gsap";
import { Group, OrthographicCamera, Vector3 } from "three";
import { useEffect, useMemo, useRef } from "react";
import { useRect } from "./useRect";
import { useThree } from "@react-three/fiber";
import ASScroll from "@ashthornton/asscroll";
import { useSelector } from "react-redux";
import { State } from "../store/reducers";
GSAP.registerPlugin(ScrollTrigger);

export function useScrollControls(
  roomRef: React.RefObject<Group>,
  sectionsRefs: React.RefObject<{ [key: string]: HTMLElement }>,
  firstCircleRef: React.RefObject<THREE.Mesh>,
  secondCircleRef: React.RefObject<THREE.Mesh>,
  thirdCircleRef: React.RefObject<THREE.Mesh>,
  roomChildrenRefs: React.RefObject<{ [key: string]: THREE.Mesh }>
) {
  const rect = useRect(document.body);
  const firstTimeLineRef = useRef<any>();
  const secondTimeLineRef = useRef<any>();
  const thirdTimeLineRef = useRef<any>();
  const secondPartTimeLineRef = useRef<any>();
  const entranceAnimationsRef = useRef<any>({});
  const asscrollRef = useRef<any>();
  const camera = useThree((state) => state.camera as OrthographicCamera);
  const isEnableScroll = useSelector(
    (state: State) => state.app.isEnableScroll
  );

  function setupASScroll() {
    // https://github.com/ashthornton/asscroll
    const asscroll = new ASScroll({
      ease: 0.1,
      disableRaf: true,
    });

    GSAP.ticker.add(asscroll.update);

    ScrollTrigger.defaults({
      scroller: asscroll.containerElement,
    });

    ScrollTrigger.scrollerProxy(asscroll.containerElement, {
      scrollTop(value) {
        if (arguments.length) {
          //@ts-ignore
          asscroll.currentPos = value;
          return;
        }
        return asscroll.currentPos;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      fixedMarkers: true,
    });

    asscroll.on("update", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", asscroll.resize);

    requestAnimationFrame(() => {
      asscroll.enable({
        newScrollElements: document.querySelectorAll(
          ".gsap-marker-start, .gsap-marker-end, [asscroll]"
        ),
      });
    });
    return asscroll;
  }

  function setSmoothScroll() {
    asscrollRef.current = setupASScroll();
  }

  function setScrollAnimations() {
    ScrollTrigger.matchMedia({
      //Desktop
      "(min-width: 961px)": () => {
        // First------------------------------------------
        //@ts-ignore
        firstTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        firstTimeLineRef.current.to(roomRef.current?.position, {
          x: () => (rect?.width ?? 1) * 0.0014,
        });

        // Second------------------------------------------
        //@ts-ignore
        secondTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        secondTimeLineRef.current.to(
          roomRef.current?.position,
          {
            x: () => 1,
            z: () => (rect?.height ?? 1) * 0.0002,
          },
          "same"
        );
        secondTimeLineRef.current.to(
          roomRef.current?.scale,
          {
            x: 0.4,
            y: 0.4,
            z: 0.4,
          },
          "same"
        );

        // Third------------------------------------------
        //@ts-ignore
        thirdTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        thirdTimeLineRef.current.to(camera.position, {
          y: 3,
          x: -4.5,
        });
      },
      //Mobile
      "(max-width: 960px)": () => {
        roomRef.current?.position.set(0, 0, 0);

        // First------------------------------------------
        //@ts-ignore
        firstTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".first-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        firstTimeLineRef.current.to(roomRef.current?.scale, {
          x: 0.1,
          y: 0.1,
          z: 0.1,
        });

        // Second------------------------------------------
        //@ts-ignore
        secondTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".second-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        secondTimeLineRef.current.to(
          roomRef.current?.scale,
          {
            x: 0.25,
            y: 0.25,
            z: 0.25,
          },
          "same"
        );
        secondTimeLineRef.current.to(
          roomRef.current?.position,
          {
            x: 1.5,
          },
          "same"
        );

        // Third------------------------------------------
        //@ts-ignore
        thirdTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        thirdTimeLineRef.current.to(roomRef.current?.position, {
          z: -4.5,
        });
      },
      all: () => {
        // circle animation------------------------------------------
        if (
          firstCircleRef.current &&
          secondCircleRef.current &&
          thirdCircleRef.current
        ) {
          // First------------------------------------------
          //@ts-ignore
          firstTimeLineRef.current = new GSAP.timeline({
            scrollTrigger: {
              trigger: ".first-move",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
          firstTimeLineRef.current.to(firstCircleRef.current.scale, {
            x: 3,
            y: 3,
            z: 3,
          });

          // Second------------------------------------------
          //@ts-ignore
          secondTimeLineRef.current = new GSAP.timeline({
            scrollTrigger: {
              trigger: ".second-move",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
          secondTimeLineRef.current
            .to(
              secondCircleRef.current.scale,
              {
                x: 3,
                y: 3,
                z: 3,
              },
              "same"
            )
            .to(
              roomRef.current?.position,
              {
                y: 0.7,
              },
              "same"
            );

          // Third------------------------------------------
          //@ts-ignore
          thirdTimeLineRef.current = new GSAP.timeline({
            scrollTrigger: {
              trigger: ".third-move",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
          thirdTimeLineRef.current.to(thirdCircleRef.current.scale, {
            x: 3,
            y: 3,
            z: 3,
          });
        }

        // Scroll bar animation------------------------------------------

        if (sectionsRefs.current) {
          const sections = Object.values(sectionsRefs.current);
          sections.forEach((section) => {
            const progressWrapper = section.children[0];
            const progressBar = progressWrapper.children[0];

            GSAP.to(progressBar, {
              scaleY: 1,
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.4,
                pin: progressWrapper,
                pinSpacing: false,
              },
            });

            if (section.classList.contains("right")) {
              GSAP.to(section, {
                borderTopLeftRadius: 10,
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.6,
                },
              });
              GSAP.to(section, {
                borderBottomLeftRadius: 700,
                scrollTrigger: {
                  trigger: section,
                  start: "bottom bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              });
            } else if (section.classList.contains("left")) {
              GSAP.to(section, {
                borderTopRightRadius: 10,
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "top top",
                  scrub: 0.6,
                },
              });
              GSAP.to(section, {
                borderBottomRightRadius: 700,
                scrollTrigger: {
                  trigger: section,
                  start: "bottom bottom",
                  end: "bottom top",
                  scrub: 0.6,
                },
              });
            }
          });
        }

        thirdTimeLineRef.current.to(roomRef.current?.position, {
          z: -4.5,
        });
        //@ts-ignore
        secondPartTimeLineRef.current = new GSAP.timeline({
          scrollTrigger: {
            trigger: ".third-move",
            start: "center center",
          },
        });

        // entrance animations------------------------------------------

        roomRef.current?.children.forEach((child: any) => {
          if (child.name === "floor") {
            entranceAnimationsRef.current.first = GSAP.to(child.position, {
              x: 3.95779,
              z: 14.1039,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "pPlane5") {
            entranceAnimationsRef.current.second = GSAP.to(child.scale, {
              x: 0.101,
              y: 0.101,
              z: 0.101,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "lamp") {
            entranceAnimationsRef.current.third = GSAP.to(child.scale, {
              x: 0.71,
              y: 0.71,
              z: 0.71,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "minifloor") {
            entranceAnimationsRef.current.fourth = GSAP.to(child.scale, {
              x: 2.139,
              y: 0.904,
              z: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "minifloor001") {
            entranceAnimationsRef.current.fifth = GSAP.to(child.scale, {
              x: 2.139,
              y: 0.904,
              z: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "minifloor002") {
            entranceAnimationsRef.current.sixth = GSAP.to(child.scale, {
              x: 2.139,
              y: 0.904,
              z: 1,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
          if (child.name === "lampInner") {
            entranceAnimationsRef.current.seventh = GSAP.to(child.scale, {
              x: 0.71,
              y: 0.71,
              z: 0.71,
              duration: 0.3,
              ease: "back.out(2)",
            });
          }
        });

        secondPartTimeLineRef.current.add(entranceAnimationsRef.current.first);
        secondPartTimeLineRef.current.add(entranceAnimationsRef.current.second);
        secondPartTimeLineRef.current.add(
          entranceAnimationsRef.current.third,
          "lamp"
        );
        secondPartTimeLineRef.current.add(
          entranceAnimationsRef.current.seventh,
          "lamp"
        );
        secondPartTimeLineRef.current.add(entranceAnimationsRef.current.fourth);
        secondPartTimeLineRef.current.add(entranceAnimationsRef.current.fifth);
        secondPartTimeLineRef.current.add(entranceAnimationsRef.current.sixth);
      },
    });
  }

  useEffect(() => {
    if (!isEnableScroll) return;
    setSmoothScroll();
    setScrollAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isEnableScroll]);
}
