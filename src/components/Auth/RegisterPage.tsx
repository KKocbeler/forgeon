import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.scss";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const RegisterPage = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            console.log("şifreler eşleşmiyo")
            return;
        }
        if(!terms) {
            console.log("şartları kabul etmediniz")
            return
        }
    }
  return (
    <div className={styles["register-page"]}>
        <div className={styles["register-body"]}>
            <div className={styles.logo}>
                <Link to={'/'}>
                    <img src="/logo/forg.png" alt="Site logosu" />
                </Link>
            </div>
            <h1>Hesap Oluştur</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles["input-box"]}>
                    <label htmlFor="fName">Adınız</label>
                    <input type="text" id="fName" name="name" required/>
                </div>
                <div className={styles["input-box"]}>
                    <label htmlFor="lastName">Soyadınız</label>
                    <input type="text" id="lastName" name="lastname" required/>
                </div>
                <div className={styles["input-box"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className={styles["input-box"]}>
                    <label htmlFor="password">Şifre</label>
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" autoComplete="new-password" required/>
                    <div className={styles["password-toggle"]} onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEye /> : <IoEyeOff />
                            }
                    </div>
                </div>
                <div className={styles["input-box"]}>
                    <label htmlFor="repeatPassword">Şifre Tekrar</label>
                    <input type="password" id="repeatPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="repeatPassword" autoComplete="new-password" required/>
                </div>
                <div className={styles["input-box"]}>
                    <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} id="accept" name="acceptTerms"/>
                    <label htmlFor="accept"><a href="/">Gizlilik Politikası ve Kullanım Koşulları</a>'nı kabul ediyorum.</label>
                </div>
                <button type="submit">Kayıt Ol</button>
                <p>Zaten bir hesabınız var mı? <Link to={'/account/login'}>Giriş Yap</Link></p>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage