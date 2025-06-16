'use client'
import { createCheckout } from '@/actions/checkout'
import { Button } from '@/components/ui/button'
import { loadStripe } from '@stripe/stripe-js'

const BuyPlan = () => {
  const handleSubscriptionPlan = async () => {
    try {
      const checkout = await createCheckout()
      if (!checkout?.id) {
        console.error('Checkout session ID is undefined')
        return
      }

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
      )
      if (!stripe) {
        console.error('Stripe failed to initialize')
        return
      }

      const result = await stripe.redirectToCheckout({
        sessionId: checkout.id,
      })

      if (result.error) {
        console.error('Error redirecting to checkout:', result.error.message)
      }
    } catch (error) {
      console.error('Error handling subscription plan:', error)
    }
  }

  return (
    <Button onClick={handleSubscriptionPlan} variant={'default'}>
      Assinar plano Profissional
    </Button>
  )
}

export default BuyPlan
