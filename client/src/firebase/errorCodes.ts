import { AuthError } from 'firebase/auth'

const isAuthError = (err: unknown): err is AuthError => typeof (err as AuthError)?.code === 'string'

export const handleFirebaseError = (err: unknown): string => {
  if (!isAuthError(err)) {
    return 'An error occurred while creating the account.'
  }
  switch (err.code) {
    case 'auth/email-already-in-use':
      return 'The email address is already in use by another account.'
    case 'auth/invalid-email':
      return 'The email address is invalid.'
    case 'auth/weak-password':
      return 'The password is too weak.'
    default:
      return 'An error occurred while creating the account.'
  }
}
