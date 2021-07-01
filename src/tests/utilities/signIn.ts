import user from '@testing-library/user-event';
import {
  Matcher,
  MatcherOptions,
  SelectorMatcherOptions,
  waitFor,
  waitForOptions,
} from '@testing-library/react';

export default async function signIn(
  history: any,
  getByTestId: (
    text: Matcher,
    options?: MatcherOptions | undefined,
    waitForElementOptions?: unknown
  ) => HTMLElement,
  queryByText: <W>(
    text:
      | ((content: string, element: Element | null) => boolean)
      | RegExp
      | number
      | string,
    options?: SelectorMatcherOptions,
    waitForElementOptions?: W
  ) => HTMLElement | null
) {
  const enterMessage = queryByText('وارد شوید!');

  if (enterMessage == null) {
    const signInButton = getByTestId('sign-in-button');
    user.click(signInButton);

    await waitFor(() => expect(history.location.pathname).toEqual('/sign-in'));
  }

  const email = getByTestId('email-input');
  const submit = getByTestId('submit-button');
  const password = getByTestId('password-input');

  user.type(email, 'TestUser@gmail.com');
  user.type(password, 'TestPassword');
  user.click(submit);

  await waitFor(() => expect(queryByText('وارد شوید!')).toBeNull());
}
