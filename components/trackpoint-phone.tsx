"use client";

import { useLayoutEffect, useRef } from "react";
import { TrackpointPhoneScreen } from "@/components/trackpoint-phone-screen";
import styles from "./trackpoint-phone.module.css";

const PHONE_WIDTH = 260;
const PHONE_HEIGHT = 645;

/** The same complete 260 × 645 phone is uniformly scaled in both contexts. */
export function TrackpointPhone({ src }: { src: string }) {
  const placementRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const placement = placementRef.current;
    const phone = phoneRef.current;
    if (!placement || !phone) return;
    const resize = (height: number) => {
      phone.style.transform = `scale(${height / PHONE_HEIGHT})`;
      phone.style.visibility = "visible";
    };
    // Layout dimensions deliberately exclude the homepage card's own transform.
    resize(placement.clientHeight);
    const observer = new ResizeObserver(([entry]) => resize(entry.contentRect.height));
    observer.observe(placement);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={placementRef} data-phone-placement className="absolute bottom-[1%] right-[5%] h-[calc(75%-6px)] aspect-[776/1925]">
      <div
        ref={phoneRef}
        data-canonical-trackpoint-phone
        data-phone-frame="standard"
        className={styles.phone}
        style={{ width: PHONE_WIDTH, height: PHONE_HEIGHT, transformOrigin: "top left", visibility: "hidden" }}
      >
        <div aria-hidden="true" className={styles.hardware}>
          <span className={styles.mute} /><span className={styles.volumeUp} /><span className={styles.volumeDown} /><span className={styles.power} />
        </div>
        <div className={styles.viewport}>
          <div data-phone-status className={styles.status}>
            <span data-phone-time className={styles.time}>9:41</span>
            <div aria-hidden="true" className={styles.island}><span className={styles.camera} /></div>
            <div aria-hidden="true" className={styles.statusIcons}>
              <svg viewBox="0 0 16 10" className={styles.signal}><rect x="0" y="7" width="2.2" height="3" rx=".5" /><rect x="4" y="5" width="2.2" height="5" rx=".5" /><rect x="8" y="2.5" width="2.2" height="7.5" rx=".5" /><rect x="12" y="0" width="2.2" height="10" rx=".5" /></svg>
              <svg viewBox="0 0 16 12" className={styles.wifi}><path d="M8 11.5 10.2 9a3.2 3.2 0 0 0-4.4 0L8 11.5Zm-4-4.7 1.2 1.3a4.2 4.2 0 0 1 5.6 0L12 6.8a6 6 0 0 0-8 0ZM1.5 4.2l1.2 1.2a7.7 7.7 0 0 1 10.6 0l1.2-1.2a9.4 9.4 0 0 0-13 0Z" /></svg>
              <span className={styles.battery}><span /></span>
            </div>
          </div>
          <TrackpointPhoneScreen src={src} />
          <span aria-hidden="true" className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
}
