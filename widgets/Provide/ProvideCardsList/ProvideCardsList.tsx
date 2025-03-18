import React from 'react';
import Image from 'next/image';
import styles from './ProvideCardsList.module.scss';

const ProvideCardsList = () => {
  return (
    <div className={styles.ProvideCardList}>
      <div className={styles.ProvideCardListWrapper}>
        <div className={styles.ProvideCardListWrapperContainer}>
          <div className={styles.ProvideCardListWrapperContainerInfo}>
            <span className={styles.ProvideCardListNumber}>01</span>
            <h4 className={styles.ProvideCardListTitle}>
              Brand Identity Design
            </h4>
            <p className={styles.ProvideCardListText}>
              We create memorable brand identities that resonate with your
              audience. From logos to complete visual systems, we ensure your
              brand stands out with clarity and impact.
            </p>
          </div>
        </div>

        <div className={styles.ProvideCardListWrapperContainer}>
          <div className={styles.ProvideCardListWrapperContainerInfo}>
            <span className={styles.ProvideCardListNumber}>02</span>
            <h4 className={styles.ProvideCardListTitle}>
              Web Design & Development
            </h4>
            <p className={styles.ProvideCardListText}>
              Your website is your digital storefront. We design and develop
              websites that combine bold aesthetics with functionality, ensuring
              an intuitive experience for your users.
            </p>
          </div>
        </div>

        <div className={styles.ProvideCardListWrapperContainer}>
          <div className={styles.ProvideCardListWrapperContainerInfo}>
            <span className={styles.ProvideCardListNumber}>03</span>
            <h4 className={styles.ProvideCardListTitle}>
              Motion Graphics & Animation
            </h4>
            <p className={styles.ProvideCardListText}>
              Bring your brand to life with dynamic animations and motion
              graphics. We create captivating visuals that engage and leave a
              lasting impression.
            </p>
          </div>
        </div>

        <div className={styles.ProvideCardListWrapperContainer}>
          <div className={styles.ProvideCardListWrapperContainerInfo}>
            <span className={styles.ProvideCardListNumber}>04</span>
            <h4 className={styles.ProvideCardListTitle}>
              Creative Consultation
            </h4>
            <p className={styles.ProvideCardListText}>
              Have a vision but not sure how to bring it to life? Our creative
              experts collaborate with you to develop bold and precise
              strategies tailored to your brand goals.
            </p>
          </div>
        </div>
        <Image
          className={styles.ProvideCardListWrapperImage}
          src={'@/../Services Hover.svg'}
          alt='Image'
          width={1360}
          height={800}
          layout='responsive'
        />
      </div>
    </div>
  );
};

export default ProvideCardsList;
