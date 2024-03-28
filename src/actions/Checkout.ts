'use server'
import Stripe from 'stripe'

export const createCheckout = async () => {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-10-16'
    })

    const price_id = 'price_1Oz8qLHGpco14sBwIrI2ehWu'

    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'subscription',
        line_items: [{
            quantity: 1,
            price: price_id
        }],
        success_url: 'http://localhost:3000/',
        cancel_url: 'http://localhost:3000/',
    })

    return checkout
}