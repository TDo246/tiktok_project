import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { IconClear, IconLoading, IconSearch } from "~/component/Icons";

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input
            type="text"
            placeholder="Search account and videos"
            spellCheck={false}
          />
          <button className={cx("clear")}><IconClear />
          </button>
            <IconLoading className={cx("loading")} />
          <button className={cx("search-btn")}>
            <span className={cx('liner')}></span>
            <IconSearch />
          </button>
        </div>
        <div className={cx("actions")}></div>
      </div>
    </header>
  );
}

export default Header;
