import Image from "next/image";
import styles from "./trackpoint-phone.module.css";

/** Original 776 × 1883 screenshot, with its last 166 rows pinned as app chrome. */
export function TrackpointPhoneScreen({ src }: { src: string }) {
  return (
    <div data-trackpoint-phone-screen className={styles.app}>
      <div data-phone-content className={styles.appContent}>
        <Image
          src={src}
          width={776}
          height={1883}
          unoptimized
          loading="eager"
          alt="TrackPoint mobile inventory: logo and location hierarchy"
          className={styles.appImage}
        />
      </div>
      <div data-phone-toolbar className={styles.toolbar}>
        <div className={styles.toolbarViewport}>
          <Image
            src={src}
            width={776}
            height={1883}
            unoptimized
            loading="eager"
            alt="TrackPoint bottom toolbar: search, scan, and menu"
            className={styles.toolbarImage}
          />
        </div>
        <div data-phone-safe-area aria-hidden="true" className={styles.safeArea} />
      </div>
    </div>
  );
}
