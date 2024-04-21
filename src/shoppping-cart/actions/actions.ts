// 'use client'
/*
cookie: cart
{
  'uui-123-1': 4,
  'uui-123-2': 1,
  'uui-123-3': 2,
}
*/

import { getCookie, hasCookie, setCookie,  } from "cookies-next"

export const getCookieCart = (): { [id: string]: number } => {

    if( hasCookie('cart') ){
        const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' )
        return cookieCart
    }

    return {}
}

export const addCookieCart = (id: string) => {

    const cookies = getCookieCart()

    if( cookies[id] ){
        cookies[id] = cookies[id] + 1
    } else {
        cookies[id] = 1
    }

    setCookie('cart', JSON.stringify(cookies))
}

export const removeCookieCart = (id: string) => {

    const cookies = getCookieCart()
    delete cookies[id]
    setCookie('cart', JSON.stringify(cookies))
}

export const removeSingleItemFromCookieCart = (id: string) => {

    const cookies = getCookieCart()

    if( cookies[id] > 0){
        cookies[id] = cookies[id] - 1
        setCookie('cart', JSON.stringify(cookies))
    } 
}