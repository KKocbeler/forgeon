import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../../types/UserTypes";

interface SliceProps {
    user: User;
    loading: boolean;
    error: null | string;
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: "user_001",
            name: "kemal",
            lastname: "kocbeler",
            email: "kemal@example.com",
            gender: "male",
            birthday: "1997-08-19",
            phone: "507 164 95 33",
            createdAt: "2024-01-10T12:00:00Z",
            profileImage: "/images/users/kemal.png",
            favorites: ["106", "107", "105"],
            addresses: [
                {
                    id: "addr_001",
                    title: "Ev",
                    addressLine: "İstiklal Mh. İstiklal, 1. İstiklal Cd. 6 B, 33340 Mezitli/Mersin, Türkiye No: 51B Daire: 3 Kat: 2 Mezitli/Mersin",
                    city: "MUĞLA",
                    district: "BODRUM",
                    zipCode: "34180",
                    country: "Türkiye",
                    isDefault: true
                },
                {
                    id: "addr_002",
                    title: "İş",
                    addressLine: "Maslak Mah. 2. Cad. No:10",
                    city: "MUĞLA",
                    district: "DATÇA",
                    zipCode: "34398",
                    country: "Türkiye",
                    isDefault: false
                }
            ],
            orders: [
                {
                    orderId: "25645378365",
                    orderDate: "2024-06-15T15:45:00Z",
                    status: "hazırlanıyor",
                    totalPrice: 249.99,
                    items: [
                        {
                            id: "101",
                            name: "Cappuccino",
                            brand: "CoffeeHouse",
                            image: "/detail/detail-2.webp",
                            discountRate: 0,
                            variant: {
                                price: 49.99,
                                quantity: 2,
                                stock: 50
                            }
                        },
                        {
                            id: "105",
                            name: "Tiramisu",
                            brand: "SweetDelight",
                            image: "/detail/detail-3.webp",
                            discountRate: 0,
                            variant: {
                                price: 75.00,
                                quantity: 2,
                                stock: 30
                            }
                        }
                    ],
                    shippingAddressId: "addr_001",
                    paymentMethod: "Kredi Kartı"
                },
                {
                    orderId: "7655437329",
                    orderDate: "2024-07-01T12:30:00Z",
                    status: "iptal edildi",
                    totalPrice: 119.00,
                    items: [
                        {
                            id: 102,
                            name: "Latte",
                            brand: "CoffeeHouse",
                            image: "/detail/detail-1.webp",
                            discountRate: 10,
                            variant: {
                                price: 59.50,
                                quantity: 2,
                                stock: 40
                            }
                        }
                    ],
                    shippingAddressId: "addr_002",
                    paymentMethod: "Kapıda Ödeme"
                }
            ]
        },
        loading: false,
        error: null
    } as SliceProps,
    reducers: {
        addNewAddress:(state, action) => {
            state.user.addresses.push(action.payload)
            if (action.payload.isDefault) {
                state.user.addresses = state.user.addresses.map(address =>
                    address.id === action.payload.id
                        ? { ...address, isDefault: true }
                        : { ...address, isDefault: false }
                );
            }
        },
        deleteAddress:(state, action) => {
            state.user.addresses = state.user.addresses.filter(address => address.id !== action.payload.id)
        },
        modifyAddress:(state, action) => {
            state.user.addresses = state.user.addresses.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        changeDefaultAddress:(state, action) => {
            state.user.addresses = state.user.addresses.map(address =>
                address.id === action.payload ? {...address, isDefault: true} : {...address, isDefault: false}
            )
        },
        handleFavorites:(state, action) => {
            if (state.user.favorites.includes(action.payload)) {
                state.user.favorites = state.user.favorites.filter(
                    favorite => favorite !== action.payload
                );
            } else {
                state.user.favorites.push(action.payload);
            }
        },
        changeInformation:(state, action) => {
            state.user = { ...state.user, ...action.payload }
        }

    }
});

export const { addNewAddress, deleteAddress, modifyAddress, handleFavorites, changeInformation, changeDefaultAddress} = userSlice.actions;
export default userSlice.reducer;
