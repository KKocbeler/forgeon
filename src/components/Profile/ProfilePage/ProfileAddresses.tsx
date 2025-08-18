import { useDispatch, useSelector } from "react-redux";
import styles from "./ProfileAddresses.module.scss";
import type { RootState } from "../../../redux/app/store";
import { FaTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import type { Address } from "../../../types/UserTypes";
import { addNewAddress, changeDefaultAddress, deleteAddress, modifyAddress } from "../../../redux/features/user/userSlice";
import city from "../../../data/cityData.json";
import district from "../../../data/district.json";
import { IoCloseOutline } from "react-icons/io5";

const ProfileAddresses = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const [showAddAddress, setShowAddAddress] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [jokerAddress, setJokerAddress] = useState<Address>({
        id: "",
        title: "",
        addressLine: "",
        city: "",
        district: "",
        zipCode: "",
        country: "",
        isDefault: false
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isDuplicateTitle = user.addresses.some(
            (address) =>
                address.title.trim().toLowerCase() === jokerAddress.title.trim().toLowerCase() &&
                address.id !== jokerAddress.id
        );

        if (isDuplicateTitle) {
            setErrorMessage("Bu başlıkla zaten bir adres var. Lütfen farklı bir başlık girin.");
            return;
        }

        setErrorMessage(null);
        if(user.addresses.some(address => address.id === jokerAddress.id)) {
            dispatch(modifyAddress(jokerAddress))
        } else {
            dispatch(addNewAddress({ ...jokerAddress, id: jokerAddress.id || Date.now().toString()}));
        }
        

        setShowAddAddress(false);
        setJokerAddress({
            id: "",
            title: "",
            addressLine: "",
            city: "",
            district: "",
            zipCode: "",
            country: "",
            isDefault: false
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setJokerAddress({ ...jokerAddress, [e.target.name]: e.target.value });
    };

    const editAddress = (address: Address) => {
        setShowAddAddress(true);
        setJokerAddress({ ...address });
    };

    const newAddressButton = () => {
        setJokerAddress({
            id: "",
            title: "",
            addressLine: "",
            city: "",
            district: "",
            zipCode: "",
            country: "",
            isDefault: false
        });
        setShowAddAddress(true)
    }
    console.log(jokerAddress)
    return (
        <div className={styles["addresses-page"]}>
            <header>
                <h1>Adreslerim</h1>
                <button type="button" aria-label="Yeni adres ekle" onClick={newAddressButton}>Adres Ekle</button>
            </header>
            <div className={styles["addresses-page__body"]}>
                <section className={styles["current-addresses"]}>
                    {user.addresses.map(address => (
                        <div className={`${styles.address} ${address.isDefault && styles.default}`} key={address.id} onClick={() => dispatch(changeDefaultAddress(address.id))}>
                        <h2>
                            {address.title} {address.isDefault && (<span className={styles["default-tag"]}>(Varsayılan Adres)</span>)}  
                        </h2>
                            <p>{address.addressLine}</p>
                            <div className={styles["edit-address"]}>
                                <MdEdit
                                    role="button"
                                    tabIndex={0}
                                    title="Adresi düzenle"
                                    onClick={() => editAddress(address)}
                                />
                                <FaTrashCan
                                    role="button"
                                    title="Adresi sil"
                                    onClick={() => dispatch(deleteAddress(address))}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            <div className={`${styles["new-address-container"]} ${showAddAddress ? styles.show : ""}`}>

                <div className={styles["add-address"]}>
                    <header>
                        <h2>{jokerAddress.id ? "Adresi Düzenle" : "Yeni Adres"}</h2>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={jokerAddress.title}
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="title">Adres Başlığı</label>
                            {errorMessage && <span>* {errorMessage}</span>}
                        </div>

                        <div className={styles["input-box"]}>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={jokerAddress.zipCode}
                                required
                                onChange={handleChange}
                            />
                            <label htmlFor="zipCode">Posta Kodu</label>
                        </div>

                        <div className={styles["input-box"]}>
                            <select
                                name="city"
                                id="city"
                                value={jokerAddress.city}
                                onChange={(e) => setJokerAddress({ ...jokerAddress, city: e.target.value, district: "" })}
                                required
                            >
                                <option value="" disabled>Şehir Seçiniz</option>
                                {city.sort((a, b) => a.name.localeCompare(b.name)).map(ct => (
                                    <option value={ct.name} key={ct.id}>{ct.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles["input-box"]}>
                            <select
                                name="district"
                                id="district"
                                value={jokerAddress.district}
                                onChange={handleChange}
                                required
                                disabled={!jokerAddress.city}
                            >
                                <option value="" disabled>İlçe Seçiniz</option>
                                {district
                                    .filter(ds => ds.il_id === city.find(ct => ct.name === jokerAddress.city)?.id)
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map(ds => (
                                        <option value={ds.name} key={ds.id}>{ds.name}</option>
                                    ))}
                            </select>
                        </div>

                        <div className={styles["textarea-box"]}>
                            <textarea
                                id="addressLine"
                                name="addressLine"
                                value={jokerAddress.addressLine}
                                required
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="addressLine">Açık Adres</label>
                        </div>

                        <div className={styles["checkbox-box"]}>
                            <label className={styles["checkbox-label"]}>
                                <input
                                    type="checkbox"
                                    id="isDefault"
                                    name="isDefault"
                                    checked={jokerAddress.isDefault}
                                    onChange={(e) => setJokerAddress({ ...jokerAddress, isDefault: e.target.checked })}
                                />
                                <span>Varsayılan adres olarak güncellensin mi?</span>
                            </label>
                        </div>

                        <button type="submit" aria-label="Adresi kaydet">
                            {jokerAddress.id ? "Adresi Güncelle" : "Adresi Kaydet"}
                        </button>
                    </form>
                    <div className={styles["close-tab"]} onClick={() => setShowAddAddress(false)}>
                        <IoCloseOutline />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAddresses;
