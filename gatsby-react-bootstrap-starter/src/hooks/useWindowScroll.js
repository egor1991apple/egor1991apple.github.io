import { useMemo, useState } from 'react';

export default function useWindowScroll(ref) {
    const [scrollY, setScroll] = useState(0);
    // useMemo(
    //     () => {
    //         if (ref && typeof window != undefined) {
    //             window.addEventListener('scroll', function() {
    //                 setScroll(window.pageYOffset);
    //             });
    //         }
    //     }, [ref]
    // );

    return scrollY;
}