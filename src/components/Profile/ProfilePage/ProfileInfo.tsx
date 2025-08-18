import { useState } from "react";
import styles from "./ProfileInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/app/store";
import { capitalize } from "../../../utils/Capitalized";
import { changeInformation } from "../../../redux/features/user/userSlice";

const ProfileInfo = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const [isChanged, setIsChanged] = useState(false);
    const [currentInformation, setCurrentInformation] = useState({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        birthday: user.birthday,
        gender: user.gender,
        phone: user.phone
    });

    const changeInfo = (e: any) => {
        setCurrentInformation({...currentInformation, [e.target.name]: e.target.value})
        setIsChanged(true);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(changeInformation(currentInformation))
        setIsChanged(false);
    }

  return (
    <div className={styles["profile-info"]}>
        <header>
            <h1>Üyelik Bilgilerim</h1>
        </header>
        <main>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles["input-box"]}>
                    <input type="text" id="name" name="name" 
                        value={capitalize(currentInformation.name)} 
                        onChange={(e) => changeInfo(e)} 
                        required
                    />
                    <label htmlFor="name">İsim</label>
                </div>
                <div className={styles["input-box"]}>
                    <input type="text" id="lastName" name="lastname"
                        value={capitalize(currentInformation.lastname)}
                        onChange={(e) => changeInfo(e)}  
                        required
                    />
                    <label htmlFor="lastName">Soyisim</label>
                </div>
                <div className={styles["input-box"]}>
                    <input type="text" id="email" name="email"
                        value={currentInformation.email} 
                        onChange={(e) => changeInfo(e)}  
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles["input-box"]}>
                    <input type="tel" id="phone" name="phone"
                        value={currentInformation.phone} 
                        onChange={(e) => changeInfo(e)}  
                        required
                    />
                    <label htmlFor="phone">Telefon</label>
                </div>
                <div className={styles["input-box"]}>
                    <input type="date" id="birthday" name="birthday"
                        value={currentInformation.birthday} 
                        onChange={(e) => changeInfo(e)}  
                        required
                    />
                    <label htmlFor="birthday">Doğum Tarihi</label>
                </div>
                <div className={styles["radio-box"]}>
                <label className={styles["label-title"]}>Cinsiyet</label>
                <div className={styles["label-body"]}>
                    <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male"
                        checked={currentInformation.gender === "male"}
                        onChange={changeInfo}
                    />
                    Erkek
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked={currentInformation.gender === "female"}
                        onChange={changeInfo}
                    />
                    Kadın
                    </label>
                </div>
                </div>          
                {
                    isChanged && <button type="submit">Değişiklikleri Kaydet</button>
                }
                <button type="button" aria-label="Hesabı Sil">Hesabımı Sil</button>
            </form>
        </main>
    </div>
  )
}

export default ProfileInfo