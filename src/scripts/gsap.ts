import { browser } from "$app/environment";
import { gsap } from "gsap";

if (browser) {
    const tl = gsap.timeline({})

    tl.set('#user-field', {
        y: -100, opacity: 0
    }).set('#enter-btn', {
        y: 100, opacity: 0
    }).set('#login-background', {
        opacity: 0
    }).set('#username-field', {
        x: -100, opacity: 0
    }).set('#password-field', {
        x: 100, opacity: 0
    })

    tl.to('#user-field', {
        y: 0, opacity: 0.7, duration: 1, ease: 'expo.out'
    }).to('#enter-btn', {
        y: 0, opacity: 0.7, duration: 0.5, ease: 'expo.out'
    }, 0).to('#login-background', {
        opacity: 1
    }, 0).to('#username-field', {
        x: 0, opacity: 1
    }, 0).to('#password-field', {
        x: 0, opacity: 1
    }, 0)
}