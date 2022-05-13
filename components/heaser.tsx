import React from 'react';
import Image from 'next/image';
import { ConnectButton } from 'web3uikit';

function Header() {
  const styles = {
    header: 'bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]',
    headerwrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',
    nav: 'flex justify-center items-center gap-[20px]',
    navItem: 'relative mr-1 cursor-pointer hover:opacity-60',
    badge: 'rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4',
    navLink: '',
    inputContainer: 'flex text-center justify-center p-2 rounded bg-[#171924]',
    input: 'bg-transparent outline-none text-white w-70 ml-3',
  };

  return (
    <div className={styles.header}>
      <Image
        src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white.svg"
        width={120}
        height={120}
      />
      <nav className={styles.headerwrapper}>
        <div className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cyrptocurrency</div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFTs</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>CyrptTown </div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>WatchList </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Products </div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn </div>
            <div className={styles.badge}></div>
          </div>
        </div>
      </nav>
      <div className="flex items-center">
        <ConnectButton />
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Header;
