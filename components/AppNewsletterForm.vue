<template>
  <section class="v-newsletter-form">
    <h2 class="v-newsletter-form__title"
        v-if="!isSuccess"
    >Restez informé·ex</h2>
    <form class="v-newsletter-form__form"
          @submit.prevent="handleSubmit"
          v-if="!isSuccess"
    >
      <input
        v-model="email"
        type="email"
        required
        class="v-newsletter-form__input"
        placeholder="votre adresse mail"
      />
      <button
        type="submit"
        class="v-newsletter-form__button"
        :disabled="isSubmitting"
      >
        {{ isSubmitting ? 'Envoi...' : "S'inscrire" }}
      </button>
    </form>
    <p v-if="message" class="v-newsletter-form__message" :class="{ 'is-success': isSuccess }">
      {{ message }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const isSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  message.value = ''

  try {

      type NewsLetterValues =
          "Venu du site"

      type SubscriptionResponse = {
          error: unknown,
          message: string,
          status: 'ok' | 'error'
      }

      type SubscriberDataToSend = {
          email: string,
          groups: NewsLetterValues[],
      }


      const sendSSubscription = await fetch('https://justinecontactapi.villa1203.deno.net/subscribe', {
      // const sendSSubscription = await fetch('http://localhost:8000/subscribe', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: email.value,
              groups: ["Venu du site"],
          } satisfies SubscriberDataToSend)
      })

      const response: SubscriptionResponse = await sendSSubscription.json()

      if (response.status === 'ok') {
        message.value = 'Merci pour votre inscription !'
        isSuccess.value = true
        email.value = ''
        return
      }

      message.value = `Une erreur est survenue (${response.message}). Veuillez réessayer.`
      isSuccess.value = false

  } catch (error) {
    message.value = 'Une erreur est survenue. Veuillez réessayer.'
    isSuccess.value = false
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss" scoped>
.v-newsletter-form {
  padding: var(--app-gutter);
  text-align: center;
}

.v-newsletter-form__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--app-color-beige);
}

.v-newsletter-form__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.v-newsletter-form__input {
  flex: 1;
  padding: 1rem;
  border: 2px solid var(--app-color-blue);
  border-radius: 2rem;
  font-size: 1rem;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px 3px rgba(0, 0, 255, 0.25);
  }

  &::placeholder {
    color: #999;
  }
}

.v-newsletter-form__button {
  padding: 1rem 2rem;
  background-color: var(--app-color-beige);
  color: var(--app-color-blue);
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    box-shadow: 0 0 10px 5px var(--app-color-blue);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.v-newsletter-form__message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 2rem;
  color: #d8000c;
  background-color: var(--app-color-beige);

  &.is-success {
    color: var(--app-color-blue);
  }
}
</style>
