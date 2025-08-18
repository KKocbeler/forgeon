import { useState } from "react";
import styles from "./LoginPage.module.scss";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className={styles.login}>
            <div className={styles["login-body"]}>
                <div className={styles.logo}>
                    <Link to={'/'}>
                        <img src="/logo/forg.png" alt="" />
                    </Link>
                </div>
                <h1>Hesabınıza giriş yapın</h1>
                <form>
                    <div className={styles["input-box"]}>
                        <label htmlFor="email">E-posta adresi</label>
                        <input type="text" id="email" required/>
                    </div>
                    <div className={styles["input-box"]}>
                        <label htmlFor="password">Şifre</label>
                        <input type={showPassword ? "text" : "password"} id="password"  required/>
                        <div className={styles["password-toggle"]} onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEye /> : <IoEyeOff />
                            }
                        </div>
                    </div>
                    <div className={styles["auth-actions"]}>
                        <div className={styles["remember-me"]}>
                            <input type="checkbox" name="rememberme"/>
                            <label htmlFor="rememberme">Beni Hatırla</label>
                        </div>
                        <div className={styles["forget-password"]}>
                            <Link to={"/"}>
                                Şifremi Unuttum
                            </Link>
                        </div>
                    </div>
                    <button type="submit">Giriş Yap</button>
                    <div className={styles.or}>
                        <span>veya</span>
                    </div>
                    <div className={styles["other-options"]}>
                        <div className={styles.google}>
                            <FaGoogle/>
                            <span>Google</span>
                        </div>
                        <div className={styles.facebook}>
                            <FaFacebookSquare />
                            <span>Facebook</span>
                        </div>
                    </div>
                    <div className={styles.register}>
                        Üye değil misiniz? <Link to={'/account/register'}>Hemen kayıt olun.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage