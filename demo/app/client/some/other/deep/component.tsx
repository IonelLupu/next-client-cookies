import { useCookies } from 'next-client-cookies';

export function SomeOtherDeepComponent(){
    const cookies = useCookies();

    // I have some compoenents that need this cookie

    console.log('cookie not available on the server after you clear the browser cookies: ', cookies.get('my-other-cookie'))

    return <>
        <i>Clear browser cookies and refresh page. Now, a hydration error should show up</i>
        <br />
        Cookie value: {cookies.get('my-other-cookie')}
    </>
}